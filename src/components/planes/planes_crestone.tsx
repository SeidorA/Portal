import React, { useState, useEffect } from 'react';
import { supabase, getActiveRecords } from '../../lib/supabaseClient';
import style from './planes.module.css';  

interface PlanesCrestone {
  id: number;
  Name: string;
  Cost: string;
  "Price Condition"?: string;
  "Short Description"?: string;
  Features?: string;
  Tipo?: string;
  Active: boolean;
  Conexiones?: number;
  Cantidad?: number;
}

interface PlanesCrestoneProps {
  tipo?: string;
}

const PlanesCrestoneComponent: React.FC<PlanesCrestoneProps> = ({ tipo: tipoInicial }) => {
  const [planes, setPlanes] = useState<PlanesCrestone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Estados para los filtros
  const [tipoSeleccionado, setTipoSeleccionado] = useState<string>(tipoInicial || '');
  const [conexiones, setConexiones] = useState<string>('');
  const [cantidadTablas, setCantidadTablas] = useState<string>('');

  useEffect(() => {
    fetchPlanes();
  }, []);

  const fetchPlanes = async () => {
    try {
      setLoading(true);
      
      // Utilizamos getActiveRecords para obtener solo los planes activos
      const { data, error } = await getActiveRecords('Planes_crestone');
      
      console.log('Datos obtenidos de Planes_crestone:', data);
      
      // Verificar qué tipos de planes están disponibles
      if (data) {
        const tiposDisponibles = [...new Set(data.map((plan: PlanesCrestone) => plan.Tipo))];
        console.log('Tipos disponibles:', tiposDisponibles);
        
        // Mostrar los valores exactos de los tipos
        console.log('Valores exactos de tipos:');
        data.forEach((plan: PlanesCrestone) => {
          console.log(`Plan ${plan.id}: Tipo = '${plan.Tipo}', longitud = ${plan.Tipo ? plan.Tipo.length : 0}`);
        });
      }
      
      if (error) throw error;

      // Guardamos todos los datos sin filtrar
      setPlanes(data || []);

    } catch (error) {
      console.error('Error fetching planes:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  // Función para manejar cambios en los filtros
  const handleFiltroChange = () => {
    // Ya no necesitamos volver a cargar los datos, solo actualizar la UI
    // La UI se actualizará automáticamente cuando cambien los estados
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2">Cargando planes...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <strong>Error: </strong>{error}
      </div>
    );
  }

  return (
    <div className={style.plaesgrid}>
      {/* Filtros */}
      <div className={style.flexitem}>
        <div>
          <label className={style.label}>Tipo de subcripción</label>
          <select 
            className={style.selct} 
            value={tipoSeleccionado}
            onChange={(e) => {
              setTipoSeleccionado(e.target.value);
              // Resetear los otros filtros cuando cambia el tipo
              setConexiones('');
              setCantidadTablas('');
            }}
          >
            <option value="">Todos</option>
            <option value="Cloud">Cloud</option>
            <option value="Self Hosted">Self Hosted</option>
          </select>
        </div>
        
        {tipoSeleccionado && (
          <div>
            <label className={style.label}>Conexiones</label>
            <select 
              className={style.selct}
              value={conexiones}
              onChange={(e) => {
                setConexiones(e.target.value);
                handleFiltroChange();
              }}
            >
              <option value="">Seleccionar</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        )}
        
        {tipoSeleccionado && (
          <div>
            <label className={style.label}>
              {tipoSeleccionado === "Cloud" ? "Cantidad de Registros Mensuales" : "Cantidad de Tablas"}
            </label>
            <select 
              className={style.selct}
              value={cantidadTablas}
              onChange={(e) => {
                setCantidadTablas(e.target.value);
                handleFiltroChange();
              }}
            >
              <option value="">Seleccionar</option>
              {tipoSeleccionado === "Cloud" ? (
                // Opciones para Cloud
                <>
                  <option value="1000000">1.000.000</option>
                  <option value="5000000">5.000.000</option>
                  <option value="10000000">10.000.000</option>
                  <option value="20000000">20.000.000</option>
                  <option value="33000000">33.000.000</option>
                </>
              ) : (
                // Opciones para Self Hosted
                <>
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="300">300</option>
                  <option value="400">400</option>
                  <option value="500">500</option>
                </>
              )}
            </select>
          </div>
        )}
      </div>
      
      {/* Tabla de resultados */}

        <table className={style.tableplan}>
          <thead >
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conexión(*)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio Anual</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cantidad</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {(() => {
              // Aplicamos todos los filtros en el cliente
              let filteredPlanes = [...planes];
              
              // Filtro por tipo
              if (tipoSeleccionado) {
                console.log('Filtrando por tipo (cliente):', tipoSeleccionado);
                filteredPlanes = filteredPlanes.filter(plan => {
                  if (!plan.Tipo) return false;
                  
                  // Función para normalizar los tipos
                 const normalizeTipo = (tipo: string) => {
                   if (!tipo) return '';
                   
                   // Eliminar espacios y convertir a minúsculas
                   let normalizedTipo = tipo.trim().toLowerCase();
                   
                   // Normalizar variantes de "Self Hosted"
                   if (normalizedTipo === 'self-hosted' || normalizedTipo === 'selfhosted' || 
                       normalizedTipo === 'self hosted' || normalizedTipo === 'self_hosted') {
                     return 'selfhosted';
                   }
                   
                   // Normalizar variantes de "Cloud"
                   if (normalizedTipo === 'cloud') {
                     return 'cloud';
                   }
                   
                   return normalizedTipo;
                 };
                 
                 // Comparación con normalización
                 const planTipo = normalizeTipo(plan.Tipo);
                 const selectedTipo = normalizeTipo(tipoSeleccionado);
                  
                  console.log(`Comparando (cliente): '${plan.Tipo}' (${planTipo}) con '${tipoSeleccionado}' (${selectedTipo})`);
                  return planTipo === selectedTipo;
                });
              }
              
              // Filtro por conexiones
              if (conexiones) {
                const conexionesNum = parseInt(conexiones);
                filteredPlanes = filteredPlanes.filter(plan => plan.Conexiones === conexionesNum);
              }
              
              // Filtro por cantidad
              if (cantidadTablas) {
                const valorNum = parseInt(cantidadTablas);
                filteredPlanes = filteredPlanes.filter(plan => plan.Cantidad === valorNum);
              }
              
              console.log('Planes filtrados (cliente):', filteredPlanes);
              
              if (filteredPlanes.length === 0) {
                return (
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                      No hay planes disponibles{tipoSeleccionado ? ` para el tipo ${tipoSeleccionado}` : ''}.
                    </td>
                  </tr>
                );
              }
              
              return filteredPlanes.map((plan) => (
                <tr key={plan.id}>
                  <td style={{width: '5%'}} className="px-6 py-4 whitespace-nowrap">{plan.Name || `Plan ${plan.id}`}</td>
                  <td style={{width: '15%'}} className="px-6 py-4 whitespace-nowrap">{plan.Conexiones}</td>
                  <td style={{width: '15%'}} className="px-6 py-4 whitespace-nowrap">
                    {plan.Cost ? `$${Number(plan.Cost).toLocaleString('en-US')}` : '-'}
                  </td>
                  <td style={{width: '25%'}} className="px-6 py-4 whitespace-nowrap">
                    {(plan.Cantidad).toLocaleString('en-EN')}
                  </td>
                </tr>
              ));
            })()}
          </tbody>
        </table>
      </div>

  );
};

export default PlanesCrestoneComponent;

