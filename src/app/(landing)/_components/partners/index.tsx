'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';
import TikTokIcon from '@/components/icons/tiktok-icon';
import PayPalIcon from '@/components/icons/paypal-icon';
import FutureIcon from '@/components/icons/future-icon';
import BayerIcon from '@/components/icons/bayer-icon';
import CongnizantIcon from '@/components/icons/congnizant-icon';

export default function Partners({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  return (
    <div className={cn('relative pb-20 sm:pb-0', className)}>
      {/* bg-blur color */}
      <div className="xs:h-[180px] relative z-20 sm:h-[280px] md:h-[320px]">
        <div className="absolute inset-0 -z-10 grid h-full w-full place-content-center opacity-60">
          <div className="relative mx-auto h-24 w-[calc(100vw-20px)] blur-[120px]">
            <div className="absolute top-0 left-0 h-24 w-1/2 rounded-[389px] bg-[#00cc99]" />
            <div className="absolute top-0 left-1/2 h-24 w-1/2 rounded-[300px] bg-[#3c91e6]" />
          </div>
        </div>
        <div className="dark:bg-clrBlackPearl z-10 bg-white py-10">
          <div className="container mx-auto w-full">
            <motion.ul
              variants={variants.staggerContainer}
              initial="start"
              whileInView="end"
              viewport={{ once: true }}
              className="flex w-full items-center justify-center gap-10 max-md:flex-wrap xl:gap-24"
            >
              {[
                TikTokIcon,
                PayPalIcon,
                FutureIcon,
                BayerIcon,
                CongnizantIcon,
              ].map((Icon, idx) => (
                <motion.li
                  key={idx}
                  variants={variants.fadeInUp}
                  className="block h-[32px] w-fit"
                >
                  {<Icon key={idx} className="opacity-40" />}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
}
