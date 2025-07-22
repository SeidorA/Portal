import React from 'react';
import DocPage from '@theme-original/DocPage';
import { useAuth } from '../../context/AuthContext';

export default function DocPageWrapper(props) {
  const { session, loading } = useAuth();
  console.log('DocPageWrapper session:', session, 'loading:', loading);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!session || !session.user) {
    return (
      <div>
        <h1>Acceso restringido</h1>
        <p>Debes <a href="/login">iniciar sesión</a> para acceder a la documentación.</p>
      </div>
    );
  }

  return <DocPage {...props} />;
}