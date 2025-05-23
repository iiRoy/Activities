'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputField from '@/components/buttons_inputs/InputField'; // ajusta el path si es necesario
import Button from '@/components/buttons_inputs/Button';

export default function LoginForm() {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Función para elegir el dashboard según rol
  function getDashboardRouteByRole(role: string) {
    switch (role) {
      case 'superuser':
        return '/admin/estadisticas';
      case 'venue_coordinator':
        return '/coordinador/estadisticas';
      default:
        return '/login';
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailOrUsername, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Credenciales inválidas');
        setLoading(false);
        return;
      }

      // Guarda en localStorage los datos del usuario
      localStorage.setItem('api_token', data.token);
      localStorage.setItem('user_id', data.user.id);
      localStorage.setItem('user_name', data.user.name);
      localStorage.setItem('user_username', data.user.username);
      localStorage.setItem('user_role', data.role);
      localStorage.setItem('user_name', data.user.name);
      localStorage.setItem('user_username', data.user.username);
      localStorage.setItem('user_image', data.user.image);

      router.push(getDashboardRouteByRole(data.role));
    } catch (err) {
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <form
        onSubmit={handleLogin}
        className='flex flex-col gap-6 p-10 rounded-xl bg-[#1f1220] shadow-xl min-w-[340px] w-[90vw] max-w-[380px]'
      >
        <h2 className='text-3xl font-bold text-center text-[#ede0e8] mb-2'>Iniciar Sesión</h2>
        <InputField
          label='Correo o Usuario'
          placeholder='Ingresa tu correo o usuario'
          value={emailOrUsername}
          onChangeText={setEmailOrUsername}
          icon='Envelope'
        />
        <InputField
          label='Contraseña'
          placeholder='Ingresa tu contraseña'
          value={password}
          onChangeText={setPassword}
          icon='Lock'
          type='password'
        />
        {error && <div className='text-center text-red-400'>{error}</div>}
        <Button
          label={loading ? 'Entrando...' : 'Entrar'}
          variant='primary'
          disabled={loading || !emailOrUsername || !password}
        />
      </form>
    </div>
  );
}
