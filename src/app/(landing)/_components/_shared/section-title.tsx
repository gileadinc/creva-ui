'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';

export function SectionTitle({
  className,
  text,
}: {
  className?: React.CSSProperties | ClassValue | string;
  text: string;
}) {
  return (
    <motion.h2
      variants={variants.fadeInUp}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className={cn(
        'font-raleway text-clrTextDark dark:text-clrTextLight max-w-[780px] pt-4 pb-4 text-4xl leading-[40px] font-light capitalize md:text-5xl md:leading-[52.67px]',
        className,
      )}
    >
      {text}
    </motion.h2>
  );
}
