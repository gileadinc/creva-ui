import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';

export default function MaskImage({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  return (
    <div className={cn('', className)}>
      <Image
        className="bg-clrCinder/80 absolute inset-0 -z-20 hidden size-full object-cover dark:block"
        src={'/assets/svg/hero-shade-dark.svg'}
        alt="hero-banner"
        width={100}
        height={100}
      />
      <Image
        className="absolute inset-0 -z-20 block size-full object-cover dark:hidden"
        src={'/assets/svg/hero-shade-light.svg'}
        alt="hero-banner"
        width={100}
        height={100}
      />
    </div>
  );
}
