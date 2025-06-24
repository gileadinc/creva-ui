'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

export function ThemeToggleBtn({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <motion.div
      className={cn('', className)}
      drag
      dragElastic={0.5}
      dragMomentum={false}
      dragSnapToOrigin
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      <Button
        onClick={() => {
          if (resolvedTheme === 'dark') {
            setTheme('light');
          } else if (resolvedTheme === 'light') {
            setTheme('dark');
          } else {
            setTheme('system');
          }
        }}
        variant="outline"
        className="border-[#00000039]"
        size="icon"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      </Button>
    </motion.div>
  );
}
