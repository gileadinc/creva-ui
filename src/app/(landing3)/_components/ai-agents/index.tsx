'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import {
  SectionContent,
  SectionDescription,
  SectionSubTitle,
  SectionTitle,
} from '../_shared/section';
import { AIAgentsData, IAgent } from '@/constants/data';
import AgentsMaskBottom from '@/components/icons/agents-mask-bottom';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Pause, Play } from 'lucide-react';
import { useState, useRef } from 'react';

// import AgentsMaskTop from '@/components/icons/agents-mask-top';

export default function AIAgents({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { title, subtitle, subIcon, description, agents } = AIAgentsData;

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
    <section
      className={cn(
        'relative',
        'from-clrSunnyYellow to-clrAlienGreen bg-linear-51',
        className,
      )}
    >
      {/* mask top and bottom */}
      <div className="hidden lg:block">
        <AgentsMaskBottom className="absolute -bottom-8 w-full xl:-bottom-2 2xl:-bottom-0" />
      </div>

      <div className="absolute -bottom-5 w-full sm:-bottom-6 md:-bottom-8 lg:hidden">
        <Image
          className="hidden size-full object-cover dark:block"
          src="/assets/svg/track-vector-agent.svg"
          width={400}
          height={400}
          alt=""
        />
        <Image
          className="block size-full object-cover dark:hidden"
          src="/assets/svg/track-vector-agent-light.svg"
          width={400}
          height={400}
          alt=""
        />
      </div>
      <div className="dark:from-clrOnyx absolute top-0 h-[60px] w-full bg-gradient-to-b from-white to-transparent"></div>
      <div className="dark:from-clrOnyx absolute bottom-0 h-[60px] w-full bg-gradient-to-t from-white to-transparent"></div>
      {/* <AgentsMaskTop className="absolute top-0 h-fit w-full" /> */}
      {/*  */}

      <div className="py-20 sm:py-30 md:py-38 lg:py-42">
        <div className="container mx-auto mb-20 space-y-2 max-sm:px-[3%]">
          <SectionSubTitle text={subtitle} icon={subIcon} />
          <SectionTitle className="dark:text-clrTextLight">
            <span>
              Our AI Hiring Agents <br className="hidden lg:block" /> Your
              Company
              {'’'}s Trusted HR Team
            </span>
          </SectionTitle>
          <SectionDescription
            text={description}
            className="dark:text-clrTextLight mx-auto mt-4 max-w-4xl text-center"
          />
        </div>
        <div className="container mx-auto max-w-7xl px-[2%]">
          <ul className="flex flex-wrap items-center justify-center gap-8 md:gap-20">
            {agents.map((agent, idx) => (
              <li key={idx}>
                <AgentCard
                  agent={agent}
                  isPlaying={activeIndex === idx}
                  onClick={() => handlePlayPause(idx)}
                  audioRef={(el) => (audioRefs.current[idx] = el)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function AgentCard({
  agent,
  isPlaying,
  onClick,
  audioRef,
}: {
  agent: IAgent;
  isPlaying: boolean;
  onClick: () => void;
  audioRef: (el: HTMLAudioElement) => void;
}) {
  const { name, img, country, music, id } = agent;
  return (
    <div>
      <div className="relative mx-auto w-[90%] p-2">
        <Image
          className="size-full object-cover"
          src={img}
          loading="lazy"
          alt={name}
          width={160}
          height={160}
        />
        <div
          className={cn(
            isPlaying &&
              'absolute inset-0 animate-pulse rounded-full bg-white/40 ring-4 ring-white',
          )}
        ></div>
      </div>
      <h3 className="font-montserrat mt-4 justify-start text-center text-2xl font-bold text-[#121212] capitalize">
        {name}
      </h3>
      <p className="font-roboto text-center text-lg font-normal text-[#121212] capitalize">
        {country}
      </p>
      <Button
        onClick={onClick}
        size="sm"
        className={cn(
          'bg-clrOnyx hover:bg-clrOnyx/80 text-clrPorcelain mt-5 h-8 w-full cursor-pointer rounded-[3px]',
          isPlaying && 'bg-clrOnyx/80',
        )}
      >
        {isPlaying ? (
          <Pause className="block size-4" />
        ) : (
          <Play className="block size-4" />
        )}
        <span className="font-raleway sfont-medium block text-sm">
          {isPlaying ? 'Pause' : 'Play'} Demo
        </span>
      </Button>
      <audio ref={audioRef} src={music}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
