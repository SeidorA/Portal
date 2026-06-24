import React, { useState, useRef, useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Brand, CaralIcon } from 'iconcaral2';
import fallbackData from '../components/CrestoneConnections/connections.json';
import useBaseUrl from '@docusaurus/useBaseUrl';

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

// Inline Crestone Logo matching connections-diagram.tsx
function CrestoneLogo({ color1 = "#66B6FF", color2 = "#ffffff", size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M23.0629 8.97536C25.5489 8.97536 27.5643 7.02884 27.5643 4.62769C27.5643 2.22655 25.5489 0.280029 23.0629 0.280029C20.5768 0.280029 18.5614 2.22655 18.5614 4.62769C18.5614 7.02884 20.5768 8.97536 23.0629 8.97536Z" fill={color1} />
        <path d="M4.78148 18.3869C7.26757 18.3869 9.28294 16.4403 9.28294 14.0392C9.28294 11.638 7.26757 9.69153 4.78148 9.69153C2.2954 9.69153 0.280029 11.638 0.280029 14.0392C0.280029 16.4403 2.2954 18.3869 4.78148 18.3869Z" fill={color1} />
        <path d="M27.7201 23.3724C27.7201 25.7735 25.7047 27.72 23.2186 27.72C20.7325 27.72 18.7172 25.7735 18.7172 23.3724C18.7172 20.9712 20.7325 19.0247 23.2186 19.0247C25.7047 19.0247 27.7201 20.9712 27.7201 23.3724Z" fill={color1} />
        <path d="M8.84239 18.5205C10.2395 20.6674 12.7205 22.0082 15.8806 22.0082H17.2155C17.109 22.4466 17.0514 22.9028 17.0514 23.3724C17.0514 24.5943 17.433 25.7297 18.0861 26.675H15.6389C9.59397 26.675 5.12963 23.8349 3.02051 19.7483C3.57845 19.9088 4.16947 19.9961 4.78147 19.9961C6.33709 19.9961 7.75757 19.4385 8.84239 18.5205Z" fill={color2} />
        <path d="M17.0966 6.14145H15.8802C12.748 6.14145 10.2823 7.47326 8.87873 9.58865C7.78907 8.65233 6.35448 8.08267 4.78111 8.08267C4.18484 8.08267 3.60915 8.16605 3.06371 8.3184C5.19059 4.27622 9.63516 1.47467 15.639 1.47467H17.8308C17.2386 2.38917 16.8953 3.46966 16.8953 4.62768C16.8953 5.15098 16.9655 5.6579 17.097 6.14145H17.0966Z" fill={color2} />
      </g>
    </svg>
  );
}

// Connection Card component reusing styling from connections-diagram.tsx
interface ConnectionCardProps {
  title: string;
  icon: string;
  brand: boolean;
  theme: 'light' | 'dark';
}

function ConnectionCard({ title, icon, brand, theme }: ConnectionCardProps) {
  const isDark = theme === 'dark';
  return (
    <div style={{
      backgroundColor: isDark ? '#1e293b' : '#ffffff',
      border: isDark ? '2px solid #334155' : '2px solid #cbd5e1',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 14px',
      width: '260px',
      height: '50px',
      boxSizing: 'border-box',
      overflow: 'hidden',
      position: 'relative',
      color: isDark ? '#f1f5f9' : '#0c1d4a',
      boxShadow: isDark
        ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
        : '0 1px 3px rgba(0,0,0,0.05)',
    }}>
      <div style={{
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        {brand ? (
          <Brand name={icon as any} size={30} />
        ) : (
          <CaralIcon name={icon as any} size={30} color={isDark ? '#f1f5f9' : '#0c1d4a'} />
        )}
      </div>
      <span style={{
        fontFamily: "'Poppins', 'Outfit', 'Inter', sans-serif",
        fontSize: '13px',
        fontWeight: 500,
        color: isDark ? '#f1f5f9' : '#0c1d4a',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}>
        {title}
      </span>
    </div>
  );
}

// Special Crestone Node Card matching design
function CrestoneCard({ theme }: { theme: 'light' | 'dark' }) {
  const isDark = theme === 'dark';
  return (
    <div style={{
      backgroundColor: isDark ? '#1e293b' : '#ffffff',
      border: isDark ? '2px solid #334155' : '2px solid #cbd5e1',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 14px',
      width: '260px',
      height: '50px',
      boxSizing: 'border-box',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: isDark
        ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
        : '0 1px 3px rgba(0,0,0,0.05)',
    }}>
      <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CrestoneLogo size={30} color1="#3b82f6" color2={isDark ? '#ffffff' : '#0c1d4a'} />
      </div>
      <span style={{
        fontFamily: "'Poppins', 'Outfit', 'Inter', sans-serif",
        fontSize: '13px',
        fontWeight: 800,
        color: isDark ? '#ffffff' : '#0c1d4a',
        letterSpacing: '0.5px'
      }}>
        CRESTONE
      </span>
    </div>
  );
}

// Vector-based Seidor Analytics logo to render crisply in PNG exports
function SeidorAnalyticsLogo({ theme }: { theme: 'light' | 'dark' }) {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#ffffff' : '#0c1d4a';
  const barColor = isDark ? 'rgba(255,255,255,0.3)' : '#cbd5e1';
  const analyticsColor = '#00a2ff';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Poppins', 'Inter', sans-serif" }}>
      <span style={{ fontSize: '15px', fontWeight: 800, color: textColor, letterSpacing: '0.5px', display: 'flex', alignItems: 'center' }}>
        SEID
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          border: `2.5px solid ${textColor}`,
          margin: '0 1px',
          boxSizing: 'border-box'
        }}>
          <span style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            backgroundColor: analyticsColor
          }} />
        </span>
        R
      </span>
      <div style={{ width: '1.5px', height: '18px', backgroundColor: barColor }} />
      <span style={{ fontSize: '15px', fontWeight: 400, color: analyticsColor }}>
        analytics
      </span>
    </div>
  );
}

