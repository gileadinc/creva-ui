'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAppStore } from '@/store/useAppStore';
import { ClassValue } from 'clsx';
import { useRouter } from 'next/navigation';

export default function Cta({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const router = useRouter();
  const { openCtaDialog } = useAppStore();
  const handleGetStartedNow = () => {
    router.push('/sign-up');
    // openCtaDialog();
  };
  return (
    <div className={cn('px-[2%] py-20 sm:py-30 md:py-38 lg:py-42', className)}>
      <div className="from-clrSunnyYellow to bg-clrAlienGreen mx-auto flex max-w-7xl flex-col gap-8 rounded-lg bg-linear-51 py-10 max-sm:px-[4%]">
        <h1 className="font-montserrat text-clrOnyx text-center text-4xl leading-[1.2] font-bold sm:text-5xl lg:text-6xl lg:leading-[72px]">
          Start Now and Enjoy 30 Minutes <br className="hidden md:block" /> of
          Free AI Hiring Solutions!
        </h1>
        <Button
          onClick={handleGetStartedNow}
          className="text-clrPorcelain font-roboto mx-auto h-12 w-fit cursor-pointer bg-black px-8 tracking-wide hover:bg-black/80 md:text-lg dark:bg-black dark:hover:bg-black/80"
        >
          Get Started Now
        </Button>
      </div>
    </div>
  );
}
