'use client';
import { IPricingPlan, pricingSectionData } from '@/constants/data';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import {
  SectionDescription,
  SectionLabel,
  SectionTitle,
  // SectionWrapper,
} from '../_shared';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
export default function Pricing({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { title, subtitle, description, plans } = pricingSectionData;
  return (
    <div id="pricing" className="mt-10 md:mt-20 lg:mt-40">
      <div className={cn('pt-10 md:pt-20 lg:pt-30', className)}>
        <div className="dark:bg-clrWoodsmoke container mx-auto max-w-7xl px-[2%]">
          <SectionLabel className="" text={subtitle} />
          <SectionTitle text={title} />
          <SectionDescription text={description} />
        </div>
        <div className="relative mx-auto my-10 py-10 md:my-20 lg:my-30">
          <div className="absolute inset-0 -inset-y-40 w-full">
            <Image
              className="size-full object-contain opacity-20 dark:opacity-30"
              src="/assets/img/pricing-bg.png"
              alt="mask-image"
              width={1000}
              height={1000}
            />
          </div>
          <div className="absolute inset-0 -inset-y-20 w-full">
            <Image
              className="size-full rotate-90 object-contain opacity-10 dark:opacity-30"
              src="/assets/img/pricing-bg.png"
              alt="mask-image"
              width={1000}
              height={1000}
            />
          </div>
          <ul
            className={cn(
              'dark:bg-clrWoodsmoke',
              'shadow-[-10px_-10px_10px_rgba(0,0,0,0.1),10px_10px_10px_rgba(0,0,0,0.1)]',

              'relative container mx-auto max-w-7xl rounded-sm px-6 py-10 md:py-4',
              'grid grid-cols-1 max-md:gap-10 md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[0.75fr_1fr_1fr_1fr]',
              '',
            )}
          >
            <div className="dark:bg-clrWoodsmoke absolute inset-0 z-30 rounded-sm bg-white"></div>
            <li className="z-40 max-lg:hidden">
              <PricingCard isHolder item={plans[0]} />
            </li>
            {plans.map((plan, idx) => (
              <li key={idx} className="z-40">
                <PricingCard item={plan} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function PricingCard({
  item,
  isHolder,
}: {
  item: IPricingPlan;
  isHolder?: boolean;
}) {
  const { type, price, features } = item;
  const router = useRouter();
  return (
    <div
      className={cn(
        'dark:bg-clrWoodsmoke bg-white p-4 px-2',
        'max-md:border-clrBrand/40 max-md:rounded-md max-md:border-2 max-md:p-6',
      )}
    >
      <div
        className={cn(
          'font-raleway bg-clrBrand/20 grid w-full place-content-center rounded-xs py-3 text-2xl font-semibold',
          isHolder && 'pointer-events-none invisible opacity-0',
        )}
      >
        <span className="dark:text-clrTextLight">{type}</span>
      </div>
      <div
        className={cn(
          'font-opensans my-10 line-clamp-1',
          isHolder && 'pointer-events-none invisible opacity-0',
          'sm:max-md:text-center',
          !isHolder ? 'pl-5' : '',
        )}
      >
        <span className="text-4xl font-medium">
          {type === 'Free'
            ? `$${price}`
            : type === 'Pro'
              ? `$${price}`
              : 'Custom Quote'}
        </span>
        <span className="text-lg font-light">
          {type === 'Free' ? '/Month' : type === 'Pro' ? '/Org' : ''}
        </span>
      </div>
      <ul className="space-y-4">
        {features.map(({ key, value }, idx) => (
          <li
            key={idx}
            className={cn(
              'dark:text-clrTextLight font-opensans text-clrTextDark dark:font-light',
              isHolder ? 'font-semibold xl:text-lg dark:font-semibold' : '',
              'md:min-h-[80px] lg:min-h-[60px]',
              !isHolder ? 'pl-5' : '',
            )}
          >
            <span className="hidden max-sm:block md:block">
              {isHolder ? key : value}
            </span>
            <div className="hidden grid-cols-[1fr_2fr] sm:max-md:grid">
              <span className="font-semibold">{key}</span>
              <span>{value}</span>
            </div>
          </li>
        ))}
        <li className="mt-10 w-full md:mt-0">
          {!isHolder && type === 'Pro' && (
            <Button
              onClick={() => {
                router.push('/sign-up');
              }}
              className="font-roboto h-12 w-full cursor-pointer rounded-xs text-base font-medium"
              variant={'brand'}
            >
              Get Started With {type}
            </Button>
          )}
          {!isHolder && type === 'Free' && (
            <Button
              onClick={() => {
                router.push('/sign-up');
              }}
              className="font-roboto h-12 w-full cursor-pointer rounded-xs border-2 text-base font-medium"
              variant={'brandOutline'}
            >
              Get Started For {type}
            </Button>
          )}
          {!isHolder && type === 'Enterprise' && (
            <Button
              onClick={() => {
                router.push('/sign-up');
              }}
              className="font-roboto h-12 w-full cursor-pointer rounded-xs border-2 text-base font-medium"
              variant={'brandOutline'}
            >
              Contact Us
            </Button>
          )}
        </li>
      </ul>
    </div>
  );
}
