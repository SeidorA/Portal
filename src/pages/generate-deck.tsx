import React, { useState, useRef, useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Brand, CaralIcon } from 'iconcaral2';
import fallbackData from '../components/CrestoneConnections/connections.json';
import { PDFDocument } from 'pdf-lib';

// Data Interfaces
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

// Cover Presets & Coordinates matching generate-cover.tsx
interface BackgroundOption {
  id: string;
  title: string;
  file: string;
  left: number;
  top: number;
  width: number;
  height: number;
  origLeft: number;
  origTop: number;
  origWidth: number;
  origHeight: number;
}

const backgroundOptions: BackgroundOption[] = [
  { id: '3d1o', title: '3 Destinos | 1 Origen', file: '3destinos1origen.png', left: 850, top: 190, width: 1006, height: 701, origLeft: 1000, origTop: 290, origWidth: 719, origHeight: 501 },
  { id: '3d2o', title: '3 Destinos | 2 Orígenes', file: '3destinos2origen.png', left: 810, top: 170, width: 1045, height: 735, origLeft: 950, origTop: 250, origWidth: 804, origHeight: 566 },
  { id: '5d1o', title: '5 Destinos | 1 Origen', file: '5destinos1origen.png', left: 740, top: 240, width: 1120, height: 582, origLeft: 900, origTop: 300, origWidth: 896, origHeight: 466 },
  { id: '5d2o', title: '5 Destinos | 2 Orígenes', file: '5destinos2origen.png', left: 740, top: 200, width: 1120, height: 671, origLeft: 900, origTop: 270, origWidth: 896, origHeight: 537 },
  { id: '6d1o', title: '6 Destinos | 1 Origen', file: '6destinos1origen.png', left: 710, top: 180, width: 1150, height: 716, origLeft: 880, origTop: 240, origWidth: 959, origHeight: 597 },
  { id: '6d2o', title: '6 Destinos | 2 Orígenes', file: '6Destinos2origenes.png', left: 720, top: 180, width: 1135, height: 723, origLeft: 880, origTop: 240, origWidth: 946, origHeight: 603 },
  { id: '9d1o', title: '9 Destinos | 1 Origen', file: '9destino1origen.png', left: 640, top: 160, width: 1224, height: 745, origLeft: 750, origTop: 200, origWidth: 1113, origHeight: 678 },
  { id: '9d2o', title: '9 Destinos | 2 Orígenes', file: '9destino2origenes.png', left: 640, top: 160, width: 1224, height: 745, origLeft: 750, origTop: 200, origWidth: 1113, origHeight: 678 },
];

const presets: {
  [bgId: string]: {
    logos: string[];
    positions: { [logoId: string]: { left: number; top: number } };
  }
} = {
  '3d1o': {
    logos: ['azure', 'fabric', 'SAP', 'snowflake'],
    positions: {
      'azure': { left: 1104, top: 458 },
      'fabric': { left: 1375, top: 358 },
      'SAP': { left: 1466, top: 621 },
      'snowflake': { left: 1096, top: 600 }
    }
  },
  '3d2o': {
    logos: ['azure', 'fabric', 'SAPOdata', 'snowflake', 'SAP'],
    positions: {
      'azure': { left: 1054, top: 418 },
      'fabric': { left: 1520, top: 520 },
      'SAPOdata': { left: 1330, top: 304 },
      'snowflake': { left: 1046, top: 560 },
      'SAP': { left: 1340, top: 650 }
    }
  },
  '5d1o': {
    logos: ['S3', 'Saleforce', 'SAP', 'azure', 'snowflake', 'aws'],
    positions: {
      'S3': { left: 1090, top: 408 },
      'Saleforce': { left: 1531, top: 441 },
      'SAP': { left: 1410, top: 600 },
      'azure': { left: 1108, top: 593 },
      'snowflake': { left: 1013, top: 536 },
      'aws': { left: 1280, top: 360 }
    }
  },
  '5d2o': {
    logos: ['aws', 'S3', 'Saleforce', 'SAPOdata', 'SAP', 'azure', 'snowflake'],
    positions: {
      'aws': { left: 1326, top: 648 },
      'S3': { left: 1090, top: 378 },
      'Saleforce': { left: 1531, top: 411 },
      'SAPOdata': { left: 1275, top: 330 },
      'SAP': { left: 1536, top: 499 },
      'azure': { left: 1108, top: 563 },
      'snowflake': { left: 1013, top: 506 }
    }
  },
  '6d1o': {
    logos: ['snowflake', 'Bigquery', 'aws', 'SAPOdata', 'Googlestorage', 'fabric', 'azure'],
    positions: {
      'snowflake': { left: 1037, top: 487 },
      'Bigquery': { left: 1174, top: 300 },
      'aws': { left: 1392, top: 341 },
      'SAPOdata': { left: 1620, top: 433 },
      'Googlestorage': { left: 1516, top: 627 },
      'fabric': { left: 992, top: 572 },
      'azure': { left: 1200, top: 700 }
    }
  },
  '6d2o': {
    logos: ['Databricks', 'Bigquery', 'snowflake', 'SAPOdata', 'SAP', 'S3', 'fabric', 'azure'],
    positions: {
      'Databricks': { left: 1013, top: 477 },
      'Bigquery': { left: 1140, top: 281 },
      'snowflake': { left: 1578, top: 450 },
      'SAPOdata': { left: 1330, top: 340 },
      'SAP': { left: 1613, top: 538 },
      'S3': { left: 1401, top: 695 },
      'fabric': { left: 968, top: 561 },
      'azure': { left: 1165, top: 690 }
    }
  },
  '9d1o': {
    logos: ['Saleforce', 'Googlestorage', 'fabric', 'Bigquery', 'Odata', 'azure', 'snowflake', 'aws', 'Databricks', 'SAP'],
    positions: {
      'Saleforce': { left: 926, top: 305 },
      'Googlestorage': { left: 1355, top: 273 },
      'fabric': { left: 1141, top: 306 },
      'Bigquery': { left: 1615, top: 395 },
      'Odata': { left: 1421, top: 390 },
      'azure': { left: 980, top: 450 },
      'snowflake': { left: 1130, top: 600 },
      'aws': { left: 1523, top: 645 },
      'Databricks': { left: 1109, top: 693 },
      'SAP': { left: 1007, top: 532 }
    }
  },
  '9d2o': {
    logos: ['Saleforce', 'Googlestorage', 'fabric', 'Bigquery', 'Odata', 'azure', 'snowflake', 'aws', 'Databricks', 'SAP', 'SAPOdata'],
    positions: {
      'Saleforce': { left: 926, top: 305 },
      'Googlestorage': { left: 1355, top: 273 },
      'fabric': { left: 1141, top: 306 },
      'Bigquery': { left: 1615, top: 395 },
      'Odata': { left: 1421, top: 390 },
      'azure': { left: 1600, top: 543 },
      'snowflake': { left: 980, top: 450 },
      'aws': { left: 1130, top: 600 },
      'Databricks': { left: 1369, top: 674 },
      'SAP': { left: 1109, top: 693 },
      'SAPOdata': { left: 1007, top: 532 }
    }
  }
};

// Inline SVG Crestone Logo
function CrestoneLogo({ color1 = "#66B6FF", color2 = "#ffffff", size = 48 }) {
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

// Connection Card component
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

// Special Crestone Node Card
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

// Vector-based Seidor Analytics logo
function SeidorAnalyticsLogo({ theme, size = 15 }: { theme: 'light' | 'dark'; size?: number }) {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#ffffff' : '#0c1d4a';
  const barColor = isDark ? 'rgba(255,255,255,0.3)' : '#cbd5e1';
  const analyticsColor = '#00a2ff';
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Poppins', 'Inter', sans-serif" }}>
      <span style={{ fontSize: `${size}px`, fontWeight: 800, color: textColor, letterSpacing: '0.5px', display: 'flex', alignItems: 'center' }}>
        SEID
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          width: `${size - 3}px`,
          height: `${size - 3}px`,
          borderRadius: '50%',
          border: `2.5px solid ${textColor}`,
          margin: '0 1px',
          boxSizing: 'border-box'
        }}>
          <span style={{
            position: 'absolute',
            width: `${(size - 3) / 3}px`,
            height: `${(size - 3) / 3}px`,
            borderRadius: '50%',
            backgroundColor: analyticsColor
          }} />
        </span>
        R
      </span>
      <div style={{ width: '1.5px', height: `${size + 3}px`, backgroundColor: barColor }} />
      <span style={{ fontSize: `${size}px`, fontWeight: 400, color: analyticsColor }}>
        analytics
      </span>
    </div>
  );
}

// Connection Matrix layout component extracted from connections-diagram.tsx
interface ConnectionMatrixProps {
  origins: ConnectionItem[];
  destinations: ConnectionItem[];
  theme: 'light' | 'dark';
}

