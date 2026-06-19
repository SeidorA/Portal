import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import { Brand, CaralIcon } from 'iconcaral2';
import Translate from '@docusaurus/Translate';
import styles from './style.module.css';
import fallbackData from './connections.json';

interface ConnectionItem {
  id: string;
  title: string;
  description: string;
  iconName: string | null;
  useBrand: boolean;
  link: string;
}

interface ConnectionsData {
  origins: ConnectionItem[];
  destinations: ConnectionItem[];
}

export default function CrestoneConnections() {
  const [data, setData] = useState<ConnectionsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetch('https://crestone-help.seidoranalytics.com/api/connections.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch connections');
        }
        return res.json();
      })
      .then((jsonData: ConnectionsData) => {
        if (active) {
          setData(jsonData);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.warn('Failed to fetch live connections, falling back to local snapshot:', err);
        if (active) {
          setData(fallbackData as ConnectionsData);
          setLoading(false);
        }
      });
    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner} />
        <p>
          <Translate id="crestone.connections.loading">Cargando conexiones...</Translate>
        </p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className={styles.errorContainer}>
        <p>
          <Translate id="crestone.connections.error">
            No se pudieron cargar las conexiones en este momento.
          </Translate>
        </p>
      </div>
    );
  }

  const renderIcon = (item: ConnectionItem) => {
    if (!item.iconName) {
      // Default fallback icon
      return <CaralIcon name={"file" as any} size={24} />;
    }

    // Sometimes the backend iconName has leading/trailing whitespaces or case issues
    const normalizedIconName = item.iconName.trim();

    if (item.useBrand) {
      return <Brand name={normalizedIconName as any} size={24} />;
    } else {
      return <CaralIcon name={normalizedIconName as any} size={24} />;
    }
  };

  const getExternalLink = (link: string) => {
    if (link.startsWith('http')) {
      return link;
    }
    const normalizedLink = link.startsWith('/') ? link : `/${link}`;
    return `https://crestone-help.seidoranalytics.com${normalizedLink}`;
  };

  return (
    <div className="row">
      <div className="col col--6">
        <h3 className={styles.sectionTitle}>
          <Translate id="crestone.connections.origins">Orígenes</Translate>
        </h3>
        <div className={styles.connectionsList}>
          {data.origins.map((item) => (
            <Link to={getExternalLink(item.link)} key={item.id} className={styles.connectionCard}>
              <div className={styles.iconWrapper}>
                {renderIcon(item)}
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardTitle}>{item.title.trim()}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="col col--6">
        <h3 className={styles.sectionTitle}>
          <Translate id="crestone.connections.destinations">Destinos</Translate>
        </h3>
        <div className={styles.connectionsList}>
          {data.destinations.map((item) => (
            <Link to={getExternalLink(item.link)} key={item.id} className={styles.connectionCard}>
              <div className={styles.iconWrapper}>
                {renderIcon(item)}
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardTitle}>{item.title.trim()}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
