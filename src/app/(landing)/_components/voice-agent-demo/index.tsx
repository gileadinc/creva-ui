'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';
import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';
import { Play, Pause } from 'lucide-react';
import { useRef, useState } from 'react';

interface IAgent {
  img: string;
  name: string;
  country: string;
  music: string;
  description: string;
}

const agentsData: IAgent[] = [
  {
    img: '/assets/img/character-1.png',
    name: 'Ben',
    country: 'Melbourne, Australia',
    music: '/assets/audio/ben-agent.mp3',
    description:
      "Hi, I'm Ben from Melbourne, Australia. With years of experience in tech and communication, I'm here to guide you through the process and make sure you get the most out of our platform. Let’s make something great together.",
  },
  {
    img: '/assets/img/character-4.png',
    name: 'Jazmin',
    country: 'Paris, France',
    music: '/assets/audio/jazmin-agent.mp3',
    description:
      "Bonjour! I'm Jazmin from Paris, France. I'm passionate about connecting people with the right opportunities. I'm here to walk you through every step and make sure you feel confident and supported throughout your journey.",
  },
  {
    img: '/assets/img/character-2.png',
    name: 'Maria',
    country: 'London, United Kingdom',
    music: '/assets/audio/maria-agent.mp3',
    description:
      "Hello there! I'm Maria, based in London. I love helping individuals grow and succeed. Whether you're just starting out or looking to take the next step in your career, I'm here to provide guidance and support tailored just for you.",
  },
  {
    img: '/assets/img/character-3.png',
    name: 'Peter',
    country: 'Barcelona, Spain',
    music: '/assets/audio/peter-agent.mp3',
    description:
      'Hola! I’m Peter from the beautiful city of Barcelona, Spain. I specialize in helping candidates unlock their full potential. My goal is to ensure your talents are matched with the right opportunities, and that you feel empowered every step of the way.',
  },
];

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
      <div className="container mx-auto w-full space-y-8">
        <div className="dark:text-clrBlackPearl container mx-auto w-full space-y-8 text-white">
          <motion.h1
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="font-nunito mx-auto mb-4 max-w-[753px] text-center text-5xl leading-[52.67px] font-bold capitalize"
          >
            Different Voice Agents for Specific Industries
          </motion.h1>
          <motion.p
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="font-roboto mx-auto max-w-[700px] px-2 text-center font-light tracking-wide"
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
              'dark:ring-clrCaribbeanGreen dark:bg-clrCaribbeanGreen/30 ring-clrCaribbeanGreen/70 absolute inset-0 animate-pulse rounded-full bg-black/20 ring-4',
          )}
        ></div>
      </div>
      <h3 className="mt-1 text-lg font-semibold">{name}</h3>
      <p className="text-xs font-light opacity-60">{country}</p>
      <button
        onClick={onClick}
        className="bg-clrDawnyGreen mx-auto mt-4 mb-2 grid size-10 cursor-pointer place-content-center rounded-full transition-all duration-300 ease-in-out hover:scale-110"
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
