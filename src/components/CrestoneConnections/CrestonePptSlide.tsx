import React, { useEffect, useState, useRef } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Brand, CaralIcon } from 'iconcaral2';
import fallbackData from './connections.json';
import slideOrder from './slideOrder.json';
import './CrestonePptSlide.css';

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

const sortConnections = (items: ConnectionItem[], orderArray: string[]) => {
  return [...items].sort((a, b) => {
    const indexA = orderArray.indexOf(a.id);
    const indexB = orderArray.indexOf(b.id);
    
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    
    return a.title.localeCompare(b.title);
  });
};

export default function CrestonePptSlide() {
  const [data, setData] = useState<ConnectionsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isEditingOrder, setIsEditingOrder] = useState<boolean>(false);
  const [hasCustomOrder, setHasCustomOrder] = useState<boolean>(false);
  
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if custom order is stored in localStorage to toggle the Reset button
    try {
      const customOrigins = localStorage.getItem('crestone-ppt-origins-order');
      const customDestinations = localStorage.getItem('crestone-ppt-destinations-order');
      if (customOrigins || customDestinations) {
        setHasCustomOrder(true);
      }
    } catch (e) {
      console.warn('LocalStorage check failed:', e);
    }

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
          setData(initializeData(jsonData));
          setLoading(false);
        }
      })
      .catch((err) => {
        console.warn('Failed to fetch live connections, falling back to local snapshot:', err);
        if (active) {
          setData(initializeData(fallbackData as ConnectionsData));
          setLoading(false);
        }
      });
    return () => {
      active = false;
    };
  }, []);

  const initializeData = (raw: ConnectionsData): ConnectionsData => {
    let originsOrderArr = slideOrder.originsOrder;
    let destinationsOrderArr = slideOrder.destinationsOrder;

    try {
      const customOrigins = localStorage.getItem('crestone-ppt-origins-order');
      if (customOrigins) {
        originsOrderArr = JSON.parse(customOrigins);
      }
      const customDestinations = localStorage.getItem('crestone-ppt-destinations-order');
      if (customDestinations) {
        destinationsOrderArr = JSON.parse(customDestinations);
      }
    } catch (e) {
      console.warn('LocalStorage access blocked:', e);
    }

    return {
      origins: sortConnections(raw.origins, originsOrderArr),
      destinations: sortConnections(raw.destinations, destinationsOrderArr)
    };
  };

  const moveItem = (listType: 'origins' | 'destinations', index: number, direction: 'up' | 'down') => {
    setData((prevData) => {
      if (!prevData) return prevData;
      
      const items = [...prevData[listType]];
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      
      if (targetIndex < 0 || targetIndex >= items.length) return prevData;
      
      const temp = items[index];
      items[index] = items[targetIndex];
      items[targetIndex] = temp;
      
      const newData = {
        ...prevData,
        [listType]: items
      };
      
      try {
        const orderIds = items.map(item => item.id);
        localStorage.setItem(`crestone-ppt-${listType}-order`, JSON.stringify(orderIds));
        setHasCustomOrder(true);
      } catch (e) {
        console.warn('Failed to save order to localStorage:', e);
      }
      
      return newData;
    });
  };

  const handleResetOrder = () => {
    try {
      localStorage.removeItem('crestone-ppt-origins-order');
      localStorage.removeItem('crestone-ppt-destinations-order');
      setHasCustomOrder(false);
    } catch (e) {
      console.warn('Failed to clear custom order:', e);
    }
    
    setData((prevData) => {
      if (!prevData) return prevData;
      return {
        origins: sortConnections(prevData.origins, slideOrder.originsOrder),
        destinations: sortConnections(prevData.destinations, slideOrder.destinationsOrder)
      };
    });
  };

  const cleanTitle = (item: ConnectionItem) => {
    let title = item.title.trim();
    
    if (item.id === 'sap4hanna') return 'SAP S/4HANA';
    if (item.id === 'sapabap') return 'SAP ECC';
    if (item.id === 'erp') return 'SAP ERP';
    if (item.id === 'businessone') return 'SAP Business One';
    if (item.id === 'bydesign') return 'SAP Business ByDesign';
    if (item.id === 'sapodata') return 'Odata';
    if (item.id === 'dynamics-source') return 'Dynamics 365';
    if (item.id === 'ms' || item.id === 'sqlserver') return 'SQL Server';
    if (item.id === 'aws') return 'AWS';
    if (item.id === 'gcp') return 'Google Storage';
    if (item.id === 'gcs') return 'Google Big Query';
    if (item.id === 'Azure') return 'Azure';
    if (item.id === 'AzureSQL') return 'Azure SQL';
    if (item.id === 'fabric') return 'Fabric';
    if (item.id === 'fileserver') return 'Windows File Server';
    
    title = title.replace(/Source Connection/gi, '');
    title = title.replace(/Destination Connection/gi, '');
    title = title.replace(/Destination/gi, '');
    title = title.replace(/Source/gi, '');
    title = title.replace(/Connection/gi, '');
    title = title.replace(/ODATA/gi, '');
    title = title.replace(/MS /gi, '');
    
    return title.trim();
  };

  const renderIcon = (item: ConnectionItem) => {
    if (!item.iconName) {
      return <CaralIcon name={"file" as any} size={28} />;
    }

    const normalizedIconName = item.iconName.trim();

    if (item.useBrand) {
      return <Brand name={normalizedIconName as any} size={28} />;
    } else {
      return <CaralIcon name={normalizedIconName as any} size={28} />;
    }
  };

  const handleDownload = async () => {
    if (!slideRef.current) return;
    
    // Temporarily hide editing controls in the capture
    const wasEditing = isEditingOrder;
    if (wasEditing) {
      setIsEditingOrder(false);
    }
    
    // Wait a split second to ensure React rendering updates the DOM
    await new Promise((resolve) => setTimeout(resolve, 60));

    const offscreenContainer = document.createElement('div');
    offscreenContainer.style.position = 'absolute';
    offscreenContainer.style.left = '-9999px';
    offscreenContainer.style.top = '-9999px';
    offscreenContainer.style.width = '1280px';
    offscreenContainer.style.height = '720px';
    document.body.appendChild(offscreenContainer);

    try {
      const clone = slideRef.current.cloneNode(true) as HTMLDivElement;
      offscreenContainer.appendChild(clone);

      const svgs = clone.querySelectorAll('svg');
      svgs.forEach((svg) => {
        try {
          const svgString = new XMLSerializer().serializeToString(svg);
          const base64 = btoa(unescape(encodeURIComponent(svgString)));
          
          const img = document.createElement('img');
          img.src = `data:image/svg+xml;base64,${base64}`;
          
          const width = svg.getAttribute('width') || svg.style.width || '32px';
          const height = svg.getAttribute('height') || svg.style.height || '32px';
          img.style.width = width;
          img.style.height = height;
          img.className = svg.className.baseVal || '';
          
          if (svg.parentNode) {
            svg.parentNode.replaceChild(img, svg);
          }
        } catch (svgErr) {
          console.warn('Failed to convert SVG to image in download clone:', svgErr);
        }
      });

      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(clone, {
        useCORS: true,
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false,
      });

      const link = document.createElement('a');
      link.download = 'crestone_compatibilidad_slide.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Error rendering or downloading the slide image:', err);
      alert('Error al generar la imagen. Por favor intenta de nuevo.');
    } finally {
      document.body.removeChild(offscreenContainer);
      if (wasEditing) {
        setIsEditingOrder(true);
      }
    }
  };

  const renderColumnGrid = (listType: 'origins' | 'destinations') => {
    if (!data) return null;
    const items = data[listType];
    const mid = Math.ceil(items.length / 2);
    const col1 = items.slice(0, mid);
    const col2 = items.slice(mid);

    const renderItem = (item: ConnectionItem, absoluteIndex: number) => {
      return (
        <div key={item.id} className="crestone-ppt-item">
          <div className="crestone-ppt-icon-container">
            {renderIcon(item)}
          </div>
          <span className="crestone-ppt-item-text">{cleanTitle(item)}</span>
          
          {isEditingOrder && (
            <div className="crestone-ppt-item-controls">
              <button 
                className="crestone-ppt-arrow-btn" 
                onClick={() => moveItem(listType, absoluteIndex, 'up')}
                disabled={absoluteIndex === 0}
                title="Subir"
              >
                ▲
              </button>
              <button 
                className="crestone-ppt-arrow-btn" 
                onClick={() => moveItem(listType, absoluteIndex, 'down')}
                disabled={absoluteIndex === items.length - 1}
                title="Bajar"
              >
                ▼
              </button>
            </div>
          )}
        </div>
      );
    };

    return (
      <div className="crestone-ppt-columns-container">
        <div className="crestone-ppt-column">
          {col1.map((item, index) => renderItem(item, index))}
        </div>
        <div className="crestone-ppt-column">
          {col2.map((item, index) => renderItem(item, mid + index))}
        </div>
      </div>
    );
  };

  const backgroundUrl = useBaseUrl('/img/crestone/ppt_background.png');

  if (loading) {
    return (
      <div className="crestone-ppt-loading">
        <div className="crestone-ppt-spinner" />
        <p>Cargando conexiones...</p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="crestone-ppt-container">
      <div className="crestone-ppt-controls">
        <button className="crestone-ppt-download-btn" onClick={handleDownload}>
          <CaralIcon name={"download" as any} size={18} />
          Descargar Imagen para PPT
        </button>

        <button 
          className={`crestone-ppt-edit-btn ${isEditingOrder ? 'active' : ''}`}
          onClick={() => setIsEditingOrder(!isEditingOrder)}
        >
          <CaralIcon name={"edit" as any} size={16} />
          {isEditingOrder ? 'Terminar Reordenación' : 'Reordenar Conexiones'}
        </button>

        {hasCustomOrder && (
          <button className="crestone-ppt-reset-btn" onClick={handleResetOrder}>
            <CaralIcon name={"trash" as any} size={14} />
            Restaurar Orden
          </button>
        )}
      </div>

      <div className="crestone-ppt-canvas-wrapper">
        <div 
          ref={slideRef} 
          className="crestone-ppt-canvas" 
          style={{ backgroundImage: `url(${backgroundUrl})` }}
        >
          <div className="crestone-ppt-header">
            <h1 className="crestone-ppt-title">Crestone es compatible con</h1>
          </div>

          <div className="crestone-ppt-cards-row">
            {/* Orígenes Card */}
            <div className="crestone-ppt-glass-card">
              <h2 className="crestone-ppt-card-title">Orígenes</h2>
              {renderColumnGrid('origins')}
            </div>

            {/* Destinos Card */}
            <div className="crestone-ppt-glass-card">
              <h2 className="crestone-ppt-card-title">Destinos</h2>
              {renderColumnGrid('destinations')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
