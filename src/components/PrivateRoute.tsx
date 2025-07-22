import React from 'react';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { session } = useAuth();

  if (!session) {
    return <p>Debes iniciar sesión para acceder a esta página.</p>;
  }

  return children;
};

export default PrivateRoute;
