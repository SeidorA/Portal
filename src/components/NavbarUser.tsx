import React from 'react';
import { useAuth } from '../context/AuthContext';
import Link from '@docusaurus/Link';

export default function NavbarUser() {
  const { session } = useAuth();

  if (!session) {
    return <Link to="/login">Login</Link>;
  }

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '0 10px' }}>
      <span style={{ fontSize: '0.9rem' }}>{session.user.email}</span>
      <Link to="/logout">Logout</Link>
    </div>
  );
}
