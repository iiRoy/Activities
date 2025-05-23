import React from 'react';
import { useNotification } from '../buttons_inputs/Notification';
import withIconDecorator from '../decorators/IconDecorator';
import * as Icons from '../icons';

const CloseComponent = withIconDecorator(Icons.X);

const colorClassMap: Record<string, string> = {
  green: 'var(--success)',
  yellow: 'var(--warning)',
  red: 'var(--primaryColor)',
  purple: 'var(--primaryColor)',
};

interface NotificationMenuProps {
  open: boolean;
  onClose: () => void;
}

const NotificationMenu: React.FC<NotificationMenuProps> = ({ open, onClose }) => {
  // Corrección aquí:
  const { notifications, dismissFromHistory } = useNotification();

  if (!open) return null;

  return (
    <div
      className={`
        h-full flex flex-col items-center
        bg-[#2e1c31] rounded-xl shadow-xl border border-[#413145]
        transition-all duration-200 ease-out
        ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
        min-h-[30vh] max-h-[80vh] overflow-y-auto scrollbar-hide
      `}
      style={{ minWidth: 240 }}
    >
      <div className='flex items-center justify-center p-5 w-full border-b border-[#413145]'>
        <span className='font-semibold text-xl text-[var(--text-color)] tracking-wider'>
          Notificaciones
        </span>
      </div>
      <ul className='flex-1 w-[20vw] flex flex-col gap-2 pt-4 pb-6 px-2 pr-5'>
        {notifications.length === 0 && (
          <li className='p-6 pr-0 text-[#aa8bb2] text-base text-center font-light select-none'>
            Sin notificaciones
          </li>
        )}
        {notifications.map((n) => {
          const IconComponent = n.iconName ? withIconDecorator(Icons[n.iconName]) : null;

          return (
            <li
              key={n.id}
              className={`
                group flex items-center gap-3 px-3 py-3 rounded-xl
                bg-[#271a29] hover:bg-[#3a2741] transition
              `}
            >
              <div className='flex-shrink-0 pt-1'>
                {IconComponent && (
                  <IconComponent width={30} height={30} fillColor={colorClassMap[n.color]} />
                )}
              </div>
              <div className='flex flex-col flex-1 min-w-[1vw] pr-1'>
                <div
                  className='text-[#ede0e8] text-[1.2vw] font-semibold mb-0.5 break-words leading-tight'
                  style={{ wordBreak: 'break-word', lineHeight: '1.25' }}
                >
                  {n.title}
                </div>
                <div
                  className='text-[#e5d5e9] text-[1vw] font-normal whitespace-pre-line leading-snug break-words'
                  style={{ wordBreak: 'break-word', lineHeight: '1.5' }}
                >
                  {n.message}
                </div>
              </div>
              <button
                className='ml-1 p-0.5 rounded-full transition flex-shrink-0'
                style={{ lineHeight: 0, alignSelf: 'flex-start' }}
                onClick={() => dismissFromHistory(n.id)}
                title='Cerrar'
                tabIndex={0}
              >
                <CloseComponent width={18} height={18} fillColor='#aa8bb2' />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NotificationMenu;
