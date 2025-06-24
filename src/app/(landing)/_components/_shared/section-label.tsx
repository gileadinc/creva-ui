'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';

export function SectionLabel({
  className,
  text,
}: {
  className?: React.CSSProperties | ClassValue | string;
  text: string;
}) {
  return (
    <motion.div
      variants={variants.fadeInUp}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className={cn(
        'dark:bg-clrCinder bg-clrSeaShell grid h-8 max-w-40 min-w-36 place-content-center rounded-[3px] px-2',
        className,
      )}
    >
      <div className="text-clrBrand font-raleway text-base leading-none font-medium tracking-wide">
        {text}
      </div>
    </motion.div>
  );
}
