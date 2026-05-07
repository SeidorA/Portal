import React, { useState, useRef } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './generate-pdf.module.css';
import PDFPreview, { PDFData } from '@site/src/components/PDFPreview';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const initialData: PDFData = {
  year: '',
  planNumber: '',
  customerName: '',
  date: '',
  planType: '',
  specifications: '',
  startDate: '',
  endDate: '',
  unitPrice: '',
  totalPrice: '',
  netTotal: '',
  vatAmount: '',
  totalContract: '',
  expiryDate: '',
  hours: '',
  positionClient: '',
  positionSeidor: '',
  validity: '',
};

export default function GeneratePDFPage() {
  const { siteConfig } = useDocusaurusContext();
  const [data, setData] = useState<PDFData>(initialData);
  const pdfRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPickerMode, setIsPickerMode] = useState(false);
  const [lastClickedCoords, setLastClickedCoords] = useState<{ x: number, y: number } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    setData(initialData);
  };

  const handleGeneratePDF = async () => {
    setIsGenerating(true);

    try {
      const response = await fetch('/img/pdf/Quote.pdf');
      if (!response.ok) throw new Error('No se pudo cargar la plantilla PDF');

      const existingPdfBytes = await response.arrayBuffer();
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      const { width, height } = firstPage.getSize();

      // Ratio calculation: Browser 794x1123 vs PDF Points (usually 595x842)
      // We'll scale the user coordinates to PDF points
      const scaleX = width / 794;
      const scaleY = height / 1123;

      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      const fontSize = 10;
      const fontSizeSmall = 8;

      const drawText = (text: string, x: number, y: number, isBold = false, size = fontSize) => {
        if (!text) return;
        firstPage.drawText(String(text), {
          x: x * scaleX,
          y: height - (y * scaleY),
          size: size,
          font: isBold ? fontBold : font,
          color: size === fontSizeSmall ? rgb(83 / 255, 84 / 255, 88 / 255) : rgb(0, 0, 0),
        });
      };

      // Injection based on user coordinates
      // Cliente: x49 y110
      drawText(data.customerName, 60, 160, true);

      // [Año] - [Plan N°] : x90 y85
      drawText(`CRE-${data.year}-${data.planNumber}`, 75, 130, true);

      // Fecha Doc: x371 y 110
      drawText(data.date, 500, 160);

      // Plan Type: x 79 y225
      drawText(data.planType, 103, 313, false, fontSizeSmall);

      // Inicio / Fin: x86 y 243
      drawText(`${data.startDate} - ${data.endDate}`, 115, 335, false, fontSizeSmall);

      // Especificaciones: x126 y 260
      drawText(data.specifications, 170, 357, false, fontSizeSmall);

      // Precio Unitario / Total: x445 y192

      drawText(`USD ${data.unitPrice}`, 565, 285);
      drawText(`USD ${data.totalPrice}`, 690, 285); // Estimated total column X

      // Subtotal: x509 y331
      drawText(`USD ${data.netTotal}`, 690, 460, true);

      // IVA: x 509 y 371
      drawText(`USD ${data.vatAmount}`, 690, 510);

      // Total: x509 y410
      drawText(`USD ${data.totalContract}`, 690, 560, true, 11);

      // Expiración / Horas Serv: x124 y510
      drawText(data.expiryDate, 162, 692, true);

      // Validez
      drawText(data.validity, 210, 295, true, fontSizeSmall);

      drawText(data.validity, 93, 632, true)


      // [Position_client] + [Date]: x126 y699
      drawText(`${data.positionClient} - ${data.hours}`, 140, 940, false, fontSizeSmall);

      // [Position_Seidor] + [Date]: x 423 y699
      drawText(`${data.positionSeidor} - ${data.hours}`, 530, 940, false, fontSizeSmall);

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Quote_${data.customerName || 'Draft'}.pdf`;
      link.click();
      URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Error generating PDF with pdf-lib:', error);
      alert('Error al generar el PDF. Revisa la consola para más detalles.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPickerMode) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // We need to scale these relative to the PDF size
    // Assuming the preview is shown at a certain scale
    setLastClickedCoords({ x: Math.round(x), y: Math.round(y) });
    console.log(`Clicked at: X: ${Math.round(x)}, Y: ${Math.round(y)}`);
  };

  return (
    <Layout title="Generator" description="Generate and export PDF quotes">
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <div className={styles.title}>
            <img src="/img/pdf/logo.png" alt="Crestone" style={{ height: '40px' }} />
            <div>
              <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}>Generator</h1>
              <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--hard)' }}>Crestone Document Hub</p>
            </div>
          </div>

          <div className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Cliente</label>
              <input
                className={styles.input}
                name="customerName"
                value={data.customerName}
                onChange={handleInputChange}
                placeholder="Nombre del Cliente" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Año</label>
                <input
                  className={styles.input}
                  name="year"
                  value={data.year}
                  onChange={handleInputChange}
                  placeholder="2024" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Plan N°</label>
                <input
                  className={styles.input}
                  name="planNumber"
                  value={data.planNumber}
                  onChange={handleInputChange}
                  placeholder="001" />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Validez de Oferta</label>
              <input
                className={styles.input}
                name="validity"
                value={data.validity}
                onChange={handleInputChange}
                placeholder="Ej: 15 días" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Fecha Doc</label>
                <input
                  className={styles.input}
                  name="date"
                  value={data.date}
                  onChange={handleInputChange}
                  placeholder="DD/MM/YYYY" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Plan Type</label>
                <input
                  className={styles.input}
                  name="planType"
                  value={data.planType}
                  onChange={handleInputChange}
                  placeholder="Enterprise" />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Especificaciones</label>
              <input
                className={styles.input}
                name="specifications"
                value={data.specifications}
                onChange={handleInputChange}
                placeholder="Detalles del plan" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Inicio</label>
                <input
                  className={styles.input}
                  name="startDate"
                  value={data.startDate}
                  onChange={handleInputChange}
                  placeholder="Fecha Inicio" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Fin</label>
                <input
                  className={styles.input}
                  name="endDate"
                  value={data.endDate}
                  onChange={handleInputChange}
                  placeholder="Fecha Fin" />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Precio Unitario</label>
                <input
                  className={styles.input}
                  name="unitPrice"
                  value={data.unitPrice}
                  onChange={handleInputChange}
                  placeholder="0.00" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Precio Total</label>
                <input
                  className={styles.input}
                  name="totalPrice"
                  value={data.totalPrice}
                  onChange={handleInputChange}
                  placeholder="0.00" />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Subtotal</label>
                <input
                  className={styles.input}
                  name="netTotal"
                  value={data.netTotal}
                  onChange={handleInputChange} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>IVA</label>
                <input
                  className={styles.input}
                  name="vatAmount"
                  value={data.vatAmount}
                  onChange={handleInputChange} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Total</label>
                <input
                  className={styles.input}
                  name="totalContract"
                  value={data.totalContract}
                  onChange={handleInputChange} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Expiración</label>
                <input
                  className={styles.input}
                  name="expiryDate"
                  value={data.expiryDate}
                  onChange={handleInputChange} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Fecha Firma</label>
                <input
                  className={styles.input}
                  name="hours"
                  value={data.hours}
                  onChange={handleInputChange} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Cargo Cliente</label>
                <input
                  className={styles.input}
                  name="positionClient"
                  value={data.positionClient}
                  onChange={handleInputChange}
                  placeholder="Cargo / Nombre" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Cargo Seidor</label>
                <input
                  className={styles.input}
                  name="positionSeidor"
                  value={data.positionSeidor}
                  onChange={handleInputChange}
                  placeholder="Cargo / Nombre" />
              </div>
            </div>



          </div>

          <div className={styles.buttonGroup}>
            <button
              className={styles.generateBtn}
              onClick={handleGeneratePDF}
              disabled={isGenerating}
            >
              {isGenerating ? 'Generando...' : 'Descargar PDF'}
            </button>
            <button className={styles.clearBtn} onClick={handleClear}>
              Limpiar
            </button>
          </div>

          <div style={{ marginTop: '2rem', padding: '1rem', border: '1px dashed var(--soft)', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Herramienta de Coordenadas</h3>
            <button
              className={isPickerMode ? styles.clearBtn : styles.generateBtn}
              onClick={() => setIsPickerMode(!isPickerMode)}
              style={{ width: '100%', marginBottom: '1rem' }}
            >
              {isPickerMode ? 'Desactivar Selector' : 'Activar Selector'}
            </button>
            {lastClickedCoords && (
              <div style={{ fontSize: '0.8rem', color: 'var(--hard)' }}>
                Último click: <br />
                <strong>X: {lastClickedCoords.x}, Y: {lastClickedCoords.y}</strong>
                <p style={{ marginTop: '0.5rem', fontSize: '0.7rem' }}>Copia estos valores para el campo correspondiente.</p>
              </div>
            )}
          </div>
        </aside>

        <main className={styles.mainContent}>
          <div
            className={styles.previewWrapper}
            onClick={handlePageClick}
            style={{ cursor: isPickerMode ? 'crosshair' : 'default', position: 'relative' }}
          >
            {isPickerMode ? (
              <div style={{ position: 'relative', width: '794px', height: '1123px', background: 'white', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
                <iframe
                  src="/img/pdf/Quote.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }}
                />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}>
                  {/* Invisible overlay to catch clicks */}
                </div>
              </div>
            ) : (
              <PDFPreview data={data} innerRef={pdfRef} />
            )}
          </div>
        </main>
      </div>
    </Layout>
  );
}
