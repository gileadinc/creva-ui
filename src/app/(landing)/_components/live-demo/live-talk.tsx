'use client';

import { useEffect, useRef } from 'react';
import { MicPermissionState, useMicrophone } from '@/hooks/useMicrophone';
import { Badge } from '@/components/ui/badge';
import { Mic, MicOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import SoundVisualizer from './sound-visualizer';
import useTimer from '@/hooks/useTimer';
import { useRouter } from 'next/navigation';

export default function LiveTalk() {
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
    <div className="relative size-full max-xl:px-[2%]">
      <div className="mx-auto flex w-full items-stretch justify-center gap-4 max-md:flex-wrap md:max-w-6xl">
        {/* Left Column - Timer + Mic Controls */}
        <div className="flex w-full basis-1/2 flex-col gap-4">
          {/* Timer */}

          <div className="dark:bg-clrFirefly bg-clrAquaHaze rounded-md px-4 py-3 shadow">
            <div className="flex items-center justify-between px-4">
              <p className="text-clrTextLight font-roboto dark:text-clrText block font-medium tracking-wide uppercase">
                Time Remaining
              </p>

              <div className="">
                {timeExceeded ? (
                  <span className="font-roboto text-lg font-semibold text-red-400 dark:text-red-400">
                    &#x23F0; Time&apos;s up!
                  </span>
                ) : (
                  <span className="text-clrTextLight font-roboto dark:text-clrText text-3xl font-bold">
                    {formatted}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Mic Controls */}
          <div className="dark:bg-clrFirefly bg-clrAquaHaze h-full space-y-4 rounded-md px-2 py-3 shadow">
            <div className="flex h-full flex-col items-center justify-center gap-2">
              <DisplayMic
                isDisabled={timeExceeded}
                micStatus={micStatus}
                isRecording={isRecording}
              />
              <MicStatusBadge isDisabled={timeExceeded} micStatus={micStatus} />
              {timeExceeded ? (
                <button
                  onClick={() => {
                    router.push('/sign-in');
                  }}
                  className="from-clrDawnyGreen to-clrDenimBlue hover:from-clrDawnyGreen/90 hover:to-clrDenimBlue/90 rounded-md bg-gradient-to-r px-5 py-2 text-xs font-medium text-black transition"
                >
                  Sign In
                </button>
              ) : (
                <>
                  {micStatus !== 'granted' ? (
                    <button
                      onClick={handleGrantPermission}
                      disabled={isMicLoading}
                      className="from-clrDawnyGreen to-clrDenimBlue hover:from-clrDawnyGreen/90 hover:to-clrDenimBlue/90 rounded-md bg-gradient-to-r px-5 py-2 text-xs font-medium text-black transition disabled:opacity-60"
                    >
                      {isMicLoading
                        ? 'Requesting...'
                        : 'Grant Microphone Access'}
                    </button>
                  ) : !isRecording ? (
                    <button
                      onClick={handleStartRecording}
                      className="from-clrDawnyGreen to-clrDenimBlue hover:from-clrDawnyGreen/90 hover:to-clrDenimBlue/90 rounded-md bg-gradient-to-r px-5 py-2 text-xs font-medium text-black transition"
                    >
                      Start Talking
                    </button>
                  ) : (
                    <button
                      onClick={handleStopRecording}
                      className="from-clrDawnyGreen to-clrDenimBlue hover:from-clrDawnyGreen/90 hover:to-clrDenimBlue/90 rounded-md bg-gradient-to-r px-5 py-2 text-xs font-medium text-black transition"
                    >
                      Stop Talking
                    </button>
                  )}
                  {micStatus === 'denied' && (
                    <p className="text-muted-foreground text-center text-sm">
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
        <div className="dark:bg-clrFirefly bg-clrAquaHaze w-full space-y-4 rounded-md px-2 py-3 shadow md:basis-1/2">
          <ImportantNotes />
        </div>
      </div>

      {/* Sound Visualizer Section */}
      <div className="mx-auto mt-6 h-[300px] w-full max-w-6xl rounded-md p-2 shadow">
        <SoundVisualizer mediaStream={mediaStream} />
      </div>
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
            className="bg-clrCaribbeanGreen hover:bg-clrCaribbeanGreen/80 text-xs"
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
        <div className="w-fit space-x-2">
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
        <div className="border-clrTextLight/20 mx-auto w-fit rounded-full border bg-gray-100 p-3">
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
              isRecording ? `animate-pulse bg-red-100` : `bg-green-100`,
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
          <div className="border-clrTextLight/20 mx-auto w-fit rounded-full border bg-gray-100 p-3">
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
      <p className="font-lg font-nunito">🤖 AI Agents Try Demo – Rules</p>
      <ul className="mt-4 space-y-1 pl-2">
        {rules.map((r, idx) => (
          <li className="font-nunito flex gap-2 text-sm" key={idx}>
            <span className="text-clrTextLight dark:text-clrText block">
              {r.icon}
            </span>
            <span className="text-clrTextLight dark:text-clrText block">
              {r.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
