'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';
import { pricingData } from '@/constants/data';
import { IPricingItem } from '@/types';
import { useRouter } from 'next/navigation';
import {
  MatomoAction,
  MatomoCategory,
  trackMatomoEvent,
} from '@/lib/matomo-utils';

export default function Pricing({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  return (
    <div
      id="pricing"
      className={cn('py-14 sm:py-18 md:py-24 md:pt-36 lg:pt-40', className)}
    >
      <div className="container mx-auto space-y-5">
        <motion.h1
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="text-clrTextLight dark:text-clrText font-nunito xs:leading-[52px] xs:text-[44px] mx-auto max-w-[753px] text-center text-[40px] leading-[52px] font-bold capitalize sm:text-5xl"
        >
          Pricing Plan for Your Recruitment Solutions
        </motion.h1>
        <motion.p
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="dark:text-clrText text-clrTextLight font-roboto mx-auto max-w-3xl px-2 text-center text-xl leading-[32px] font-light tracking-wide"
        >
          Discover our flexible pricing options tailored to meet your hiring
          needs and budget.
        </motion.p>
      </div>
      <div className="relative mt-8 py-8 sm:mt-10 lg:mt-20 xl:mt-40">
        <motion.ul
          variants={variants.staggerContainer}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-10 max-sm:px-[5%]"
        >
          {pricingData.map((item, idx) => (
            <motion.li
              key={idx}
              className="relative z-20 w-[400px] self-stretch xl:nth-[2]:-top-20"
              variants={variants.fadeInUp}
            >
              <PricingCard item={item} highlight={item.type === 'Pro'} />
            </motion.li>
          ))}
        </motion.ul>
        <div className="absolute inset-0 grid place-content-center">
          <div className="relative h-[600px] w-[calc(100vw-20px)]">
            <div className="absolute inset-0 z-10 grid h-full w-full place-content-center opacity-60">
              <div className="relative mx-auto h-24 w-[calc(100vw-20px)] blur-[120px]">
                <div className="absolute top-0 left-0 h-24 w-1/2 rounded-[389px] bg-[#00cc99]" />
                <div className="absolute top-0 left-1/2 h-24 w-1/2 rounded-[300px] bg-[#3c91e6]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingCard({
  item,
  highlight,
}: {
  item: IPricingItem;
  highlight?: boolean;
}) {
  const router = useRouter();
  const { type, price, per, numberOfUsers, badge, features } = item;
  return (
    <div
      className={cn(
        highlight
          ? 'bg-linear-48 from-[#5cd9ba] to-[#81b5e9] p-[3px]'
          : 'bg-clrText border border-black p-[1px] dark:border-transparent',
        'h-full rounded-lg',
      )}
    >
      <div className="dark:text-clrText dark:bg-clrBlackPearl flex h-full flex-col space-y-3 rounded-lg bg-white p-6 text-black">
        <div className="flex items-center justify-between">
          <span className="font-nunito block text-4xl font-semibold">
            {type}
          </span>
          {badge && (
            <span className="dark:text-clrBlackPearl block w-24 rounded-3xl bg-[#5cd9ba] text-center text-white">
              {badge}
            </span>
          )}
        </div>

        <div>
          <span className="text-3xl font-medium">${price}</span>
          <span className="text-2xl font-light opacity-[80%]">
            {per && `/${per}`}
          </span>
        </div>
        <p className="font-light">{numberOfUsers}</p>
        <ul className="mt-4 mb-8 min-h-[320px] space-y-2">
          {features.map((feature, idx) => (
            <li className="relative" key={idx}>
              <span className="absolute w-[10px] text-green-500">{'✓'}</span>
              <span className="ml-[20px] block opacity-[90%] sm:font-light sm:opacity-[80%]">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            trackMatomoEvent(
              MatomoCategory.Pricing,
              MatomoAction.Clicked,
              `Pricing Get Started Button (${type})`,
            );
            router.push('/sign-up');
          }}
          className={cn(
            highlight
              ? 'dark:text-clrBlackPearl border-transparent bg-linear-48 from-[#5cd9ba] to-[#81b5e9] text-white hover:opacity-80'
              : 'dark:text-clrText dark:border-clrText text-clrTextLight border-clrTextLight bg-transparent hover:bg-black/5 dark:hover:bg-white/5',
            'font-roboto mt-auto block w-full cursor-pointer rounded-xl border py-2 font-medium transition-all duration-300 ease-in',
          )}
        >
          Get Started {type === 'Free' ? `For ${type}` : `With ${type}`}
        </button>
      </div>
    </div>
  );
}
