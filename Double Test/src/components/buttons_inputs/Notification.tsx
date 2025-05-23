'use client';
import React, { createContext, useCallback, useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import withIconDecorator from '../decorators/IconDecorator';
import * as Icons from '../icons';

interface NotificationProps {
  color: 'green' | 'yellow' | 'red' | 'purple';
  variant?: 'one' | 'two';
  title: string;
  message: string;
  iconName?: keyof typeof Icons;
  className?: string;
  onClose?: () => void;
  onManualClose?: () => void;
  duration?: number;
}

const STORAGE_KEY = (userId: string) => `notifications_${userId}`;

const Notification: React.FC<NotificationProps & { show?: boolean }> = ({
  color,
  variant = 'one',
  title,
  message,
  iconName,
  className = '',
  onClose,
  onManualClose,
  duration = 5000,
  show = true,
}) => {
  const iconClass = `notification-icon ${
    variant === 'two' ? `notification-icon-${color}-two` : `notification-icon-${color}`
  }`;
  const titleClass = `notification-title${variant === 'one' ? ` notification-title-${color}` : ''}`;
  const [visible, setVisible] = useState(false);
  const textClass =
    variant === 'one' ? 'notification-text notification-text-black' : 'notification-text';
  const closeClass =
    variant === 'two'
      ? 'notification-close notification-close-white'
      : `notification-close notification-close-${color}`;

  const IconComponent = withIconDecorator(
    iconName && Icons[iconName] ? Icons[iconName] : Icons.Check,
  );

  useEffect(() => {
    if (show) setVisible(true);
    return () => setVisible(false);
  }, [show]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onManualClose?.();
    }, 200);
  };

  // Cierre automático (timeout)
  useEffect(() => {
    if (!onClose) return;
    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        onClose();
      }, 200);
    }, duration);
    return () => clearTimeout(timeout);
  }, [onClose, duration]);

  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 24,
        right: 24,
        padding: '20px 30px 20px 18px',
        zIndex: 9999,
      }}
      className={`
        notification
        transition-all duration-200 ease-out
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        ${variant === 'two' ? `notification-${color}-two` : ''} ${className}
      `}
    >
      <div className={iconClass}>
        <IconComponent fillColor={'var(--text-color)'} width={40} height={40} />
      </div>
      <div className='notification-content'>
        <h3 className={titleClass}>{title}</h3>
        <p className={textClass}>{message}</p>
      </div>
      <button className={closeClass} onClick={handleClose}>
        &times;
      </button>
    </div>
  );
};

type Color = 'green' | 'yellow' | 'red' | 'purple';

interface NotificationOptions {
  color: Color;
  title: string;
  message: string;
  iconName?: keyof typeof Icons;
  variant?: 'one' | 'two';
  duration?: number;
}

export interface NotificationWithId extends NotificationOptions {
  id: number;
}

interface NotificationContextType {
  notifications: NotificationWithId[];
  notify: (options: NotificationOptions) => void;
  dismissToast: () => void;
  dismissFromHistory: (id: number) => void; // Asegúrate de exponer este método
}

const NotificationContext = createContext<NotificationContextType>({
  notifications: [],
  notify: () => {},
  dismissToast: () => {},
  dismissFromHistory: () => {},
});

export function useNotification() {
  return useContext(NotificationContext);
}

export const NotificationProvider = ({
  children,
  userId,
}: {
  children: React.ReactNode;
  userId: string;
}) => {
  const [notifications, setNotifications] = useState<NotificationWithId[]>([]);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastId, setToastId] = useState<number | null>(null);

  // Cargar notificaciones sólo si userId es válido y no "undefined"
  useEffect(() => {
    if (!userId || userId === 'undefined') return;
    const saved = localStorage.getItem(STORAGE_KEY(userId));
    setNotifications(saved ? JSON.parse(saved) : []);
  }, [userId]);

  // Guardar notificaciones sólo si userId es válido
  useEffect(() => {
    if (!userId || userId === 'undefined') return;
    localStorage.setItem(STORAGE_KEY(userId), JSON.stringify(notifications));
  }, [notifications, userId]);

  const notify = useCallback((options: NotificationOptions) => {
    const id = Date.now() + Math.random();
    setNotifications((prev) => [...prev, { ...options, id }]);
    setToastId(id);
    setToastVisible(false);
    setTimeout(() => setToastVisible(true), 10);
  }, []);

  const dismissToast = useCallback(() => {
    setToastVisible(false);
    // El historial persiste, no eliminamos del array aquí
  }, []);

  const dismissFromHistory = useCallback((id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const currentToast = notifications.find((n) => n.id === toastId);

  const portal =
    typeof window !== 'undefined' && currentToast && toastVisible
      ? ReactDOM.createPortal(
          <Notification
            {...currentToast}
            show={true}
            onClose={dismissToast}
            onManualClose={dismissToast}
          />,
          document.body,
        )
      : null;

  return (
    <NotificationContext.Provider
      value={{ notifications, notify, dismissToast, dismissFromHistory }}
    >
      {children}
      {portal}
    </NotificationContext.Provider>
  );
};
export function NotificationsHistory() {
  const { notifications, dismissFromHistory } = useNotification();
  return (
    <div>
      <h3>Historial de Notificaciones</h3>
      {notifications.length === 0 && <div>No hay notificaciones.</div>}
      {notifications.map((n) => (
        <div
          key={n.id}
          style={{ marginBottom: 12, border: '1px solid #eee', borderRadius: 6, padding: 8 }}
        >
          <b>{n.title}</b>: {n.message}
          <button style={{ marginLeft: 8 }} onClick={() => dismissFromHistory(n.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}
