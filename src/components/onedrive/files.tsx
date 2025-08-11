import React, { useState, useEffect } from 'react';
import { Brand, CaralIcon } from 'iconcaral2';
import BoxFiles from './BoxFiles';
import style from './files.module.css';

interface FileItem {
  id: string;
  name: string;
  type: string;
  extension: string;
  size: string;
  downloadUrl: string;
  lastModified: string;
}

const OneDriveFiles = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simulación de datos - en producción esto vendría de Microsoft Graph API
  const mockFiles: FileItem[] = [
    {
      id: '1',
      name: 'battle card Crestone EN.Doc',
      type: 'document',
      extension: '.doc',
      size: '2.5 MB',
      downloadUrl: '#',
      lastModified: '2024-01-15'
    },
    {
      id: '2',
      name: 'battle card Crestone EN.Doc',
      type: 'document',
      extension: '.doc',
      size: '2.5 MB',
      downloadUrl: '#',
      lastModified: '2024-01-14'
    },
    {
      id: '3',
      name: 'battle card Crestone Es.PDF',
      type: 'pdf',
      extension: '.pdf',
      size: '1.8 MB',
      downloadUrl: '#',
      lastModified: '2024-01-13'
    },
    {
      id: '4',
      name: 'battle card Crestone EN.PDF',
      type: 'pdf',
      extension: '.pdf',
      size: '1.8 MB',
      downloadUrl: '#',
      lastModified: '2024-01-12'
    }
  ];

  useEffect(() => {
    // Simular carga de archivos
    setTimeout(() => {
      setFiles(mockFiles);
      setLoading(false);
    }, 1000);
  }, []);

  

  if (loading) {
    return (
      <div className={style.container}>
        <div className={style.box}>
          <div className="p-6">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded mb-4 w-1/3"></div>
              <div className="space-y-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gray-200 rounded"></div>
                    <div className="flex-1 h-4 bg-gray-200 rounded"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={style.container}>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="text-red-600 font-medium">Error al cargar archivos</div>
          <div className="text-red-500 text-sm mt-1">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.box}>
        <BoxFiles files={files} />
      </div>
    </div>
  );
};

export default OneDriveFiles;