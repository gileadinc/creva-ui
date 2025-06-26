'use client';
import * as variants from '@/lib/motion-variants';
import { motion } from 'motion/react';
import { processSectionData } from '@/constants/data';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import {
  SectionDescription,
  SectionLabel,
  SectionTitle,
  SectionWrapper,
} from '../_shared';
import Image from 'next/image';
export default function Process({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { title, subtitle, description, cards } = processSectionData;
  return (
    <div id="process" className="mt-10 md:mt-20 lg:mt-40">
      <SectionWrapper className={cn('', className)}>
        <SectionLabel className="" text={subtitle} />
        <SectionTitle text={title} />
        <SectionDescription text={description} />
        <ul className="mt-20 flex flex-col gap-20 lg:mt-40">
          {cards.map((item, idx) => (
            <li key={idx}>
              <ProcessCard
                idx={idx}
                item={item}
                flexDirection={idx % 2 === 0 ? 'normal' : 'reverse'}
              />
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </div>
  );
}

function ProcessCard({
  item,
  flexDirection,
  idx,
}: {
  item: {
    subtitle: string;
    title: string;
    imgPath: string;
  };
  flexDirection?: 'normal' | 'reverse';
  idx: number;
}) {
  const { title, subtitle, imgPath } = item;
  const isTextRight = flexDirection === 'reverse';
  return (
    <div
      className={cn(
        'flex gap-6 sm:gap-10',
        isTextRight ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row',
      )}
    >
      <motion.div
        variants={isTextRight ? variants.fadeInLeft : variants.fadeInRight}
        initial={'start'}
        whileInView={'end'}
        viewport={{ once: true }}
        className="flex-1 self-stretch"
      >
        <div className="space-y-4">
          <span className="font-raleway bg-clrBrand text-clrTextLight grid w-36 place-content-center rounded-[3px] py-1 font-semibold dark:text-black">
            {subtitle}
          </span>
          <h2 className="text-clrTextDark dark:text-clrSeaShell font-raleway max-w-[596px] text-3xl leading-[38px] font-normal capitalize sm:text-4xl sm:leading-[42px] xl:text-[44px] xl:leading-[56px]">
            {title}
          </h2>
        </div>
      </motion.div>
      <motion.div
        variants={isTextRight ? variants.fadeInRight : variants.fadeInLeft}
        initial={'start'}
        whileInView={'end'}
        viewport={{ once: true }}
        className="flex-1 self-stretch"
      >
        <div className="bg-clrBrand/5 relative aspect-video rounded-xl backdrop-blur-2xl dark:bg-[#0B0B0B]/5">
          <Image
            className={cn(
              'absolute inset-0 size-full object-cover',
              idx === 3 || idx === 0 ? 'opacity-[61%] dark:opacity-100' : '',
            )}
            src={imgPath}
            alt={subtitle}
            width={300}
            height={300}
          />
        </div>
      </motion.div>
    </div>
  );
}
