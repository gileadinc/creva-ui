import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

export default function CustomButton({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  return (
    <div className={cn('', className)}>
      <div>CustomButton</div>
    </div>
  );
}
