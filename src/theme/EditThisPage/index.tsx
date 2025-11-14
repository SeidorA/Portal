import React from 'react';
import OriginalEditThisPage from '@theme-original/EditThisPage';
import type {Props} from '@theme/EditThisPage';
import { useAuth } from '../../context/AuthContext';
import { isAllowedEditor } from '../../config/access';

export default function EditThisPage(props: Props) {
  const { session, loading } = useAuth();

  // Evita parpadeos mientras se carga la sesión
  if (loading) {
    return null;
  }

  const email: string | undefined = session?.user?.email;
  const allowed = isAllowedEditor(email);

  // Oculta el botón "Editar esta página" si el usuario no está en la lista permitida
  if (!allowed) {
    return null;
  }

  return <OriginalEditThisPage {...props} />;
}