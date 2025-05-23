'use client';
import React, { useEffect, useState } from 'react';
import { NotificationProvider } from '@/components/buttons_inputs/Notification';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const storedUserId = typeof window !== 'undefined' ? localStorage.getItem('user_id') : null;
    setUserId(storedUserId);
  }, []);

  if (!userId) {
    return <div>Cargando...</div>;
  }

  return <NotificationProvider userId={userId}>{children}</NotificationProvider>;
}
