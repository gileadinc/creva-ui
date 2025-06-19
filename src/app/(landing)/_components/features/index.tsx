'use client';
import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';
import { IFeature } from '@/types';
import { featuresData } from '@/constants/data';

export default function Features({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  return (
    <div
      id="features"
      className={cn('mx-auto max-w-7xl overflow-hidden px-[1%]', className)}
    >
      <div className="from-clrDawnyGreen to-clrDenimBlue relative container mx-auto rounded-3xl bg-linear-48 px-10 py-16 pb-10 lg:pl-20">
        <div className="pointer-events-none absolute top-5 right-0 bottom-10 left-0">
          <Image
            className="size-full object-contain"
            src="/assets/svg/pattern-bg.svg"
            width={100}
            height={100}
            alt="patter-bg"
          />
        </div>
        <div className="absolute inset-0 -z-10">
          <Image
            className="size-full object-cover opacity-20"
            src={'/assets/svg/pattern-icon.svg'}
            alt="track"
            width={100}
            height={100}
          />
        </div>
        <div className="text-clrBlackPearl flex max-w-4xl flex-col gap-4 md:gap-6">
          <motion.h1
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="font-nunito dark:text-clrBlackPearl xs:text-5xl xs:leading-[52px] max-w-[750px] text-[40px] leading-[52px] font-bold text-white capitalize md:text-[52px] md:leading-[58px]"
          >
            Features That Empower Your Recruitment Process
          </motion.h1>
          <motion.p
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="text-light font-roboto dark:text-clrBlackPearl max-w-[600px] text-xl text-white"
          >
            Discover innovative features that optimize your hiring—from smart
            candidate matching to automated scheduling.
          </motion.p>
        </div>

        <motion.ul
          variants={variants.staggerContainer}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="xs:mt-18 mt-14 grid grid-cols-1 place-items-center gap-x-6 gap-y-14 sm:grid-cols-2 sm:place-items-center md:mt-22 lg:grid-cols-3 lg:place-items-start"
        >
          {featuresData.map((feature, idx) => (
            <motion.li
              variants={variants.fadeInUp}
              className="w-full max-w-[360px] self-stretch"
              key={idx}
            >
              <FeatureCard item={feature} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

function FeatureCard({ item }: { item: IFeature }) {
  const { img, title, description, detailData } = item;

  return (
    <div className="dark:bg-clrBlackPearl group bg-clrSeaShell relative h-full cursor-pointer rounded-xl p-6">
      <div className="flex flex-col items-center gap-4 opacity-100 transition-all duration-500 ease-linear group-hover:opacity-0">
        <motion.div
          variants={variants.fadeInUp}
          className="h-[140px] w-full max-w-[240px]"
        >
          <Image
            className="size-full object-contain"
            height={100}
            width={100}
            src={img}
            alt={title}
          />
        </motion.div>
        <div className="font-nunito dark:text-clrText space-y-4 text-black">
          <motion.h2
            variants={variants.fadeInUp}
            className="font-nunito max-w-64 justify-start text-2xl font-extrabold uppercase"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={variants.fadeInUp}
            className="font-nunito max-w-72 justify-start leading-[26px] font-light"
          >
            {description}
          </motion.p>
        </div>
      </div>

      <div className="bg-clrSeaShell dark:bg-clrBlackPearl absolute inset-0 rounded-xl opacity-0 transition-all duration-500 ease-linear group-hover:opacity-100">
        <div className="p-6">
          {detailData.map(({ title, text }, idx) => (
            <div key={idx}>
              <motion.div
                variants={variants.fadeInUp}
                className="h-[0] w-full min-w-[240px]"
              >
                <Image
                  className="size-full object-contain"
                  height={100}
                  width={100}
                  src={img}
                  alt={title}
                />
              </motion.div>
              <motion.h3
                variants={variants.fadeInUp}
                className="font-nunito dark:text-clrText mt-1 mb-2 font-bold text-black uppercase"
              >
                {title}
              </motion.h3>
              <motion.p
                variants={variants.fadeInUp}
                className="font-nunito dark:text-clrText/80 leading-[26px] font-light text-black"
              >
                {text}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
