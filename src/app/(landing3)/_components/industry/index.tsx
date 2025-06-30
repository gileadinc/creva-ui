'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import {
  SectionDescription,
  SectionSubTitle,
  SectionTitle,
} from '../_shared/section';
import { IndustryAiAgentsData } from '@/constants/data';
import { motion } from 'motion/react';
// const DATA = ['Legal Services', 'Agriculture', 'Construction', 'Education'];
const DATA = [
  'Legal Services',
  'Agriculture',
  'Construction',
  'Education',
  'Healthcare',
  'Retail',
  'Manufacturing',
  'Finance',
  'Real Estate',
  'Hospitality',
  'Transportation',
  'Energy',
  'Entertainment',
  'Marketing',
  'Logistics',
  'Telecommunications',
  'Insurance',
];

export default function Industry({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { subtitle, subIcon, description } = IndustryAiAgentsData;

  return (
    <section className={cn('py-20 sm:py-30 md:py-38 lg:py-42', className)}>
      <div className="container mx-auto space-y-2 max-sm:px-[3%]">
        <SectionSubTitle text={subtitle} icon={subIcon} />
        <SectionTitle className="">
          <span>
            Industry-Specific AI Agents <br className="hidden sm:block" />{' '}
            Designed for You
          </span>
        </SectionTitle>
        <SectionDescription
          className="mx-auto mt-3 max-w-3xl text-center"
          text={description}
        />
      </div>
      <div className="mt-4 space-y-8 pt-10 sm:mt-10">
        <Marquee direction="left" />
        <Marquee direction="right" />
      </div>
    </section>
  );
}

function Marquee({ direction = 'left' }: { direction: 'left' | 'right' }) {
  const duration = 100;
  const xFrom = direction === 'left' ? '0%' : '-50%';
  const xTo = direction === 'left' ? '-50%' : '0%';

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        initial={{ x: xFrom }}
        animate={{ x: xTo }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
        className="flex w-max gap-4 px-2"
      >
        {[...DATA, ...DATA].map((industry, idx) => (
          <IndustryCard key={`${direction}-${idx}`} text={industry} />
        ))}
      </motion.div>
    </div>
  );
}

function IndustryCard({ text }: { text: string }) {
  return (
    <div
      className={cn(
        'bg-clrDarkLavender/10 inline-flex items-center justify-center rounded-sm',
        'h-10 w-44 px-2 py-8 text-lg',
        'md:h-14 md:w-54 md:px-5 md:py-9 md:text-xl lg:text-[22px]',
      )}
    >
      <div className="dark:text-clrPorcelain text-clrTextLight font-jost font-medium capitalize">
        {text}
      </div>
    </div>
  );
}

// const DATA = [
//   'Legal Services',
//   'Agriculture',
//   'Construction',
//   'Education',
//   'Healthcare',
//   'Retail',
//   'Manufacturing',
//   'Finance',
//   'Real Estate',
//   'Hospitality',
//   'Transportation',
//   'Energy',
//   'Entertainment',
//   'Marketing',
//   'Logistics',
//   'Telecommunications',
//   'Insurance',
//   'E-commerce',
//   'Pharmaceuticals',
//   'Automotive',
//   'Aerospace',
//   'Mining',
//   'Food & Beverage',
//   'Tourism',
//   'Media',
//   'Public Sector',
//   'Defense',
//   'IT Services',
//   'Non-Profit',
//   'Beauty',
//   'Fitness',
//   'Waste Management',
//   'Petroleum',
//   'Cybersecurity',
//   'Architecture',
//   'Event Planning',
//   'Home Services',
//   'Childcare',
//   'Legal Tech',
//   'BioTech',
//   'Robotics',
//   'IoT',
//   'Smart Cities',
//   'Blockchain',
//   'Crypto',
//   'Freight',
//   'Marine',
//   'HR Tech',
//   'EdTech',
//   'Green Energy',
// ];
