'use client';

import { useRouter, usePathname } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const TransitionContext = createContext<{
  showOverlay: boolean;
  triggerTransition: (href: string) => void;
}>({
  showOverlay: false,
  triggerTransition: () => {},
});

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [targetPath, setTargetPath] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const triggerTransition = (href: string) => {
    setShowOverlay(true);
    setTargetPath(href);

    setTimeout(() => {
      if (href !== pathname) {
        router.push(href);
      }
    }, 200);
  };

  useEffect(() => {
    if (targetPath && pathname === targetPath) {
      setTimeout(() => {
        setShowOverlay(false);
        setTargetPath(null);
      }, 600);
    }
  }, [pathname, targetPath]);

  return (
    <TransitionContext.Provider value={{ showOverlay, triggerTransition }}>
      {children}

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key='overlay'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: targetPath && pathname === targetPath ? 0.6 : 0.2 }}
            className='fixed top-0 left-0 w-full h-full z-20 bg-back pointer-events-none'
          />
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  return useContext(TransitionContext);
}
