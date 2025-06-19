'use client';
import { useAppStore } from '@/store/useAppStore';
import ReactLenis from 'lenis/react';

export default function ReactLenisProvider() {
  const { isModalOpen, isCtaDialogOpen } = useAppStore();
  if (isModalOpen || isCtaDialogOpen) {
    return null;
  }
  return <ReactLenis root />;
}
