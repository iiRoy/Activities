'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import withIconDecorator from '../decorators/IconDecorator';
import * as Icons from '../icons';
import { useNotification } from '../buttons_inputs/Notification';
import { useRouter } from 'next/navigation';

export const Notification = withIconDecorator(Icons.Megaphone);
export const Info = withIconDecorator(Icons.Info);
export const Arrow = withIconDecorator(Icons.ArrowArcLeft);

const User = ({
  onToggleNotifications,
}: {
  showNotifications: boolean;
  onToggleNotifications: () => void;
}) => {
  const { notifications } = useNotification();
  const router = useRouter();

  // Estado para el usuario
  const [userName, setUserName] = useState<string | null>(null);
  const [userUsername, setUserUsername] = useState<string | null>(null);

  // Cargar desde localStorage al montar el componente
  useEffect(() => {
    const name = localStorage.getItem('user_name');
    const username = localStorage.getItem('user_username');

    setUserName(name);
    setUserUsername(username);
  }, []);

  const handleLogout = async () => {
    if (confirm('¿Seguro que quieres cerrar sesión?')) {
      const token = localStorage.getItem('api_token');

      try {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (err) {
        console.error('Error al cerrar sesión:', err);
      }

      localStorage.removeItem('api_token');
      localStorage.removeItem('user_id');
      localStorage.removeItem('user_role');
      localStorage.removeItem('user_name');
      localStorage.removeItem('user_username');
      localStorage.removeItem('user_image');
      router.push('/login');
    }
  };

  return (
    <div className='flex flex-col w-full gap-2 relative'>
      <div className='px-1 flex items-center lg:ml-2 justify-center lg:justify-start pb-0'>
        <Link href={'/'} className='flex items-center justify-center gap-3 p-2'>
          <Image
            src={'/assets/avatar.png'}
            alt='user'
            width={35}
            height={35}
            className='md:min-w-[3.5vw] md:min-h-[3.5vw] min-w-[5vmax] min-h-[5vmax] rounded-full'
          />
          <div className='hidden flex-col text-left lg:block'>
            <span className='text-sm leading-5 text-[1.51vmax]'>{userName ?? 'Usuario'}</span>
            <span className='text-[1vmax] font-medium text-textDim block break-all'>
              @{userUsername ?? 'usuario'}
            </span>
          </div>
        </Link>
      </div>

      <div className='relative flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-end pb-2 pr-1'>
        {/* Botón Notificaciones */}
        <button
          className='hidden lg:block option-link w-auto h-auto items-center justify-center p-2 cursor-pointer relative'
          onClick={onToggleNotifications}
          aria-label='Abrir notificaciones'
        >
          <Notification width={'1.5rem'} height={'1.5rem'} strokeColor='#2E1C31' strokeWidth={1} />
          {notifications.length > 0 && (
            <div className='absolute -top-1 -right-1 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs min-w-[18px] min-h-[18px] px-1.5'>
              {notifications.length}
            </div>
          )}
        </button>

        <Link
          href={'https://beautifulpatterns.org/'}
          className='option-link flex items-center justify-center p-2'
        >
          <Info width={'1.5rem'} height={'1.5rem'} strokeColor='#2E1C31' strokeWidth={1} />
        </Link>

        <button
          className={`block option-link w-auto h-auto items-center justify-center p-2 cursor-pointer relative`}
          onClick={handleLogout}
          aria-label='Cerrar Sesión'
        >
          <Arrow width={'1.5rem'} height={'1.5rem'} strokeColor='#2E1C31' strokeWidth={1} />
        </button>
      </div>
    </div>
  );
};

export default User;
