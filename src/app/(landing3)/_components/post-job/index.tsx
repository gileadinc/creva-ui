'use client';

import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { SectionSubTitle, SectionTitle } from '../_shared/section';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

import { SectionContent } from '../_shared/section';

export default function PostJob({ className }: { className?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeCard, setActiveCard] = useState<number | null>(0);
  const [isScrollActive, setIsScrollActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrollActive(entry.isIntersecting);
      },
      {
        threshold: 1.0, // Only when fully visible
      },
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Observe the active card's height and apply it to the scroll container
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerHeight(entry.contentRect.height);
      }
    });

    if (activeCard !== null && cardRefs.current[activeCard]) {
      resizeObserver.observe(cardRefs.current[activeCard]!);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [activeCard]);

  const cards = [
    {
      subtitle: 'Post Job',
      subIcon: 'post-job-icon',
      title:
        'Simplify Your Hiring Process with Our AI-Powered Job Posting Solution',
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
      subtitle: 'Screening & Interviewing',
      subIcon: 'post-job-icon',
      title:
        'Streamline Candidate Selection with Our Comprehensive Screening and Interviewing Services',
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
      subtitle: 'Candidate Matching',
      subIcon: 'post-job-icon',
      title:
        'Discover Top Talent Effortlessly with Our Candidate Matching Solution',
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
      className={cn('dark:bg-clrCinder bg-clrMercury/40 pt-10', className)}
    >
      <SectionContent className="min-h-fit max-w-full">
        <motion.div
          ref={scrollRef}
          data-lenis-prevent
          className={cn(
            'scrollbar-hide w-full scroll-smooth px-4 transition-all duration-300',
            isScrollActive
              ? 'snap-y snap-mandatory overflow-y-auto'
              : 'snap-none overflow-hidden',
          )}
          animate={{ height: containerHeight || 'auto' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <ul className="flex flex-col">
            {cards.map((card, idx) => (
              <motion.li
                key={idx}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="snap-center"
              >
                <ProcessCard
                  {...card}
                  index={idx}
                  onInView={() => setActiveCard(idx)}
                />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </SectionContent>
    </section>
  );
}

function ProcessCard({
  imageSrc,
  title,
  subtitle,
  labels,
  subIcon,
  index,
  onInView,
}: {
  imageSrc: string;
  title: string;
  subtitle: string;
  subIcon: string;
  index: number;
  labels: { text: string; className: string }[];
  onInView: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-20% 0px', once: false });

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  const labelVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.3,
      },
    }),
  };

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-7xl space-y-6 px-6 py-5"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionSubTitle className="w-58" text={subtitle} icon={subIcon} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <SectionTitle
          className={cn(
            'mx-auto max-w-4xl text-center',
            index === 1 && 'max-w-7xl',
          )}
        >
          <span>{title}</span>
        </SectionTitle>
      </motion.div>

      <div className="mx-auto mt-6 max-w-7xl">
        <div className="relative mx-auto h-[380px] w-fit rounded-xl">
          <Image
            className="size-full rounded-xl object-cover"
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
      </div>
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
