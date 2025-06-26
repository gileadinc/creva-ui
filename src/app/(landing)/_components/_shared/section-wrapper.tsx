import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

export function SectionWrapper({
  className,
  children,
}: {
  className?: React.CSSProperties | ClassValue | string;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        'container mx-auto max-w-7xl px-[2%] pt-10 md:pt-20 lg:pt-30',
        className,
      )}
    >
      {children}
    </section>
  );
}