export default function DeploymentOptions() {
  const { i18n } = useDocusaurusContext();
  const currentLocale = i18n?.currentLocale === 'en' ? 'en' : 'es';

  const canvasRef = useRef<HTMLDivElement>(null);

  // Background Image Path resolution (Pre-fetched at hook-level before early return)
  const bgLight = useBaseUrl('/img/crestone/ppt/bgdespliegue.png');
  const bgDark = useBaseUrl('/img/crestone/ppt/bgdesplieguedark.png');

  // States
  const [data, setData] = useState<ConnectionsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [selectedOriginId, setSelectedOriginId] = useState<string>('');
  const [selectedDestinationId, setSelectedDestinationId] = useState<string>('');
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  // Load Connections Data
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
          if (jsonData.origins.length > 0) setSelectedOriginId(jsonData.origins[0].id);
          // Set snowflake or first destination as default
          const defaultDest = jsonData.destinations.find(d => d.id === 'snowflake') || jsonData.destinations[0];
          if (defaultDest) setSelectedDestinationId(defaultDest.id);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.warn('Failed to fetch live connections, falling back to local snapshot:', err);
        if (active) {
          setData(fallbackData as ConnectionsData);
          if (fallbackData.origins.length > 0) setSelectedOriginId(fallbackData.origins[0].id);
          const defaultDest = fallbackData.destinations.find(d => d.id === 'snowflake') || fallbackData.destinations[0];
          if (defaultDest) setSelectedDestinationId(defaultDest.id);
          setLoading(false);
        }
      });
    return () => {
      active = false;
    };
  }, []);

  if (loading || !data) {
    return (
      <Layout title="Opciones de Despliegue" description="Generador de diagramas de opciones de despliegue para Crestone">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '70vh',
          fontFamily: "'Inter', sans-serif"
        }}>
          <div style={{
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #3b82f6',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            animation: 'spin 1s linear infinite',
            marginBottom: '16px'
          }} />
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
          <p style={{ color: 'var(--ifm-color-gray-medium-dark)', fontSize: '16px' }}>
            {currentLocale === 'en' ? 'Loading data...' : 'Cargando datos...'}
          </p>
        </div>
      </Layout>
    );
  }

  // Get active selected cards
  const selectedOrigin = data.origins.find(o => o.id === selectedOriginId) || data.origins[0];
  const selectedDestination = data.destinations.find(d => d.id === selectedDestinationId) || data.destinations[0];

  // Background Image Path resolution
  const activeBg = theme === 'light' ? bgLight : bgDark;

  // Colors based on theme
  const isDark = theme === 'dark';
  const textColorMain = isDark ? '#ffffff' : '#0c1d4a';
  const textColorSub = '#00a2ff';
  const networkLabelColor = isDark ? '#cbd5e1' : '#2e3a59';
  const outerBoxBorderColor = isDark ? '#475569' : '#cbd5e1';
  const arrowColor = isDark ? '#ffffff' : '#0c1d4a';

  const glassStyle = isDark ? {
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
    border: '1.5px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)'
  } : {
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    border: '1.5px solid rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.04)'
  };

  // PNG Exporter function
  const downloadPng = async () => {
    if (typeof window === 'undefined' || !canvasRef.current) return;

    try {
      setIsDownloading(true);
      const { toPng } = await import('html-to-image');

      // Export at 2.5x resolution for crisp high-quality presentation insertions
      const dataUrl = await toPng(canvasRef.current, {
        pixelRatio: 2.5,
        style: {
          transform: 'scale(1)',
        }
      });

      const link = document.createElement('a');
      link.download = `crestone-opciones-despliegue-${theme}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Error generating PNG image:', error);
      alert(currentLocale === 'en' ? 'Failed to generate image. Please try again.' : 'Error al generar la imagen. Inténtelo de nuevo.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Layout title={currentLocale === 'en' ? 'Deployment Options' : 'Opciones de Despliegue'} description="Generador de diapositivas de arquitectura y despliegue">
      <div style={{
        padding: '40px 20px',
        maxWidth: '1600px',
        margin: '0 auto',
        fontFamily: "'Inter', sans-serif"
      }}>
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontWeight: 800, fontSize: '36px', marginBottom: '8px', background: 'linear-gradient(90deg, #3b82f6, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {currentLocale === 'en' ? 'Deployment Options Generator' : 'Generador de Opciones de Despliegue'}
          </h1>
          <p style={{ color: 'var(--ifm-color-gray-medium-dark)', fontSize: '16px', maxWidth: '800px' }}>
            {currentLocale === 'en'
              ? 'Customize the deployment options diagram by choosing the source database/system and target destination. Download it as a high-resolution slide for presentations.'
              : 'Personaliza el diagrama de opciones de despliegue seleccionando el origen de datos y el destino. Descarga la diapositiva en alta resolución para presentaciones.'}
          </p>
        </div>

        {/* Workspace Layout */}
        <div style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'flex-start',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
          {/* Controls Panel */}
          <div style={{
            flex: '0 0 320px',
            width: '320px',
            backgroundColor: 'var(--ifm-card-background-color)',
            border: '1px solid var(--ifm-toc-border-color)',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            boxSizing: 'border-box'
          }}>
            {/* Theme Toggle */}
            <div>
              <span style={{ display: 'block', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--ifm-color-gray-medium-dark)', marginBottom: '8px' }}>
                {currentLocale === 'en' ? 'Canvas Background' : 'Fondo del Lienzo'}
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                {(['light', 'dark'] as const).map((tVal) => (
                  <button
                    key={tVal}
                    onClick={() => setTheme(tVal)}
                    style={{
                      flex: '1',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      border: theme === tVal ? '2px solid #3b82f6' : '1px solid var(--ifm-toc-border-color)',
                      backgroundColor: theme === tVal ? '#e0f2fe' : 'var(--ifm-background-color)',
                      color: theme === tVal ? '#0369a1' : 'var(--ifm-color-content)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textTransform: 'capitalize',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {tVal === 'light' ? (currentLocale === 'en' ? 'Light' : 'Claro') : (currentLocale === 'en' ? 'Dark' : 'Oscuro')}
                  </button>
                ))}
              </div>
            </div>

            {/* Origin Selector */}
            <div>
              <span style={{ display: 'block', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--ifm-color-gray-medium-dark)', marginBottom: '8px' }}>
                {currentLocale === 'en' ? 'Origin / Source' : 'Origen / Source'}
              </span>
              <select
                value={selectedOriginId}
                onChange={(e) => setSelectedOriginId(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--ifm-toc-border-color)',
                  backgroundColor: 'var(--ifm-background-color)',
                  color: 'var(--ifm-color-content)',
                  fontSize: '14px',
                  fontWeight: 500,
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {data.origins.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Destination Selector */}
            <div>
              <span style={{ display: 'block', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--ifm-color-gray-medium-dark)', marginBottom: '8px' }}>
                {currentLocale === 'en' ? 'Destination' : 'Destino'}
              </span>
              <select
                value={selectedDestinationId}
                onChange={(e) => setSelectedDestinationId(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--ifm-toc-border-color)',
                  backgroundColor: 'var(--ifm-background-color)',
                  color: 'var(--ifm-color-content)',
                  fontSize: '14px',
                  fontWeight: 500,
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {data.destinations.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Action Buttons */}
            <button
              onClick={downloadPng}
              disabled={isDownloading}
              style={{
                width: '100%',
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 20px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: isDownloading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.15s ease',
                boxShadow: '0 4px 10px rgba(59, 130, 246, 0.25)'
              }}
              onMouseEnter={(e) => {
                if (!isDownloading) {
                  e.currentTarget.style.backgroundColor = '#2563eb';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isDownloading) {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                  e.currentTarget.style.transform = 'none';
                }
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {isDownloading
                ? (currentLocale === 'en' ? 'Downloading...' : 'Descargando...')
                : (currentLocale === 'en' ? 'Download Slide (PNG)' : 'Descargar Diapositiva (PNG)')}
            </button>
          </div>

          {/* Canvas Preview Container */}
          <div style={{
            flex: '1',
            minWidth: '0',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            <div style={{
              overflowX: 'auto',
              borderRadius: '12px',
              border: '1px solid var(--ifm-toc-border-color)',
              backgroundColor: '#e2e8f0',
              padding: '24px',
              display: 'flex',
              justifyContent: 'center'
            }}>
              {/* 16:9 Canvas Target */}
              <div
                id="deployment-options-canvas"
                ref={canvasRef}
                style={{
                  width: '1280px',
                  height: '720px',
                  position: 'relative',
                  backgroundImage: `url(${activeBg})`,
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  overflow: 'hidden',
                  flexShrink: 0,
                  boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                  borderRadius: '4px',
                  userSelect: 'none'
                }}
              >
                {/* SVG Connections & Arrowheads Layer */}
                <svg style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 2,
                  pointerEvents: 'none'
                }}>
                  <defs>
                    <marker
                      id="arrowhead"
                      viewBox="0 0 10 10"
                      refX="6"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill={arrowColor} />
                    </marker>
                  </defs>

                  {/* FLOW 1 (Despliegue Cloud) - Origin to Crestone */}
                  <g>
                    {/* Circle starting point */}
                    <circle cx="380" cy="245" r="5" fill={arrowColor} />
                    {/* Horizontal connection line */}
                    <line
                      x1="380"
                      y1="245"
                      x2="504"
                      y2="245"
                      stroke={arrowColor}
                      strokeWidth="2.5"
                      markerEnd="url(#arrowhead)"
                    />
                  </g>

                  {/* FLOW 1 (Despliegue Cloud) - Crestone to Destination */}
                  <g>
                    {/* Circle starting point */}
                    <circle cx="770" cy="245" r="5" fill={arrowColor} />
                    {/* Horizontal connection line */}
                    <line
                      x1="770"
                      y1="245"
                      x2="894"
                      y2="245"
                      stroke={arrowColor}
                      strokeWidth="2.5"
                      markerEnd="url(#arrowhead)"
                    />
                  </g>

                  {/* FLOW 2 (Despliegue Self Hosted) - Origin to Crestone inside Customer Network Box */}
                  <g>
                    {/* Circle starting point */}
                    <circle cx="410" cy="510" r="5" fill={arrowColor} />
                    {/* Horizontal connection line */}
                    <line
                      x1="410"
                      y1="510"
                      x2="474"
                      y2="510"
                      stroke={arrowColor}
                      strokeWidth="2.5"
                      markerEnd="url(#arrowhead)"
                    />
                  </g>

                  {/* FLOW 2 (Despliegue Self Hosted) - Crestone (inside Customer Network Box) to Destination */}
                  <g>
                    {/* Circle starting point */}
                    <circle cx="740" cy="510" r="5" fill={arrowColor} />
                    {/* Horizontal connection line */}
                    <line
                      x1="740"
                      y1="510"
                      x2="894"
                      y2="510"
                      stroke={arrowColor}
                      strokeWidth="2.5"
                      markerEnd="url(#arrowhead)"
                    />
                  </g>
                </svg>

                {/* Main Slide Title */}
                <div style={{
                  position: 'absolute',
                  top: '60px',
                  left: '80px',
                  zIndex: 2
                }}>
                  <h1 style={{
                    margin: 0,
                    fontFamily: "'Poppins', 'Outfit', 'Inter', sans-serif",
                    fontSize: '40px',
                    fontWeight: 800,
                    color: textColorMain,
                    letterSpacing: '-0.5px'
                  }}>
                    {currentLocale === 'en' ? 'Deployment Options' : 'Opciones de Despliegue'}
                  </h1>
                </div>

                {/* ================= FLOW 1: Despliegue Cloud ================= */}
                <div style={{
                  position: 'absolute',
                  top: '135px',
                  left: '80px',
                  zIndex: 2
                }}>
                  <h2 style={{
                    margin: 0,
                    fontFamily: "'Poppins', 'Outfit', 'Inter', sans-serif",
                    fontSize: '24px',
                    fontWeight: 700,
                    color: textColorSub,
                    letterSpacing: '-0.2px'
                  }}>
                    {currentLocale === 'en' ? 'Cloud Deployment' : 'Despliegue Cloud'}
                  </h2>
                </div>

                {/* Labels for Flow 1 */}
                <div style={{
                  position: 'absolute',
                  top: '185px',
                  left: '120px',
                  width: '260px',
                  textAlign: 'center',
                  fontFamily: "'Poppins', 'Inter', sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: networkLabelColor,
                  zIndex: 2
                }}>
                  Customer Network
                </div>

                <div style={{
                  position: 'absolute',
                  top: '185px',
                  left: '510px',
                  width: '260px',
                  textAlign: 'center',
                  fontFamily: "'Poppins', 'Inter', sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: networkLabelColor,
                  zIndex: 2
                }}>
                  Crestone Network
                </div>

                <div style={{
                  position: 'absolute',
                  top: '185px',
                  left: '900px',
                  width: '260px',
                  textAlign: 'center',
                  fontFamily: "'Poppins', 'Inter', sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: networkLabelColor,
                  zIndex: 2
                }}>
                  Destination Network
                </div>

                {/* Cards for Flow 1 */}
                {/* Selected Origin */}
                <div style={{ position: 'absolute', top: '220px', left: '120px', zIndex: 3 }}>
                  <ConnectionCard
                    title={selectedOrigin.title}
                    icon={selectedOrigin.iconName || 'file'}
                    brand={selectedOrigin.useBrand}
                    theme={theme}
                  />
                </div>

                {/* Crestone Network Box Outline */}
                <div style={{
                  position: 'absolute',
                  top: '175px',
                  left: '460px',
                  width: '360px',
                  height: '140px',
                  borderRadius: '12px',
                  pointerEvents: 'none',
                  zIndex: 1,
                  ...glassStyle
                }} />

                {/* Crestone Card */}
                <div style={{ position: 'absolute', top: '220px', left: '510px', zIndex: 3 }}>
                  <CrestoneCard theme={theme} />
                </div>

                {/* Selected Destination */}
                <div style={{ position: 'absolute', top: '220px', left: '900px', zIndex: 3 }}>
                  <ConnectionCard
                    title={selectedDestination.title}
                    icon={selectedDestination.iconName || 'file'}
                    brand={selectedDestination.useBrand}
                    theme={theme}
                  />
                </div>


                {/* ================= FLOW 2: Despliegue Self Hosted ================= */}
                <div style={{
                  position: 'absolute',
                  top: '380px',
                  left: '80px',
                  zIndex: 2
                }}>
                  <h2 style={{
                    margin: 0,
                    fontFamily: "'Poppins', 'Outfit', 'Inter', sans-serif",
                    fontSize: '24px',
                    fontWeight: 700,
                    color: textColorSub,
                    letterSpacing: '-0.2px'
                  }}>
                    {currentLocale === 'en' ? 'Self Hosted Deployment' : 'Despliegue Self Hosted'}
                  </h2>
                </div>

                {/* Labels for Flow 2 */}
                <div style={{
                  position: 'absolute',
                  top: '430px',
                  left: '120px',
                  width: '650px',
                  textAlign: 'center',
                  fontFamily: "'Poppins', 'Inter', sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: networkLabelColor,
                  zIndex: 2
                }}>
                  Customer Network
                </div>

                <div style={{
                  position: 'absolute',
                  top: '430px',
                  left: '900px',
                  width: '260px',
                  textAlign: 'center',
                  fontFamily: "'Poppins', 'Inter', sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: networkLabelColor,
                  zIndex: 2
                }}>
                  Destination Network
                </div>

                {/* Customer Network Outer Box Outline (Contains both Origin & Crestone) */}
                <div style={{
                  position: 'absolute',
                  top: '450px',
                  left: '120px',
                  width: '650px',
                  height: '120px',
                  borderRadius: '12px',
                  pointerEvents: 'none',
                  zIndex: 1,
                  ...glassStyle
                }} />

                {/* Origin Card inside Customer Network */}
                <div style={{ position: 'absolute', top: '485px', left: '150px', zIndex: 3 }}>
                  <ConnectionCard
                    title={selectedOrigin.title}
                    icon={selectedOrigin.iconName || 'file'}
                    brand={selectedOrigin.useBrand}
                    theme={theme}
                  />
                </div>

                {/* Crestone Card inside Customer Network */}
                <div style={{ position: 'absolute', top: '485px', left: '480px', zIndex: 3 }}>
                  <CrestoneCard theme={theme} />
                </div>

                {/* Selected Destination Card */}
                <div style={{ position: 'absolute', top: '485px', left: '900px', zIndex: 3 }}>
                  <ConnectionCard
                    title={selectedDestination.title}
                    icon={selectedDestination.iconName || 'file'}
                    brand={selectedDestination.useBrand}
                    theme={theme}
                  />
                </div>




              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
