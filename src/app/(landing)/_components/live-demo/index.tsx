'use client';

import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';

import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';

export default function LiveDemo({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  return (
    <div className={cn('py-14 sm:py-30 md:pt-52 lg:pt-64', className)}>
      <div className="container mx-auto">
        <motion.h1
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="text-clrText font-nunito xs:leading-[52px] xs:text-[44px] mx-auto mb-4 max-w-[753px] text-center text-[40px] leading-[52px] font-bold capitalize sm:text-5xl"
        >
          Try The Live AI Voice Interaction Demo
        </motion.h1>
        <motion.p
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="text-clrText font-roboto mx-auto max-w-xl px-2 text-center font-light tracking-wide"
        >
          Allow this site to detect and use the mic of your device and see how
          interactive our AI Voice Assistant is
        </motion.p>
      </div>
      <div className="relative z-20 my-10 h-[250px] overflow-hidden sm:h-[280px] md:h-[340px] lg:h-fit">
        {/* <div className="absolute inset-0 -z-10">
          <Image
            className="size-full object-cover opacity-20"
            src={'/assets/svg/track-vector.svg'}
            alt="track"
            width={100}
            height={100}
          />
        </div> */}
        <Image
          className="absolute -z-10 size-full object-cover opacity-50 lg:static"
          src={'/assets/svg/track-vector.svg'}
          alt="track"
          width={100}
          height={100}
        />
      </div>
      <div className="container mx-auto mt-8 flex justify-center">
        <motion.button
          variants={variants.buttonVariant}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="text-clrZeusDark relative mx-auto block h-[44px] w-[250px] cursor-pointer rounded-md border px-8 py-2 font-medium transition-opacity duration-300 ease-in-out"
        >
          <span className="from-clrDawnyGreen/95 to-clrDenimBlue/95 hover:to-clrDenimBlue hover:from-clrDawnyGreen absolute inset-0 rounded-md bg-linear-53" />

          <span className="font-roboto pointer-events-none absolute top-1/2 right-0 left-0 -translate-y-1/2">
            Try The Live Interaction
          </span>
        </motion.button>
      </div>
    </div>
  );
}
