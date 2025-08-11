import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import style from './planes.module.css'; // Asegúrate de tener un archivo CSS para estilos

const PlanesComponent = () => {
  const [planes, setPlanes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPlanes();
  }, []);

  const fetchPlanes = async () => {
    try {
      setLoading(true);
      
      // Debug: Primero intentamos obtener todos los datos sin filtro
      console.log('Intentando conectar con Supabase...');
      const { data: allData, error: allError } = await supabase
        .from('Planes')
        .select('*');
        
      console.log('Todos los datos:', allData);
      console.log('Error al obtener todos:', allError);
      
      // Luego filtramos por Active = true
      const { data, error } = await supabase
        .from('Planes')
        .select('*')
        .eq('Active', true);
        
      console.log('Datos filtrados por Active=true:', data);
      console.log('Error con filtro:', error);

      if (error) throw error;

      setPlanes(data || []);
    } catch (error) {
      console.error('Error fetching planes:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
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
    <div className="max-w-4xl mx-auto p-6">
      
      
      {planes.length === 0 ? (
        <p className="text-center text-gray-500">No hay planes disponibles.</p>
      ) : (
        <div className={style.grid}>
          {planes.map((plan) => (
            <div 
              key={plan.id} 
              className={style.plan}
            >
              <h3 className={style.title}>
                {plan.Name || `Plan ${plan.id}`}
              </h3>
              
              {plan.Price && (
                <div className="margin-vert--md">
                  <p className={style.price}>
                    {plan.Price === 'free' ? 'Gratis' : `${plan.Price}`}
                  </p>
                  {plan["Price Condition"] && (
                    <p className={style.condition}>
                      {plan["Price Condition"]}
                    </p>
                  )}
                </div>
              )}
              
              {plan["Short Description"] && (
                <p className="margin-bottom--lg">
                  {plan["Short Description"]}
                </p>
              )}
              
              {plan.Features && (
                <div className="margin-bottom--md">
                  <h4 className={style.subtitle}>Características:</h4>
                  <div className={style.features}>
                    {plan.Features.split('\n').map((feature, index) => (
                      feature.trim() && (
                        <div key={index} className={style.flexitem}>
                          <span className="text--success">✓</span>
                          <span>{feature.trim()}</span>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanesComponent;