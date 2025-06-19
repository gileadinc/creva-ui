'use client';

import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';
import TrackVectorSvg from '@/components/icons/track-vector-icon';
import LiveTalk from './live-talk';
import useTimer from '@/hooks/useTimer';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/store/useAppStore';
import {
  MatomoAction,
  MatomoCategory,
  trackMatomoEvent,
} from '@/lib/matomo-utils';

export default function LiveDemo({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { timeExceeded } = useTimer();
  const {
    openModal,
    isTryLiveOn,
    setIsTryLiveOn,
    isTryLiveModalFirstOpen,
    setIsTryLiveModalFirstOpen,
  } = useAppStore();

  const router = useRouter();

  const handleTryLiveInteractionClick = () => {
    trackMatomoEvent(
      MatomoCategory.Button,
      MatomoAction.Clicked,
      'Try Live Interaction Button',
    );

    // if time expired, redirect to sign-in page
    if (timeExceeded) {
      setIsTryLiveOn(false);
      toast.error('You have exceeded the time limit for the live interaction', {
        description:
          'Please sign in and get a 30 min free trial to continue using the live demo.',
        position: 'top-right',
        style: {
          color: '#fff',
          backgroundColor: '#c21d1d',
        },
      });
      router.push('/sign-in');
      return;
    }
    if (!isTryLiveModalFirstOpen) {
      openModal('tryLive');
      setIsTryLiveModalFirstOpen(true);
      trackMatomoEvent(
        MatomoCategory.Modal,
        MatomoAction.Opened,
        'Expeiance AI Agent Interaction Modal (TryLive Section)',
      );
    } else {
      setIsTryLiveOn(true);
    }
  };

  return (
    <div className={cn('relative py-14 sm:py-30 md:pt-52 lg:pt-64', className)}>
      <div className="container mx-auto space-y-5">
        <motion.h1
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="text-clrTextLight dark:text-clrText font-nunito xs:leading-[52px] xs:text-[44px] mx-auto max-w-[753px] text-center text-[40px] leading-[52px] font-bold capitalize sm:text-5xl"
        >
          Try The Live AI Voice Interaction Demo
        </motion.h1>
        <motion.p
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="text-clrTextLight dark:text-clrText font-roboto mx-auto max-w-3xl px-2 text-center text-xl leading-[32px] font-light tracking-wide"
        >
          Allow this site to detect and use the mic of your device and see how
          interactive our AI Voice Assistant is
        </motion.p>
      </div>
      <div
        className={cn(
          'relative z-20 my-10',
          isTryLiveOn
            ? 'min-h-fit'
            : 'h-[300px] overflow-hidden sm:h-[340px] lg:h-fit',
        )}
      >
        {!isTryLiveOn ? (
          <div>
            <Image
              className={cn(
                'absolute -z-10 size-full object-cover opacity-0 lg:static',
              )}
              src={'/assets/svg/track-vector.svg'}
              alt="track"
              width={100}
              height={100}
            />
            <TrackVectorSvg className="absolute inset-0 mx-auto size-full w-full text-[#585858] opacity-20 dark:text-white" />
          </div>
        ) : (
          <div className="dark:bg-clrBlackPearl min-h-[600px] bg-white">
            <LiveTalk />
          </div>
        )}
      </div>
      <div className={cn('container mx-auto mt-8 flex justify-center')}>
        {!isTryLiveOn && (
          <motion.button
            onClick={handleTryLiveInteractionClick}
            variants={variants.buttonVariant}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="relative mx-auto block h-[48px] w-[280px] cursor-pointer rounded-md border border-none px-8 py-2 font-medium transition-opacity duration-300 ease-in-out"
          >
            <span className="from-clrDawnyGreen/95 to-clrDenimBlue/95 hover:to-clrDenimBlue hover:from-clrDawnyGreen absolute inset-0 rounded-md bg-linear-53" />

            <span className="font-roboto dark:text-clrZeusDark pointer-events-none absolute top-1/2 right-0 left-0 -translate-y-1/2 text-lg text-white">
              Try The Live Interaction
            </span>
          </motion.button>
        )}
        {isTryLiveOn && (
          <div className="bottom-0">
            <motion.button
              onClick={() => setIsTryLiveOn(false)}
              variants={variants.buttonVariant}
              initial="start"
              whileInView="end"
              viewport={{ once: true }}
              className="text-clrZeusDark relative mx-auto block h-[48px] w-[280px] cursor-pointer rounded-md border px-8 py-2 font-medium transition-opacity duration-300 ease-in-out"
            >
              <span className="from-clrDawnyGreen/95 to-clrDenimBlue/95 hover:to-clrDenimBlue hover:from-clrDawnyGreen absolute inset-0 rounded-md bg-linear-53" />

              <span className="font-roboto pointer-events-none absolute top-1/2 right-0 left-0 -translate-y-1/2 text-lg">
                Cancel
              </span>
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}
