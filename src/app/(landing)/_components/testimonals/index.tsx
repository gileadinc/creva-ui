'use client';

import { testimonialsSectionData } from '@/constants/data';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { motion } from 'motion/react';
import {
  SectionDescription,
  SectionLabel,
  SectionTitle,
  SectionWrapper,
} from '../_shared';
export default function Testimonals({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { title, subtitle, description, cards } = testimonialsSectionData;
  return (
    <div id="testimonials" className="mt-10 md:mt-20 lg:mt-40">
      <SectionWrapper className={cn('', className)}>
        <SectionLabel className="" text={subtitle} />
        <SectionTitle text={title} />
        <SectionDescription text={description} />
        <div className="relative container mt-20 overflow-hidden py-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white via-white/20 to-transparent dark:from-[#0c0c0c] dark:via-[#0c0c0c]/70" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white via-white/20 to-transparent dark:from-[#0c0c0c] dark:via-[#0c0c0c]/70" />

          <motion.ul
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              ease: 'linear',
              duration: 40,
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: 'paused' }}
            className="flex w-max gap-8 sm:gap-10 xl:gap-12"
          >
            {[...cards, ...cards].map((item, idx) => (
              <motion.li
                className="shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * (idx % cards.length),
                }}
                key={idx}
              >
                <TestimonialCard item={item} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </SectionWrapper>
    </div>
  );
}

function TestimonialCard({
  item,
}: {
  item: {
    name: string;
    position: string;
    text: string;
  };
}) {
  const { name, position, text } = item;
  return (
    <div className="bg-clrSeaShell dark:bg-clrOnyx text-clrTextDark dark:text-clrSeaShell relative h-60 w-80 rounded-xl px-6 py-6">
      <div className="flex h-full flex-col">
        <p className="font-raleway justify-start text-sm leading-[24px] font-light capitalize">
          &quot;{text}&quot;
        </p>
        <p className="font-opensans mt-auto mb-2 leading-tight font-semibold capitalize">
          {name}
        </p>
        <p className="text-clrTextDark dark:text-clrSeaShell font-opensans text-sm leading-none font-light capitalize">
          {position}
        </p>
      </div>
    </div>
  );
}
