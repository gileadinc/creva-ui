'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';
import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';
interface IAgent {
  img: string;
  name: string;
  country: string;
  music: string;
}

const agentsData: IAgent[] = [
  {
    img: '/assets/img/character-1.png',
    name: 'Ben',
    country: 'Melbourne, Australia',
    music: '/assets/music/agent-1.mp3',
  },
  {
    img: '/assets/img/character-4.png',
    name: 'Jazmin',
    country: 'Paris, France',
    music: '/assets/music/agent-1.mp3',
  },
  {
    img: '/assets/img/character-2.png',
    name: 'Maria',
    country: 'London, United Kingdom',
    music: '/assets/music/agent-1.mp3',
  },
  {
    img: '/assets/img/character-3.png',
    name: 'Peter',
    country: 'los angeles, California',
    music: '/assets/music/agent-1.mp3',
  },
];

export default function VoiceAgentsDemo({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
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
                <AgentsCard item={agent} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

function AgentsCard({ item }: { item: IAgent }) {
  const { img, name, country } = item;
  return (
    <div className="dark:bg-clrBlackPearl dark:text-clrText text-clrTextLight font-nunito w-full rounded-md bg-white p-4 text-center">
      <div className="">
        <Image
          loading="lazy"
          className="mx-auto size-[200px] md:size-[240px]"
          src={img}
          width={180}
          height={180}
          alt={`agent-${name}`}
        />
      </div>
      <h3 className="mt-1 text-lg font-semibold">{name}</h3>
      <p className="text-xs font-light opacity-60">{country}</p>
      <button className="mx-auto mt-4 mb-2 block h-8 w-8 cursor-pointer">
        <Image
          className=""
          src={'/assets/svg/play-icon.svg'}
          width={40}
          height={40}
          alt="play-icon"
        />
      </button>
    </div>
  );
}
