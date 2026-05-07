import React from 'react';
import styles from './styles.module.css';

export interface PDFData {
  year: string;
  planNumber: string;
  customerName: string;
  date: string;
  planType: string;
  specifications: string;
  startDate: string;
  endDate: string;
  unitPrice: string;
  totalPrice: string;
  netTotal: string;
  vatAmount: string;
  totalContract: string;
  expiryDate: string;
  hours: string;
  positionClient: string;
  positionSeidor: string;
}

interface Props {
  data: PDFData;
  innerRef?: React.RefObject<HTMLDivElement>;
}

const PDFPreview: React.FC<Props> = ({ data, innerRef }) => {
  return (
    <div className={styles.page} ref={innerRef}>
      <div className={styles.decorationTop} />

      <header className={styles.header}>
        <div className={styles.crestoneLogo}>
          <img src="/img/pdf/logo.png" alt="Crestone" style={{ height: '36px' }} />
          <span>Crestone</span>
        </div>
        <img src="/img/logos/logo.png" alt="Seidor Analytics" className={styles.logo} />
      </header>

      <div className={styles.quoteNumber}>
        Quote: CRE-{data.year || '[YEAR]'}-{data.planNumber || '[PLAN_NUMBER]'}
      </div>

      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <label>Cliente:</label>
          <span>{data.customerName || '[CUSTOMER_NAME]'}</span>
        </div>
        <div className={styles.infoItem}>
          <label>Fecha:</label>
          <span>{data.date || '[DATE]'}</span>
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>POS</th>
            <th width='100%'>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Precio Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <div>CRESTONE Platform</div>
              <div className={styles.productDescription}>
                Licencia de suscripción anual<br />
                Plan: {data.planType || '[PLAN_TYPE]'}<br />
                Especificaciones: {data.specifications || '[Especificaciones]'}<br />
                Período: {data.startDate || '[START_DATE]'} - {data.endDate || '[END_DATE]'}
              </div>
            </td>
            <td>1 año</td>
            <td>
              <div>USD</div>
              <div>{data.unitPrice || '[UNIT_PRICE]'}</div>
            </td>
            <td>
              <div>USD</div>
              <div>{data.totalPrice || '[TOTAL_PRICE]'}</div>
            </td>
          </tr>
          <tr className={styles.summaryRow}>
            <td colSpan={3} className={styles.summaryLabel}>Subtotal (neto)</td>
            <td colSpan={2} className={styles.summaryValue}>USD {data.netTotal || '[NET_TOTAL]'}</td>
          </tr>
          <tr className={styles.summaryRow}>
            <td colSpan={3} className={styles.summaryLabel}>IVA (%)</td>
            <td colSpan={2} className={styles.summaryValue}>USD {data.vatAmount || '[VAT_AMOUNT]'}</td>
          </tr>
          <tr className={styles.totalRow}>
            <td colSpan={3} className={styles.summaryLabel}>Total Contrato</td>
            <td colSpan={2} className={styles.summaryValue}>USD {data.totalContract || '[TOTAL_CONTRACT]'}</td>
          </tr>
        </tbody>
      </table>

      <div className={styles.sectionTitle}>Términos de la Oferta:</div>
      <ul className={styles.termsList}>
        <li><strong>Vigencia:</strong> 12 meses (1 año)</li>
        <li><strong>Renovación:</strong> Automática por el mismo período, a menos que se notifique cancelación con 30 días de anticipación</li>
        <li><strong>Pago:</strong> 30 días netos desde emisión de factura (pago único anual por adelantado)</li>
        <li><strong>Instalación:</strong> Incluye {data.hours || '[HOURS]'} horas de servicios profesionales para instalación</li>
        <li><strong>Validez de oferta:</strong> Hasta {data.expiryDate || '[EXPIRY_DATE]'}</li>
      </ul>

      <div className={styles.acceptanceBox}>
        <div className={styles.acceptanceTitle}>Aceptación</div>
        <p>Esta oferta constituye una propuesta vinculante. Al firmar esta carta oferta, usted acepta:</p>
        <ul style={{ listStyle: 'disc', paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
          <li>Los términos y condiciones adjuntos (disponibles en www.crestone.io/terms)</li>
          <li>Las condiciones comerciales y de soporte detalladas</li>
          <li>La política de privacidad y protección de datos</li>
        </ul>
      </div>

      <div className={styles.footerNote}>
        ¿Preguntas? Contacte a su ejecutivo de cuenta o escriba a: sales@crestone.io
      </div>

      <div className={styles.signatures}>
        <div className={styles.signatureLine}>
          <div>Firma / Nombre</div>
          <div style={{ fontSize: '0.5rem', color: '#64748b' }}>{data.positionClient || 'Cargo / Fecha'}</div>
        </div>
        <div className={styles.signatureLine}>
          <div>Firma / Nombre</div>
          <div style={{ fontSize: '0.5rem', color: '#64748b' }}>{data.positionSeidor || 'Cargo / Fecha'}</div>
        </div>
      </div>

      <div className={styles.legal}>
        Nota Legal: Los términos y condiciones generales (GTC) aplican exclusivamente a esta oferta y a todas las relaciones comerciales derivadas. Puede consultarlos en: www.crestone.io/terms<br /><br />
        Al aceptar esta oferta, usted acepta la validez de nuestras GTC. Condiciones desviadas del cliente no aplicarán a menos que hayamos expresamente acordado su validez por escrito. Este documento, junto con los términos y condiciones adjuntos, constituye el acuerdo completo entre las partes.
      </div>

      <div className={styles.decorationBottom} />
    </div>
  );
};

export default PDFPreview;
