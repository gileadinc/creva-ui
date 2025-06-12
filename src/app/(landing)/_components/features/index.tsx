'use client';
import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';

interface IDetailData {
  title: string;
  text: string;
}
interface IFeature {
  img: string;
  title: string;
  description: string;
  detailData: IDetailData[];
}

const featuresData = [
  {
    img: '/assets/svg/phone-sc-icon.svg',
    title: 'AI-Powered Phone Screening',
    description:
      'Automate initial candidate evaluations with AI-powered phone screenings, delivering consistent assessments and saving time in the hiring process.',
    detailData: [
      {
        title: 'Main title one',
        text: 'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
      },
      {
        title: 'Main title one',
        text: 'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
      },
      {
        title: 'Main title one',
        text: 'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
      },
    ],
  },
  {
    img: '/assets/svg/prompts-icon.svg',
    title: 'Custom Prompts',
    description:
      'Create tailored prompts for interviews and assessments, enabling focused evaluations that align with your specific hiring criteria and company culture.',
    detailData: [
      {
        title: 'Main title one',
        text: 'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
      },
      {
        title: 'Main title one',
        text: 'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
      },
      {
        title: 'Main title one',
        text: 'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
      },
    ],
  },
  {
    img: '/assets/svg/ai-agents-icon.svg',
    title: 'Industry-specific AI agents',
    description:
      'Leverage tailored AI agents designed for specific industries, providing targeted insights and recommendations to optimize your recruitment process.',
    detailData: [
      {
        title: 'Main title one',
        text: 'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
      },
      {
        title: 'Main title one',
        text: 'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
      },
      {
        title: 'Main title one',
        text: 'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
      },
    ],
  },
  {
    img: '/assets/svg/resume-screening-icon.svg',
    title: 'Resume screening',
    description:
      'Utilize AI-driven resume screening to quickly identify top candidates by analyzing qualifications, experience, and skills against job requirements.',
    detailData: [
      {
        title: 'Main title one',
        text: 'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
      },
      {
        title: 'Main title one',
        text: 'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
      },
      {
        title: 'Main title one',
        text: 'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
      },
    ],
  },
  {
    img: '/assets/svg/work-flow-icon.svg',
    title: 'Create A Work Flow',
    description:
      'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
    detailData: [
      {
        title: 'Main title one',
        text: 'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
      },
      {
        title: 'Main title one',
        text: 'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
      },
      {
        title: 'Main title one',
        text: 'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
      },
    ],
  },
  {
    img: '/assets/svg/ats-icon.svg',
    title: 'Integration With CRM/ATS',
    description:
      'Seamlessly connect with your existing CRM or Applicant Tracking System (ATS) to streamline candidate management and enhance data flow across platforms.',
    detailData: [
      {
        title: 'Main title one',
        text: 'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
      },
      {
        title: 'Main title one',
        text: 'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
      },
      {
        title: 'Main title one',
        text: 'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
      },
    ],
  },
];

export default function Features({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  return (
    <div
      id="features"
      className={cn('mx-auto max-w-7xl overflow-hidden px-[1%]', className)}
    >
      <div className="relative container mx-auto rounded-3xl bg-linear-48 from-[#5cd9ba] to-[#81b5e9] px-10 py-16 pb-10 lg:pl-20">
        <div className="pointer-events-none absolute top-5 right-0 bottom-10 left-0">
          <Image
            className="size-full object-contain"
            src="/assets/svg/pattern-bg.svg"
            width={100}
            height={100}
            alt="patter-bg"
          />
        </div>
        <div className="absolute inset-0 -z-10">
          <Image
            className="size-full object-cover opacity-20"
            src={'/assets/svg/pattern-icon.svg'}
            alt="track"
            width={100}
            height={100}
          />
        </div>
        <div className="text-clrBlackPearl flex max-w-4xl flex-col gap-4">
          <motion.h1
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="font-nunito text-clrBlackPearl xs:text-5xl xs:leading-[52px] max-w-[656px] text-[40px] leading-[52px] font-bold capitalize"
          >
            Features That Empower Your Recruitment Process
          </motion.h1>
          <motion.p
            variants={variants.fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="text-light font-roboto text-clrBlackPearl max-w-[486px]"
          >
            Discover innovative features that optimize your hiring—from smart
            candidate matching to automated scheduling.
          </motion.p>
        </div>

        <motion.ul
          variants={variants.staggerContainer}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="xs:mt-18 mt-14 grid grid-cols-1 place-items-center gap-x-6 gap-y-14 sm:grid-cols-2 sm:place-items-center lg:grid-cols-3 lg:place-items-start"
        >
          {featuresData.map((feature, idx) => (
            <motion.li
              variants={variants.fadeInUp}
              className="w-full max-w-[340px] self-stretch"
              key={idx}
            >
              <FeatureCard item={feature} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

function FeatureCard({ item }: { item: IFeature }) {
  const { img, title, description, detailData } = item;

  return (
    <div className="bg-clrBlackPearl group relative h-full cursor-pointer rounded-xl p-6">
      <div className="flex flex-col items-center gap-4 opacity-100 transition-all duration-500 ease-linear group-hover:opacity-0">
        <motion.div
          variants={variants.fadeInUp}
          className="h-[140px] w-full max-w-[240px]"
        >
          <Image
            className="size-full object-contain"
            height={100}
            width={100}
            src={img}
            alt={title}
          />
        </motion.div>
        <div className="font-nunito text-clrText space-y-2">
          <motion.h2
            variants={variants.fadeInUp}
            className="font-nunito text-clrText max-w-64 justify-start text-2xl font-extrabold uppercase"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={variants.fadeInUp}
            className="font-nunito text-clrText max-w-72 justify-start text-xs leading-[20px] font-light"
          >
            {description}
          </motion.p>
        </div>
      </div>

      <div className="bg-clrBlackPearl absolute inset-0 rounded-xl opacity-0 transition-all duration-500 ease-linear group-hover:opacity-100">
        <div className="p-6">
          {detailData.map(({ title, text }, idx) => (
            <div key={idx}>
              <motion.div
                variants={variants.fadeInUp}
                className="h-[0] w-full min-w-[240px]"
              >
                <Image
                  className="size-full object-contain"
                  height={100}
                  width={100}
                  src={img}
                  alt={title}
                />
              </motion.div>
              <motion.h3
                variants={variants.fadeInUp}
                className="font-nunito text-clrText mt-4 font-semibold uppercase"
              >
                {title}
              </motion.h3>
              <motion.p
                variants={variants.fadeInUp}
                className="font-nunito text-clrText/80 text-xs font-light"
              >
                {text}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
