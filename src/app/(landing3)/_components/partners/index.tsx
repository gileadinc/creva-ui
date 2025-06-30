import BayerIcon from '@/components/icons/bayer-icon';
import CongnizantIcon from '@/components/icons/congnizant-icon';
import FutureIcon from '@/components/icons/future-icon';
import PayPalIcon from '@/components/icons/paypal-icon';
import TikTokIcon from '@/components/icons/tiktok-icon';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

export default function Partners({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  return (
    <section
      className={cn('dark:bg-clrCinder bg-clrMercury/40 py-8', className)}
    >
      <div className="mx-auto max-w-7xl text-center">
        <h3 className="dark:text-clrPorcelain text-xl font-medium opacity-[44%]">
          Trusted by the Best
        </h3>
        <ul className="mt-14 mb-8 flex w-full items-center justify-center gap-10 max-sm:flex-wrap xl:gap-24">
          {[TikTokIcon, PayPalIcon, FutureIcon, BayerIcon, CongnizantIcon].map(
            (Icon, idx) => (
              <li key={idx} className="block h-[32px] w-fit">
                <Icon className="opacity-40" />
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
