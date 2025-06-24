'use client';

import { useEffect } from 'react';
import { useAppStore } from '@/store/useAppStore';

export function CTATrigger() {
  const { openCtaDialog } = useAppStore();

  useEffect(() => {
    const hasShownCta = sessionStorage.getItem('cta_shown');

    if (!hasShownCta) {
      const timer = setTimeout(() => {
        openCtaDialog();
        sessionStorage.setItem('cta_shown', 'true');
      }, 15000); // show after 15 seconds

      return () => clearTimeout(timer);
    }
  }, [openCtaDialog]);

  return null;
}
