import React from 'react';
import { Brand, CaralIcon } from 'iconcaral2';
import style from './files.module.css';
import { useOneDrive } from '../../../hooks/useOneDrive';


const OneDriveFilesReal = ({ folderPath = '', title = "Archivos Relacionados", files: manualFiles = null }) => {
  const { files: fetchedFiles, loading: fetchLoading, error, downloadFile, refreshFiles } = useOneDrive(folderPath);

  const files = manualFiles || fetchedFiles;
  const loading = manualFiles ? false : fetchLoading;

  const getFileIcon = (type) => {
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleDownload = async (file) => {
    try {
      await downloadFile(file.id, file.name);
    } catch (err) {
      alert('Error al descargar el archivo: ' + err.message);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm border">
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
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="text-red-600 font-medium">Error al cargar archivos</div>
          <div className="text-red-500 text-sm mt-1">{error}</div>
          <button
            onClick={refreshFiles}
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            <p className="text-sm text-gray-500 mt-1">{files.length} archivos disponibles</p>
          </div>
          <button
            onClick={refreshFiles}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-150"
            title="Actualizar archivos"
          >
            <CaralIcon name='download' size={30} />
          </button>
        </div>

        <div className="divide-y divide-gray-100">
          {files.filter(file => !file.isFolder).map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-150"
            >
              <div className="flex items-center space-x-4 flex-1 min-w-0">
                <div className="flex-shrink-0">
                  {getFileIcon(file.type)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900 truncate">
                    {file.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {file.size} • Modificado {formatDate(file.lastModified)}
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 ml-4">
                <button
                  onClick={() => handleDownload(file)}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition-colors duration-150 group"
                  title={`Descargar ${file.name}`}
                >
                  <CaralIcon name='download' size={30} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {files.length === 0 && (
          <div className="text-center py-12">
            <CaralIcon name="file" size={24} />
            <h3 className="text-sm font-medium text-gray-900 mb-1">No hay archivos</h3>
            <p className="text-sm text-gray-500">Los archivos aparecerán aquí cuando estén disponibles.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OneDriveFilesReal;