'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

export function ModeToggle({
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
// <DropdownMenu>
//   <DropdownMenuTrigger asChild>
//     <Button className={cn(className)} variant="outline" size="icon">
//       <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
//       <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
//       <span className="sr-only">Toggle theme</span>
//     </Button>
//   </DropdownMenuTrigger>
//   <DropdownMenuContent
//     align="end"
//     className="dark:bg-clrBlackPearl/80 border-clrTextLight text-clrTextLight backdrop-blur-lg selection:bg-none dark:border-white/80 dark:text-white"
//   >
//     <DropdownMenuItem
//       className="dark:hover:bg-clrBlackPearl/60"
//       onClick={() => setTheme('light')}
//     >
//       Light
//     </DropdownMenuItem>
//     <DropdownMenuItem
//       className="dark:hover:bg-clrBlackPearl/60"
//       onClick={() => setTheme('dark')}
//     >
//       Dark
//     </DropdownMenuItem>
//     <DropdownMenuItem
//       className="dark:hover:bg-clrBlackPearl/60"
//       onClick={() => setTheme('system')}
//     >
//       System
//     </DropdownMenuItem>
//   </DropdownMenuContent>
// </DropdownMenu>
