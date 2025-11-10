import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { CaralIcon, Brand } from 'iconcaral2';
import style from './style.module.css';
import Link from '@docusaurus/Link';

interface ArchivoHijo {
  id: string;
  name: string;
  Description?: string;
  MediaType?: string;
  Path?: string;
  order?: number;
}

interface ArchivosHijosProps {
  source: string; // ID del archivo padre
  onUpdate?: () => void; // Callback opcional para cuando se actualiza la lista
  title?: string; // Título opcional para el componente
  link?: string; // Enlace opcional para el título
}

const ArchivosHijos: React.FC<ArchivosHijosProps> = ({ source, onUpdate, title, link }) => {
  const [archivosHijos, setArchivosHijos] = useState<ArchivoHijo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [newArchivo, setNewArchivo] = useState<Partial<ArchivoHijo>>({});
  const [editingId, setEditingId] = useState<string | null>(null);

  const cargarArchivosHijos = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('Archivos')
        .select('Hijos')
        .eq('id', source)
        .single();

      if (error) throw error;

      setArchivosHijos(data?.Hijos || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarArchivosHijos();
  }, [source]);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = async (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
    
    if (dragIndex === dropIndex) return;

    const newArchivos = [...archivosHijos];
    const [movedItem] = newArchivos.splice(dragIndex, 1);
    newArchivos.splice(dropIndex, 0, movedItem);

    // Actualizar el orden
    const updatedArchivos = newArchivos.map((archivo, index) => ({
      ...archivo,
      order: index
    }));

    try {
      const { error } = await supabase
        .from('Archivos')
        .update({ Hijos: updatedArchivos })
        .eq('id', source);

      if (error) throw error;

      setArchivosHijos(updatedArchivos);
      onUpdate?.();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAdd = async () => {
    try {
      if (!newArchivo.name) {
        throw new Error('El nombre es requerido');
      }

      const nuevoArchivo: ArchivoHijo = {
        id: crypto.randomUUID(),
        name: newArchivo.name,
        Description: newArchivo.Description,
        MediaType: newArchivo.MediaType,
        Path: newArchivo.Path
      };

      const nuevosHijos = [...archivosHijos, nuevoArchivo];

      const { error } = await supabase
        .from('Archivos')
        .update({ Hijos: nuevosHijos })
        .eq('id', source);

      if (error) throw error;

      setArchivosHijos(nuevosHijos);
      setShowForm(false);
      setNewArchivo({});
      onUpdate?.();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = async (archivoEditado: ArchivoHijo) => {
    try {
      const nuevosHijos = archivosHijos.map(hijo =>
        hijo.id === archivoEditado.id ? archivoEditado : hijo
      );

      const { error } = await supabase
        .from('Archivos')
        .update({ Hijos: nuevosHijos })
        .eq('id', source);

      if (error) throw error;

      setArchivosHijos(nuevosHijos);
      setEditingId(null);
      onUpdate?.();
    } catch (err) {
      setError(err.message);
    }
  };

const handleDelete = async (id: string) => {
    // Mostrar confirmación antes de eliminar
    if (!window.confirm('¿Está seguro que desea eliminar este archivo?')) {
        return;
    }

    try {
        const nuevosHijos = archivosHijos.filter(hijo => hijo.id !== id);

        const { error } = await supabase
            .from('Archivos')
            .update({ Hijos: nuevosHijos })
            .eq('id', source);

        if (error) throw error;

        setArchivosHijos(nuevosHijos);
        onUpdate?.();
    } catch (err) {
        setError(err.message);
    }
};

  const getIconoArchivo = (mediaType: string = '') => {
    switch (mediaType.toLowerCase()) {
    case 'application/pdf':
        return <Brand name="PDF" size={24}/> ;
    case 'document/doc':
    case 'document/docx':
        return <Brand name="DOCX" size={24}/> ;
    case 'document/xls':
    case 'document/xlsx':
        return <Brand name="XLSX" size={24}/> ;
    case 'document/ppt':
    case 'document/pptx':
        return <CaralIcon name="chevronDown" size={30} />;

    case 'video/mov':
    case 'video/avi':
    case "video/webm":
    case 'video/mp4':
        return <CaralIcon name="play" size={30} />;
        
    default:
        return <CaralIcon name="file" size={30} />;
    }
  };

  if (loading) {
    return (
      <div className={style.container}>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="flex-1 h-4 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={style.container}>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.formButtons}>
            <h3>{title}</h3>
            {link && (
                <Link to={link} target="_blank" rel="noopener noreferrer">
            <CaralIcon name='clickTab' size={25} />
                </Link> )
            }
        </div>
        <button
          className={style.addButton}
          onClick={() => setShowForm(true)}
        >
          <CaralIcon name="plus" size={20} />
          Agregar archivo
        </button>
      </div>

      {showForm && (
        <div className={style.form}>
        <label>Nuevo Archivo</label>
          <input
            type="text"
            placeholder="Nombre del archivo"
            value={newArchivo.name || ''}
            onChange={(e) => setNewArchivo({ ...newArchivo, name: e.target.value })}
            className={style.input}
          />

          <label>Descripción</label>
          <input
            type="text"
            placeholder="Descripción"
            value={newArchivo.Description || ''}
            onChange={(e) => setNewArchivo({ ...newArchivo, Description: e.target.value })}
            className={style.input}
          />
            <label>Tipo de Medio</label>
          <input
            type="text"
            placeholder=" EJ: pdf, doc, etc"
            value={newArchivo.MediaType || ''}
            onChange={(e) => setNewArchivo({ ...newArchivo, MediaType: e.target.value })}
            className={style.input}
          />
          <label>Ruta o URL del Archivo</label>
          <input
            type="text"
            placeholder="ej: https://example.com/archivo.pdf"
            value={newArchivo.Path || ''}
            onChange={(e) => setNewArchivo({ ...newArchivo, Path: e.target.value })}
            className={style.input}
          />
          <div className={style.formButtons}>
            <button onClick={() => setShowForm(false)} className={style.cancelButton}>
              Cancelar
            </button>
            <button onClick={handleAdd} className={style.saveButton}>
              Guardar
            </button>
            
          </div>
        </div>
      )}

      <div className={style.filesList}>
        {archivosHijos
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
          .map((archivo, index) => (
          <div 
            key={archivo.id} 
            className={style.fileItem}
            draggable={true}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}>
            {editingId === archivo.id ? (
              <div className={style.form}>
                <label>Nombre</label>
                <input
                  type="text"
                  value={archivo.name}
                  onChange={(e) => setArchivosHijos(prev =>
                    prev.map(a => a.id === archivo.id ? { ...a, name: e.target.value } : a)
                  )}
                  className={style.input}
                />
                <label>Descripción</label>
                <input
                  type="text"
                  value={archivo.Description || ''}
                  onChange={(e) => setArchivosHijos(prev =>
                    prev.map(a => a.id === archivo.id ? { ...a, Description: e.target.value } : a)
                  )}
                  className={style.input}
                />
                <label>Ruta o URL del Archivo </label>
                <input
                  type="text"
                  value={archivo.Path || ''}
                  onChange={(e) => setArchivosHijos(prev =>
                    prev.map(a => a.id === archivo.id ? { ...a, Path: e.target.value } : a)
                  )}
                  className={style.input}
                />
                <div className={style.formButtons}>
                    <button onClick={() => setEditingId(null)} className={style.cancelButton}>
                        Cancelar
                    </button>
                    <button onClick={() => handleEdit(archivo)} className={style.saveButton}>
                        Guardar
                    </button>
                  
                </div>
              </div>
            ) : (
              <>
                <div className={style.fileInfo} onClick={() => archivo.Path && window.open(archivo.Path, '_blank')}>
                  <div className={style.fileIcon}>
                    {getIconoArchivo(archivo.MediaType)}
                  </div>
                  <div className={style.fileDetails}>
                    <span className={style.fileName}>{archivo.name}</span>
                    {archivo.Description && (
                      <span className={style.fileDescription}>{archivo.Description}</span>
                    )}
                  </div>
                </div>
                <div className={style.actions}>
                  <button
                    onClick={() => setEditingId(archivo.id)}
                    className={style.editButton}
                  >
                    <CaralIcon name="edit" size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(archivo.id)}
                    className={style.deleteButton}
                  >
                    <CaralIcon name="trash" size={20} />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchivosHijos;