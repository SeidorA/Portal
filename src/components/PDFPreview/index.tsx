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
  CargoCustomer: string;
  CargoSeidor: string;
  totalContract: string;
  expiryDate: string;
  hours: string;
  positionClient: string;
  positionSeidor: string;
  validity: string;
  Quantity: string;
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
          <img src="/img/pdf/Logo.png" alt="Crestone" style={{ height: '36px' }} />
          <span>Crestone</span>
        </div>
        <img src="/img/logos/logo.png" alt="Seidor Analytics" className={styles.logo} />
      </header>

      <div className={styles.quoteNumber}>
        Quote: CRE-{data.year || '[YEAR]'}-{data.planNumber || '[PLAN_NUMBER]'}
      </div>

      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <label>Client:</label>
          <span>{data.customerName || '[CUSTOMER_NAME]'}</span>
        </div>
        <div className={styles.infoItem}>
          <label>Date:</label>
          <span>{data.date || '[DATE]'}</span>
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th style={{ width: '40px' }}>POS</th>
            <th style={{ width: '100%' }}>Product</th>
            <th style={{ width: '80px' }}>Quantity</th>
            <th style={{ width: '100px' }}>Unit Price</th>
            <th style={{ width: '120px' }}>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <div style={{ fontWeight: 500 }}>CRESTONE Platform</div>
              <div className={styles.productDescription}>

                Plan: {data.planType || '[PLAN_TYPE]'}<br />
                Period: {data.startDate || '[START_DATE]'} - {data.endDate || '[END_DATE]'}<br />
                Specifications: {data.specifications || '[Specifications]'}
              </div>
            </td>
            <td>{data.Quantity || '[QUANTITY]'}</td>
            <td>
              <div className={styles.currency}>USD</div>
              <div>{data.unitPrice || '[UNIT_PRICE]'}</div>
            </td>
            <td>
              <div className={styles.currency}>USD</div>
              <div>{data.totalPrice || '[TOTAL_PRICE]'}</div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr className={styles.totalRow}>
            <td colSpan={3} className={styles.summaryLabel}>Total Contract</td>
            <td colSpan={2} className={styles.summaryValue}>USD {data.totalContract || '[TOTAL_CONTRACT]'}</td>
          </tr>
        </tfoot>
      </table>

      <div className={styles.sectionTitle}>Terms of the Offer:</div>
      <ul className={styles.termsList}>
        <li>Validity: {data.validity || '12 months (1 year)'}</li>
        <li>Renewal: Automatic for the same period, unless cancellation is notified 30 days in advance</li>
        <li>Payment: 30 days net from invoice issuance (one-time annual payment in advance)</li>
        <li>Offer validity: Until {data.expiryDate || '[EXPIRY_DATE]'}</li>
        <li>Prices are listed in U.S. dollars and do not include taxes; taxes will be added to the final bill.</li>
      </ul>

      <div className={styles.acceptanceBox}>
        <div className={styles.acceptanceTitle}>Acceptance</div>
        <p>This offer constitutes a binding proposal. By signing this offer letter, you agree to:</p>
        <ul style={{ listStyle: 'disc', paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
          <li>The attached terms and conditions (available at www.crestone.io/terms)</li>
          <li>The detailed business and support conditions</li>
          <li>The privacy and data protection policy</li>
        </ul>
      </div>

      <div className={styles.footerNote}>
        Questions? Contact your account executive or write to: sales@crestone.io
      </div>

      <div className={styles.signatures}>
        <div className={styles.signatureLine}>
          <div className={styles.signatureLabel}>Customer</div>
          <div className={styles.signatureInfo}>{data.positionClient || '[Position_client]'} - {data.hours || '[Date]'}</div>
          <div className={styles.signatureInfo}>{data.CargoCustomer || '[CargoCustomer]'}</div>
        </div>
        <div className={styles.signatureLine}>
          <div className={styles.signatureLabel}>SEIDOR Analytics</div>
          <div className={styles.signatureInfo}>{data.positionSeidor || '[Position_Seidor]'} - {data.hours || '[Date]'}</div>
          <div className={styles.signatureInfo}>{data.CargoSeidor || '[CargoSeidor]'}</div>
        </div>
      </div>

      <div className={styles.legal}>
        Legal Notice: The general terms and conditions (GTC) apply exclusively to this offer and to all resulting business relationships. You can consult them at: www.crestone.io/terms<br /><br />
        By accepting this offer, you agree to the validity of our GTC. Customer-deviated conditions will not apply unless we have expressly agreed to their validity in writing. This document, along with the attached terms and conditions, constitutes the complete agreement between the parties.
      </div>

      <div className={styles.decorationBottom} />
    </div>
  );
};


export default PDFPreview;
