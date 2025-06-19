'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';
import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';
import { Play, Pause } from 'lucide-react';
import { useRef, useState } from 'react';
import { agentsData } from '@/constants/data';
import { IAgent } from '@/types';

export default function VoiceAgentsDemo({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const audioRefs = useRef<HTMLAudioElement[]>([]);

  const handlePlayPause = (index: number) => {
    if (activeIndex !== null && activeIndex !== index) {
      const prevAudio = audioRefs.current[activeIndex];
      if (prevAudio) {
        prevAudio.pause();
        prevAudio.currentTime = 0;
      }
    }

    const currentAudio = audioRefs.current[index];
    if (currentAudio) {
      if (activeIndex === index) {
        currentAudio.pause();
        setActiveIndex(null);
      } else {
        currentAudio.currentTime = 0;
        currentAudio.play();
        setActiveIndex(index);
      }
    }
  };
  return (
    <div
      className={cn(
        'my-14 w-full bg-linear-48 from-[#5cd9ba] to-[#81b5e9] px-8 py-14 sm:my-18 md:my-32 md:py-20 lg:my-44 lg:py-30 xl:my-52',
        className,
      )}
    >
      <div className="container mx-auto w-full space-y-10">
        <div className="dark:text-clrBlackPearl container mx-auto w-full space-y-8 text-white">
          <motion.h1
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="font-nunito mx-auto max-w-[753px] text-center text-5xl leading-[52.67px] font-bold capitalize"
          >
            Different Voice Agents for Specific Industries
          </motion.h1>
          <motion.p
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="font-roboto mx-auto max-w-3xl px-2 text-center text-xl leading-[32px] font-light tracking-wide text-white dark:text-black"
          >
            Discover how our Voice AI technology enhances candidate evaluation.
            Watch the demo to see its capabilities and benefits tailored for
            your hiring process!
          </motion.p>
        </div>
        <div className="mt-14 lg:mt-20">
          <motion.ul
            variants={variants.staggerContainer}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="flex w-full flex-wrap justify-evenly gap-6"
          >
            {agentsData.map((agent, idx) => (
              <motion.li
                variants={variants.fadeInUp}
                key={idx}
                className="min-w-[200px] md:min-w-[240px] lg:min-w-[280px]"
              >
                <AgentsCard
                  item={agent}
                  isPlaying={activeIndex === idx}
                  onClick={() => handlePlayPause(idx)}
                  audioRef={(el) => (audioRefs.current[idx] = el)}
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

function AgentsCard({
  item,
  isPlaying,
  onClick,
  audioRef,
}: {
  item: IAgent;
  isPlaying: boolean;
  onClick: () => void;
  audioRef: (el: HTMLAudioElement) => void;
}) {
  const { img, name, country, music } = item;

  return (
    <div className="dark:bg-clrBlackPearl dark:text-clrText text-clrTextLight font-nunito relative w-full rounded-md bg-white p-4 text-center">
      <div className="relative rounded-full p-2">
        <Image
          loading="lazy"
          className={cn('mx-auto size-[200px] rounded-full md:size-[240px]')}
          src={img}
          width={180}
          height={180}
          alt={`agent-${name}`}
        />
        <div
          className={cn(
            isPlaying &&
              'dark:ring-clrCaribbeanGreen/60 dark:bg-clrCaribbeanGreen/30 ring-clrCaribbeanGreen/70 absolute inset-0 animate-pulse rounded-full bg-black/20 ring-4',
          )}
        ></div>
      </div>
      <h3 className="mt-1 text-xl font-semibold">{name}</h3>
      <p className="text-lg font-light dark:opacity-60">{country}</p>
      <button
        onClick={onClick}
        className="bg-clrDawnyGreen mx-auto mt-2 mb-1 grid size-10 cursor-pointer place-content-center rounded-full transition-all duration-300 ease-in-out hover:scale-110"
      >
        {isPlaying ? (
          <Pause className="size-4 text-black" />
        ) : (
          <Play className="size-4 text-black" />
        )}
      </button>

      <audio ref={audioRef} src={music}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
