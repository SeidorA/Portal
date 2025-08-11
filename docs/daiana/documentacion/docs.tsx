import React, { useState, useEffect } from 'react';
import BoxFiles from '@site/src/components/onedrive/boxfiles';


interface FileItem {
  id: string;
  name: string;
  type: string;
  extension: string;
  size: string;
  downloadUrl: string;
  lastModified: string;
  
}


const guiasdeuso= [
    {
      id: '1',
      name: 'Agregar un bot en Teams',
      type: 'pdf',
      extension: '.pdf',
      size: '603 KB',
      downloadUrl: 'https://seidoranalytics-my.sharepoint.com/:b:/g/personal/admin_seidoranalytics_onmicrosoft_com/EUdbPWT1SjNIq1-4agcfDjIB2LJRzkhuET6RUraK5QHPUQ?e=mauIeW'
    },
];

const GuiasUsos = () => {
  
  return (
    <BoxFiles files={guiasdeuso} />
  );
};

export default GuiasUsos;