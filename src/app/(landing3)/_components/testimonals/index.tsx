'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import {
  SectionContent,
  SectionDescription,
  SectionSubTitle,
  SectionTitle,
} from '../_shared/section';
import { motion } from 'motion/react';
import { TestimonialsData } from '@/constants/data';

export default function Testimonals({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { title, subtitle, subIcon, description } = TestimonialsData;
  return (
    <section
      id="testimonials"
      className={cn(
        'py-20 sm:py-30 md:py-38 lg:py-42',
        // 'pb-5 sm:pb-10 md:pb-18 lg:pb-22',
        className,
      )}
    >
      <div className="container mx-auto space-y-2 max-sm:px-[3%]">
        <SectionSubTitle className="md:mx-0" text={subtitle} icon={subIcon} />
        <SectionTitle className="max-w-4xl md:text-left" text={title} />
        <SectionDescription className="mt-3 md:text-left" text={description} />
      </div>

      <SectionContent
        className={cn(
          'mt-14 min-h-fit py-10',
          'relative container mt-20 overflow-hidden py-8',
        )}
      >
        <div className="dark:from-clrOnyx dark:via-clrOnyx/70 pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white via-white/20 to-transparent" />
        <div className="dark:via-clrOnyx/70 dark:from-clrOnyx pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white via-white/20 to-transparent" />
        <motion.ul
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 40,
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: 'paused' }}
          className="flex w-max gap-8 sm:gap-10 xl:gap-12"
        >
          {[...new Array(10)].map((test, idx) => (
            <motion.li
              className="shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * (idx % 10),
              }}
              key={idx}
            >
              <TestimonalCard />
            </motion.li>
          ))}
        </motion.ul>
      </SectionContent>
    </section>
  );
}

function TestimonalCard() {
  return (
    <div className="dark:bg-clrCinder font-roboto dark:text-clrPorcelain text-clrTextLight bg-[#f4f2f2]d bg-clrMercury/40 relative rounded-md p-6">
      <p className="max-w-md justify-start text-lg font-light opacity-60">
        Using the Pay Per Candidate option has transformed our hiring process.
        We only pay for the candidates we need, which has helped us stay within
        budget while still finding excellent talent.
      </p>
      <hr className="text-clrTextLight dark:text-clrPorcelain mt-5 mb-4" />
      <div className="flex items-start justify-between text-sm leading-none font-thin">
        <p className="">Sarah Johnson</p>
        <div className="space-y-2">
          <p className="">HR Manager</p>
          <p className="">Tech Innovations Inc.</p>
        </div>
      </div>
    </div>
  );
}
