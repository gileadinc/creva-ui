'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Cta({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const router = useRouter();
  return (
    <section className="mt-40 px-[4%] md:mt-60">
      <div
        className={cn(
          'relative bottom-[-60px] z-10 container mx-auto mt-[160px] w-full max-w-6xl overflow-hidden rounded-xl py-6',
          className,
        )}
      >
        {/* Background Image */}
        {/* <div className="absolute inset-0 -z-20">
          <Image
            src="/assets/img/galaxy-pic.png"
            alt="galaxy background"
            fill
            className="object-cover"
            priority
            />
        </div> */}
        <div className="absolute inset-0 w-full">
          <Image
            className="size-full object-cover"
            // src="/assets/svg/cta-mask.svg"
            src="/assets/img/cta-mask-big.png"
            alt="galaxy background"
            width={1000}
            height={1000}
          />
        </div>

        {/* Gradient & Blur Overlay */}
        {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 to-black/90 backdrop-blur-md" /> */}
        {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/90 to-black backdrop-blur-[20px]" /> */}
        {/* <div className="absolute inset-0 size-full bg-gradient-to-b from-black/80 via-black/90 to-black " /> */}
        {/* Content */}
        <div className="relative z-30 mx-auto flex min-h-[200px] max-w-lg flex-col items-center justify-center gap-6 px-6 py-4 text-center text-white">
          <h1 className="font-raleway max-w-[600px] text-4xl leading-tight font-extrabold uppercase sm:text-5xl">
            Make Your Hiring Hustle Free
          </h1>

          <Button
            onClick={() => {
              router.push('/sign-up');
            }}
            className="h-10 cursor-pointer px-6 py-2"
            variant="brand"
          >
            <span className="font-roboto text-base font-semibold tracking-wide">
              Get Started For Free
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
