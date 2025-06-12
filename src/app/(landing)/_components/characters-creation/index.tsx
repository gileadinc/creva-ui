'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';
import { motion, Variants } from 'motion/react';
const charactersImages = [
  '/assets/img/character-1.png',
  '/assets/img/character-2.png',
  '/assets/img/character-3.png',
  '/assets/img/character-4.png',
];

const floatVariants: Variants = {
  animate: (i: number) => ({
    y: [0, -10, -15, -10, 0, 10, 15, 10, 0],
    transition: {
      duration: 4 + (i % 2),
      delay: (i % 4) * 0.3,
      repeat: Infinity,
      ease: 'linear',
    },
  }),
};

export default function CharactersCreation({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  return (
    <div className={cn('relative mt-8 pt-30', className)}>
      {/* <div className="xs:h-[180px] !lg:h-fit relative z-20 pb-10 sm:h-[280px] md:h-[340px] lg:h-[380px] xl:h-[460px] 2xl:h-[520px]"> */}
      <div className="xs:h-[200px] relative z-20 pb-10 sm:h-[280px] md:h-[340px] lg:h-fit">
        {/* bg-blur color */}
        <div className="absolute inset-0 -z-10 grid h-full w-full place-content-center opacity-60">
          <div className="relative mx-auto h-24 w-[calc(100vw-20px)] blur-[120px]">
            <div className="absolute top-0 left-0 h-24 w-1/2 rounded-[389px] bg-[#00cc99]" />
            <div className="absolute top-0 left-1/2 h-24 w-1/2 rounded-[300px] bg-[#3c91e6]" />
          </div>
        </div>
        {/* bg-vector */}
        <Image
          className="absolute -z-10 size-full object-cover opacity-20 lg:static"
          src={'/assets/svg/track-vector.svg'}
          alt="track"
          width={100}
          height={100}
        />
        {/* bg-vector */}
        {/* <div className="absolute inset-0 -z-10">
          <Image
            className="size-full object-cover opacity-20"
            src={'/assets/svg/track-vector.svg'}
            alt="track"
            width={100}
            height={100}
          />
        </div> */}

        <div className="container mx-auto h-full lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
          <ul className="flex h-full flex-wrap items-center justify-center gap-6 max-sm:py-10 sm:gap-10 md:gap-20 lg:gap-24">
            {charactersImages.map((img, idx) => (
              <motion.li
                key={idx}
                variants={floatVariants}
                animate="animate"
                custom={idx}
                className={cn(
                  'md:[] relative size-24 min-w-fit sm:size-[100px] md:size-[120px] lg:size-[135px] xl:size-[180px]',
                  'sm:nth-[1]:top-[50px]',
                  'sm:nth-[2]:top-[-70px]',
                  'sm:nth-[3]:top-[-60px]',
                  'sm:nth-[4]:top-[10px]',
                  //
                  'md:nth-[1]:top-[50px]',
                  'md:nth-[2]:top-[-70px]',
                  'md:nth-[3]:top-[-60px]',
                  'md:nth-[4]:top-[10px]',
                  'max-sm:animate-none',
                )}
              >
                <Image
                  className="size-full object-cover"
                  src={img}
                  width={100}
                  height={100}
                  alt="character"
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
