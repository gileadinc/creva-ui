'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';

interface IWorkFlowStep {
  step: number;
  type: string;
  title: string;
  description: string;
  image: string;
}
const workFlowSteps = [
  {
    step: 1,
    type: 'Post',
    title: 'Post Your Job Effortlessly',
    description:
      'Share your job openings quickly and easily. Our platform ensures your listings reach the right candidates, helping you find the perfect fit for your team!',
    image: '',
  },
  {
    step: 2,
    type: 'Review',
    title: 'AI-Powered Resume Reviews',
    description:
      'Let our AI analyze resumes for you, highlighting the best candidates and saving you time in the selection process. Make informed hiring decisions with ease!',
    image: '',
  },
  {
    step: 3,
    type: 'Screen',
    title: 'Voice AI Screening Calls',
    description:
      'Conduct automated voice screening calls to evaluate candidates’ qualifications and fit. Save time while ensuring a thorough initial assessment!',
    image: '',
  },
  {
    step: 4,
    type: 'Action',
    title: 'Shortlist Candidates and Take Action',
    description:
      'Easily identify top candidates and make informed hiring decisions. Streamline your recruitment process and move forward with confidence!',
    image: '',
  },
];

export default function HowItWorks({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  return (
    <div id="howitworks" className={cn('py-14 sm:py-18 md:py-24', className)}>
      <div className="container mx-auto">
        <motion.h1
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="text-clrText font-nunito xs:leading-[52px] xs:text-[44px] mx-auto mb-5 max-w-[753px] text-center text-[40px] leading-[52px] font-bold capitalize sm:text-5xl"
        >
          How Our AI Simplifies Your Hiring Process
        </motion.h1>
        <motion.p
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="text-clrText font-roboto mx-auto max-w-2xl px-2 text-center font-light tracking-wide"
        >
          Discover how our AI technology streamlines candidate sourcing,
          enhances matching accuracy, and automates tasks, making hiring easier
          and more efficient for your team.
        </motion.p>
      </div>
      <div className="relative mt-18 py-8 xl:mt-30">
        <ul className="container mx-auto max-w-6xl space-y-20 px-[2%] xl:px-0">
          {workFlowSteps.map((step, idx) => (
            <li key={step.step} className="">
              <WorkFlowStep
                item={step}
                flexDirection={idx % 2 === 0 ? 'normal' : 'reverse'}
              />
            </li>
          ))}
        </ul>
        <button className="text-clrBlackPearl from-clrDawnyGreen/95 hover:from-clrDawnyGreen hover:to-clrDenimBlue to-clrDenimBlue/95 font-roboto mx-auto mt-24 block w-[300px] cursor-pointer rounded-sm bg-linear-48 py-2 text-center font-medium transition-all duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </div>
  );
}

function WorkFlowStep({
  item,
  flexDirection,
}: {
  item: IWorkFlowStep;
  flexDirection?: 'normal' | 'reverse';
}) {
  const { title, description, type } = item;
  const isTextRight = flexDirection === 'reverse';
  return (
    <div
      className={cn(
        'flex gap-10',
        isTextRight ? 'flex-col sm:flex-row-reverse' : 'flex-col sm:flex-row',
      )}
    >
      <motion.div
        variants={isTextRight ? variants.fadeInLeft : variants.fadeInRight}
        initial={'start'}
        whileInView={'end'}
        viewport={{ once: true }}
        className="flex-1"
      >
        <div className="flex flex-col items-center text-center sm:block sm:text-left">
          <span className="text-clrBlackPearl font-roboto mb-3 block w-[164px] rounded-lg bg-linear-48 from-[#5cd9ba] to-[#81b5e9] py-1.5 text-center text-sm">
            {type}
          </span>
          <h2 className="font-nunito text-clrText mb-4 text-4xl font-bold">
            {title}
          </h2>
          <p className="font-roboto text-clrText text-sm leading-[24px] font-light tracking-wide sm:max-w-md">
            {description}
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={isTextRight ? variants.fadeInRight : variants.fadeInLeft}
        initial={'start'}
        whileInView={'end'}
        viewport={{ once: true }}
        className="flex-1"
      >
        <div className="bg-clrFirefly/60 aspect-video rounded-xl backdrop-blur-2xl"></div>
      </motion.div>
    </div>
  );
}
