'use client';

import React, { useEffect, useState, useRef } from 'react';
import OptionLink from '../buttons_inputs/OptionLink';
import SubmenuLink from '../buttons_inputs/SubmenuLink';
import * as Icons from '../icons';
import { createPortal } from 'react-dom';

const submenuLinks = [
  {
    label: 'Coordinadoras',
    icon: 'IdentificationBadge',
    href: '/admin/gestion-usuarios/coordinadoras',
  },
  { label: 'Mentoras', icon: 'GraduationCap', href: '/admin/gestion-usuarios/mentoras' },
  { label: 'Apoyo y Staff', icon: 'Users', href: '/admin/gestion-usuarios/staff' },
  { label: 'Participantes', icon: 'User', href: '/admin/gestion-usuarios/participantes' },
];

const Menu: React.FC = () => {
  const [role, setRole] = useState<string | null>(null);
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [fadeSubmenu, setFadeSubmenu] = useState(false);
  const [submenuCoords, setSubmenuCoords] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const [submenuDirection, setSubmenuDirection] = useState<'down' | 'up'>('down');
  const [submenuHeight, setSubmenuHeight] = useState<number>(0);

  const hoverAreaRef = useRef<HTMLDivElement>(null);
  const submenuTimeout = useRef<NodeJS.Timeout | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedRole = typeof window !== 'undefined' ? localStorage.getItem('user_role') : null;
    setRole(storedRole);
  }, []);

  const triggerOpenSubmenu = () => {
    if (submenuTimeout.current) {
      clearTimeout(submenuTimeout.current);
      submenuTimeout.current = null;
    }

    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const estimatedHeight = submenuLinks.length * 20 + 24;
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = window.innerHeight - rect.top;

      const shouldOpenUp = spaceBelow < estimatedHeight && spaceAbove > spaceBelow;
      const top = shouldOpenUp
        ? rect.top - estimatedHeight + 12 // abrimos hacia arriba usando top
        : rect.top - 12;

      setSubmenuDirection(shouldOpenUp ? 'up' : 'down');
      setSubmenuCoords({
        top,
        left: rect.right + 25,
      });

      const availableHeight = shouldOpenUp ? spaceAbove + 70 : spaceBelow + 600;
      setSubmenuHeight(Math.max(availableHeight, 0));
    }

    if (!submenuVisible) {
      setSubmenuVisible(true);
      setTimeout(() => setFadeSubmenu(true), 10);
    } else {
      setFadeSubmenu(true);
    }
  };

  const triggerCloseSubmenu = () => {
    if (submenuTimeout.current) {
      clearTimeout(submenuTimeout.current);
      submenuTimeout.current = null;
    }

    setFadeSubmenu(false);

    submenuTimeout.current = setTimeout(() => {
      setSubmenuVisible(false);
      submenuTimeout.current = null;
    }, 200);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.dataset.submenu = fadeSubmenu ? 'true' : 'false';
    }
  }, [fadeSubmenu]);

  if (!role) return null;
  const basePath = role === 'superuser' ? '/admin' : '/coordinator';

  return (
    <div className='text-[clamp(1rem,1.5vw,3rem)] relative z-20'>
      <div className='flex flex-col gap-[1.5vmax] px-2'>
        {[
          {
            icon: 'ChartBarHorizontal',
            label: 'Estadísticas',
            href: '/estadisticas',
            visible: ['superuser', 'venue_coordinator'],
          },
          { icon: 'Bank', label: 'SEDES', href: '/sedes', visible: ['superuser'] },
          { icon: 'Bank', label: 'Mi SEDE', href: '/mi-sede', visible: ['venue_coordinator'] },
          { icon: 'Users', label: 'Gestionar Usuarios', visible: ['superuser'] },
          {
            icon: 'PaperPlaneTilt',
            label: 'Solicitudes',
            href: '/solicitudes',
            visible: ['superuser', 'venue_coordinator'],
          },
          {
            icon: 'Certificate',
            label: 'Diplomas',
            href: '/diplomas',
            visible: ['superuser', 'venue_coordinator'],
          },
          { icon: 'Envelope', label: 'Correos', href: '/correos', visible: ['superuser'] },
        ]
          .filter((item) => item.visible.includes(role))
          .map((item) => {
            const IconComponent = Icons[item.icon as keyof typeof Icons];
            const fullPath = item.href ? `${basePath}${item.href}` : undefined;

            if (item.label === 'Gestionar Usuarios') {
              return (
                <div
                  key={item.label}
                  className='relative group'
                  onMouseEnter={triggerOpenSubmenu}
                  ref={triggerRef}
                >
                  <OptionLink label={item.label} Icon={IconComponent} forceActive={fadeSubmenu} />

                  {submenuVisible &&
                    createPortal(
                      <div
                        ref={hoverAreaRef}
                        className='fixed z-30'
                        style={{
                          top:
                            submenuDirection === 'down'
                              ? submenuCoords.top
                              : submenuCoords.top + 80,
                          left: submenuCoords.left - 200,
                          width: 260,
                          height:
                            submenuDirection === 'down' ? submenuHeight / 14 : submenuHeight / 3, // zona de hover
                        }}
                        onMouseEnter={triggerOpenSubmenu}
                        onMouseLeave={triggerCloseSubmenu}
                      >
                        {/* submenú real */}
                        <div
                          className={`absolute left-[200px] ${
                            submenuDirection === 'down' ? 'top-[12px]' : 'top-[-64px]'
                          } transition-opacity duration-200 ${
                            fadeSubmenu ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          {/* flechita */}
                          <div
                            className={`absolute -left-3 ${
                              submenuDirection === 'down' ? 'top-4' : 'top-20'
                            } w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[12px] border-r-[var(--primaryColor)]`}
                          />
                          <div
                            className='bg-[var(--primaryColor)] rounded-lg shadow-custom-dark w-60 p-2 flex flex-col border border-transparent overflow-y-auto scrollbar-hide'
                            style={{
                              maxHeight: submenuHeight,
                            }}
                          >
                            {submenuLinks.map(({ label, href, icon }) => {
                              const SubIcon = Icons[icon as keyof typeof Icons];
                              return (
                                <SubmenuLink key={label} label={label} Icon={SubIcon} href={href} />
                              );
                            })}
                          </div>
                        </div>
                      </div>,
                      document.body,
                    )}
                </div>
              );
            }

            return (
              <OptionLink
                key={item.label}
                label={item.label}
                Icon={IconComponent}
                href={fullPath}
                forceActive={submenuVisible && item.label === 'Gestionar Usuarios'}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Menu;
