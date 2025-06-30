'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import {
  SectionContent,
  SectionSubTitle,
  SectionTitle,
} from '../_shared/section';
import { TryLiveData } from '@/constants/data';
import TrackVector from '@/components/icons/track-vector';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store/useAppStore';
import Image from 'next/image';
import LiveTalk from './live-talk';
import TrackVectorSvg from '@/components/icons/track-vector-svg';
import useTimer from '@/hooks/useTimer';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
export default function TryLive({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { subIcon, subtitle, title } = TryLiveData;
  const { timeExceeded } = useTimer();
  const router = useRouter();
  const {
    isTryLiveOn,
    setIsTryLiveOn,
    openModal,
    setIsTryLiveModalFirstOpen,
    isTryLiveModalFirstOpen,
  } = useAppStore();
  const handleTryLiveDemo = async () => {
    if (timeExceeded) {
      setIsTryLiveOn(false);
      toast.error('You have exceeded the time limit for the live interaction');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.error('Please sign in and get a 30 min additional free trial.');

      router.push('/sign-in');
      return;
    }

    if (!isTryLiveModalFirstOpen) {
      openModal('tryLive');
      setIsTryLiveModalFirstOpen(true);
    } else {
      setIsTryLiveOn(true);
    }
  };

  return (
    <section
      id="try-live"
      className={cn(
        // 'py-20 sm:py-30 md:py-38 lg:py-42',
        'pt-20 sm:pt-30 md:pt-38 lg:pt-42',
        className,
      )}
    >
      <div className="container mx-auto space-y-2 max-sm:px-[3%]">
        <SectionSubTitle text={subtitle} icon={subIcon} />
        <SectionTitle>
          <span>
            Try The Live AI Voice <br className="hidden lg:block" /> Interaction
            Demo
          </span>
        </SectionTitle>
      </div>

      <div className="mt-10 sm:pt-10">
        <SectionContent className="mx-auto min-h-fit">
          <div
            className={cn(
              'relative',
              isTryLiveOn
                ? ''
                : 'h-[300px] overflow-hidden sm:h-[340px] lg:h-fit',
            )}
          >
            {!isTryLiveOn ? (
              <div>
                <Image
                  className={cn(
                    'absolute -z-10 size-full object-cover lg:static',
                  )}
                  src={'/assets/svg/track-vector.svg'}
                  alt="track"
                  width={100}
                  height={100}
                />
                <TrackVectorSvg className="dark:text-whidte absolute inset-0 mx-auto size-full w-full text-[#373737] opacity-20" />
              </div>
            ) : (
              <div className="min-h-[300px]">
                <LiveTalk />
              </div>
            )}
          </div>
          {!isTryLiveOn && (
            <Button
              onClick={handleTryLiveDemo}
              className="mx-auto mt-10 block w-52"
              variant="brand"
            >
              Try Live Demo
            </Button>
          )}
          {isTryLiveOn && (
            <Button
              onClick={() => setIsTryLiveOn(false)}
              className="mx-auto mt-10 block w-52"
              variant="brand"
            >
              Cancel
            </Button>
          )}
        </SectionContent>
      </div>
    </section>
  );
}
