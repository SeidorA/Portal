import React from 'react';
import OriginalEditThisPage from '@theme-original/EditThisPage';
import type { Props } from '@theme/EditThisPage';
import { useAuth } from '../../context/AuthContext';

export default function EditThisPage(props: Props) {
  const { session, loading, hasRole } = useAuth();

  // Evita parpadeos mientras se carga la sesión
  if (loading) {
    return null;
  }

  // Check if user has 'admin' or 'editor' role
  const allowed = session?.user && (hasRole('admin') || hasRole('editor'));

  // Oculta el botón "Editar esta página" si el usuario no tiene los roles requeridos
  if (!allowed) {
    return null;
  }

  return <OriginalEditThisPage {...props} />;
}