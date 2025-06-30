'use client';
import RotatingGradientSVG from '@/components/icons/rotating-gradient';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAppStore } from '@/store/useAppStore';
import { ClassValue } from 'clsx';

export default function Hero({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { openModal } = useAppStore();

  const handleTryAIAgent = () => {
    openModal('redirectToLive');
  };
  return (
    <section
      id="hero"
      className={cn(
        'h-[calc(100dvh-100px)]',
        'relative flex items-center justify-center overflow-hidden',
        className,
      )}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-0 max-sm:opacity-100">
        <RotatingGradientSVG height={440} width={440} className="" />
      </div>

      <div className="absolute top-0 left-0 opacity-0 sm:max-md:opacity-100">
        <RotatingGradientSVG height={400} width={400} className="" />
      </div>
      <div className="absolute right-0 -bottom-52 opacity-0 sm:max-md:opacity-100">
        <RotatingGradientSVG height={400} width={400} className="" />
      </div>
      <div className="absolute top-0 left-0 opacity-0 md:opacity-100">
        <RotatingGradientSVG className="" />
      </div>
      <div className="absolute top-0 right-0 opacity-0 md:opacity-100">
        <RotatingGradientSVG className="" />
      </div>
      <div className="absolute -bottom-52 left-0 opacity-0 md:opacity-100">
        <RotatingGradientSVG className="" />
      </div>
      <div className="absolute right-0 -bottom-52 opacity-0 md:opacity-100">
        <RotatingGradientSVG className="" />
      </div>

      <div className="z-40 container mx-auto max-w-5xl space-y-6 text-center max-lg:px-[3%] max-sm:px-[2%]">
        <h1 className="font-montserrat text-[44px] leading-tight font-bold capitalize sm:text-5xl md:text-6xl lg:text-7xl">
          All-in-One AI Solutions to <br className="hidden lg:block" />
          Transform Your Hiring
        </h1>
        <p className="mx-auto max-w-4xl text-base leading-relaxed font-light md:text-lg lg:max-w-[948px] lg:text-xl lg:leading-[30px]">
          Unlock a new era of talent acquisition with our cutting-edge AI
          solutions. Say goodbye to tedious tasks and hello to seamless,
          engaging hiring processes that connect you with the best candidates
          effortlessly. Let us simplify your journey to success!
        </p>
        <Button
          onClick={handleTryAIAgent}
          variant="brand"
          className="font-opensans mt-6 h-12 w-80 text-sm sm:text-base md:text-lg"
        >
          Get Started For Free
        </Button>
      </div>
    </section>
  );
}
