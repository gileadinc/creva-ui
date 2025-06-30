'use client';
import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { SectionDescription, SectionLabel, SectionTitle } from '../_shared';
import { AIAgentsSectionData, IAgent } from '@/constants/data';
import Image from 'next/image';

import { Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LiveTalk from './live-talk';
export default function AIAgents({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { title, description, subtitle, agents } = AIAgentsSectionData;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { isTryLiveOn, setIsTryLiveOn } = useAppStore();
  const [tab, setTab] = useState('ai-agents');

  useEffect(() => {
    if (isTryLiveOn) {
      setTab('live-demo');
    } else if (isTryLiveOn === false) {
      setTab('ai-agents');
    }
    console.log('isTryLiveOn changed:', isTryLiveOn);
  }, [isTryLiveOn]);

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
    <div id="ai-agents" className={cn('mt-10 md:mt-20 lg:mt-40', className)}>
      <div className="pt-10 md:pt-20 lg:pt-30">
        <div className="dark:bg-clrWoodsmoke container mx-auto max-w-7xl px-[2%]">
          <SectionLabel className="" text={subtitle} />
          <SectionTitle text={title} />
          <SectionDescription text={description} />
        </div>
        <div className="relative mx-auto my-10 py-10 md:my-20 lg:my-30">
          <div className="absolute inset-0 -inset-y-40 -left-20 w-full opacity-10 dark:opacity-30">
            <Image
              className="size-full object-contain"
              src="/assets/img/ai-agent-bg.png"
              // src="/assets/svg/mask-shape.svg"
              alt="mask-image"
              width={1000}
              height={1000}
            />
          </div>

          <div
            className={cn(
              'dark:bg-clrWoodsmoke',
              'relative container mx-auto max-w-6xl rounded-sm px-6 py-14 sm:px-10 md:px-14 lg:px-20',
              'shadow-[-10px_-10px_10px_rgba(0,0,0,0.1),10px_10px_10px_rgba(0,0,0,0.1)]',
            )}
          >
            <div className="dark:bg-clrWoodsmoke absolute inset-0 z-30 rounded-sm bg-white"></div>

            <Tabs
              value={tab}
              onValueChange={setTab}
              defaultValue="ai-agents"
              className="w-full"
            >
              <TabsList className="font-raleway invisible absolute z-40 mx-auto gap-4">
                <TabsTrigger className="w-40" value="ai-agents">
                  AI AGENTS
                </TabsTrigger>
                <TabsTrigger className="w-40" value="live-demo">
                  LIVE DEMO
                </TabsTrigger>
              </TabsList>
              <TabsContent value="ai-agents" className="z-40">
                <motion.ul
                  variants={variants.staggerContainer}
                  initial="start"
                  whileInView="end"
                  viewport={{ once: true }}
                  className={cn(
                    'container mx-auto max-w-4xl',
                    'grid grid-cols-1 gap-10 md:grid-cols-2',
                  )}
                >
                  {agents.map((agent, idx) => (
                    <motion.li
                      variants={variants.fadeInUp}
                      key={idx}
                      className="z-40 w-full"
                    >
                      <AIAgentCard
                        agent={agent}
                        isPlaying={activeIndex === idx}
                        onClick={() => handlePlayPause(idx)}
                        audioRef={(el) => (audioRefs.current[idx] = el)}
                      />
                    </motion.li>
                  ))}
                </motion.ul>
              </TabsContent>
              <TabsContent value="live-demo" className="z-40">
                <div className={cn('container mx-auto min-h-[500px] w-full')}>
                  <LiveTalk
                    onCancel={() => {
                      setIsTryLiveOn(false);
                    }}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIAgentCard({
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

  const {
    openModal,
    setSelectedAgentId,

    setIsTryLiveOn,

    isTryLiveModalFirstOpen,
    setIsTryLiveModalFirstOpen,
  } = useAppStore();

  const handleSpeakLive = () => {
    console.log(`Speak live with ${name} (ID: ${id})`);
    setSelectedAgentId(id);

    if (!isTryLiveModalFirstOpen) {
      openModal('tryLive');
      setIsTryLiveModalFirstOpen(true);
      // trackMatomoEvent(
      //   MatomoCategory.Modal,
      //   MatomoAction.Opened,
      //   'Expeiance AI Agent Interaction Modal (TryLive Section)',
      // );
    } else {
      setIsTryLiveOn(true);
    }

    // if (tryLiveModalCount < 1) {
    //   openModal('tryLive');
    //   setTryLiveModalCount(tryLiveModalCount + 1);
    //   // setIsTryLiveModalFirstOpen(true);
    // } else {
    //   setIsTryLiveOn(true);
    // }
  };
  return (
    <div
      className={cn(
        'dark:bg-clrOnyx bg-clrSeaShell mx-auto w-full max-w-sm rounded-2xl p-6 pb-8',
        'dark:text-clrSeaShell text-clrTextDark font-raleway',
      )}
    >
      {/* <div className="relative mx-auto w-[50%] p-2">
        <Image
          className="z-[99] object-contain"
          src={img}
          loading="lazy"
          alt={name}
          width={400}
          height={400}
        />
        <div
          className={cn(
            !isPlaying &&
              // 'dark:ring-clrBrand/60 dark:bg-clrBrand/30 ring-clrBrand/70 absolute inset-0 z-10 animate-pulse rounded-full bg-black/20 ring-4',
              'ring-clrBrand/70 dark:ring-clrBrand/60 dark:bg-clrBrand/30 absolute inset-0 animate-pulse rounded-full ring-4',
          )}
        ></div>
      </div> */}
      <div className="relative mx-auto w-[50%] p-2">
        {/* Glowing Ring (background layer) */}
        {isPlaying && (
          <div
            className={cn(
              'absolute inset-0 z-0 animate-pulse rounded-full ring-4',
              'bg-black/20 ring-4 ring-black/25 dark:bg-[#e9e9e9]/20 dark:ring-[#e9e9e9]/25',
              // 'ring-[#e9e9e9]/40 dark:bg-clrBrand/20 dark:ring-clrBrand/25 bg-black/10 ring-4',
            )}
          />
        )}

        {/* Image (foreground layer) */}
        <Image
          className="relative z-10 object-contain"
          src={img}
          loading="lazy"
          alt={name}
          width={400}
          height={400}
        />
      </div>
      <div className="mt-4 space-y-1 text-center">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="font-light">{country}</p>
      </div>
      <div className="my-2 h-[40px]">
        <Image
          className="size-full object-scale-down opacity-20 dark:opacity-100"
          src={'/assets/svg/track-vector-dark.svg'}
          alt={'track-vector'}
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button
          onClick={onClick}
          size="sm"
          className="h-8 w-40 cursor-pointer rounded-[3px]"
          variant={'brand'}
        >
          <span className="font-raleway sfont-medium block text-sm">
            {isPlaying ? 'Pause' : 'Play'} Demo
          </span>
          {isPlaying ? (
            <Pause className="block size-4" />
          ) : (
            <Play className="block size-4" />
          )}
        </Button>
        <audio ref={audioRef} src={music}>
          Your browser does not support the audio element.
        </audio>
        <Button
          onClick={handleSpeakLive}
          className="h-8 w-40 cursor-pointer rounded-[3px] border-2"
          variant="brandOutline"
          size="sm"
        >
          <span className="font-raleway font-medium capitalize">
            Speak to {name}
          </span>
        </Button>
      </div>
    </div>
  );
}
