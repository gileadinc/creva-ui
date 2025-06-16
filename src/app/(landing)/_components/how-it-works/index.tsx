'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import * as variants from '@/lib/motion-variants';
import Image from 'next/image';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

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
      <div className="dark:text-clrText text-clrTextLight container mx-auto">
        <motion.h1
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="font-nunito xs:leading-[52px] xs:text-[44px] mx-auto mb-5 max-w-[753px] text-center text-[40px] leading-[52px] font-bold capitalize sm:text-5xl"
        >
          How Our AI Simplifies Your Hiring Process
        </motion.h1>
        <motion.p
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="font-roboto mx-auto max-w-2xl px-2 text-center font-light tracking-wide"
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
        <button className="dark:text-clrBlackPearl from-clrDawnyGreen/95 hover:from-clrDawnyGreen hover:to-clrDenimBlue to-clrDenimBlue/95 font-roboto mx-auto mt-24 block w-[300px] cursor-pointer rounded-sm bg-linear-48 py-2 text-center font-medium text-white transition-all duration-300 ease-in-out">
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
        isTextRight ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row',
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
          <h2 className="font-nunito text-clrTextLight dark:text-clrText mb-4 text-4xl font-bold">
            {title}
          </h2>
          <p className="font-roboto text-clrTextLight dark:text-clrText text-sm leading-[24px] font-light tracking-wide sm:max-w-md">
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
        <div className="dark:bg-clrFirefly/60 bg-clrAquaHaze relative aspect-video rounded-xl backdrop-blur-2xl">
          {type === 'Post' && <PostUI />}
          {type === 'Review' && <ReviewUI />}
          {type === 'Screen' && <ScreenUI />}
          {type === 'Action' && <ActionUI />}
        </div>
      </motion.div>
    </div>
  );
}

function PostUI() {
  return (
    <div className="dark:bg-clrBlackPearl absolute inset-0 overflow-hidden rounded-xl bg-white backdrop-blur-lg">
      <div className="size-full w-[90%]">
        <Image
          className="size-full rounded-xl opacity-80"
          alt="postjob"
          src={'/assets/svg/post-job.gif'}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

function ReviewUI() {
  const data = {
    user: {
      name: 'John Doe',
      position: 'Senior Frontend Developer',
      image: '/assets/img/boy-image.png',
    },

    skills: [
      {
        title: 'Work Experiance',
        desc: 'This Candidate has 100% Match ',
        color: '#6599CD',
        value: 100,
      },
      {
        title: 'Soft Skills',
        value: 92,
        color: '#72CC23',

        desc: 'Matches 92% in the soft skills criteria',
      },
      {
        title: 'Education Skills',
        value: 46,
        color: '#DD2626',

        desc: 'Only 46% Match in Education',
      },
      {
        title: 'Technical Skills',
        value: 75,
        color: '#DDDD26',

        desc: 'Matches 75% in the technical skills criteria',
      },
    ],
  };
  return (
    <div className="absolute inset-0 overflow-hidden p-8">
      <div className="size-full space-y-4">
        {/* user info */}
        <div className="flex items-center gap-4 rounded-md bg-white p-2 px-5 dark:bg-black/60 dark:text-[#939393]">
          <div>
            <Image
              className="w-fit"
              src={data.user.image}
              width={40}
              height={40}
              alt=""
            />
          </div>
          <div className="font-nunito space-y-1">
            <h4 className="text-lg font-semibold">{data.user.name}</h4>
            <p className="text-xs">{data.user.position}</p>
          </div>
        </div>

        {/* skills */}
        <div className="grid grid-cols-2 gap-4">
          {data.skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 rounded-md bg-white p-1 px-4 dark:bg-black/60 dark:text-[#939393]"
            >
              <div className="size-12 min-w-12">
                <CircularProgress percent={skill.value} color={skill.color} />
              </div>
              <div className="font-nunito">
                <h4 className="font-semibold">{skill.title}</h4>
                <p className="text-[10px]">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/*  */}
      </div>
    </div>
  );
}

function ScreenUI() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 size-full">
      <div className="flex size-full flex-col justify-center gap-12">
        {/* Icon with pulsing ring */}
        <div className="relative mt-16 w-full">
          <div className="relative mx-auto size-16">
            {/* Pulsing ring */}
            <div
              className="bg-clrDawnyGreen absolute inset-0 animate-ping rounded-full opacity-20"
              style={{ animationDelay: '0.2s' }}
            ></div>
            <div
              className="bg-clrDawnyGreen absolute inset-[8px] animate-ping rounded-full opacity-20"
              style={{ animationDelay: '0.4s' }}
            ></div>
            <div
              className="bg-clrDawnyGreen absolute inset-[16px] animate-ping rounded-full opacity-20"
              style={{ animationDelay: '0.6s' }}
            ></div>
            {/* Phone icon */}
            <Image
              className="relative z-10 object-cover"
              src="/assets/svg/calling-icon.svg"
              alt="phone-icon"
              width={64}
              height={64}
            />
          </div>
          <Image
            className="absolute inset-0 top-1/2 left-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2"
            src={'/assets/svg/calling-vector.svg'}
            alt="phone-icon"
            width={100}
            height={100}
          />
        </div>

        {/* Calling Button */}
        <button className="text-clrText font-nunito bg-clrDawnyGreen relative mx-auto block w-[80%] cursor-pointer justify-self-end overflow-hidden rounded-md py-2 text-xl font-semibold">
          Calling Candidate{dots}
          <Image
            className="absolute inset-0 top-1/2 left-1/2 w-[60%] -translate-x-1/2 -translate-y-1/2 opacity-10"
            src="/assets/svg/calling-vector.svg"
            alt="phone-icon"
            width={100}
            height={100}
          />
        </button>
      </div>
    </div>
  );
}
function ActionUI() {
  return (
    <div className="absolute inset-0">
      <div className="flex size-full flex-col gap-8">
        <h2 className="font-nunito mt-10 text-center text-3xl font-semibold">
          Applicant List
        </h2>
        <div className="mx-auto w-[90%]">
          <Image
            className="size-full object-cover"
            src={'/assets/img/applicant-img.png'}
            width={500}
            height={500}
            alt="applicants-images"
          />
        </div>
      </div>
    </div>
  );
}

const CircularProgress = ({
  percent,
  color,
}: {
  percent: number;
  color?: string; // Accepts HEX (e.g., '#f87171') or any valid CSS color
}) => {
  const radius = 40;
  const stroke = 6;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  // Fallback hex color logic
  const fallbackColor =
    percent >= 75
      ? '#ef4444' // red-500
      : percent >= 50
        ? '#facc15' // yellow-400
        : '#22c55e'; // green-500

  return (
    <svg
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      width="100%"
      height="100%"
      className="transform"
    >
      <circle
        stroke="#e5e7eb" // gray-200
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        strokeLinecap="round"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        stroke={color ?? fallbackColor}
      />
      <text
        x="50%"
        y="50%"
        dy="0.3em"
        textAnchor="middle"
        className="fill-current text-gray-800 dark:text-white"
      >
        {percent}%
      </text>
    </svg>
  );
};
