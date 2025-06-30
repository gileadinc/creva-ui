import TrackVector from '@/components/icons/track-vector';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import SoundVisualizer from './sound-visualizer';
import { useEffect, useRef } from 'react';
import useTimer from '@/hooks/useTimer';
import { MicPermissionState, useMicrophone } from '@/hooks/useMicrophone';
import { useRouter } from 'next/navigation';
import { Mic, MicOff } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
export default function LiveTalk({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
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
    remaining,
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
      <div className="dark:bg-clrCinder sbg-[#F6FEFF] bg-clrMercury/40 mx-auto w-full max-w-6xl rounded-md px-[5%] dark:text-white">
        <div className="grid size-full grid-cols-1 py-10 max-md:gap-10 md:grid-cols-[1fr_1fr]">
          <div className="max-md:order-2 md:w-[90%]">
            <div className="flex size-full flex-col gap-4">
              {/* Timer */}

              <div className="z-40 w-full px-4 py-3">
                <div className="flex w-full items-center justify-between max-sm:px-0">
                  <p className="block font-medium tracking-wide uppercase">
                    Time Remaining
                  </p>

                  <div className="">
                    {timeExceeded ? (
                      <Button
                        onClick={() => {
                          router.push('/sign-in');
                        }}
                        className="h-8 w-30 cursor-pointer rounded-[3px] text-sm"
                        variant="brand"
                      >
                        Sign In
                      </Button>
                    ) : (
                      <span className="text-base font-light">{formatted}</span>
                    )}
                  </div>
                </div>
                <Progress
                  className={cn(
                    'dark:bg-muted mt-4',
                    '[&>div]:from-clrAlienGreen [&>div]:to-clrSunnyYellow [&>div]:bg-linear-51',
                  )}
                  value={(1 - remaining / 90) * 100}
                />
              </div>

              {/* Mic Controls */}
              <div className="z-40 h-full space-y-4 px-2 py-3">
                <div className="flex h-full flex-col items-center justify-center gap-2">
                  <DisplayMic
                    isDisabled={timeExceeded}
                    micStatus={micStatus}
                    isRecording={isRecording}
                  />
                  <MicStatusBadge
                    isDisabled={timeExceeded}
                    micStatus={micStatus}
                  />
                  {timeExceeded ? (
                    <>
                      <span className="text-center text-sm md:text-base">
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
                          className="h-10 w-52 cursor-pointer rounded-md text-sm"
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
                          className="h-10 w-52 cursor-pointer rounded-md text-sm"
                          variant="brandOutline"
                        >
                          Start Talking
                        </Button>
                      ) : (
                        <Button
                          disabled={isMicLoading}
                          onClick={handleStopRecording}
                          size="sm"
                          className="h-10 w-52 cursor-pointer rounded-md text-sm"
                          variant="brandOutline"
                        >
                          Stop Talking
                        </Button>
                      )}
                      {micStatus === 'denied' && (
                        <p className="text-muted-foreground text-center text-sm">
                          Please allow microphone access in your browser
                          settings to use this feature.
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <ImportantNotes />
        </div>
      </div>
      <div className="mx-auto mt-10 h-[200px] max-w-6xl">
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
            // className="bg-[#1da455e0] text-xs hover:bg-[#1da455e0]/80 dark:bg-[#00cc99c0] dark:hover:bg-[#00cc99c0]/80"
            className="from-clrAlienGreen to-clrSunnyYellow text-clrOnyx bg-linear-51 text-xs"
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
        <div className="font-roboto w-fit space-x-2">
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
              //   isRecording
              //     ? `animate-pulse bg-red-100`
              //     : `bg-green-200 dark:bg-green-100`,
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
    <div className="size-full pt-4 pl-2">
      <p className="font-lg font-roboto text-xl capitalize sm:text-2xl">
        🤖 AI Agents Try Demo – Rules
      </p>
      <ul className="mt-4 space-y-1.5 pl-2">
        {rules.map((r, idx) => (
          <li className="font-roboto flex gap-2 text-sm sm:text-base" key={idx}>
            <span className="block">{r.icon}</span>
            <span className="block">{r.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
