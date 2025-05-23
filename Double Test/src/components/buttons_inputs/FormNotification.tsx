'use client';
import React, { useEffect, useRef, useCallback } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  messages: string[];
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, messages }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle Esc key to close modal
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  // Focus trapping
  useEffect(() => {
    if (isOpen) {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements?.[0] as HTMLElement;
      const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

      const handleTab = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement?.focus();
          } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement?.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keydown', handleTab);
      firstElement?.focus();

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keydown', handleTab);
      };
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300'>
      <div
        ref={modalRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-title'
        className='bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full transform transition-transform duration-300 scale-100'
      >
        <div className='flex justify-between items-center mb-4'>
          <h2 id='modal-title' className='text-xl font-bold text-red-500'>
            {title}
          </h2>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-white focus:outline-none'
            aria-label='Cerrar modal'
          >
            ✕
          </button>
        </div>
        <div className='mb-4'>
          {messages.length > 0 ? (
            messages.map((message, index) => (
              <p key={index} className='text-white'>
                {message}
              </p>
            ))
          ) : (
            <p className='text-white'>No hay mensajes para mostrar.</p>
          )}
        </div>
        <button
          onClick={onClose}
          className='w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500'
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

interface ToastProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto-dismiss after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='fixed top-4 right-4 z-50 transition-opacity duration-300'>
      <div
        role='alert'
        className='bg-green-500 text-white p-4 rounded-lg shadow-lg max-w-sm flex items-center justify-between'
      >
        <div dangerouslySetInnerHTML={{ __html: message }} />
        <button
          onClick={onClose}
          className='ml-4 text-white hover:text-gray-200 focus:outline-none'
          aria-label='Cerrar notificación'
        >
          ✕
        </button>
      </div>
    </div>
  );
};
