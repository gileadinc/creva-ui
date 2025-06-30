'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import {
  SectionContent,
  SectionDescription,
  SectionSubTitle,
  SectionTitle,
} from '../_shared/section';
import { AtsIntegrationData } from '@/constants/data';
import Image from 'next/image';

import { motion } from 'motion/react';

const atsImages = [
  '/assets/img/brand-1.png',
  '/assets/img/brand-2.png',
  '/assets/img/brand-3.png',
  '/assets/img/brand-4.png',
  '/assets/img/brand-5.png',
  '/assets/img/brand-6.png',
  '/assets/img/brand-7.png',
  '/assets/img/brand-8.png',
  '/assets/img/brand-9.png',
  '/assets/img/brand-10.png',
  '/assets/img/brand-11.png',
  '/assets/img/brand-12.png',
  '/assets/img/brand-13.png',
];
export default function AtsIntegration({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { title, subtitle, subIcon, description } = AtsIntegrationData;
  return (
    <section className={cn('pt-20 sm:pt-30 md:pt-38 lg:pt-42', className)}>
      <div
        className={cn(
          'container mx-auto',
          'grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-4',
        )}
      >
        <div className="container mx-auto space-y-2 max-sm:px-[3%]">
          <SectionSubTitle className="lg:mx-0" text={subtitle} icon={subIcon} />
          <SectionTitle className="lg:text-left" text={title} />
          <SectionDescription
            text={description}
            className="mt-3 lg:text-left"
          />
        </div>
        <div className="mt-4 max-h-[400px] min-h-[400px] max-sm:pt-10 sm:mt-10">
          <SectionContent className="size-full">
            <MarqueeImages />
          </SectionContent>
        </div>
      </div>
    </section>
  );
}

export function MarqueeImages() {
  return (
    <div className="relative size-full overflow-hidden">
      {/* Top Shade */}
      <div className="dark:from-clrOnyx dark:via-clrOnyx/70 pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-white via-white/20 to-transparent" />
      {/* Bottom Shade */}
      <div className="dark:via-clrOnyx/70 dark:from-clrOnyx pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-white via-white/20 to-transparent" />

      <motion.div
        className={`grid grid-cols-2 gap-5 gap-y-10 sm:max-lg:grid-cols-3 lg:grid-cols-2`}
        style={{ minHeight: '200%' }} // make enough height for loop
        // initial={{ y: '0%' }}
        animate={{ y: ['0%', '-50%'] }}
        transition={{
          duration: 40,
          delay: 1.5,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {[...atsImages, ...atsImages, ...atsImages, ...atsImages].map(
          (src, i) => (
            <div key={i} className="relative aspect-[5/2] w-full">
              <Image
                src={src}
                alt={`brand-${i}`}
                fill
                className="object-contain"
              />
            </div>
          ),
        )}
      </motion.div>
    </div>
  );
}
