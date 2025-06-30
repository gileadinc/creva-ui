'use client';

import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

import {
  SectionContent,
  SectionSubTitle,
  SectionTitle,
} from '../_shared/section';
import { PostJobData } from '@/constants/data';

export default function PostJob({ className }: { className?: string }) {
  const { subtitle, subIcon } = PostJobData;
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const atBottom = scrollTop + clientHeight >= scrollHeight;
      const atTop = scrollTop === 0;

      document.body.style.overflow = !atTop && !atBottom ? 'hidden' : '';
    };

    el.addEventListener('scroll', onScroll);
    return () => {
      el.removeEventListener('scroll', onScroll);
      document.body.style.overflow = '';
    };
  }, []);

  const cards = [
    {
      imageSrc: '/assets/img/post-job-1.jpg',
      labels: [
        {
          text: 'Company Overview',
          className: 'top-[10%] right-0 sm:-right-20',
        },
        { text: 'Job Title', className: 'top-[30%] left-0 sm:-left-20' },
        {
          text: 'Diversity And Inclusion',
          className: 'top-[50%] right-0 sm:-right-20',
        },
        { text: 'Job Description', className: 'top-[70%] left-0 sm:-left-20' },
      ],
    },
    {
      imageSrc: '/assets/img/post-job-2.jpg',
      labels: [
        {
          text: 'Phone Call Screening',
          className: 'top-[10%] left-0 sm:-left-20',
        },
        {
          text: 'Candidate Shortlisting',
          className: 'top-[30%] right-0 sm:-right-20',
        },
        {
          text: 'In-Depth Interviews',
          className: 'top-[50%] left-0 sm:-left-20',
        },
        {
          text: 'Resume Screening',
          className: 'top-[70%] right-0 sm:-right-20',
        },
      ],
    },
    {
      imageSrc: '/assets/img/post-job-3.jpg',
      labels: [
        {
          text: 'Hustle Free Hiring',
          className: 'top-[20%] right-0 sm:-right-20',
        },
        {
          text: 'Best Candidates',
          className: 'top-1/2 left-0 -translate-y-1/2 sm:-left-20',
        },
        { text: 'Smooth Process', className: 'top-[70%] right-0 sm:-right-20' },
      ],
    },
  ];

  return (
    <section
      id="features"
      className={cn(
        'dark:bg-clrCinder bg-clrMercury/40 pt-20 md:pt-38',
        className,
      )}
    >
      <div className="container mx-auto space-y-2 max-sm:px-[3%]">
        <SectionSubTitle text={subtitle} icon={subIcon} />
        <SectionTitle>
          <span>
            Simplify Your Hiring Process with Our{' '}
            <br className="hidden lg:block" /> AI-Powered Job Posting Solution
          </span>
        </SectionTitle>
      </div>

      <div className="mt-10">
        <SectionContent className="min-h-fit">
          <div
            ref={scrollRef}
            data-lenis-prevent
            className={cn(
              'max-h-[380px] overflow-y-auto px-4',
              'scrollbar-hide snap-y snap-mandatory overflow-y-scroll scroll-smooth',
            )}
          >
            <ul className="flex flex-col gap-20 md:gap-40">
              {cards.map((card, idx) => (
                <motion.li
                  key={idx}
                  className="snap-start overflow-hidden rounded-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <ProcessCard {...card} />
                </motion.li>
              ))}
            </ul>
          </div>
        </SectionContent>
      </div>
    </section>
  );
}

type LabelItem = {
  text: string;
  className: string;
};

function ProcessCard({
  imageSrc,
  labels,
}: {
  imageSrc: string;
  labels: LabelItem[];
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: '-20% 0px' });

  const labelVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        // duration: 0.6,
        // delay: i * 0.2,
        duration: 1,
        delay: i * 0.5,
      },
    }),
  };

  return (
    <div ref={ref} className="relative mx-auto h-[380px] w-fit rounded-lg">
      <Image
        className="size-full object-cover"
        src={imageSrc}
        width={480}
        height={480}
        alt="post-job-image"
      />

      {labels.map((label, i) => (
        <motion.span
          key={label.text}
          custom={i}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={labelVariants}
          className={`absolute w-fit ${label.className}`}
        >
          <Label text={label.text} />
        </motion.span>
      ))}
    </div>
  );
}

function Label({ text }: { text: string }) {
  return (
    <div className="w-[220px] rounded-sm bg-[#222222]/40 px-1.5 py-1.5 backdrop-blur-[2px]">
      <span className="font-roboto block rounded-sm bg-[#121212] py-2 text-center text-sm leading-snug font-medium tracking-wide text-white capitalize">
        {text}
      </span>
    </div>
  );
}
