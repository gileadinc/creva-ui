'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';
import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
// const partnersImages2 = [
//   '/assets/svg/tiktok-icon.svg',
//   '/assets/svg/paypal-icon.svg',
//   '/assets/svg/future-icon.svg',
//   '/assets/svg/bayer-icon.svg',
//   '/assets/svg/congnizant-icon.svg',
// ];
let partnersImages = [
  {
    light: '/assets/svg/tiktok-icon-light.svg',
    dark: '/assets/svg/tiktok-icon.svg',
  },
  {
    light: '/assets/svg/paypal-icon-light.svg',
    dark: '/assets/svg/paypal-icon.svg',
  },
  {
    light: '/assets/svg/future-icon-light.svg',
    dark: '/assets/svg/future-icon.svg',
  },
  {
    light: '/assets/svg/bayer-icon-light.svg',
    dark: '/assets/svg/bayer-icon.svg',
  },
  {
    light: '/assets/svg/congnizant-icon-light.svg',
    dark: '/assets/svg/congnizant-icon.svg',
  },
];
export default function Partners({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  // Ensures `resolvedTheme` is ready before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

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
              className="flex w-full items-center justify-center gap-8 max-md:flex-wrap xl:gap-20"
            >
              {partnersImages.map(({ light, dark }, idx) => (
                <motion.li
                  key={idx}
                  variants={variants.fadeInUp}
                  className="block h-[32px] w-fit"
                >
                  {mounted && (
                    <Image
                      className="size-full object-contain text-[#F0F0F0] opacity-40"
                      height={60}
                      width={80}
                      src={resolvedTheme === 'dark' ? dark : light}
                      alt={`partner-${idx}`}
                    />
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
}
