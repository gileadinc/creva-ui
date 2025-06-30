'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { Badge } from '@/components/ui/badge';
import { Mic, MicOff } from 'lucide-react';

import useTimer from '@/hooks/useTimer';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { MicPermissionState, useMicrophone } from '@/hooks/useMicrophone';
import { Button } from '@/components/ui/button';
import SoundVisualizer from './sound-visualizer';
import Image from 'next/image';
import { useAppStore } from '@/store/useAppStore';
import { agentsData } from '@/constants/data';

export default function LiveTalk({
  className,
  onCancel,
}: {
  className?: React.CSSProperties | ClassValue | string;
  onCancel: () => void;
}) {
  const router = useRouter();

  const {
    micStatus,
    isRecording,
    isMicLoading,
    startMicrophone,
    mediaStream,
    stopMicrophone,
  } = useMicrophone();

  //  useTimer hook to manage the timer state
  const {
    isPaused,
    formatted,
    startTimer,
    timeExceeded,
    pauseTimer,
    resumeTimer,
  } = useTimer();

  useEffect(() => {
    return () => {
      pauseTimer();
      stopMicrophone();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Ref to store audio chunks
  const audioChunksRef = useRef<Blob[]>([]);

  // function to handle microphone permission request
  const handleGrantPermission = async () => {
    const microphone = await startMicrophone();
    if (!microphone) {
      console.log('Microphone access granted:', microphone);
      return;
    }
    if (microphone.stream && microphone.mediaRecorder) {
      console.log('Microphone is ready');
    }
  };

  // function to handle start recording and store incoming audio from mircrophone to audioChunksRef
  const handleStartRecording = async () => {
    const microphone = await startMicrophone();

    if (!microphone || !microphone.mediaRecorder) {
      console.error('Failed to start microphone or media recorder');
      return;
    }

    audioChunksRef.current = [];
    microphone.mediaRecorder.start(250); // Start recording with 250ms intervals
    // start The timer...
    // if timer is not paused, start the timer else resume the timer
    if (!isPaused) {
      startTimer();
    } else {
      resumeTimer();
    }
    console.log('Recording started...');

    microphone.mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
        console.log('Chunk recorded:', event.data);
        // can emit audio chunk to server...
      }
    };

    microphone.mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, {
        type: 'audio/webm',
      });
      audioChunksRef.current = [];
      console.log('Recording complete:', audioBlob);
    };
  };

  const handleStopRecording = () => {
    stopMicrophone();
    pauseTimer(); // Pause the timer when recording stops
    console.log('Recording stopped.');
  };

  return (
    <div className={cn('', className)}>
      <div className="dark:bg-clrOnyx bg-clrSeaShell z-40 mb-6 block w-full space-y-4 rounded-md px-2 py-3 shadow-md md:hidden md:basis-1/2">
        <ImportantNotes />
      </div>
      <div className="mb-6">
        <AgentCard className="" />
      </div>
      {/* NOTES */}
      <div className="mx-auto flex w-full items-stretch justify-center gap-4 max-md:flex-wrap md:max-w-6xl">
        {/* Left Column - Timer + Mic Controls */}
        <div className="flex w-full flex-col gap-4 md:basis-1/2">
          {/* Timer */}

          <div className="dark:bg-clrOnyx bg-clrSeaShell z-40 w-full rounded-md px-4 py-3 shadow-md">
            <div className="flex w-full items-center justify-between px-4 max-sm:px-0">
              <p className="dark:text-clrTextLight text-clrTextDark font-opensans dark:text-clrText block font-medium tracking-wide uppercase">
                Time Remaining
              </p>

              <div className="">
                {timeExceeded ? (
                  // <span className="font-opensans text-base font-semibold text-red-400 dark:text-red-400">
                  //   &#x23F0; Time&apos;s up!
                  // </span>
                  <Button
                    onClick={() => {
                      router.push('/sign-in');
                    }}
                    className="font-opensans h-8 w-30 cursor-pointer rounded-[3px] text-sm"
                    variant="brand"
                  >
                    Sign In
                  </Button>
                ) : (
                  <span className="dark:text-clrTextLight text-clrTextDark font-opensans dark:text-clrText text-3xl font-bold">
                    {formatted}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Mic Controls */}
          <div className="dark:bg-clrOnyx bg-clrSeaShell z-40 h-full space-y-4 rounded-md px-2 py-3 shadow-md">
            <div className="flex h-full flex-col items-center justify-center gap-2">
              <DisplayMic
                isDisabled={timeExceeded}
                micStatus={micStatus}
                isRecording={isRecording}
              />
              <MicStatusBadge isDisabled={timeExceeded} micStatus={micStatus} />
              {timeExceeded ? (
                // <Button
                //   onClick={() => {
                //     router.push('/sign-in');
                //   }}
                //   className="font-opensans h-8 w-40 cursor-pointer rounded-[3px] text-sm"
                //   variant="brand"
                // >
                //   Sign In
                // </Button>
                <>
                  {/* <span className="font-opensans text-sm font-semibold text-red-400 dark:text-red-400">
                    &#x23F0; Time&apos;s up!
                  </span> */}
                  <span className="font-opensans dark:text-clrTextLight text-clrTextDark text-sm font-semibold md:text-base">
                    Sign in and enjoy 30 extra minutes of your free trial
                  </span>
                </>
              ) : (
                <>
                  {micStatus !== 'granted' ? (
                    <Button
                      disabled={isMicLoading}
                      onClick={handleGrantPermission}
                      size="sm"
                      className="font-opensans h-8 w-48 cursor-pointer rounded-[3px] border-2 text-sm"
                      variant="brandOutline"
                    >
                      {isMicLoading
                        ? 'Requesting...'
                        : 'Grant Microphone Access'}
                    </Button>
                  ) : !isRecording ? (
                    <Button
                      disabled={isMicLoading}
                      onClick={handleStartRecording}
                      size="sm"
                      className="font-opensans h-8 w-40 cursor-pointer rounded-[3px] border-2 text-sm"
                      variant="brandOutline"
                    >
                      Start Talking
                    </Button>
                  ) : (
                    <Button
                      disabled={isMicLoading}
                      onClick={handleStopRecording}
                      size="sm"
                      className="font-opensans h-8 w-40 cursor-pointer rounded-[3px] border-2 bg-[#087e8b4b] text-sm dark:bg-[#087e8b2b]"
                      variant="brandOutline"
                    >
                      Stop Talking
                    </Button>
                  )}
                  {micStatus === 'denied' && (
                    <p className="text-muted-foreground font-opensans text-center text-sm">
                      Please allow microphone access in your browser settings to
                      use this feature.
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Notes */}
        <div className="dark:bg-clrOnyx bg-clrSeaShell z-40 hidden w-full space-y-4 rounded-md px-2 py-3 shadow-md md:block md:basis-1/2">
          <ImportantNotes />
        </div>
      </div>

      {/*  SOUND VISUALIZER */}
      <div className="dark:bg-clrOnyx bg-clrSeaShell z-40 mt-6 h-[264px] w-full rounded-md px-2 py-3 shadow-md">
        <SoundVisualizer mediaStream={mediaStream} />
      </div>

      {/* CANCEL BUTTOn */}
      <Button
        onClick={onCancel}
        size="sm"
        className="font-opensans mx-auto mt-10 block h-10 w-40 cursor-pointer rounded-[3px] border-2 text-sm"
        variant="brand"
      >
        Cancel Live Demo
      </Button>
    </div>
  );
}

function MicStatusBadge({
  micStatus,
  isDisabled,
}: {
  micStatus: MicPermissionState;
  isDisabled: boolean;
}) {
  const getMicStatusBadge = () => {
    switch (micStatus) {
      case 'prompt':
        return (
          <Badge
            className="bg-slate-400 text-xs dark:bg-black"
            variant="secondary"
          >
            Prompt
          </Badge>
        );
      case 'granted':
        return (
          <Badge
            variant="default"
            className="bg-[#1da455e0] text-xs hover:bg-[#1da455e0]/80 dark:bg-[#00cc99c0] dark:hover:bg-[#00cc99c0]/80"
          >
            Access Granted
          </Badge>
        );
      case 'denied':
        return (
          <Badge variant="destructive" className="text-xs">
            Access Denied
          </Badge>
        );
      default:
        return null;
    }
  };

  if (isDisabled) {
    return (
      <>
        <div className="font-opensans w-fit space-x-2">
          <Badge variant="destructive">Time Limit Excceded</Badge>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-fit space-x-2">
        {/* <span className="text-sm">Status</span> */}
        <span>{getMicStatusBadge()}</span>
      </div>
    </>
  );
}
function DisplayMic({
  micStatus,
  isRecording,
  isDisabled,
}: {
  micStatus: MicPermissionState;
  isRecording?: boolean;
  isDisabled: boolean;
}) {
  if (isDisabled) {
    return (
      <div className="relative w-fit">
        <div className="border-clrTextLight/20 mx-auto w-fit rounded-full border bg-gray-300 p-3 dark:bg-gray-100">
          <MicOff className="size-6 text-gray-400" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-fit">
      {micStatus === 'granted' ? (
        <>
          <div
            className={cn(
              `border-clrTextLight/20 relative mx-auto w-fit rounded-full border p-3`,
              isRecording
                ? `animate-pulse bg-red-100`
                : `bg-green-200 dark:bg-green-100`,
            )}
          >
            <Mic
              className={cn(
                `size-6`,
                isRecording ? 'text-red-600' : 'text-green-600',
              )}
            />
            {isRecording && (
              <div className="absolute top-0 -right-1">
                <div className="z-10 size-4 animate-pulse rounded-full bg-red-500"></div>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="border-clrTextLight/20 mx-auto w-fit rounded-full border bg-gray-300 p-3 dark:bg-gray-100">
            <MicOff className="size-6 text-gray-400" />
          </div>
        </>
      )}
    </div>
  );
}
function ImportantNotes() {
  const rules = [
    {
      icon: '⏱️',
      text: 'You’ll have 1:30 minutes to try the demo — no sign-up needed.',
    },
    { icon: '🎤', text: 'Allow microphone access before starting.' },
    {
      icon: '✅',
      text: 'You can start and stop anytime, but continuous speaking gives better results.',
    },
    {
      icon: '🗣️',
      text: 'Speak clearly and avoid background noise for best accuracy.',
    },
    {
      icon: '🔊',
      text: 'Your audio will be streamed and analyzed in real time.',
    },
  ];
  return (
    <div className="size-full pt-2 pl-2">
      <p className="font-lg font-opensans">🤖 AI Agents Try Demo – Rules</p>
      <ul className="mt-4 space-y-1 pl-2">
        {rules.map((r, idx) => (
          <li className="font-opensans flex gap-2 text-sm" key={idx}>
            <span className="text-clrTextDark dark:text-clrTextLight block">
              {r.icon}
            </span>
            <span className="text-clrTextDark dark:text-clrTextLight block">
              {r.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AgentCard({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { selectedAgentId } = useAppStore();
  const targetAgent = agentsData.filter(
    (agent) => agent.id === selectedAgentId,
  )[0];
  const { name, img, country } = targetAgent;

  return (
    <div
      className={cn(
        'mx-auto w-full max-w-xs rounded-2xl',
        'dark:text-clrSeaShell text-clrTextDark font-raleway',
        className,
      )}
    >
      {/* <div className="relative mx-auto w-[40%] p-2">
        <Image
          className="object-contain"
          src={img}
          loading="lazy"
          alt={name}
          width={400}
          height={400}
        />
        <div
          className={cn(
            'dark:ring-clrBrand/60 dark:bg-clrBrand/30 ring-clrBrand/70 absolute inset-0 animate-pulse rounded-full bg-black/20 ring-4',
          )}
        ></div>
      </div> */}
      <div className="relative mx-auto w-[40%] p-2">
        {/* Glowing Ring (background layer) */}

        <div
          className={cn(
            'absolute inset-0 z-0 animate-pulse rounded-full ring-4',
            'bg-black/20 ring-4 ring-black/25 dark:bg-[#e9e9e9]/20 dark:ring-[#e9e9e9]/25',
            // 'ring-[#e9e9e9]/40 dark:bg-clrBrand/20 dark:ring-clrBrand/25 bg-black/10 ring-4',
          )}
        />

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
      <div className="mt-2 text-center">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm font-light">{country}</p>
      </div>
    </div>
  );
}