function ConnectionMatrix({ origins, destinations, theme }: ConnectionMatrixProps) {
  const isDark = theme === 'dark';
  
  const canvasWidth = 1200;
  const canvasHeight = 1150;
  const columnWidth = 260;
  
  const origListHeight = origins.length > 0 ? (origins.length * 50 + (origins.length - 1) * 12) : 0;
  const origStartTop = 85 + (980 - origListHeight) / 2;
  
  const destListHeight = destinations.length > 0 ? (destinations.length * 50 + (destinations.length - 1) * 12) : 0;
  const destStartTop = 85 + (980 - destListHeight) / 2;
  
  const hubY = 85 + 980 / 2; // 575

  const arrowColor = isDark ? '#ffffff' : '#0c1d4a';
  
  const getLineStroke = (isDestination: boolean) => {
    if (isDark) {
      return isDestination ? 'url(#destGradMatrix)' : 'url(#originGradMatrix)';
    }
    return '#cbd5e1';
  };

  return (
    <div style={{
      width: `${canvasWidth}px`,
      height: `${canvasHeight}px`,
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
    }}>
      {/* SVG Path Layer */}
      <svg style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        <defs>
          <linearGradient id="originGradMatrix" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#66B6FF" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#07153A" stopOpacity={0.8} />
          </linearGradient>
          <linearGradient id="destGradMatrix" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#07153A" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#66B6FF" stopOpacity={0.4} />
          </linearGradient>
        </defs>

        {/* Draw curves from Origins to Hub */}
        {origins.map((_, i) => {
          const cardY = origStartTop + i * 62 + 25;
          const d = `M 320 ${cardY} C 410 ${cardY}, 440 ${hubY}, 525 ${hubY}`;
          return (
            <g key={`matrix-orig-path-${i}`}>
              <path
                d={d}
                fill="none"
                stroke={getLineStroke(false)}
                strokeWidth="2.5"
              />
              <circle cx="320" cy={cardY} r="5" fill={getLineStroke(false)} />
            </g>
          );
        })}

        {/* Draw curves from Hub to Destinations */}
        {destinations.map((_, j) => {
          const cardY = destStartTop + j * 62 + 25;
          const d = `M 675 ${hubY} C 760 ${hubY}, 790 ${cardY}, 880 ${cardY}`;
          return (
            <g key={`matrix-dest-path-${j}`}>
              <path
                d={d}
                fill="none"
                stroke={getLineStroke(true)}
                strokeWidth="2.5"
              />
              <circle cx="880" cy={cardY} r="5" fill={getLineStroke(true)} />
            </g>
          );
        })}

        {/* Central Hub Connector Pins */}
        <circle cx="525" cy={hubY} r="5" fill={getLineStroke(false)} />
        <circle cx="675" cy={hubY} r="5" fill={getLineStroke(true)} />
      </svg>

      {/* Column 1: Origins */}
      <div style={{
        position: 'absolute',
        left: '60px',
        top: '0',
        width: `${columnWidth}px`,
        height: '100%',
        zIndex: 2
      }}>
        <div style={{
          position: 'absolute',
          top: `${origStartTop}px`,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {origins.map((item) => (
            <ConnectionCard
              key={item.id}
              title={item.title}
              icon={item.iconName || 'file'}
              brand={item.useBrand}
              theme={theme}
            />
          ))}
        </div>
      </div>

      {/* Column 2: Central Hub */}
      <div style={{
        position: 'absolute',
        left: '420px',
        top: '0',
        width: '360px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2
      }}>
        {/* Outer Dashed Ring */}
        <div style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          border: isDark ? '3px dashed rgba(99, 102, 241, 0.3)' : '3px dashed #cbd5e1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          marginTop: '60px'
        }}>
          {/* Inner Glow Circle */}
          <div style={{
            width: '136px',
            height: '136px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #07153a 0%, #1e1b4b 100%)',
            boxShadow: '0 0 35px rgba(99, 102, 241, 0.45)',
            border: '2px solid rgba(99, 102, 241, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <CrestoneLogo size={54} color1="#66B6FF" color2="#ffffff" />
          </div>
        </div>

        {/* Floating Label Board */}
        <div style={{
          marginTop: '20px',
          backgroundColor: isDark ? '#1e293b' : '#ffffff',
          border: isDark ? '2px solid #334155' : '2px solid #e2e8f0',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderRadius: '12px',
          padding: '8px 20px',
          textAlign: 'center',
          width: '220px'
        }}>
          <div style={{
            fontFamily: "'Poppins', 'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: '14px',
            letterSpacing: '2.5px',
            color: isDark ? '#ffffff' : '#07153a',
          }}>
            CRESTONE
          </div>
        </div>
      </div>

      {/* Column 3: Destinations */}
      <div style={{
        position: 'absolute',
        left: '880px',
        top: '0',
        width: `${columnWidth}px`,
        height: '100%',
        zIndex: 2
      }}>
        <div style={{
          position: 'absolute',
          top: `${destStartTop}px`,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {destinations.map((item) => (
            <ConnectionCard
              key={item.id}
              title={item.title}
              icon={item.iconName || 'file'}
              brand={item.useBrand}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Larger connection card specifically for Slide 5 Matriz Cliente
interface ClientConnectionCardProps {
  title: string;
  icon: string;
  brand: boolean;
  theme: 'light' | 'dark';
}

function ClientConnectionCard({ title, icon, brand, theme }: ClientConnectionCardProps) {
  const isDark = theme === 'dark';
  return (
    <div style={{
      backgroundColor: isDark ? '#1e293b' : '#ffffff',
      border: isDark ? '2px solid #334155' : '2px solid #cbd5e1',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      padding: '16px 28px',
      width: '440px',
      height: '110px',
      boxSizing: 'border-box',
      overflow: 'hidden',
      position: 'relative',
      color: isDark ? '#f1f5f9' : '#0c1d4a',
      boxShadow: isDark
        ? '0 12px 20px -3px rgba(0, 0, 0, 0.4), 0 4px 8px -2px rgba(0, 0, 0, 0.3)'
        : '0 6px 16px rgba(0,0,0,0.06)',
    }}>
      <div style={{
        width: '52px',
        height: '52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        {brand ? (
          <Brand name={icon as any} size={52} />
        ) : (
          <CaralIcon name={icon as any} size={52} color={isDark ? '#f1f5f9' : '#0c1d4a'} />
        )}
      </div>
      <span style={{
        fontFamily: "'Poppins', 'Outfit', 'Inter', sans-serif",
        fontSize: '24px',
        fontWeight: 600,
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

// Larger connection matrix layout specifically for Slide 5 Matriz Cliente
interface ClientConnectionMatrixProps {
  origins: ConnectionItem[];
  destinations: ConnectionItem[];
  theme: 'light' | 'dark';
}

function ClientConnectionMatrix({ origins, destinations, theme }: ClientConnectionMatrixProps) {
  const isDark = theme === 'dark';
  
  const canvasWidth = 1600;
  const canvasHeight = 900;
  const columnWidth = 440;
  const cardHeight = 110;
  const cardGap = 50;
  
  const origListHeight = origins.length > 0 ? (origins.length * cardHeight + (origins.length - 1) * cardGap) : 0;
  const origStartTop = (canvasHeight - origListHeight) / 2;
  
  const destListHeight = destinations.length > 0 ? (destinations.length * cardHeight + (destinations.length - 1) * cardGap) : 0;
  const destStartTop = (canvasHeight - destListHeight) / 2;
  
  const hubY = canvasHeight / 2; // 450
  
  const getLineStroke = (isDestination: boolean) => {
    if (isDark) {
      return isDestination ? 'url(#destGradMatrixClient)' : 'url(#originGradMatrixClient)';
    }
    return '#cbd5e1';
  };

  return (
    <div style={{
      width: `${canvasWidth}px`,
      height: `${canvasHeight}px`,
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
    }}>
      {/* SVG Path Layer */}
      <svg style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        <defs>
          <linearGradient id="originGradMatrixClient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#66B6FF" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#07153A" stopOpacity={0.8} />
          </linearGradient>
          <linearGradient id="destGradMatrixClient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#07153A" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#66B6FF" stopOpacity={0.4} />
          </linearGradient>
        </defs>

        {/* Draw curves from Origins to Hub */}
        {origins.map((_, i) => {
          const cardY = origStartTop + i * (cardHeight + cardGap) + (cardHeight / 2);
          const d = `M 440 ${cardY} C 530 ${cardY}, 560 ${hubY}, 650 ${hubY}`;
          return (
            <g key={`matrix-client-orig-path-${i}`}>
              <path
                d={d}
                fill="none"
                stroke={getLineStroke(false)}
                strokeWidth="3.5"
              />
              <circle cx="440" cy={cardY} r="6" fill={getLineStroke(false)} />
            </g>
          );
        })}

        {/* Draw curves from Hub to Destinations */}
        {destinations.map((_, j) => {
          const cardY = destStartTop + j * (cardHeight + cardGap) + (cardHeight / 2);
          const d = `M 950 ${hubY} C 1040 ${hubY}, 1070 ${cardY}, 1160 ${cardY}`;
          return (
            <g key={`matrix-client-dest-path-${j}`}>
              <path
                d={d}
                fill="none"
                stroke={getLineStroke(true)}
                strokeWidth="3.5"
              />
              <circle cx="1160" cy={cardY} r="6" fill={getLineStroke(true)} />
            </g>
          );
        })}

        {/* Central Hub Connector Pins */}
        <circle cx="650" cy={hubY} r="6" fill={getLineStroke(false)} />
        <circle cx="950" cy={hubY} r="6" fill={getLineStroke(true)} />
      </svg>

      {/* Column 1: Origins */}
      <div style={{
        position: 'absolute',
        left: '0px',
        top: '0',
        width: `${columnWidth}px`,
        height: '100%',
        zIndex: 2
      }}>
        <div style={{
          position: 'absolute',
          top: `${origStartTop}px`,
          display: 'flex',
          flexDirection: 'column',
          gap: `${cardGap}px`
        }}>
          {origins.map((item) => (
            <ClientConnectionCard
              key={item.id}
              title={item.title}
              icon={item.iconName || 'file'}
              brand={item.useBrand}
              theme={theme}
            />
          ))}
        </div>
      </div>

      {/* Column 2: Central Hub */}
      <div style={{
        position: 'absolute',
        left: '580px',
        top: '0',
        width: '440px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2
      }}>
        {/* Outer Dashed Ring */}
        <div style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          border: isDark ? '4px dashed rgba(99, 102, 241, 0.3)' : '4px dashed #cbd5e1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          {/* Inner Glow Circle */}
          <div style={{
            width: '230px',
            height: '230px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #07153a 0%, #1e1b4b 100%)',
            boxShadow: '0 0 50px rgba(99, 102, 241, 0.45)',
            border: '3px solid rgba(99, 102, 241, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <CrestoneLogo size={100} color1="#66B6FF" color2="#ffffff" />
          </div>
        </div>

        {/* Floating Label Board */}
        <div style={{
          marginTop: '40px',
          backgroundColor: isDark ? '#1e293b' : '#ffffff',
          border: isDark ? '3px solid #334155' : '3px solid #cbd5e1',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          borderRadius: '16px',
          padding: '14px 36px',
          textAlign: 'center',
          width: '320px'
        }}>
          <div style={{
            fontFamily: "'Poppins', 'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: '22px',
            letterSpacing: '3px',
            color: isDark ? '#ffffff' : '#07153a',
          }}>
            CRESTONE
          </div>
        </div>
      </div>

      {/* Column 3: Destinations */}
      <div style={{
        position: 'absolute',
        left: '1160px',
        top: '0',
        width: `${columnWidth}px`,
        height: '100%',
        zIndex: 2
      }}>
        <div style={{
          position: 'absolute',
          top: `${destStartTop}px`,
          display: 'flex',
          flexDirection: 'column',
          gap: `${cardGap}px`
        }}>
          {destinations.map((item) => (
            <ClientConnectionCard
              key={item.id}
              title={item.title}
              icon={item.iconName || 'file'}
              brand={item.useBrand}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Page 6 sorting order matching slideOrder.json
const defaultSlideOrder = {
  originsOrder: [
    "sap4hanna",
    "sapabap",
    "sapodata",
    "erp",
    "businessone",
    "bydesign",
    "publice",
    "azuresql",
    "ms",
    "dynamics-source",
    "mysql-source",
    "oracle-source",
    "postgresql-source"
  ],
  destinationsOrder: [
    "aws",
    "redshift",
    "snowflake",
    "Azure",
    "AzureSQL",
    "teradata",
    "databricks",
    "gcp",
    "gcs",
    "sqlserver",
    "fabric",
    "postgresql-destination",
    "oracle-destination",
    "fileserver",
    "mysql-destination",
    "hana"
  ]
};

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

// Connection cover logo mapping logic
function mapConnectionIdToCoverLogoId(id: string): string {
  switch (id) {
    case 'sap4hanna':
    case 'sapabap':
    case 'erp':
    case 'businessone':
    case 'bydesign':
    case 'hana':
      return 'SAP';
    case 'sapodata':
      return 'SAPOdata';
    case 'publice':
      return 'Sappublic';
    case 'aws':
      return 'aws';
    case 'Azure':
      return 'azure';
    case 'azuresql':
    case 'AzureSQL':
      return 'azuresql';
    case 'databricks':
      return 'Databricks';
    case 'snowflake':
      return 'snowflake';
    case 'fabric':
      return 'fabric';
    case 'gcp':
      return 'Googlestorage';
    case 'gcs':
      return 'Bigquery';
    case 'dynamics-source':
      return 'Odata';
    default:
      return 'snowflake';
  }
}

function getCoverLogosAndPositions(bgId: string, selectedOrigins: string[], selectedDestinations: string[]) {
  const preset = presets[bgId];
  if (!preset) return [];

  // Identify slots
  const originSlots = preset.logos.filter(logoId => logoId === 'SAP' || logoId === 'SAPOdata');
  const destinationSlots = preset.logos.filter(logoId => logoId !== 'SAP' && logoId !== 'SAPOdata');

  // Map user selections to cover logo IDs
  const userOrigins = selectedOrigins.map(mapConnectionIdToCoverLogoId);
  const userDestinations = selectedDestinations.map(mapConnectionIdToCoverLogoId);

  // Fill up to capacity (auto-fill)
  const finalOrigins: string[] = [];
  for (let i = 0; i < originSlots.length; i++) {
    if (i < userOrigins.length) {
      finalOrigins.push(userOrigins[i]);
    } else {
      // Auto-fill origin slot
      finalOrigins.push(i === 0 ? 'SAP' : 'SAPOdata');
    }
  }

  const finalDestinations: string[] = [];
  const standardFallbacks = ['snowflake', 'aws', 'azure', 'Databricks', 'fabric', 'Bigquery', 'Googlestorage', 'S3'];
  for (let i = 0; i < destinationSlots.length; i++) {
    if (i < userDestinations.length) {
      finalDestinations.push(userDestinations[i]);
    } else {
      // Auto-fill destination slot with a fallback that is not already selected
      const availableFallback = standardFallbacks.find(
        f => !userDestinations.includes(f) && !finalDestinations.includes(f)
      ) || 'snowflake';
      finalDestinations.push(availableFallback);
    }
  }

  // Map final logos to their slots' coordinates
  const scaledPositions: { [id: string]: { left: number, top: number } } = {};
  const bg = backgroundOptions.find(b => b.id === bgId);
  if (bg) {
    const logoW = 139;
    const logoH = 98;
    preset.logos.forEach(logoId => {
      const origPos = preset.positions[logoId];
      if (origPos) {
        const rx = origPos.left - bg.origLeft + logoW / 2;
        const ry = origPos.top - bg.origTop + logoH / 2;
        const scaleX = bg.width / bg.origWidth;
        const scaleY = bg.height / bg.origHeight;
        scaledPositions[logoId] = {
          left: Math.round(bg.left + rx * scaleX - logoW / 2),
          top: Math.round(bg.top + ry * scaleY - logoH / 2)
        };
      }
    });
  }

  const resultLogos: { id: string; coverLogoId: string; left: number; top: number }[] = [];
  let originIdx = 0;
  let destIdx = 0;

  preset.logos.forEach(slotId => {
    const isOriginSlot = slotId === 'SAP' || slotId === 'SAPOdata';
    const coords = scaledPositions[slotId];
    if (coords) {
      if (isOriginSlot) {
        const coverLogoId = finalOrigins[originIdx] || 'SAP';
        resultLogos.push({
          id: `origin-${originIdx}`,
          coverLogoId,
          left: coords.left,
          top: coords.top
        });
        originIdx++;
      } else {
        const coverLogoId = finalDestinations[destIdx] || 'snowflake';
        resultLogos.push({
          id: `dest-${destIdx}`,
          coverLogoId,
          left: coords.left,
          top: coords.top
        });
        destIdx++;
      }
    }
  });

  return resultLogos;
}

export default function GenerateDeckPage() {
  const { i18n } = useDocusaurusContext();
  const currentLocale = i18n?.currentLocale === 'en' ? 'en' : 'es';

  // Refs for rendering hidden PNGs
  const coverRef = useRef<HTMLDivElement>(null);
  const fullMatrixRef = useRef<HTMLDivElement>(null);
  const clientMatrixRef = useRef<HTMLDivElement>(null);
  const compatibilityRef = useRef<HTMLDivElement>(null);
  const deploymentRef = useRef<HTMLDivElement>(null);

  // States
  const [data, setData] = useState<ConnectionsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [customerName, setCustomerName] = useState<string>('');
  
  // Selection states (checklists)
  const [selectedOrigins, setSelectedOrigins] = useState<string[]>([]);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  
  // Specific single items selected for Deployment flow slide
  const [deployOriginId, setDeployOriginId] = useState<string>('');
  const [deployDestinationId, setDeployDestinationId] = useState<string>('');
  
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'cover' | 'fullMatrix' | 'clientMatrix' | 'compatibility' | 'deployment'>('cover');

  // Compatibility slide ordering states
  const [sortedOrigins, setSortedOrigins] = useState<ConnectionItem[]>([]);
  const [sortedDestinations, setSortedDestinations] = useState<ConnectionItem[]>([]);
  const [isEditingOrder, setIsEditingOrder] = useState<boolean>(false);
  const [hasCustomOrder, setHasCustomOrder] = useState<boolean>(false);

  // Sync custom sorting from localStorage
  useEffect(() => {
    if (!data) return;
    
    let originsOrderArr = defaultSlideOrder.originsOrder;
    let destinationsOrderArr = defaultSlideOrder.destinationsOrder;
    let customFound = false;

    try {
      const customOrigins = localStorage.getItem('crestone-ppt-origins-order');
      if (customOrigins) {
        originsOrderArr = JSON.parse(customOrigins);
        customFound = true;
      }
      const customDestinations = localStorage.getItem('crestone-ppt-destinations-order');
      if (customDestinations) {
        destinationsOrderArr = JSON.parse(customDestinations);
        customFound = true;
      }
    } catch (e) {
      console.warn('LocalStorage access blocked:', e);
    }

    setHasCustomOrder(customFound);
    setSortedOrigins(sortConnections(data.origins, originsOrderArr));
    setSortedDestinations(sortConnections(data.destinations, destinationsOrderArr));
  }, [data]);

  const moveItem = (listType: 'origins' | 'destinations', index: number, direction: 'up' | 'down') => {
    if (listType === 'origins') {
      const items = [...sortedOrigins];
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= items.length) return;
      const temp = items[index];
      items[index] = items[targetIndex];
      items[targetIndex] = temp;
      setSortedOrigins(items);
      try {
        localStorage.setItem('crestone-ppt-origins-order', JSON.stringify(items.map(i => i.id)));
        setHasCustomOrder(true);
      } catch (e) {
        console.warn(e);
      }
    } else {
      const items = [...sortedDestinations];
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= items.length) return;
      const temp = items[index];
      items[index] = items[targetIndex];
      items[targetIndex] = temp;
      setSortedDestinations(items);
      try {
        localStorage.setItem('crestone-ppt-destinations-order', JSON.stringify(items.map(i => i.id)));
        setHasCustomOrder(true);
      } catch (e) {
        console.warn(e);
      }
    }
  };

  const handleResetOrder = () => {
    try {
      localStorage.removeItem('crestone-ppt-origins-order');
      localStorage.removeItem('crestone-ppt-destinations-order');
      setHasCustomOrder(false);
    } catch (e) {
      console.warn(e);
    }
    if (data) {
      setSortedOrigins(sortConnections(data.origins, defaultSlideOrder.originsOrder));
      setSortedDestinations(sortConnections(data.destinations, defaultSlideOrder.destinationsOrder));
    }
  };

  // Background Image Path resolution (Pre-fetched at hook-level before early return)
  const bgSlideDark = '/img/crestone/portada/bgdark.jpg';
  const bgSlideLight = '/img/crestone/portada/bgligth.jpg';
  const bgPortadaPath = '/img/crestone/portada/';

  // Deployment Slide backgrounds
  const bgDespliegueLight = '/img/crestone/ppt/bgdespliegue.png';
  const bgDespliegueDark = '/img/crestone/ppt/bgdesplieguedark.png';

  // Load Connections
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
          // Set initial checked checkboxes (first 2 origins, first 3 destinations)
          const initOrigins = jsonData.origins.slice(0, 2).map(o => o.id);
          const initDestinations = jsonData.destinations.slice(0, 3).map(d => d.id);
          setSelectedOrigins(initOrigins);
          setSelectedDestinations(initDestinations);
          
          if (initOrigins.length > 0) setDeployOriginId(initOrigins[0]);
          if (initDestinations.length > 0) setDeployDestinationId(initDestinations[0]);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.warn('Failed to fetch live connections, falling back to local snapshot:', err);
        if (active) {
          setData(fallbackData as ConnectionsData);
          const initOrigins = fallbackData.origins.slice(0, 2).map(o => o.id);
          const initDestinations = fallbackData.destinations.slice(0, 3).map(d => d.id);
          setSelectedOrigins(initOrigins);
          setSelectedDestinations(initDestinations);
          
          if (initOrigins.length > 0) setDeployOriginId(initOrigins[0]);
          if (initDestinations.length > 0) setDeployDestinationId(initDestinations[0]);
          setLoading(false);
        }
      });
    return () => {
      active = false;
    };
  }, []);

  if (loading || !data) {
    return (
      <Layout title="Generador de Presentaciones" description="Generador de presentaciones corporativas Crestone">
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
            {currentLocale === 'en' ? 'Loading connections...' : 'Cargando conexiones...'}
          </p>
        </div>
      </Layout>
    );
  }

  // 1. Determine Cover Preset automatically
  const numO = selectedOrigins.length;
  const numD = selectedDestinations.length;
  
  // Origins preset type
  const oType = numO <= 1 ? '1o' : '2o';
  // Destinations preset type
  let dType = '3d';
  if (numD > 6) dType = '9d';
  else if (numD > 5) dType = '6d';
  else if (numD > 3) dType = '5d';
  
  const autoBgId = `${dType}${oType}`;
  const selectedBg = backgroundOptions.find(bg => bg.id === autoBgId) || backgroundOptions[7]; // default 9d2o
  
  // Calculate active cover logos placement coordinates
  const coverLogos = getCoverLogosAndPositions(selectedBg.id, selectedOrigins, selectedDestinations);

  // Active checked items
  const activeOrigins = data.origins.filter(o => selectedOrigins.includes(o.id));
  const activeDestinations = data.destinations.filter(d => selectedDestinations.includes(d.id));

  // Single deployment items
  const deployOrigin = data.origins.find(o => o.id === deployOriginId) || data.origins[0];
  const deployDestination = data.destinations.find(d => d.id === deployDestinationId) || data.destinations[0];

  // Colors & Glassmorphic variables
  const isDark = theme === 'dark';
  const textColorMain = isDark ? '#ffffff' : '#0c1d4a';
  const textColorSub = '#00a2ff';
  const networkLabelColor = isDark ? '#cbd5e1' : '#2e3a59';
  const arrowColor = isDark ? '#ffffff' : '#0c1d4a';
  const glassBorderColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(12,29,74,0.15)';
  const bgSlideUrl = theme === 'light' ? bgSlideLight : bgSlideDark;

  const glassStyle = isDark ? {
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
    border: `1.5px solid ${glassBorderColor}`,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)'
  } : {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: `1.5px solid ${glassBorderColor}`,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.04)'
  };

  // Checkbox handlers
  const handleToggleOrigin = (id: string) => {
    setSelectedOrigins(prev => {
      return prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
    });
  };

  const handleToggleDestination = (id: string) => {
    setSelectedDestinations(prev => {
      return prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
    });
  };

  // Compile PDF document
  const compilePresentationPDF = async () => {
    setIsGenerating(true);
    try {
      const { toPng } = await import('html-to-image');

      const renderPng = async (ref: React.RefObject<HTMLDivElement>) => {
        if (!ref.current) throw new Error('Ref is null during rendering');
        // Render at 2.2x resolution for presentation quality
        // Override styles so off-screen elements render at the canvas origin (0,0) with full opacity
        return await toPng(ref.current, {
          pixelRatio: 2.2,
          style: { 
            transform: 'scale(1)',
            left: '0',
            top: '0',
            position: 'relative',
            opacity: '1',
            zIndex: '9999'
          }
        });
      };

      const coverPngData = await renderPng(coverRef);
      const fullMatrixPngData = await renderPng(fullMatrixRef);
      const clientMatrixPngData = await renderPng(clientMatrixRef);
      const compatibilityPngData = await renderPng(compatibilityRef);
      const deploymentPngData = await renderPng(deploymentRef);

      // 2. Fetch baseline presentation PDF (Crestone - Presentación comercial.pdf)
      const response = await fetch('/pdf/Crestone - Presentación comercial.pdf');
      if (!response.ok) throw new Error('No se pudo cargar la plantilla Crestone - Presentación comercial.pdf');
      const existingPdfBytes = await response.arrayBuffer();

      // 3. Load PDF Document
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const pages = pdfDoc.getPages();
      if (pages.length === 0) throw new Error('Plantilla PDF vacía');
      const { width, height } = pages[0].getSize(); // Width and height in PDF Points (landscape standard)

      // 4. Embed Images helper
      const embedImage = async (dataUrl: string) => {
        const base64Str = dataUrl.split(',')[1];
        if (!base64Str) throw new Error('DataURL no contiene datos Base64 válidos');
        const binaryStr = window.atob(base64Str);
        const len = binaryStr.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryStr.charCodeAt(i);
        }
        return pdfDoc.embedPng(bytes);
      };

      const embeddedCover = await embedImage(coverPngData);
      const embeddedFullMatrix = await embedImage(fullMatrixPngData);
      const embeddedClientMatrix = await embedImage(clientMatrixPngData);
      const embeddedCompatibility = await embedImage(compatibilityPngData);
      const embeddedDeployment = await embedImage(deploymentPngData);

      // 5. Insert pages at 0-indexed positions
      // Page 1 (Cover) -> Insert at index 0
      const page1 = pdfDoc.insertPage(0, [width, height]);
      page1.drawImage(embeddedCover, { x: 0, y: 0, width, height });

      // Page 4 (Full Matrix) -> Insert at index 3 (Page 1 cover + original page 1, 2 = 3 pages before it)
      const page4 = pdfDoc.insertPage(3, [width, height]);
      page4.drawImage(embeddedFullMatrix, { x: 0, y: 0, width, height });

      // Page 5 (Client Matrix) -> Insert at index 4
      const page5 = pdfDoc.insertPage(4, [width, height]);
      page5.drawImage(embeddedClientMatrix, { x: 0, y: 0, width, height });

      // Page 6 (Compatible con) -> Insert at index 5
      const page6 = pdfDoc.insertPage(5, [width, height]);
      page6.drawImage(embeddedCompatibility, { x: 0, y: 0, width, height });

      // Page 9 (Deployment) -> Insert at index 8 (Page 1 cover + 6 original pages + 3 inserted pages = index 8)
      const page9 = pdfDoc.insertPage(8, [width, height]);
      page9.drawImage(embeddedDeployment, { x: 0, y: 0, width, height });

      // 6. Save and download consolidated presentation
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Presentacion_Crestone_${customerName || 'Cliente'}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
      
    } catch (err) {
      console.error('Error compiling deck PDF:', err);
      alert(currentLocale === 'en' 
        ? 'Failed to generate presentation. Consult console logs.' 
        : 'Error al compilar la presentación PDF. Revisa los registros en consola.');
    } finally {
      setIsGenerating(false);
    }
  };

  const renderIconPpt = (item: ConnectionItem) => {
    if (!item.iconName) {
      return <CaralIcon name={"file" as any} size={42} color="#2d3748" />;
    }
    const normalizedIconName = item.iconName.trim();
    if (item.useBrand) {
      return <Brand name={normalizedIconName as any} size={42} />;
    } else {
      return <CaralIcon name={normalizedIconName as any} size={42} color="#2d3748" />;
    }
  };

  const renderPptColumnGrid = (listType: 'origins' | 'destinations') => {
    const items = listType === 'origins' ? sortedOrigins : sortedDestinations;
    if (items.length === 0) return null;

    const mid = Math.ceil(items.length / 2);
    const col1 = items.slice(0, mid);
    const col2 = items.slice(mid);

    const renderItem = (item: ConnectionItem, absoluteIndex: number) => {
      return (
        <div 
          key={item.id} 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '18px', 
            width: '100%', 
            boxSizing: 'border-box',
            padding: '3px 0',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', flexShrink: 0 }}>
            {renderIconPpt(item)}
          </div>
          <span style={{ 
            fontSize: '24px', 
            fontWeight: 600, 
            color: '#2d3748', 
            lineHeight: 1.25,
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            fontFamily: "'Poppins', 'Outfit', 'Inter', sans-serif"
          }}>
            {cleanTitle(item)}
          </span>
          
          {isEditingOrder && !isGenerating && (
            <div style={{ display: 'flex', gap: '4px', marginLeft: 'auto', alignSelf: 'center', zIndex: 10, paddingLeft: '12px' }}>
              <button 
                onClick={() => moveItem(listType, absoluteIndex, 'up')}
                disabled={absoluteIndex === 0}
                title="Subir"
                style={{
                  backgroundColor: 'rgba(0, 102, 204, 0.08)',
                  color: '#0066cc',
                  border: 'none',
                  borderRadius: '6px',
                  width: '33px',
                  height: '33px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  cursor: absoluteIndex === 0 ? 'not-allowed' : 'pointer',
                  opacity: absoluteIndex === 0 ? 0.25 : 1,
                  padding: 0
                }}
              >
                ▲
              </button>
              <button 
                onClick={() => moveItem(listType, absoluteIndex, 'down')}
                disabled={absoluteIndex === items.length - 1}
                title="Bajar"
                style={{
                  backgroundColor: 'rgba(0, 102, 204, 0.08)',
                  color: '#0066cc',
                  border: 'none',
                  borderRadius: '6px',
                  width: '33px',
                  height: '33px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  cursor: absoluteIndex === items.length - 1 ? 'not-allowed' : 'pointer',
                  opacity: absoluteIndex === items.length - 1 ? 0.25 : 1,
                  padding: 0
                }}
              >
                ▼
              </button>
            </div>
          )}
        </div>
      );
    };

    return (
      <div style={{ display: 'flex', gap: '38px', flexGrow: 1, boxSizing: 'border-box' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', minWidth: 0 }}>
          {col1.map((item, index) => renderItem(item, index))}
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', minWidth: 0 }}>
          {col2.map((item, index) => renderItem(item, mid + index))}
        </div>
      </div>
    );
  };

  return (
    <Layout title={currentLocale === 'en' ? 'Presentation Deck Generator' : 'Generador de Presentaciones'} description="Compila un PDF de presentación para clientes con todos los diagramas integrados">
      <div style={{
        padding: '30px 20px',
        maxWidth: '1600px',
        margin: '0 auto',
        fontFamily: "'Inter', sans-serif"
      }}>
        {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          <h1 style={{ fontWeight: 800, fontSize: '32px', marginBottom: '8px', background: 'linear-gradient(90deg, #3b82f6, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {currentLocale === 'en' ? 'Presentation Deck Builder' : 'Generador de Presentaciones'}
          </h1>
          <p style={{ color: 'var(--ifm-color-gray-medium-dark)', fontSize: '15px' }}>
            {currentLocale === 'en'
              ? 'Enter client details, select the source/destination matrix connections, and download the full 16-page slide presentation.'
              : 'Introduce el cliente, marca las conexiones que se incluirán en el informe y descarga la presentación completa de 16 páginas.'}
          </p>
        </div>

        {/* Builder layout */}
        <div style={{
          display: 'flex',
          gap: '30px',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start'
        }}>
          {/* Settings Sidebar */}
          <div style={{
            flex: '0 0 350px',
            width: '350px',
            backgroundColor: 'var(--ifm-card-background-color)',
            border: '1px solid var(--ifm-toc-border-color)',
            borderRadius: '12px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            boxSizing: 'border-box',
            maxHeight: 'calc(100vh - 120px)',
            overflowY: 'auto'
          }}>
            {/* Customer Name */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ifm-color-gray-medium-dark)', marginBottom: '6px' }}>
                {currentLocale === 'en' ? 'Client Name' : 'Nombre del Cliente'}
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="SEIDOR / Client..."
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--ifm-toc-border-color)',
                  backgroundColor: 'var(--ifm-background-color)',
                  color: 'var(--ifm-color-content)',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
            </div>

            {/* Theme selector */}
            <div>
              <span style={{ display: 'block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ifm-color-gray-medium-dark)', marginBottom: '6px' }}>
                {currentLocale === 'en' ? 'Background Theme' : 'Tema de Fondo'}
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                {(['light', 'dark'] as const).map((tVal) => (
                  <button
                    key={tVal}
                    onClick={() => setTheme(tVal)}
                    style={{
                      flex: '1',
                      padding: '8px 10px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      border: theme === tVal ? '2px solid #3b82f6' : '1px solid var(--ifm-toc-border-color)',
                      backgroundColor: theme === tVal ? '#e0f2fe' : 'var(--ifm-background-color)',
                      color: theme === tVal ? '#0369a1' : 'var(--ifm-color-content)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textTransform: 'capitalize'
                    }}
                  >
                    {tVal === 'light' ? (currentLocale === 'en' ? 'Light' : 'Claro') : (currentLocale === 'en' ? 'Dark' : 'Oscuro')}
                  </button>
                ))}
              </div>
            </div>

            {/* Deployment Origin Selector */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ifm-color-gray-medium-dark)', marginBottom: '6px' }}>
                {currentLocale === 'en' ? 'Deploy Slide Origin' : 'Origen en Diapositiva Despliegue'}
              </label>
              <select
                value={deployOriginId}
                onChange={(e) => setDeployOriginId(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 10px',
                  borderRadius: '6px',
                  border: '1px solid var(--ifm-toc-border-color)',
                  backgroundColor: 'var(--ifm-background-color)',
                  color: 'var(--ifm-color-content)',
                  fontSize: '13px',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {data.origins.map((o) => (
                  <option key={o.id} value={o.id}>{o.title}</option>
                ))}
              </select>
            </div>

            {/* Deployment Destination Selector */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ifm-color-gray-medium-dark)', marginBottom: '6px' }}>
                {currentLocale === 'en' ? 'Deploy Slide Destination' : 'Destino en Diapositiva Despliegue'}
              </label>
              <select
                value={deployDestinationId}
                onChange={(e) => setDeployDestinationId(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 10px',
                  borderRadius: '6px',
                  border: '1px solid var(--ifm-toc-border-color)',
                  backgroundColor: 'var(--ifm-background-color)',
                  color: 'var(--ifm-color-content)',
                  fontSize: '13px',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {data.destinations.map((d) => (
                  <option key={d.id} value={d.id}>{d.title}</option>
                ))}
              </select>
            </div>

            {/* Origins Checklist */}
            <div style={{ borderTop: '1px solid var(--ifm-toc-border-color)', paddingTop: '12px' }}>
              <span style={{ display: 'block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ifm-color-gray-medium-dark)', marginBottom: '8px' }}>
                {currentLocale === 'en' ? 'Orígenes Checklist' : 'Orígenes / Sources'}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '140px', overflowY: 'auto', padding: '6px', border: '1px solid var(--ifm-toc-border-color)', borderRadius: '6px', backgroundColor: 'var(--ifm-background-color)' }}>
                {data.origins.map((o) => (
                  <label key={o.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', cursor: 'pointer', color: 'var(--ifm-color-content)' }}>
                    <input
                      type="checkbox"
                      checked={selectedOrigins.includes(o.id)}
                      onChange={() => handleToggleOrigin(o.id)}
                      style={{ cursor: 'pointer' }}
                    />
                    {o.title}
                  </label>
                ))}
              </div>
            </div>

            {/* Destinations Checklist */}
            <div style={{ borderTop: '1px solid var(--ifm-toc-border-color)', paddingTop: '12px' }}>
              <span style={{ display: 'block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ifm-color-gray-medium-dark)', marginBottom: '8px' }}>
                {currentLocale === 'en' ? 'Destinations Checklist' : 'Destinos / Targets'}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '140px', overflowY: 'auto', padding: '6px', border: '1px solid var(--ifm-toc-border-color)', borderRadius: '6px', backgroundColor: 'var(--ifm-background-color)' }}>
                {data.destinations.map((d) => (
                  <label key={d.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', cursor: 'pointer', color: 'var(--ifm-color-content)' }}>
                    <input
                      type="checkbox"
                      checked={selectedDestinations.includes(d.id)}
                      onChange={() => handleToggleDestination(d.id)}
                      style={{ cursor: 'pointer' }}
                    />
                    {d.title}
                  </label>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={compilePresentationPDF}
              disabled={isGenerating || selectedOrigins.length === 0 || selectedDestinations.length === 0}
              style={{
                width: '100%',
                backgroundColor: '#10b981',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 20px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: isGenerating ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.15s ease',
                boxShadow: '0 4px 10px rgba(16, 185, 129, 0.25)',
                marginTop: '10px'
              }}
              onMouseEnter={(e) => {
                if (!isGenerating) {
                  e.currentTarget.style.backgroundColor = '#059669';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isGenerating) {
                  e.currentTarget.style.backgroundColor = '#10b981';
                  e.currentTarget.style.transform = 'none';
                }
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              {isGenerating 
                ? (currentLocale === 'en' ? 'Compiling PDF...' : 'Compilando PDF...') 
                : (currentLocale === 'en' ? 'Download Presentation' : 'Descargar Presentación')}
            </button>
          </div>

          {/* Right Preview Column */}
          <div style={{
            flex: '1',
            minWidth: '0',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            {/* Tabs Selector */}
            <div style={{
              display: 'flex',
              borderBottom: '2px solid var(--ifm-toc-border-color)',
              gap: '6px',
              paddingBottom: '4px'
            }}>
              {([
                { key: 'cover', label: currentLocale === 'en' ? '1. Cover' : '1. Portada' },
                { key: 'fullMatrix', label: currentLocale === 'en' ? '4. Full Matrix' : '4. Matriz Completa' },
                { key: 'clientMatrix', label: currentLocale === 'en' ? '5. Client Matrix' : '5. Matriz Cliente' },
                { key: 'compatibility', label: currentLocale === 'en' ? '6. Compatibility' : '6. Compatible con' },
                { key: 'deployment', label: currentLocale === 'en' ? '9. Deployment' : '9. Despliegue' },
              ] as const).map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    style={{
                      padding: '10px 16px',
                      borderRadius: '8px 8px 0 0',
                      border: 'none',
                      backgroundColor: isActive ? 'var(--ifm-toc-border-color)' : 'transparent',
                      color: isActive ? 'var(--ifm-color-primary)' : 'var(--ifm-color-content)',
                      fontWeight: isActive ? 700 : 500,
                      cursor: 'pointer',
                      fontSize: '13px',
                      transition: 'all 0.15s ease',
                      borderBottom: isActive ? '3px solid var(--ifm-color-primary)' : 'none'
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {activeTab === 'compatibility' && (
              <div style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                margin: '10px 0 0 0',
                padding: '4px'
              }}>
                <button 
                  onClick={() => setIsEditingOrder(!isEditingOrder)}
                  style={{
                    backgroundColor: isEditingOrder ? '#3b82f6' : 'var(--ifm-button-background-color, #e5e7eb)',
                    color: isEditingOrder ? '#ffffff' : 'var(--ifm-color-content, #374151)',
                    fontWeight: 600,
                    fontSize: '13px',
                    padding: '8px 14px',
                    border: '1px solid var(--ifm-toc-border-color, #d1d5db)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.15s ease-in-out'
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                  {isEditingOrder 
                    ? (currentLocale === 'en' ? 'Finish Reordering' : 'Terminar Reordenación') 
                    : (currentLocale === 'en' ? 'Reorder Connections' : 'Reordenar Conexiones')}
                </button>

                {hasCustomOrder && (
                  <button 
                    onClick={handleResetOrder}
                    style={{
                      backgroundColor: 'transparent',
                      color: '#e53e3e',
                      fontWeight: 600,
                      fontSize: '13px',
                      padding: '8px 14px',
                      border: '1px dashed #e53e3e',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      transition: 'all 0.15s ease-in-out'
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                    {currentLocale === 'en' ? 'Reset Order' : 'Restaurar Orden'}
                  </button>
                )}
                
                <span style={{ fontSize: '12px', color: 'var(--ifm-color-gray-medium-dark)', fontStyle: 'italic' }}>
                  {currentLocale === 'en' 
                    ? '💡 Changes to the order are saved automatically and shared with the slide in documentation.' 
                    : '💡 Los cambios en el orden se guardan automáticamente y se comparten con la diapositiva de la documentación.'}
                </span>
              </div>
            )}

            {/* Preview Viewport */}
            <div style={{
              backgroundColor: '#e2e8f0',
              borderRadius: '12px',
              border: '1px solid var(--ifm-toc-border-color)',
              padding: '24px',
              overflowX: 'auto',
              display: 'flex',
              justifyContent: 'center',
              boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.05)'
            }}>
              {/* Scaled preview frame */}
              <div style={{
                width: '1920px',
                height: '1080px',
                transform: 'scale(0.48)',
                transformOrigin: 'top center',
                flexShrink: 0,
                marginBottom: '-560px' // Offset scale overflow
              }}>
                {/* 1. Portada preview */}
                <div 
                  ref={coverRef} 
                  style={{ 
                    ...slideWrapperStyle, 
                    position: activeTab === 'cover' ? 'relative' : 'absolute',
                    left: '0',
                    top: '0',
                    opacity: activeTab === 'cover' ? 1 : 0,
                    pointerEvents: activeTab === 'cover' ? 'auto' : 'none',
                    zIndex: activeTab === 'cover' ? 10 : 1,
                    backgroundImage: `url(${bgSlideUrl})`
                  }}
                >
                  <div className="gridOverlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(rgba(99,102,241,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
                  {/* Background diagram */}
                  <img
                    src={`${bgPortadaPath}${selectedBg.file}`}
                    alt="Diagram"
                    style={{
                      position: 'absolute',
                      left: `${selectedBg.left}px`,
                      top: `${selectedBg.top}px`,
                      width: `${selectedBg.width}px`,
                      height: `${selectedBg.height}px`,
                      pointerEvents: 'none'
                    }}
                  />
                  {/* Title & Subtitle */}
                  <div style={{ 
                    position: 'absolute', 
                    left: '152px', 
                    top: '410px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '10px',
                    maxWidth: '800px',
                    pointerEvents: 'none'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                      <CrestoneLogo 
                        color1={isDark ? '#66B6FF' : '#0191FF'} 
                        color2={isDark ? '#ffffff' : '#1b2c6d'} 
                        size={70} 
                      />
                      <h1 style={{ 
                        margin: 0, 
                        fontSize: '80px', 
                        fontWeight: 800, 
                        lineHeight: 1.07, 
                        letterSpacing: '-1.5px', 
                        fontFamily: "'Poppins', 'Outfit', 'Inter', sans-serif",
                        background: 'linear-gradient(90deg, #0191FF, #66B6FF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                        CRESTONE
                      </h1>
                    </div>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '32px', 
                      fontWeight: 400, 
                      color: isDark ? '#e2e8f0' : '#1e293b', 
                      opacity: 0.9,
                      textShadow: isDark ? '0 2px 6px rgba(0, 0, 0, 0.3)' : '0 1px 4px rgba(255, 255, 255, 0.60)',
                      fontFamily: "'Poppins', 'Outfit', 'Inter', sans-serif"
                    }}>
                      {customerName 
                        ? `${currentLocale === 'en' ? 'Proposal for' : 'Propuesta para'} ${customerName}` 
                        : (currentLocale === 'en' ? 'Integration Matrix & Supported Targets' : 'Matriz de Integración y Destinos Soportados')}
                    </p>
                  </div>

                  {/* Footer */}
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '60px', 
                    left: '100px', 
                    right: '100px', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-end',
                    borderTop: isDark ? '1.5px solid rgba(255, 255, 255, 0.12)' : '1.5px solid rgba(15, 23, 42, 0.15)',
                    paddingTop: '20px',
                    pointerEvents: 'none'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ 
                        fontSize: '12px', 
                        fontWeight: 600, 
                        textTransform: 'uppercase', 
                        color: isDark ? '#94a3b8' : '#475569', 
                        letterSpacing: '1.5px' 
                      }}>
                        {currentLocale === 'es' ? 'Más Información' : 'More Information'}
                      </span>
                      <span style={{ 
                        fontSize: '16px', 
                        fontWeight: 700, 
                        color: isDark ? '#ffffff' : '#0f172a' 
                      }}>
                        crestone.io
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end' }}>
                      <span style={{ 
                        fontSize: '12px', 
                        fontWeight: 600, 
                        textTransform: 'uppercase', 
                        color: isDark ? '#94a3b8' : '#475569', 
                        letterSpacing: '1.5px' 
                      }}>
                        {currentLocale === 'es' ? 'Entorno' : 'Environment'}
                      </span>
                      <span style={{ 
                        fontSize: '16px', 
                        fontWeight: 700, 
                        color: '#10b981' 
                      }}>
                        ● crestone.seidoranalytics.com/
                      </span>
                    </div>
                  </div>

                  {/* Connection logo overlays */}
                  {coverLogos.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        position: 'absolute',
                        left: `${item.left}px`,
                        top: `${item.top}px`,
                        width: '139px',
                        height: '98px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <img
                        src={`${bgPortadaPath}${item.coverLogoId}.png`}
                        alt="Logo"
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      />
                    </div>
                  ))}
                </div>

                {/* 2. Matriz Completa preview */}
                <div 
                  ref={fullMatrixRef} 
                  style={{ 
                    ...slideWrapperStyle, 
                    position: activeTab === 'fullMatrix' ? 'relative' : 'absolute',
                    left: '0',
                    top: '0',
                    opacity: activeTab === 'fullMatrix' ? 1 : 0,
                    pointerEvents: activeTab === 'fullMatrix' ? 'auto' : 'none',
                    zIndex: activeTab === 'fullMatrix' ? 10 : 1,
                    backgroundImage: `url(${isDark ? '/img/crestone/ppt/Matrizfulldark.png' : '/img/crestone/ppt/Matrizfull.png'})`
                  }}
                >
                  {/* Slide Header */}
                  <div style={{ position: 'absolute', left: '100px', top: '75px', zIndex: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <CrestoneLogo size={48} color1="#3b82f6" color2={isDark ? '#ffffff' : '#0c1d4a'} />
                      <h1 style={{ 
                        margin: 0, 
                        fontFamily: "'Poppins', 'Outfit', 'Inter', sans-serif",
                        fontSize: '42px', 
                        fontWeight: 800, 
                        color: textColorMain, 
                        letterSpacing: '-0.5px' 
                      }}>
                        {currentLocale === 'en' ? 'Full Connection Matrix' : 'Matriz de Conexión Crestone'}
                      </h1>
                    </div>
                    <p style={{ margin: '4px 0 0 0', fontSize: '16px', color: isDark ? '#94a3b8' : '#475569' }}>
                      {currentLocale === 'en' ? 'Ecosystem of SAP Origins and Target Cloud Destinations' : 'Ecosistema de Orígenes SAP y Destinos en la Nube'}
                    </p>
                  </div>
                  {/* Matrix centered and scaled */}
                  <div style={{
                    position: 'absolute',
                    left: '528px', // Symmetrical horizontal centering
                    top: '200px',
                    transform: 'scale(0.72)',
                    transformOrigin: 'top left',
                    zIndex: 2
                  }}>
                    <ConnectionMatrix origins={data.origins} destinations={data.destinations} theme={theme} />
                  </div>
                </div>

                {/* 3. Matriz Cliente preview */}
                <div 
                  ref={clientMatrixRef} 
                  style={{ 
                    ...slideWrapperStyle, 
                    position: activeTab === 'clientMatrix' ? 'relative' : 'absolute',
                    left: '0',
                    top: '0',
                    opacity: activeTab === 'clientMatrix' ? 1 : 0,
                    pointerEvents: activeTab === 'clientMatrix' ? 'auto' : 'none',
                    zIndex: activeTab === 'clientMatrix' ? 10 : 1,
                    backgroundImage: `url(${isDark ? '/img/crestone/ppt/Matrizdark.png' : '/img/crestone/ppt/Matrizligth.png'})`
                  }}
                >
                  {/* Slide Header */}
                  <div style={{ position: 'absolute', left: '100px', top: '75px', zIndex: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <CrestoneLogo size={48} color1="#3b82f6" color2={isDark ? '#ffffff' : '#0c1d4a'} />
                      <h1 style={{ 
                        margin: 0, 
                        fontFamily: "'Poppins', 'Outfit', 'Inter', sans-serif",
                        fontSize: '42px', 
                        fontWeight: 800, 
                        color: textColorMain, 
                        letterSpacing: '-0.5px' 
                      }}>
                        {currentLocale === 'en' ? `Integration Matrix - ${customerName || 'Client'}` : `Matriz de Integración - ${customerName || 'Cliente'}`}
                      </h1>
                    </div>
                    <p style={{ margin: '4px 0 0 0', fontSize: '16px', color: isDark ? '#94a3b8' : '#475569' }}>
                      {currentLocale === 'en' ? 'Customized SAP integration ecosystem' : 'Ecosistema de integración SAP a medida del cliente'}
                    </p>
                  </div>
                  {/* Filtered Matrix centered and moved down to prevent header overlap */}
                  <div style={{
                    position: 'absolute',
                    left: '160px',
                    top: '120px',
                    zIndex: 2
                  }}>
                    <ClientConnectionMatrix origins={activeOrigins} destinations={activeDestinations} theme={theme} />
                  </div>
                </div>

                {/* 4. Compatible con preview */}
                <div 
                  ref={compatibilityRef} 
                  style={{ 
                    ...slideWrapperStyle, 
                    position: activeTab === 'compatibility' ? 'relative' : 'absolute',
                    left: '0',
                    top: '0',
                    opacity: activeTab === 'compatibility' ? 1 : 0,
                    pointerEvents: activeTab === 'compatibility' ? 'auto' : 'none',
                    zIndex: activeTab === 'compatibility' ? 10 : 1,
                    padding: '70px 80px',
                    backgroundImage: 'url(/img/crestone/ppt_background.png)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                  }}
                >
                  {/* Header */}
                  <div style={{ marginBottom: '38px' }}>
                    <h1 style={{ 
                      margin: 0, 
                      fontFamily: "'Poppins', 'Outfit', 'Inter', sans-serif", 
                      fontSize: '60px', 
                      fontWeight: 800, 
                      color: '#1a202c', 
                      letterSpacing: '-0.5px' 
                    }}>
                      {currentLocale === 'en' ? 'Crestone is compatible with' : 'Crestone es compatible con'}
                    </h1>
                  </div>

                  {/* Symmetrical Two Card Columns */}
                  <div style={{ display: 'flex', gap: '45px', flexGrow: 1, minHeight: 0 }}>
                    {/* Origins Column */}
                    <div style={{
                      flex: 1,
                      backgroundColor: 'rgba(255, 255, 255, 0.45)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1.5px solid rgba(255, 255, 255, 0.5)',
                      borderRadius: '24px',
                      padding: '38px 45px',
                      boxShadow: '0 15px 45px rgba(0, 0, 0, 0.04)',
                      display: 'flex',
                      flexDirection: 'column',
                      boxSizing: 'border-box'
                    }}>
                      <h2 style={{ 
                        fontSize: '42px', 
                        fontWeight: 700, 
                        color: '#2d3748', 
                        margin: '0 0 30px 0', 
                        paddingBottom: '12px', 
                        borderBottom: '3px solid rgba(0, 102, 204, 0.15)',
                        fontFamily: "'Poppins', 'Outfit', 'Inter', sans-serif"
                      }}>
                        {currentLocale === 'en' ? 'Origins' : 'Orígenes'}
                      </h2>
                      {renderPptColumnGrid('origins')}
                    </div>

                    {/* Destinations Column */}
                    <div style={{
                      flex: 1,
                      backgroundColor: 'rgba(255, 255, 255, 0.45)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1.5px solid rgba(255, 255, 255, 0.5)',
                      borderRadius: '24px',
                      padding: '38px 45px',
                      boxShadow: '0 15px 45px rgba(0, 0, 0, 0.04)',
                      display: 'flex',
                      flexDirection: 'column',
                      boxSizing: 'border-box'
                    }}>
                      <h2 style={{ 
                        fontSize: '42px', 
                        fontWeight: 700, 
                        color: '#2d3748', 
                        margin: '0 0 30px 0', 
                        paddingBottom: '12px', 
                        borderBottom: '3px solid rgba(0, 102, 204, 0.15)',
                        fontFamily: "'Poppins', 'Outfit', 'Inter', sans-serif"
                      }}>
                        {currentLocale === 'en' ? 'Destinations' : 'Destinos'}
                      </h2>
                      {renderPptColumnGrid('destinations')}
                    </div>
                  </div>
                </div>

                {/* 5. Despliegue preview (Scales the 1280x720 canvas by 1.5 to cover 1920x1080) */}
                <div 
                  ref={deploymentRef} 
                  style={{ 
                    width: '1920px',
                    height: '1080px',
                    overflow: 'hidden',
                    backgroundColor: isDark ? '#0f172a' : '#ffffff',
                    position: activeTab === 'deployment' ? 'relative' : 'absolute',
                    left: '0',
                    top: '0',
                    opacity: activeTab === 'deployment' ? 1 : 0,
                    pointerEvents: activeTab === 'deployment' ? 'auto' : 'none',
                    zIndex: activeTab === 'deployment' ? 10 : 1,
                  }}
                >
                  <div style={{
                    width: '1280px',
                    height: '720px',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transform: 'scale(1.5)',
                    transformOrigin: 'top left',
                    backgroundImage: `url(${isDark ? bgDespliegueDark : bgDespliegueLight})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                  }}>
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
                          id="arrowheadDeck"
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
                        <circle cx="380" cy="245" r="5" fill={arrowColor} />
                        <line x1="380" y1="245" x2="504" y2="245" stroke={arrowColor} strokeWidth="2.5" markerEnd="url(#arrowheadDeck)" />
                      </g>

                      {/* FLOW 1 (Despliegue Cloud) - Crestone to Destination */}
                      <g>
                        <circle cx="770" cy="245" r="5" fill={arrowColor} />
                        <line x1="770" y1="245" x2="894" y2="245" stroke={arrowColor} strokeWidth="2.5" markerEnd="url(#arrowheadDeck)" />
                      </g>

                      {/* FLOW 2 (Despliegue Self Hosted) - Origin to Crestone inside Customer Network Box */}
                      <g>
                        <circle cx="410" cy="510" r="5" fill={arrowColor} />
                        <line x1="410" y1="510" x2="474" y2="510" stroke={arrowColor} strokeWidth="2.5" markerEnd="url(#arrowheadDeck)" />
                      </g>

                      {/* FLOW 2 (Despliegue Self Hosted) - Crestone to Destination */}
                      <g>
                        <circle cx="740" cy="510" r="5" fill={arrowColor} />
                        <line x1="740" y1="510" x2="894" y2="510" stroke={arrowColor} strokeWidth="2.5" markerEnd="url(#arrowheadDeck)" />
                      </g>
                    </svg>

                    {/* Main Slide Title */}
                    <div style={{ position: 'absolute', top: '60px', left: '80px', zIndex: 2 }}>
                      <h1 style={{ margin: 0, fontFamily: "'Poppins', 'Outfit', 'Inter', sans-serif", fontSize: '40px', fontWeight: 800, color: textColorMain, letterSpacing: '-0.5px' }}>
                        {currentLocale === 'en' ? 'Deployment Options' : 'Opciones de Despliegue'}
                      </h1>
                    </div>

                    {/* FLOW 1: Despliegue Cloud */}
                    <div style={{ position: 'absolute', top: '135px', left: '80px', zIndex: 2 }}>
                      <h2 style={{ margin: 0, fontFamily: "'Poppins', 'Outfit', 'Inter', sans-serif", fontSize: '24px', fontWeight: 700, color: textColorSub }}>
                        {currentLocale === 'en' ? 'Cloud Deployment' : 'Despliegue Cloud'}
                      </h2>
                    </div>

                    {/* Labels */}
                    <div style={{ position: 'absolute', top: '185px', left: '120px', width: '260px', textAlign: 'center', fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: networkLabelColor, zIndex: 2 }}>Customer Network</div>
                    <div style={{ position: 'absolute', top: '185px', left: '510px', width: '260px', textAlign: 'center', fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: networkLabelColor, zIndex: 2 }}>Crestone Network</div>
                    <div style={{ position: 'absolute', top: '185px', left: '900px', width: '260px', textAlign: 'center', fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: networkLabelColor, zIndex: 2 }}>Destination Network</div>

                    {/* Cards */}
                    <div style={{ position: 'absolute', top: '220px', left: '120px', zIndex: 4 }}>
                      <ConnectionCard title={deployOrigin.title} icon={deployOrigin.iconName || 'file'} brand={deployOrigin.useBrand} theme={theme} />
                    </div>

                    {/* Crestone Network Box Glass Layer */}
                    <div style={{
                      position: 'absolute',
                      top: '175px',
                      left: '460px',
                      width: '360px',
                      height: '140px',
                      borderRadius: '12px',
                      zIndex: 1,
                      ...glassStyle
                    }} />

                    <div style={{ position: 'absolute', top: '220px', left: '510px', zIndex: 4 }}>
                      <CrestoneCard theme={theme} />
                    </div>

                    <div style={{ position: 'absolute', top: '220px', left: '900px', zIndex: 4 }}>
                      <ConnectionCard title={deployDestination.title} icon={deployDestination.iconName || 'file'} brand={deployDestination.useBrand} theme={theme} />
                    </div>

                    {/* FLOW 2: Despliegue Self Hosted */}
                    <div style={{ position: 'absolute', top: '380px', left: '80px', zIndex: 2 }}>
                      <h2 style={{ margin: 0, fontFamily: "'Poppins', 'Outfit', 'Inter', sans-serif", fontSize: '24px', fontWeight: 700, color: textColorSub }}>
                        {currentLocale === 'en' ? 'Self Hosted Deployment' : 'Despliegue Self Hosted'}
                      </h2>
                    </div>

                    {/* Labels */}
                    <div style={{ position: 'absolute', top: '430px', left: '120px', width: '650px', textAlign: 'center', fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: networkLabelColor, zIndex: 2 }}>Customer Network</div>
                    <div style={{ position: 'absolute', top: '430px', left: '900px', width: '260px', textAlign: 'center', fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: networkLabelColor, zIndex: 2 }}>Destination Network</div>

                    {/* Customer Box Glass Layer */}
                    <div style={{
                      position: 'absolute',
                      top: '450px',
                      left: '120px',
                      width: '650px',
                      height: '120px',
                      borderRadius: '12px',
                      zIndex: 1,
                      ...glassStyle
                    }} />

                    <div style={{ position: 'absolute', top: '485px', left: '150px', zIndex: 4 }}>
                      <ConnectionCard title={deployOrigin.title} icon={deployOrigin.iconName || 'file'} brand={deployOrigin.useBrand} theme={theme} />
                    </div>

                    <div style={{ position: 'absolute', top: '485px', left: '480px', zIndex: 4 }}>
                      <CrestoneCard theme={theme} />
                    </div>

                    <div style={{ position: 'absolute', top: '485px', left: '900px', zIndex: 4 }}>
                      <ConnectionCard title={deployDestination.title} icon={deployDestination.iconName || 'file'} brand={deployDestination.useBrand} theme={theme} />
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Fixed styling for slide wrappers
const slideWrapperStyle: React.CSSProperties = {
  width: '1920px',
  height: '1080px',
  position: 'relative',
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
  boxSizing: 'border-box',
  fontFamily: "'Poppins', 'Outfit', 'Inter', sans-serif",
  userSelect: 'none'
};

// Static Logo Options matching generate-cover.tsx
interface LogoOption {
  id: string;
  title: string;
  file: string;
}

const logoOptions: LogoOption[] = [
  { id: 'SAP', title: 'SAP ECC', file: 'SAP.png' },
  { id: 'SAPOdata', title: 'SAP OData', file: 'SAPOdata.png' },
  { id: 'Sappublic', title: 'SAP Public Cloud', file: 'Sappublic.png' },
  { id: 'Odata', title: 'OData', file: 'Odata.png' },
  { id: 'aws', title: 'AWS', file: 'aws.png' },
  { id: 'azure', title: 'Azure', file: 'azure.png' },
  { id: 'azuresql', title: 'Azure SQL', file: 'azuresql.png' },
  { id: 'S3', title: 'Amazon S3', file: 'S3.png' },
  { id: 'Bigquery', title: 'Google BigQuery', file: 'Bigquery.png' },
  { id: 'Googlestorage', title: 'Google Storage', file: 'Googlestorage.png' },
  { id: 'Cloud_storage', title: 'Cloud Storage', file: 'Cloud_storage.png' },
  { id: 'Databricks', title: 'Databricks', file: 'Databricks.png' },
  { id: 'snowflake', title: 'Snowflake', file: 'snowflake.png' },
  { id: 'fabric', title: 'Microsoft Fabric', file: 'fabric.png' },
  { id: 'Saleforce', title: 'Salesforce', file: 'Saleforce.png' },
  { id: 'cloudera', title: 'Cloudera', file: 'cloudera.png' },
  { id: 'inelake', title: 'Inelake', file: 'inelake.png' }
];
