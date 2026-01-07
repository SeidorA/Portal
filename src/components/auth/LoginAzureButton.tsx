import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export const LoginAzureButton: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        try {
            setLoading(true);
            setError(null);

            const { error: authError } = await supabase.auth.signInWithOAuth({
                provider: 'azure',
                options: {
                    scopes: 'openid profile email',
                    // The site URL is configured in the Supabase Auth settings, 
                    // but you can override the redirect URL if needed:
                    // redirectTo: 'https://products.seidoranalytics.com/docs/intro'
                },
            });

            if (authError) throw authError;
        } catch (err: any) {
            console.error('Error initiating Azure login:', err);
            setError(err.message || 'Error al iniciar sesión con Azure');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="azure-login-container" style={{ margin: '10px 0', width: '100%' }}>

            <button
                onClick={handleLogin}
                disabled={loading}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    padding: '10px 24px',
                    backgroundColor: '#0078d4', // Azure blue
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    fontSize: '16px',
                    fontWeight: '600',
                    width: '100%',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    transition: 'all 0.2s'
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#005a9e')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#0078d4')}
            >
                {loading ? (
                    'Cargando...'
                ) : (
                    <>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H10V10H0V0Z" fill="#F25022" />
                            <path d="M11 0H21V10H11V0Z" fill="#7FBA00" />
                            <path d="M0 11H10V21H0V11Z" fill="#00A4EF" />
                            <path d="M11 11H21V21H11V11Z" fill="#FFB900" />
                        </svg>
                        Iniciar sesión con Microsoft
                    </>
                )}
            </button>
            {error && (
                <p style={{ color: '#d13438', marginTop: '10px', fontSize: '14px' }}>
                    {error}
                </p>
            )}
        </div>
    );
};


