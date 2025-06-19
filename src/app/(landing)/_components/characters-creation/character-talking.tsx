'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import {
  TooltipTrigger,
  Tooltip,
  TooltipContent,
} from '@/components/ui/tooltip';
import { IAgent } from '@/types';
import { useAppStore } from '@/store/useAppStore';

export default function CharacterTalking({
  agent,
  idx,
}: {
  agent: IAgent;
  idx: number;
}) {
  const { selectedAgentId, isCharacterTalking } = useAppStore();
  return (
    <Tooltip key={idx}>
      <TooltipTrigger asChild>
        <div className="relative rounded-full">
          <Image
            className="size-full object-cover"
            src={agent.img}
            width={100}
            height={100}
            alt="character"
          />
          {selectedAgentId === agent.id && isCharacterTalking && (
            <>
              <div className="absolute inset-0 -z-10 scale-125 animate-pulse rounded-full bg-black/20 dark:bg-white/60" />
              <div className="absolute inset-0 -z-10 scale-110 animate-pulse rounded-full bg-black/10 dark:bg-white/40" />

              {/* Permanent TooltipContent-style UI */}
              <div className="bg-clrAquaHaze dark:bg-clrMidNightDark absolute -top-16 left-1/2 z-50 ml-2 -translate-x-1/2 rounded-md px-3 py-2 text-xs whitespace-nowrap shadow-lg">
                <div className="relative flex items-center gap-2">
                  <div className="size-5">
                    <Image
                      className="size-full object-contain"
                      src="/assets/svg/mic-icon.svg"
                      alt="mic"
                      width={10}
                      height={10}
                    />
                  </div>
                  <p className="opacity-0">Talking with {agent.name}</p>
                  <p className="font-roboto text-clrTextLight dark:from-clrDawnyGreen dark:to-clrDenimBlue absolute left-7 animate-none text-xs dark:bg-linear-53 dark:bg-clip-text dark:text-transparent">
                    Talking with {agent.name}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </TooltipTrigger>
      {isCharacterTalking && selectedAgentId === agent.id ? (
        <></>
      ) : (
        <TooltipContent
          className={cn(
            'dark:bg-clrMidNightDark bg-clrAquaHaze flex items-center gap-2 py-2',
          )}
        >
          <div className="size-5">
            <Image
              className="size-full object-contain"
              src={'/assets/svg/mic-icon.svg'}
              alt="mic"
              width={10}
              height={10}
            />
          </div>
          <div>
            <p className="font-roboto text-clrTextLight dark:from-clrDawnyGreen dark:to-clrDenimBlue dark:bg-linear-53 dark:bg-clip-text dark:text-transparent">
              Talk with {agent.name}
            </p>
          </div>
        </TooltipContent>
      )}
    </Tooltip>
  );
}
