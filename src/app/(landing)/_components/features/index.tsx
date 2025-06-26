'use client';
import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { SectionDescription, SectionLabel, SectionTitle } from '../_shared';
import { featuresSectionData } from '@/constants/data';
import Image from 'next/image';

export default function Features({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { title, subtitle, description, cards } = featuresSectionData;
  return (
    <div id="features" className="mt-10 md:mt-20 lg:mt-40">
      <div className={cn('pt-10 md:pt-20 lg:pt-30', className)}>
        <div className="container mx-auto max-w-7xl px-[2%]">
          <SectionLabel className="" text={subtitle} />
          <SectionTitle text={title} />
          <SectionDescription text={description} />
        </div>
        <div className="relative mx-auto my-30 py-10">
          <div className="absolute -inset-y-40 w-full opacity-40 dark:opacity-60">
            <Image
              className="size-full object-contain"
              src="/assets/img/feature-bg.png"
              alt="mask-image"
              width={1000}
              height={1000}
            />
          </div>

          <motion.ul
            variants={variants.staggerContainer}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="inset-0 z-30 container mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 px-[2%] md:grid-cols-2 lg:grid-cols-3"
          >
            {cards.map((card, index) => (
              <motion.li
                variants={variants.fadeInUp}
                key={index}
                className={cn(
                  index === 0 &&
                    'col-span-full row-start-1 row-end-2 lg:col-span-2 lg:row-start-1 lg:row-end-2',
                  index === 1 &&
                    'rows-start-2 col-span-full lg:col-start-3 lg:row-span-2',
                  index === 2 &&
                    'col-span-full row-start-3 md:col-span-1 md:row-start-3 lg:col-span-1 lg:row-start-2',
                  index === 3 &&
                    'col-span-full row-start-4 md:col-span-1 md:row-start-3 lg:col-span-1 lg:row-start-2',
                  '',
                )}
              >
                <FeaturesCard
                  title={card.title}
                  description={card.description}
                  idx={index}
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

function FeaturesCard({
  title,
  description,
  idx,
}: {
  title: string;
  description: string;
  idx: number;
}) {
  return (
    <>
      <div
        className={cn(
          'dark:from-clrOnyx dark:via-clrOnyx dark:to-clrBalticSea dark:text-clrSeaShell',
          'from-clrSeaShell via-clrSeaShell to-clrBalticSea/40 text-clrTextDark',
          'relative size-full min-h-[364px] rounded-md bg-linear-71',
          'overflow-hidden',
          idx === 0 ? 'p-6' : 'p-0',
        )}
      >
        <div className={cn('max-w-md space-y-4', idx === 0 ? 'p-0' : 'p-6')}>
          <h2 className="font-raleway justify-start text-[30px] leading-[40px] font-normal capitalize">
            {title}
          </h2>
          <p className="font-roboto justify-start text-lg leading-[24px] font-light">
            {description}
          </p>
        </div>
        {idx === 0 && (
          <div className="min-h-[172px]">
            <FeatureCardImg1 />
          </div>
        )}
        {idx === 1 && (
          <div className="h-full min-h-[172px] max-sm:relative lg:relative">
            <FeatureCardImg2 />
          </div>
        )}
        {idx === 2 && (
          <div className="relative min-h-[172px] w-full">
            <FeatureCardImg3 />
          </div>
        )}
        {idx === 3 && (
          <div className="relative min-h-[172px] w-full">
            <FeatureCardImg4 />
          </div>
        )}
      </div>
    </>
  );
}

function FeatureCardImg1() {
  return (
    <div
      className={cn(
        'absolute right-[-20px]',
        'max-md:bottom-0 max-md:h-48 max-sm:inset-x-6 md:h-96 md:w-[680px] md:origin-top-left md:rotate-[-8deg]',
      )}
    >
      <Image
        className="hidden size-full object-contain dark:block"
        src="/assets/img/feature-1a.png"
        alt="feature1"
        width={410}
        height={410}
      />
      <Image
        className="block size-full object-contain dark:hidden"
        src="/assets/img/feature-1a-light.png"
        alt="feature1"
        width={410}
        height={410}
      />
    </div>
  );
}

function FeatureCardImg2() {
  return (
    <>
      <div className="hidden size-full lg:block">
        <div className="absolute right-[-10px] bottom-0 h-[118%] bg-transparent">
          <Image
            className="hidden size-full object-contain dark:block"
            src="/assets/img/feature2.png"
            alt="feature2"
            width={400}
            height={400}
          />
          <Image
            className="block size-full object-contain dark:hidden"
            src="/assets/img/feature2-light.png"
            alt="feature2"
            width={400}
            height={400}
          />
        </div>
      </div>

      <div className="hidden sm:block lg:hidden">
        <div className="absolute right-[-10px] bottom-0 bg-transparent max-sm:inset-0 sm:top-1/4 md:top-0">
          <Image
            className="hidden size-full object-contain dark:block"
            src="/assets/img/feature2.png"
            alt="feature2"
            width={400}
            height={400}
          />
          <Image
            className="block size-full object-contain dark:hidden"
            src="/assets/img/feature2-light.png"
            alt="feature2"
            width={400}
            height={400}
          />
        </div>
      </div>

      <div className="block sm:hidden">
        <div className="bg-transparent">
          <Image
            className="hidden size-full object-contain dark:block"
            src="/assets/img/feature2mob.png"
            alt="feature2"
            width={400}
            height={400}
          />
          <Image
            className="block size-full object-contain dark:hidden"
            src="/assets/img/feature2-mob-light.png"
            alt="feature2"
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  );
}

function FeatureCardImg3() {
  return (
    <div className="xs:right-10 absolute right-0 md:inset-0">
      <Image
        className="hidden size-full object-contain dark:block"
        src="/assets/img/feature3.png"
        alt="feature3"
        width={300}
        height={300}
      />
      <Image
        className="block size-full object-contain dark:hidden"
        src="/assets/img/feature3-light.png"
        alt="feature3"
        width={300}
        height={300}
      />
    </div>
  );
}

function FeatureCardImg4() {
  return (
    <div className="max-xs:left-0 xs:max-md:right-0 absolute bottom-0 md:left-0">
      <Image
        className="size-full object-contain dark:opacity-50"
        src="/assets/img/feature4.png"
        alt="feature4"
        width={300}
        height={300}
      />
    </div>
  );
}
