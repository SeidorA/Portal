import React from 'react';
import { Brand, CaralIcon } from 'iconcaral2';
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

interface BoxFilesProps {
  files: FileItem[];
  onDownload?: (file: FileItem) => void;
}

const BoxFiles: React.FC<BoxFilesProps> = ({ files, onDownload }) => {
  const getFileIcon = (type: string, extension: string) => {
    switch (type) {
      case 'document':
        return <Brand name='DOCX' size={20} />;
      case 'pdf':
        return <Brand name='PDF' size={20} />;
      case 'image':
        return <Brand name='DOCX' size={20} />;
      case 'video':
        return <Brand name='DOCX' size={20} />;
      case 'audio':
        return <Brand name='DOCX' size={20} />;
      case 'archive':
        return <Brand name='DOCX' size={20} />;
      case 'code':
        return <Brand name='HTML' size={20} />;
      default:
        return <Brand name='DOCX' size={20} />;
    }
  };

  const formatFileSize = (size: string) => {
    return size || 'Desconocido';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleDownload = (file: FileItem) => {
    if (onDownload) {
      onDownload(file);
    } else {
      // Comportamiento por defecto
      // console.log('Descargando archivo:', file.name);
        window.open(file.downloadUrl, '_blank');
    }
  };

  if (files.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '20px 0px'
      }}>
        <CaralIcon name='file' />
        <h3
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
          }}
        >No hay archivos</h3>
        <p
          style={{
            fontSize: '1rem',
            color: '#666',
            marginTop: '10px'
          }}
        >Los archivos aparecerán aquí cuando estén disponibles.</p>
      </div>
    );
  }

  return (
    <div className={style.files}>
      {files.map((file) => (
        <div
          key={file.id}
          className={style.filedeck}
        >
          <div className={style.filebox}>
            <div className={style.fileicon}>
              {getFileIcon(file.type, file.extension)}
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">
                {file.name}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {formatFileSize(file.size)} • Modificado {formatDate(file.lastModified)}
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 ml-4">
            <button
              onClick={() => handleDownload(file)}
              className={style.btn}
              title={`Descargar ${file.name}`}
            >
              <CaralIcon name='arrowDownToLine' size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoxFiles;