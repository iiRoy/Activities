'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/headers_menu_users/navbar';

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // 👈 NUEVO estado loading

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('api_token') : null;
    const storedRole = typeof window !== 'undefined' ? localStorage.getItem('user_role') : null;

    if (token && storedRole) {
      if (storedRole === 'superuser') {
        router.push('/admin/estadisticas');
      } else if (storedRole === 'venue_coordinator') {
        router.push('/coordinador/estadisticas');
      }
    } else {
      setRole(null);
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className='h-screen w-screen flex items-center justify-center bg-[#160D17]'>
        {/* Loader visual */}
        <div className='text-white text-lg animate-pulse'>Cargando...</div>
      </div>
    );
  }

  return (
    <div className='h-screen w-screen flex flex-col text-text bg-[#160D17] overflow-hidden'>
      <div className='h-[13%] min-h-[70px] shadow-custom-dark w-full flex items-center justify-between bg-[var(--background)] rounded-br-[1.5vmax] rounded-bl-[1.5vmax]'>
        <Navbar />
      </div>
      <div className='h-[87%] w-full flex items-center justify-center relative z-0 overflow-hidden'>
        <div className='flex flex-col justify-center items-center w-full h-full'>{children}</div>
      </div>
    </div>
  );
}
