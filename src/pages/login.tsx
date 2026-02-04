import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import styles from './index.module.css';
import { Brand } from 'iconcaral2';
import { LoginAzureButton } from '../components/auth/LoginAzureButton';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {

      console.log('Login exitoso:', data);
      window.location.href = '/'; // Redirigir al usuario después del inicio de sesión exitoso
    }

    setLoading(false);
  };



  return (
    <div className={styles.loginfull}>
      <div className={styles.loginContainer}>
        <h1>Les damos la bienvenida</h1>
        <p>Para iniciar sesión necesita una cuenta</p>
        <form onSubmit={handleLogin}>
          <LoginAzureButton />
        </form>
      </div>

      <div className={styles.logoContainer}>
        <div className={styles.logo} aria-label="Logo" />

      </div>
    </div>

  );
}