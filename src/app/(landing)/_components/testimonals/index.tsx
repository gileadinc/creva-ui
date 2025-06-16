'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';
import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';

interface ITestimonal {
  name: string;
  text: string;
  company: string;
}

const testimonalsData = [
  {
    name: 'Emily Johnson',
    text: "Our hiring process has transformed since we started using this AI solution. We've reduced our time-to-hire by 50% and found candidates who fit our culture perfectly!",
    company: 'Tech Innovators Inc.',
  },
  {
    name: 'Emily Johnson',
    text: "Our hiring process has transformed since we started using this AI solution. We've reduced our time-to-hire by 50% and found candidates who fit our culture perfectly!",
    company: 'Tech Innovators Inc.',
  },
  {
    name: 'Emily Johnson',
    text: "Our hiring process has transformed since we started using this AI solution. We've reduced our time-to-hire by 50% and found candidates who fit our culture perfectly!",
    company: 'Tech Innovators Inc.',
  },
];

export default function Testimonals({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  return (
    <div
      id={'testimonials'}
      className={cn(
        'py-14 sm:py-18 md:py-24 md:pt-36 lg:pt-40 xl:pt-52',
        className,
      )}
    >
      <div className="dark:text-clrText text-clrTextLight container mx-auto">
        <motion.h1
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="font-nunito xs:leading-[52px] xs:text-[44px] mx-auto mb-4 max-w-[753px] text-center text-[40px] leading-[52px] font-bold capitalize sm:text-5xl"
        >
          Testimonials from Clients Who Transformed Their Hiring
        </motion.h1>

        <motion.p
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="font-roboto mx-auto max-w-xl px-2 text-center font-light tracking-wide"
        >
          See how our AI solutions have reshaped recruitment experiences for
          businesses like yours.
        </motion.p>
      </div>
      <div className="relative container mx-auto mt-14 overflow-hidden py-8 xl:px-[1%]">
        {/* Gradient edge masks */}
        <div className="dark:from-clrBlackPearl dark:via-clrBlackPearl/70 pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white via-white/20 to-transparent" />
        <div className="dark:from-clrBlackPearl dark:via-clrBlackPearl/70 pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white via-white/20 to-transparent" />

        <motion.ul
          className="flex w-max gap-8 px-4 sm:gap-10 xl:gap-12"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 40,
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {/* Duplicate for seamless loop */}
          {[...testimonalsData, ...testimonalsData].map((testimonial, idx) => (
            <motion.li
              key={idx}
              className="shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * (idx % testimonalsData.length),
              }}
            >
              <TestimonalCard item={testimonial} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

function TestimonalCard({ item }: { item: ITestimonal }) {
  const { name, text, company } = item;
  return (
    <div className="dark:bg-clrTelishBlue relative min-w-fit rounded-lg px-8 py-8 max-sm:max-w-sm md:w-[640px]">
      <div className="absolute inset-0 -z-10 rounded-lg bg-linear-48 from-[#5cd9ba] to-[#81b5e9] opacity-20 dark:opacity-0"></div>
      <div className="pointer-events-none absolute top-0 left-0 w-[40%] opacity-10 dark:opacity-100">
        <Image
          className="size-full object-cover"
          src="/assets/svg/testimonal-pattern-small.svg"
          alt="pattern"
          width={100}
          height={100}
        />
      </div>
      <div className="pointer-events-none absolute top-0 right-0 w-[40%] opacity-10 dark:opacity-100">
        <Image
          className="size-full object-cover"
          src="/assets/svg/testimonal-pattern-small.svg"
          alt="pattern"
          width={100}
          height={100}
        />
      </div>
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 opacity-10 dark:opacity-100">
        <Image
          className="size-full object-cover"
          src="/assets/svg/testimonal-pattern-large.svg"
          alt="pattern"
          width={100}
          height={100}
        />
      </div>
      <div className="dark:text-clrText text-clrTextLight z-10">
        <p className="font-robot text-center text-sm font-light">{name}</p>
        <p className="font-nunito mx-auto mt-6 mb-6 max-w-xl text-center text-[18px] leading-[28px] md:max-w-2xl">
          {`"${text}"`}
        </p>
        <p className="font-roboto text-center text-sm font-light">{company}</p>
      </div>
    </div>
  );
}
