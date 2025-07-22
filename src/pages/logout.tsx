import { useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function LogoutPage() {
  useEffect(() => {
    supabase.auth.signOut().then(() => {
      window.location.href = '/';
    });
  }, []);

  return <p style={{ padding: '2rem' }}>Cerrando sesión...</p>;
}
