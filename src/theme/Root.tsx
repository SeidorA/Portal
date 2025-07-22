import React from 'react';
import Layout from '@theme-original/Layout';
import { AuthProvider } from '../context/AuthContext';

console.log('Root loaded');

export default function Root({children}) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}