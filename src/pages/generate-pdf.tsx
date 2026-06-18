import React, { useState, useRef } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './generate-pdf.module.css';
import PDFPreview, { PDFData } from '@site/src/components/PDFPreview';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import ProtectedRoute from '../components/ProtectedRoute';

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
  CargoCustomer: '',
  CargoSeidor: '',
  totalContract: '',
  expiryDate: '',
  hours: '',
  positionClient: '',
  positionSeidor: '',
  validity: '',
  Quantity: '',
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
      drawText(data.planType, 103, 293, false, fontSizeSmall);

      // Inicio / Fin: x86 y 243
      drawText(`${data.startDate} - ${data.endDate}`, 115, 315, false, fontSizeSmall);

      // Especificaciones: x126 y 260
      drawText(data.specifications, 170, 337, false, fontSizeSmall);

      // Precio Unitario / Total: x445 y192

      drawText(`USD ${data.unitPrice}`, 565, 285);
      drawText(`USD ${data.totalPrice}`, 690, 285); // Estimated total column X

      // IVA: x 509 y 371
      drawText(`USD ${data.totalContract}`, 690, 460, true);

      // Customer account administrator
      //NameCCA: x 93 y 563
      drawText(data.ccadmin, 600, 500);

      //EmailCCA: x 93 y 578
      drawText(data.ccadminmail, 600, 515);

      // Expiración / Horas Serv: x124 y510
      drawText(data.expiryDate, 162, 620, true);

      // Validez
      drawText(data.Quantity, 500, 275);
      drawText(data.validity, 93, 770, true);


      // [Position_client] + [Date]: x126 y699
      drawText(`${data.positionClient} - ${data.hours}`, 140, 890, false, fontSizeSmall);

      // [Position_Seidor] + [Date]: x 423 y699
      drawText(`${data.positionSeidor} - ${data.hours}`, 530, 890, false, fontSizeSmall);

      //cargo cliente
      drawText(`${data.CargoCustomer}`, 140, 900, false, fontSizeSmall);

      //cargo seidor
      drawText(`${data.CargoSeidor}`, 530, 900, false, fontSizeSmall);

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Cotizacion_${data.customerName || 'Borrador'}.pdf`;
      link.click();
      URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Error generating PDF with pdf-lib:', error);
      alert(translate({ id: 'pdfGenerator.errorAlert', message: 'Error al generar el PDF. Revisa la consola para más detalles.' }));
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
    <Layout
      title={translate({ id: 'pdfGenerator.pageTitle', message: 'Generador de Cotizaciones' })}
      description={translate({ id: 'pdfGenerator.pageDescription', message: 'Generar y exportar cotizaciones en PDF' })}
    >
      <ProtectedRoute allowedRoles={['admin']}>
        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <div className={styles.title}>
              <img src="/img/pdf/Logo.png" alt="Crestone" style={{ height: '40px' }} />
              <div>
                <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}><Translate id="pdfGenerator.quoteGeneratorTitle">Generador de Cotizaciones</Translate></h1>
                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--hard)' }}><Translate id="pdfGenerator.crestoneDocumentHubSubtitle">Centro de Documentos Crestone</Translate></p>
              </div>
            </div>

            <div className={styles.form}>
              <div className={styles.sectionHeader}><Translate id="pdfGenerator.documentInformation">Información del Documento</Translate></div>
              <div className={styles.formGroup}>
                <label className={styles.label}><Translate id="pdfGenerator.customer">Cliente</Translate></label>
                <input
                  className={styles.input}
                  name="customerName"
                  value={data.customerName}
                  onChange={handleInputChange}
                  placeholder={translate({ id: 'pdfGenerator.customerNamePlaceholder', message: 'Nombre del Cliente' })} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className={styles.formGroup}>
                  <label className={styles.label}><Translate id="pdfGenerator.year">Año</Translate></label>
                  <input
                    className={styles.input}
                    name="year"
                    value={data.year}
                    onChange={handleInputChange}
                    placeholder="2024" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}><Translate id="pdfGenerator.planNumber">Plan N°</Translate></label>
                  <input
                    className={styles.input}
                    name="planNumber"
                    value={data.planNumber}
                    onChange={handleInputChange}
                    placeholder="001" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}><Translate id="pdfGenerator.documentDate">Fecha Doc</Translate></label>
                <input
                  className={styles.input}
                  name="date"
                  value={data.date}
                  onChange={handleInputChange}
                  placeholder="DD/MM/YYYY" />
              </div>

              <div className={styles.sectionHeader}><Translate id="pdfGenerator.customerAccountAdministrator">Administrador de la cuenta del cliente</Translate></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className={styles.formGroup}>
                  <label className={styles.label}><Translate id="pdfGenerator.name">Nombre</Translate></label>
                  <input
                    className={styles.input}
                    name="ccadmin"
                    value={data.ccadmin}
                    onChange={handleInputChange}
                    placeholder={translate({ id: 'pdfGenerator.administratorNamePlaceholder', message: 'Nombre del Administrador' })} />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}><Translate id="pdfGenerator.email">Email</Translate></label>
                  <input
                    className={styles.input}
                    name="ccadminmail"
                    value={data.ccadminmail}
                    onChange={handleInputChange}
                    placeholder="E-Mail" />
                </div>

              </div>

              <div className={styles.sectionHeader}><Translate id="pdfGenerator.planDetails">Detalles del Plan</Translate></div>
              <div className={styles.formGroup}>
                <label className={styles.label}><Translate id="pdfGenerator.planType">Tipo de Plan</Translate></label>
                <input
                  className={styles.input}
                  name="planType"
                  value={data.planType}
                  onChange={handleInputChange}
                  placeholder="Enterprise" />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}><Translate id="pdfGenerator.specifications">Especificaciones</Translate></label>
                <textarea
                  className={styles.input}
                  name="specifications"
                  value={data.specifications}
                  onChange={handleInputChange}
                  placeholder={translate({ id: 'pdfGenerator.planDetailsPlaceholder', message: 'Detalles del plan' })}
                  rows={3} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className={styles.formGroup}>
                  <label className={styles.label}><Translate id="pdfGenerator.startDate">Inicio</Translate></label>
                  <input
                    className={styles.input}
                    name="startDate"
                    value={data.startDate}
                    onChange={handleInputChange}
                    placeholder={translate({ id: 'pdfGenerator.startDatePlaceholder', message: 'Fecha Inicio' })} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}><Translate id="pdfGenerator.endDate">Fin</Translate></label>
                  <input
                    className={styles.input}
                    name="endDate"
                    value={data.endDate}
                    onChange={handleInputChange}
                    placeholder={translate({ id: 'pdfGenerator.endDatePlaceholder', message: 'Fecha Fin' })} />
                </div>
              </div>

              <div className={styles.sectionHeader}><Translate id="pdfGenerator.pricingAndValidity">Precios y Validez</Translate></div>
              <div className={styles.formGroup}>
                <label className={styles.label}><Translate id="pdfGenerator.quantity">Cantidad</Translate></label>
                <input
                  className={styles.input}
                  name="Quantity"
                  value={data.Quantity}
                  onChange={handleInputChange}
                  placeholder="1"
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className={styles.formGroup}>
                  <label className={styles.label}><Translate id="pdfGenerator.unitPrice">Precio Unitario</Translate></label>
                  <input
                    className={styles.input}
                    name="unitPrice"
                    value={data.unitPrice}
                    onChange={handleInputChange}
                    placeholder="0.00" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}><Translate id="pdfGenerator.totalPrice">Precio Total</Translate></label>
                  <input
                    className={styles.input}
                    name="totalPrice"
                    value={data.totalPrice}
                    onChange={handleInputChange}
                    placeholder="0.00" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}><Translate id="pdfGenerator.totalContract">Total Contrato</Translate></label>
                <input
                  className={styles.input}
                  name="totalContract"
                  value={data.totalContract}
                  onChange={handleInputChange}
                  placeholder="0.00" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className={styles.formGroup}>
                  <label className={styles.label}><Translate id="pdfGenerator.offerValidity">Vigencia de Oferta</Translate></label>
                  <input
                    className={styles.input}
                    name="validity"
                    value={data.validity}
                    onChange={handleInputChange}
                    placeholder={translate({ id: 'pdfGenerator.offerValidityPlaceholder', message: 'Ej: 12 meses' })} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}><Translate id="pdfGenerator.validUntil">Válido hasta</Translate></label>
                  <input
                    className={styles.input}
                    name="expiryDate"
                    value={data.expiryDate}
                    onChange={handleInputChange}
                    placeholder={translate({ id: 'pdfGenerator.expirationDatePlaceholder', message: 'Fecha Expiración' })} />
                </div>
              </div>

              <div className={styles.sectionHeader}><Translate id="pdfGenerator.signaturesAndPositions">Firmas y Cargos</Translate></div>
              <div className={styles.formGroup}>
                <label className={styles.label}><Translate id="pdfGenerator.signatureDate">Fecha de Firma</Translate></label>
                <input
                  className={styles.input}
                  name="hours"
                  value={data.hours}
                  onChange={handleInputChange}
                  placeholder={translate({ id: 'pdfGenerator.signatureDatePlaceholder', message: 'Fecha de la firma' })} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className={styles.formGroup}>
                  <label className={styles.label}><Translate id="pdfGenerator.clientName">Nombre Cliente</Translate></label>
                  <input
                    className={styles.input}
                    name="positionClient"
                    value={data.positionClient}
                    onChange={handleInputChange}
                    placeholder={translate({ id: 'pdfGenerator.signerNamePlaceholder', message: 'Nombre Firmante' })} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}><Translate id="pdfGenerator.clientPosition">Cargo Cliente</Translate></label>
                  <input
                    className={styles.input}
                    name="CargoCustomer"
                    value={data.CargoCustomer}
                    onChange={handleInputChange}
                    placeholder={translate({ id: 'pdfGenerator.signerPositionPlaceholder', message: 'Cargo Firmante' })} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className={styles.formGroup}>
                  <label className={styles.label}><Translate id="pdfGenerator.seidorName">Nombre Seidor</Translate></label>
                  <input
                    className={styles.input}
                    name="positionSeidor"
                    value={data.positionSeidor}
                    onChange={handleInputChange}
                    placeholder={translate({ id: 'pdfGenerator.signerNamePlaceholder', message: 'Nombre Firmante' })} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}><Translate id="pdfGenerator.seidorPosition">Cargo Seidor</Translate></label>
                  <input
                    className={styles.input}
                    name="CargoSeidor"
                    value={data.CargoSeidor}
                    onChange={handleInputChange}
                    placeholder={translate({ id: 'pdfGenerator.signerPositionPlaceholder', message: 'Cargo Firmante' })} />
                </div>
              </div>

            </div>

            <div className={styles.buttonGroup}>
              <button
                className={styles.generateBtn}
                onClick={handleGeneratePDF}
                disabled={isGenerating}
              >
                {isGenerating
                  ? translate({ id: 'pdfGenerator.generatingPdf', message: 'Generando...' })
                  : translate({ id: 'pdfGenerator.downloadPdf', message: 'Descargar PDF' })}
              </button>
              <button className={styles.clearBtn} onClick={handleClear}>
                <Translate id="pdfGenerator.clearForm">Limpiar</Translate>
              </button>
            </div>

            {/*
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
          */}
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
      </ProtectedRoute>
    </Layout>
  );
}
