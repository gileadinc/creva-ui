'use client';
import { Variants, motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { useAppStore } from '@/store/useAppStore';
import {
  MatomoAction,
  MatomoCategory,
  trackMatomoEvent,
} from '@/lib/matomo-utils';

const heroVariant: Variants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};
const heroChildVariant: Variants = {
  start: {
    y: 30,
    opacity: 0,
    filter: 'blur(5px)',
  },
  end: {
    y: 0,
    opacity: 1,
    filter: 'blur(0)',
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};
export default function Hero({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { openModal } = useAppStore();

  const handleTryAgentClick = () => {
    trackMatomoEvent(
      MatomoCategory.Button,
      MatomoAction.Clicked,
      'Hero Try AI Agent Button',
    );
    openModal('agentInteraction');
    trackMatomoEvent(
      MatomoCategory.Modal,
      MatomoAction.Opened,
      'Expeiance AI Agent Interaction Modal (Hero Section)',
    );
  };
  const handleStartFreeTrialClick = () => {
    trackMatomoEvent(
      MatomoCategory.Button,
      MatomoAction.Clicked,
      'Hero Start Free Trial Button',
    );
    openModal('agentInteraction');

    trackMatomoEvent(
      MatomoCategory.Modal,
      MatomoAction.Opened,
      'Expeiance AI Agent Interaction Modal (Hero Section)',
    );
  };
  return (
    <div className={cn('container mx-auto pt-[65px]', className)}>
      <motion.div
        variants={heroVariant}
        initial="start"
        animate="end"
        className="pt-20 sm:pt-30 lg:pt-40"
      >
        <div className="max-xs:px-[2%] flex flex-col items-center gap-8">
          <motion.h1
            variants={heroChildVariant}
            className="font-nunito text-clrTextLight dark:text-clrText xs:text-6xl mx-auto max-w-3xl text-center text-5xl font-extrabold md:text-[72px] lg:text-[96px] lg:leading-[90px]"
          >
            Meet Your New <br /> AI Recruiter
          </motion.h1>
          <motion.p
            variants={heroChildVariant}
            className="text-clrTextLight dark:text-clrText font-roboto max-w-[680px] text-center leading-[28px] font-light tracking-wide md:text-lg md:leading-[32px]"
          >
            Transform your hiring with our AI-driven solutions. Streamline
            processes, discover top talent, and boost team performance—all while
            saving time and resources. Let’s redefine recruitment!
          </motion.p>
        </div>
        <div className="mt-12 flex w-full flex-wrap justify-center gap-6 sm:gap-10 md:mt-14">
          <motion.button
            onClick={handleTryAgentClick}
            variants={heroChildVariant}
            className="font-roboto group relative h-[42px] w-[200px] cursor-pointer rounded-[200px] transition-opacity duration-300 ease-in-out"
          >
            <span className="from-clrDawnyGreen/95 to-clrDenimBlue/95 hover:to-clrDenimBlue hover:from-clrDawnyGreen absolute inset-0 rounded-[200px] bg-linear-53" />
            <span className="text-clrZeusDark pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg">
              Try AI Agent
            </span>
          </motion.button>

          <motion.button
            onClick={handleStartFreeTrialClick}
            variants={heroChildVariant}
            className="group from-clrDawnyGreen to-clrDenimBlue relative inline-block h-[42px] w-[200px] cursor-pointer rounded-[200px] bg-linear-90 p-[2px]"
          >
            <span className="dark:text-clrText text-clrTextLight font-roboto dark:bg-clrBlackPearl dark:group-hover:bg-clrBlackPearl/70 flex h-full w-full items-center justify-center rounded-[200px] bg-white text-lg transition-colors duration-300 ease-in-out group-hover:bg-white/80 group-hover:backdrop-blur-2xl">
              Start a Free Trial
            </span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
