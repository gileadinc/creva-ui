'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import TikTokIcon from '@/components/icons/tiktok-icon';
import PayPalIcon from '@/components/icons/paypal-icon';
import FutureIcon from '@/components/icons/future-icon';
import BayerIcon from '@/components/icons/bayer-icon';
import CongnizantIcon from '@/components/icons/congnizant-icon';
import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';
export default function Partners({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  return (
    <div className={cn('relative mt-10 pt-10 pb-10 md:pt-30', className)}>
      <div className="">
        <h3 className="text-clrTextDark dark:text-clrTextLight font-opensans justify-start text-center text-base leading-normal font-semibold uppercase">
          In Partnership With
        </h3>
        <motion.ul
          variants={variants.staggerContainer}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="mt-14 flex w-full items-center justify-center gap-10 max-sm:flex-wrap xl:gap-24"
        >
          {[TikTokIcon, PayPalIcon, FutureIcon, BayerIcon, CongnizantIcon].map(
            (Icon, idx) => (
              <motion.li
                variants={variants.fadeInUp}
                key={idx}
                className="block h-[32px] w-fit"
              >
                {<Icon key={idx} className="opacity-40" />}
              </motion.li>
            ),
          )}
        </motion.ul>
      </div>
    </div>
  );
}
