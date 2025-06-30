import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

export default function AgentsMaskTop({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  <div
    className={cn(
      'h-[100px] w-full bg-gradient-to-b from-white to-transparent dark:from-black',
      className,
    )}
  ></div>;
}

// function x(){
//   return  <svg
//   className={cn('text-clrPorcelain dark:text-[#121212]', className)}
//   width="1728"
//   height="312"
//   viewBox="0 0 1728 312"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <g filter="url(#filter0_f_1225_423)">
//     <rect
//       x="1768"
//       y="212"
//       width="1857"
//       height="112"
//       transform="rotate(-180 1768 212)"
//       fill="currentColor"
//     />
//   </g>
//   <defs>
//     <filter
//       id="filter0_f_1225_423"
//       x="-189"
//       y="0"
//       width="2057"
//       height="312"
//       filterUnits="userSpaceOnUse"
//       colorInterpolationFilters="sRGB"
//     >
//       <feFlood floodOpacity="0" result="BackgroundImageFix" />
//       <feBlend
//         mode="normal"
//         in="SourceGraphic"
//         in2="BackgroundImageFix"
//         result="shape"
//       />
//       <feGaussianBlur
//         stdDeviation="50"
//         result="effect1_foregroundBlur_1225_423"
//       />
//     </filter>
//   </defs>
// </svg>
// }
