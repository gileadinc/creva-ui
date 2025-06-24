'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';
import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';

import {
  MatomoAction,
  MatomoCategory,
  trackMatomoEvent,
} from '@/lib/matomo-utils';
import { useRouter } from 'next/navigation';
export default function Cta({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const router = useRouter();
  const handleGetStartedForFreeClick = () => {
    trackMatomoEvent(
      MatomoCategory.Button,
      MatomoAction.Clicked,
      'Get Started For Free Button (CTA)',
    );
    router.push('/sign-up');
  };

  return (
    <div className={cn('relative mx-auto w-full max-w-6xl', className)}>
      <div className="absolute right-0 bottom-[-100px] left-0 h-[200px]">
        <div className="absolute inset-0 grid h-full w-full place-content-center opacity-60">
          <div className="relative mx-auto h-24 w-[calc(100vw-20px)] blur-[120px]">
            <div className="absolute top-0 left-0 h-24 w-1/2 rounded-[389px] bg-[#00cc99]" />
            <div className="absolute top-0 left-1/2 h-24 w-1/2 rounded-[300px] bg-[#3c91e6]" />
          </div>
        </div>
      </div>
      <div className="relative bottom-[-40px] z-40 container mx-auto">
        <div className="relative h-fit w-full rounded-xl bg-linear-48 from-[#5cd9ba] to-[#81b5e9] py-8">
          <div className="absolute top-[5%] right-0 left-0 rotate-180">
            <Image
              className="size-full object-cover"
              src="/assets/svg/cta-pattern-large.svg"
              alt="pattern"
              width={100}
              height={100}
            />
          </div>
          <div className="absolute right-0 bottom-0 left-0">
            <Image
              className="size-full object-cover"
              src="/assets/svg/cta-pattern-large.svg"
              alt="pattern"
              width={100}
              height={100}
            />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-[689px] space-y-4">
            <motion.h1
              variants={variants.fadeInUp}
              initial="start"
              whileInView="end"
              viewport={{ once: true }}
              className="font-nunito mx-auto max-w-xl text-center text-[36px] leading-[44px] font-extrabold text-white uppercase sm:text-5xl sm:leading-[54px] dark:text-[#0b132b]"
            >
              Make Your Hiring Hustle Free
            </motion.h1>

            <motion.button
              onClick={handleGetStartedForFreeClick}
              variants={variants.buttonVariant}
              initial="start"
              whileInView="end"
              viewport={{ once: true }}
              className="dark:bg-clrBlackPearl/95 dark:hover:bg-clrBlackPearl font-roboto dark:text-clrText text-clrTextLight mx-auto block cursor-pointer justify-start bg-white px-3 py-2 text-center font-medium hover:bg-white/85"
            >
              Get Started For Free
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
