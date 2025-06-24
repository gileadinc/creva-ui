'use client';
// import { Variants ,motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAppStore } from '@/store/useAppStore';
import { ClassValue } from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// const heroVariant: Variants = {
//   start: {
//     opacity: 0,
//   },
//   end: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.4,
//     },
//   },
// };
// const heroChildVariant: Variants = {
//   start: {
//     y: 30,
//     opacity: 0,
//     filter: 'blur(5px)',
//   },
//   end: {
//     y: 0,
//     opacity: 1,
//     filter: 'blur(0)',
//     transition: {
//       duration: 0.7,
//       ease: 'easeOut',
//     },
//   },
// };
export default function Hero({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  return (
    <div className={cn('relative pt-[120px]', className)}>
      <div className="absolute top-0 left-1/2 z-40 mx-auto h-[120px] w-[90%] -translate-x-1/2">
        <Image
          className="size-full object-cover"
          src={'/assets/img/navbar-mask.png'}
          alt="navbar-mask-img"
          width={500}
          height={500}
        />
        <Image
          className="absolute inset-0 hidden size-full bg-black/5 object-cover dark:block"
          src={'/assets/svg/hero-shade-dark.svg'}
          alt="hero-banner"
          width={100}
          height={100}
        />
        <Image
          className="absolute inset-0 block size-full object-cover opacity-60 dark:hidden"
          src={'/assets/svg/hero-shade-light.svg'}
          alt="hero-banner"
          width={100}
          height={100}
        />
      </div>
      <div className="xs:h-[60vh] relative h-[65vh] min-h-[400px] w-full overflow-hidden sm:h-[50vh] md:h-[60vh] lg:h-[80vh]">
        <div className="size-full">
          <div className="">
            <Image
              loading="lazy"
              className="size-full max-sm:object-cover"
              src={'/assets/img/hero-banner-2.png'}
              alt="hero-banner"
              width={800}
              height={800}
            />
            <Image
              priority
              loading="eager"
              className="absolute inset-0 hidden size-full bg-black/10 object-cover dark:block"
              src={'/assets/svg/hero-shade-dark.svg'}
              alt="hero-banner"
              width={100}
              height={100}
            />
            <Image
              priority
              loading="eager"
              className="absolute inset-0 block size-full object-cover dark:hidden"
              src={'/assets/svg/hero-shade-light.svg'}
              alt="hero-banner"
              width={100}
              height={100}
            />
          </div>
        </div>
        <HeroText className={'absolute bottom-0 left-1/2 -translate-x-1/2'} />
      </div>
    </div>
  );
}

function HeroText({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const router = useRouter();
  const { openModal } = useAppStore();

  const handleTryAIAgent = () => {
    openModal('redirectToLive');
  };
  return (
    <div className={cn('w-full max-sm:px-[2%]', className)}>
      <div className="container mx-auto max-w-7xl space-y-4 px-2 py-10">
        <h1 className="dark:text-clrTextLight font-raleway justify-start text-center text-4xl leading-12 font-normal capitalize md:text-5xl md:leading-14 lg:text-6xl lg:leading-16 xl:text-7xl xl:leading-20">
          One Powerful Platform to Simplify Your Hiring Experience
        </h1>
        <p className="dark:text-clrTextLight font-opensans mx-auto max-w-xl justify-start text-center text-lg font-light md:max-w-3xl lg:text-xl">
          Our platform simplifies the hiring process, enabling you to
          effortlessly track, analyze, and manage candidates. With intuitive
          features and a user-friendly interface
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            onClick={handleTryAIAgent}
            className="h-10 w-44 cursor-pointer rounded-full"
            variant={'brand'}
          >
            <span className="font-opensans text-lg font-normal">
              Try AI Agent
            </span>
          </Button>
          <Button
            onClick={() => {
              router.push('/sign-up');
            }}
            className="h-10 w-44 cursor-pointer rounded-full"
            variant={'brandOutline'}
          >
            <span className="font-opensans text-lg font-normal">
              Start a Free Trial
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
