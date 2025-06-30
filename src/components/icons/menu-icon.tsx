import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

export default function MenuIcon({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  return (
    <svg
      className={cn(
        'size-full cursor-pointer text-[#59d102]',
        // 'cursor-pointer rounded-xs bg-linear-51 from-[#f3f520] to-[#59d102] text-[#121212] transition-all duration-300 ease-in hover:from-[#f3f520]/[.9] hover:to-[#59d102]/[.9]',
        className,
      )}
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 6L19 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 11L19 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
