import React from 'react';
// Make sure the file exists at this path, or update the path if needed
import PrivateRoute from '../components/PrivateRoute'



export default function PaginaPrivada() {
  return (
    <PrivateRoute>
      <div>
        <h1>Documentación Privada</h1>
        <p>Solo puedes ver esto si estás logueado.</p>
      </div>
    </PrivateRoute>
  );
}
