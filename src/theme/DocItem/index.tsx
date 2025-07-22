// filepath: c:\Users\Seidor\Documents\seidor\portal\Portal\src\theme\DocItem\index.tsx
import React from 'react';
import DocItem from '@theme-original/DocItem';
import { useAuth } from '../../context/AuthContext';

export default function DocItemWrapper(props) {
  const { session, loading } = useAuth();


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

  return <DocItem {...props} />;
}