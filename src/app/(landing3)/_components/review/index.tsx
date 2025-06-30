'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import {
  SectionContent,
  SectionDescription,
  SectionSubTitle,
  SectionTitle,
} from '../_shared/section';
import { ReviewData } from '@/constants/data';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
export default function Review({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { title, subtitle, subIcon, description } = ReviewData;
  const router = useRouter();
  const handleGetStarted = () => {
    router.push('/sign-up');
  };
  return (
    <section
      className={cn(
        'dark:bg-clrCinder bg-clrMercury/40',
        'pt-20 sm:pt-30 md:pt-38 lg:pt-42',
        className,
      )}
    >
      <div className="container mx-auto space-y-2 max-sm:px-[3%]">
        <SectionSubTitle text={subtitle} icon={subIcon} />
        {/* <SectionTitle text={title} /> */}
        <SectionTitle>
          <span>
            Review Resumes in Seconds with <br className="hidden lg:block" />{' '}
            AI-Enhanced Evaluation
          </span>
        </SectionTitle>
        <SectionDescription
          text={description}
          className="mx-auto mt-3 max-w-3xl text-center"
        />
      </div>
      <div className="mt-4 pt-4 pb-14 sm:mt-10 sm:pt-10">
        <SectionContent className="mx-auto min-h-fit">
          <ReviewContent />
        </SectionContent>
        <Button
          onClick={handleGetStarted}
          className="mx-auto mt-10 block w-52"
          variant="brand"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}

function ReviewContent() {
  return (
    <div className="relative max-h-[380px] overflow-hidden">
      {/* Layout reference - do not touch */}
      <Image
        className="pointer-events-none size-full max-h-[280px] object-contain opacity-0 sm:h-[380px] sm:max-h-full"
        src={'/assets/img/review-l.png'}
        width={480}
        height={480}
        alt="review-image"
      />

      {/* Middle Image */}
      <motion.div
        className="absolute -bottom-10 left-1/2 z-[999] h-[300px] -translate-x-1/2 sm:-bottom-8 sm:h-[380px]"
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeIn', delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          className="size-full object-contain"
          src={'/assets/img/review-m.png'}
          width={480}
          height={480}
          alt="review-image"
        />
      </motion.div>

      {/* Left Image */}
      <motion.div
        className="absolute -bottom-36 left-[45%] h-[300px] origin-bottom-left -translate-x-[45%] -rotate-[15deg] sm:-bottom-36 sm:left-[44%] sm:h-[380px] sm:-translate-x-[44%] sm:-rotate-[20deg]"
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeIn', delay: 1.5 }}
        viewport={{ once: true }}
      >
        <Image
          className="size-full object-contain"
          src={'/assets/img/review-l.png'}
          width={480}
          height={480}
          alt="review-image"
        />
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="absolute right-[45%] -bottom-32 h-[300px] origin-bottom-right translate-x-[45%] rotate-[15deg] sm:right-[44%] sm:-bottom-36 sm:h-[380px] sm:translate-x-[44%] sm:rotate-[20deg]"
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeIn', delay: 2.5 }}
        viewport={{ once: true }}
      >
        <Image
          className="size-full object-contain"
          src={'/assets/img/review-ru.png'}
          width={480}
          height={480}
          alt="review-image"
        />
      </motion.div>
    </div>
  );
}
