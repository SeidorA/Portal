import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { CaralIcon , Brand} from 'iconcaral2';
import style from './style.module.css';

const Archivos = ({ source }) => {
  const [archivos, setArchivos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarArchivos = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!source) {
          throw new Error('No se especificó un identificador de archivo');
        }

        // Buscar el row en la tabla Archivos donde id == source
        const { data, error } = await supabase
          .from('Archivos')
          .select('*')
          .eq('id', source)
          .single();

        if (error) throw error;

        // Extraer el campo Hijos (jsonb)
        let archivosData = [];
        if (data && Array.isArray(data.Hijos)) {
          archivosData = data.Hijos;
        }

        setArchivos(archivosData);
      } catch (err) {
        console.error('Error cargando archivos:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    cargarArchivos();
  }, [source]);

  const getIconoArchivo = (mediaType) => {
    if (!mediaType) return getIconoDefault();
    
    const tipo = mediaType.toLowerCase();
    
    if (tipo.includes('pdf')) {
      return (

          <Brand name="PDF" size={24}/>   
        
      );
    }
    
    if (tipo.includes('docx') ) {
      return (
        <Brand name="DOCX" size={24}/>        
      );
    }
    
    if (tipo.includes('xlsx')) {
      return(
        <Brand name="XLSX" size={24}/>    
      )
    }
    if (tipo.includes('video')) {
      return (
        <CaralIcon name='play'/>
      );
    }
    if (tipo.includes('pptx')){
      return (
        <CaralIcon name='file' color='#c43e1c' />
      )
    }
    
    if (tipo.includes('image')) {
      return (
        <CaralIcon name='file'/>        
      );
    }
    
    if (tipo.includes('excel') || tipo.includes('spreadsheet')) {
      return (
        <CaralIcon name='file'/>
        
      );
    }
    
    if (tipo.includes('powerpoint') || tipo.includes('presentation')) {
      return (
        <CaralIcon name='file'/>
        
      );
    }
    
    return getIconoDefault();
  };

  const getIconoDefault = () => (
    <CaralIcon name='file'/>
  );

  if (loading) {
    return (
      <div className={style.container}>
        
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 rounded-lg p-3 animate-pulse">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-300 rounded-sm"></div>
                <div className="flex-1 h-4 bg-gray-300 rounded"></div>
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
              </div>
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

  if (archivos.length === 0) {
    return (
      <div className={style.container}>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="text-gray-600">No se encontraron archivos.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={style.container}>
      
      
        {archivos.map((archivo, index) => (
              <button 
                className={style.itemContent}
                onClick={() => {
                  if (archivo.Path) {
                    window.open(archivo.Path, '_blank');
                  } else {
                    console.log('No hay enlace disponible para:', archivo.name);
                  }
                }}
                title="Abrir archivo"
                >

              <div className={style.itemInfo}>
                <div className={style.icon}>
                {getIconoArchivo(archivo.MediaType)}
                </div>
               <div className={style.text}>
                  <span className={style.name}>
                    {archivo.name}
                  </span>
                  <br/>
                  <small>
                    {archivo.Description
                      ? archivo.Description
                      : `archivo tipo ${archivo.MediaType || 'desconocido'}`}
                  </small>
                </div>
              </div>
                <CaralIcon name='chevronRigth' size={30}/>
              </button>
          
        ))}
      </div>
    
  );
};

export default Archivos;