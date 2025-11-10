import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import styles from './index.module.css';
import { Brand } from 'iconcaral2';


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
        <h1>¡Bienvenido!</h1>
        <p>Para iniciar sesión necesita una cuenta</p>
         <form onSubmit={handleLogin}>
        <input
            type="email"
          placeholder="ej: info@seidor.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputContainer}
        />


        

        <input
          type="password"
          placeholder="Tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.inputContainer}
        />
        {error && (
          <div style={{ 
            color: 'red', 
            marginBottom: '1rem', 
            padding: '0.5rem',
            backgroundColor: '#ffeaea',
            border: '1px solid #ffcaca',
            borderRadius: '4px'
          }}>
            {error}
          </div>
        )}
        <button 
          type="submit" 
          disabled={loading}
          className={styles.btn}
          style={{
            backgroundColor: loading ? '#ccc' : '#07153a',
            color: '#fff',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
        </button>

        
      </form>
      </div>

      <div className={styles.logoContainer}>
        <div className={styles.logo} aria-label="Logo" />
  
      </div>
    </div>
   
  );
}