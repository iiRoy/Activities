'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { NotificationProvider } from '@/components/buttons_inputs/Notification';

function LoadingScreen({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-[#160D17] 
        transition-opacity duration-1000 ease-in-out z-50 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <span className='text-white text-lg animate-pulse'>Cargando...</span>
    </div>
  );
}

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedUserId = localStorage.getItem('user_id');
    const storedToken = localStorage.getItem('api_token');

    const checkToken = async () => {
      try {
        const res = await fetch('/api/data?page=venues', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });

        if (res.status === 403) {
          throw new Error('Token inválido o expirado');
        }

        setUserId(storedUserId);
        setIsLoading(false);
        setTimeout(() => {
          setShowLoader(false);
        }, 600);
      } catch (error) {
        console.warn('Token inválido, redirigiendo...');
        localStorage.clear();
        router.replace('/login');
      }
    };

    if (!storedUserId || !storedToken) {
      router.replace('/login');
    } else {
      checkToken();
    }
  }, [router]);

  return (
    <>
      {showLoader && <LoadingScreen isVisible={isLoading} />}

      <div>
        <NotificationProvider userId={userId || ''}>{children}</NotificationProvider>
      </div>
    </>
  );
}
