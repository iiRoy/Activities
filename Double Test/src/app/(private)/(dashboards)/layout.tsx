'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@/components/headers_menu_users/Menu';
import User from '@/components/headers_menu_users/User';
import NotificationMenu from '@/components/headers_menu_users/NotificationMenu';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSubmenuOverlay, setShowSubmenuOverlay] = useState(false);

  // Detecta si el submenu está activo para mostrar fondo morado
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const value = document.body.dataset.submenu;
      setShowSubmenuOverlay(value === 'true');
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['data-submenu'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1024px)');
    function handleMedia(e: MediaQueryListEvent | MediaQueryList) {
      if (e.matches) {
        setShowNotifications(false);
      }
    }
    handleMedia(media);
    media.addEventListener('change', handleMedia);
    return () => media.removeEventListener('change', handleMedia);
  }, []);

  return (
    <div className='h-screen flex text-text bg-back'>
      {/* Fondo morado solo cuando submenu está activo */}
      <div
        className={`
        absolute w-screen h-screen bg-[#160D17]/70 z-30 pointer-events-none
        transition-opacity duration-300 ease-in-out
        ${showSubmenuOverlay ? 'opacity-100' : 'opacity-0'}
      `}
      />

      {/* LEFT: Sidebar */}
      <div className='z-30 pt-[1.9vw] gap-[3vw] w-[9%] md:w-[8%] lg:w-[18%] xl:w-[18%] overflow-x-hidden min-w-[10vw] max-h-screen flex flex-col items-center justify-between bg-[#2E1C31] rounded-tr-[1.5vmax] rounded-br-[1.5vmax] scrollbar-hide'>
        <div className='p-1 lg:p-0 justify-center'>
          <Link href='/'>
            <Image
              src='/assets/logo.png'
              alt='logo'
              width={110}
              height={110}
              className='lg:max-w-[8vw] md:max-w-[5vw] sm:max-w-[7vw]'
            />
          </Link>
        </div>

        {/* Menú principal o notificaciones */}
        <div className='relative w-full flex-1 flex flex-col items-center justify-center '>
          {/* Menú de Navegación */}
          <div
            className={`
              transition-opacity overflow-x-visible
              ${
                showNotifications
                  ? 'duration-300 opacity-0 pointer-events-none'
                  : 'duration-1000 opacity-100 pointer-events-auto'
              }
            `}
          >
            <Menu />
          </div>

          {/* Menú de Notificaciones */}
          <div
            className={`
              absolute w-[111%] pl-2 right-[0.5%] h-full transition-opacity overflow-hidden
              ${
                showNotifications
                  ? 'duration-1000 opacity-100 pointer-events-auto'
                  : 'duration-300 opacity-0 pointer-events-none'
              }
            `}
          >
            <NotificationMenu
              open={showNotifications}
              onClose={() => setShowNotifications(false)}
            />
          </div>
        </div>

        {/* Footer con usuario */}
        <User
          showNotifications={showNotifications}
          onToggleNotifications={() => setShowNotifications((v) => !v)}
        />
      </div>

      {/* RIGHT: Main content */}
      <div className='w-[91%] md:w-[92%] lg:w-[83%] xl:w-[85%] relative overflow-x-hidden custom-scrollbar'>
        {/* Círculos decorativos */}
        <div className='sticky z-20 overflow-x-clip'>
          <div className='absolute top-0 right-[6vw] w-[8vw] h-[8vw] bg-[#C57FAB] rounded-full transform -translate-y-2/3 shadow-custom-dark'></div>
          <div className='absolute top-[4vw] right-[-1vw] w-[10vw] h-[10vw] bg-[#97639C] rounded-full transform translate-x-1/3 -translate-y-1/4 shadow-custom-dark'></div>
          <div className='absolute top-0 right-[1vw] w-[9vw] h-[9vw] bg-[#2E1C31] rounded-full transform translate-x-1/4 -translate-y-2/4 shadow-custom-dark'></div>
          <div className='absolute top-[4vw] right-[7vw] w-[4vw] h-[4vw] bg-[#EBE6EB] rounded-full shadow-custom-dark'></div>
          <div className='absolute top-[3vw] right-[12vw] w-[2.5vw] h-[2.5vw] bg-[#EBE6EB] rounded-full shadow-custom-dark'></div>
        </div>

        {/* Contenido principal */}
        <div className='relative overflow-x-hidden z-0'>{children}</div>
      </div>
    </div>
  );
}
