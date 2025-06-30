// 'use client';
// import React from 'react';
// import { cn } from '@/lib/utils'; // Optional, or use `clsx`

// interface RotatingConicBorderBoxProps {
//   className?: string;
//   speed?: 'slow' | 'medium' | 'fast' | string; // custom speed if needed
//   width?: string; // Tailwind class, e.g. w-60
//   height?: string; // Tailwind class, e.g. h-60
//   lightColors?: string; // conic-gradient string for light mode
//   darkColors?: string; // conic-gradient string for dark mode
//   children?: React.ReactNode;
// }

// const RotatingConicBorderBox: React.FC<RotatingConicBorderBoxProps> = ({
//   className,
//   speed = 'slow',
//   width = 'w-60',
//   height = 'h-60',
//   lightColors = 'conic-gradient(from 0deg, #facc15, #4ade80, #facc15)',
//   darkColors = 'conic-gradient(from 0deg, #facc15, #1e293b, #facc15)',
//   children,
// }) => {
//   return (
//     <div className={cn('relative', width, height, className)}>
//       {/* Rotating conic border ring */}
//       <div
//         className={cn(
//           'absolute inset-0 rounded-xl p-[2px]',
//           speed === 'slow' && 'rotate-slow',
//           speed === 'medium' && 'rotate-medium',
//           speed === 'fast' && 'rotate-fast',
//         )}
//         style={{
//           background: lightColors,
//         }}
//       >
//         <div
//           className="absolute inset-0 rounded-xl p-[2px]"
//           style={{
//             background: darkColors,
//           }}
//         ></div>
//         {/* Transparent center layer */}
//         <div className="relative h-full w-full rounded-xl bg-transparent backdrop-blur-sm" />
//       </div>

//       {/* Content on top */}
//       <div className="relative z-10 flex h-full w-full items-center justify-center rounded-xl bg-transparent">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default RotatingConicBorderBox;

'use client';
import React from 'react';
import { cn } from '@/lib/utils'; // or use clsx

interface Props {
  className?: string;
  width?: string; // Tailwind width class (e.g. w-64)
  height?: string; // Tailwind height class (e.g. h-64)
  speed?: 'slow' | 'medium' | 'fast';
  lightGradient?: string; // CSS gradient stops string
  darkGradient?: string;
  children?: React.ReactNode;
}

const RotatingBorderBox = ({
  className,
  width = 'w-64',
  height = 'h-64',
  speed = 'medium',
  lightGradient = 'yellow, lime, yellow',
  darkGradient = 'yellow, #1e1e1e, yellow',
  children,
}: Props) => {
  const speedMap = {
    slow: 'duration-[10s]',
    medium: 'duration-[6s]',
    fast: 'duration-[2s]',
  };

  return (
    <div className={cn('relative', width, height, className)}>
      {/* Rotating border layer */}
      <div
        className={cn(
          'border-gradient-rotate absolute inset-0 rounded-xl p-[3px]',
          speedMap[speed],
          'z-0',
        )}
        style={
          {
            '--gradient-stops': lightGradient,
          } as React.CSSProperties
        }
      >
        {/* Empty div for masking */}
      </div>

      {/* Dark mode override (gradient stops) */}
      <div
        className={cn(
          'border-gradient-rotate absolute inset-0 rounded-xl p-[3px]',
          speedMap[speed],
          'z-0 hidden dark:block',
        )}
        style={
          {
            '--gradient-stops': darkGradient,
          } as React.CSSProperties
        }
      >
        {/* Empty div for masking */}
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex h-full w-full items-center justify-center rounded-xl bg-transparent">
        {children}
      </div>
    </div>
  );
};

export default RotatingBorderBox;
