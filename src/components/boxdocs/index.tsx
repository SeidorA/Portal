import React from "react";
import { CaralIcon } from "iconcaral2";
import haza from '../../../static/img/haz/a.png';
import hazb from '../../../static/img/haz/b.png';
import hazc from '../../../static/img/haz/c.png';
import hazd from '../../../static/img/haz/d.png';
import haze from '../../../static/img/haz/e.png';
import hazf from '../../../static/img/haz/f.png';
import hazg from '../../../static/img/haz/g.png';
import hazh from '../../../static/img/haz/h.png';
import Translate, { translate } from "@docusaurus/Translate";



interface BoxDocProps {
  title: string;
  titleimg?: string;
  language: string;
  format: string;
  onDownload?: string;
  children: React.ReactNode;
  brand?: React.ReactNode; 
}

const BoxDoc: React.FC<BoxDocProps> = ({
  title,
  language,
  format,
  onDownload,
  children,
  brand,
  titleimg
}) => {
  return (
    <div
      style={{
        display: "flex",
        background: "var(--bg-contaider)",
        borderRadius: 10,
        boxShadow: "0 1px 4px #e3e8ee",
        marginBottom: 10,
        padding: 16,
        alignItems: "flex-start",
        gap: 24,
        width: "100%"
      }}
    >
    <div
      style={{
        minWidth: 300,
        maxWidth: 300,
        height: '-webkit-fill-available',
        backgroundImage: `url(${
        [haza, hazb, hazc, hazd, haze, hazf, hazg, hazh][
          Math.floor(Math.random() * 8)
        ]
        })`,
        backgroundRepeat: "no-repeat",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#fff",
        fontWeight: 600,
        fontSize: 22,
        textAlign: "center"
      }}
    >
        <CaralIcon name={brand} size={50} color="#fff"/>
        {titleimg}
      
    </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: "0 0 8px 0" }}>{title}</h3>
        <div style={{ color: 'var(--carbon)', marginBottom: 12, fontSize: 15 }}>
          {children}
        </div>
        <div style={{ color: "#7b7b7b", fontSize: 14, marginBottom: 16 }}>
          <span>
            <b><Translate id="boxdoc.language" />:</b> {language}
          </span>
          <span style={{ margin: "0 12px" }}>|</span>
          <span>
            <b><Translate id="boxdoc.format" />:</b> {format}
          </span>
        </div>
        <button
          style={{
            background: "#0a174e",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "8px 22px",
            fontWeight: 500,
            cursor: "pointer",
            fontSize: 15,
          }}
          onClick={() => window.open(onDownload)}
        >
        <Translate id="boxdoc.download" />
          
        </button>
      </div>
    </div>
  );
};

export default BoxDoc;