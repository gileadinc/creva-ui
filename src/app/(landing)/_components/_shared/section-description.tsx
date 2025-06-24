'use client';
import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

export function SectionDescription({
  className,
  text,
}: {
  className?: React.CSSProperties | ClassValue | string;
  text: string;
}) {
  return (
    <motion.p
      variants={variants.fadeInUp}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className={cn(
        'text-clrTextDark dark:text-clrSeaShell font-opensans max-w-[580px] justify-start text-lg leading-[24px] font-light',
        className,
      )}
    >
      {text}
    </motion.p>
  );
}
