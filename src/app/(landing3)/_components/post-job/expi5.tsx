// 'use client';
// import { cn } from '@/lib/utils';
// import { ClassValue } from 'clsx';
// import {
//   SectionContent,
//   SectionSubTitle,
//   SectionTitle,
// } from '../_shared/section';
// import { PostJobData } from '@/constants/data';
// import Image from 'next/image';
// import { useEffect, useRef, useState } from 'react';

// import { useInView, motion } from 'motion/react';
// export default function PostJobExpi5({
//   className,
// }: {
//   className?: React.CSSProperties | ClassValue | string;
// }) {
//   const { subtitle, subIcon } = PostJobData;
//   const scrollRef = useRef<HTMLDivElement | null>(null);
//   useEffect(() => {
//     const el = scrollRef.current;
//     if (!el) return;

//     const onScroll = () => {
//       const { scrollTop, scrollHeight, clientHeight } = el;
//       const atBottom = scrollTop + clientHeight >= scrollHeight;
//       const atTop = scrollTop === 0;

//       // If not at top or bottom → lock body scroll
//       if (!atTop && !atBottom) {
//         document.body.style.overflow = 'hidden';
//       } else {
//         document.body.style.overflow = '';
//       }
//     };

//     el.addEventListener('scroll', onScroll);
//     return () => {
//       el.removeEventListener('scroll', onScroll);
//       document.body.style.overflow = ''; // Reset scroll on unmount
//     };
//   }, []);
//   return (
//     <section
//       className={cn(
//         'dark:bg-clrCinder bg-[#efefef]',
//         // 'pt-20 sm:pt-30 md:pt-38 lg:pt-42',
//         'pt-20 sm:pt-30 md:pt-38 lg:pt-38',
//         className,
//       )}
//     >
//       <div className="container mx-auto space-y-2 max-sm:px-[3%]">
//         <SectionSubTitle text={subtitle} icon={subIcon} />
//         <SectionTitle>
//           <span>
//             Simplify Your Hiring Process with Our{' '}
//             <br className="hidden lg:block" /> AI-Powered Job Posting Solution
//           </span>
//         </SectionTitle>
//       </div>
//       <div className="mt-10">
//         <SectionContent className="min-h-fit">
//           <div
//             ref={scrollRef}
//             data-lenis-prevent
//             className={cn(
//               'max-h-[380px] overflow-y-auto px-4',
//               'scrollbar-hide snap-y snap-mandatory overflow-y-scroll scroll-smooth',
//             )}
//           >
//             <ul className="flex flex-col gap-20 md:gap-40">
//               {[P1, P2, P3].map((Comp, idx) => (
//                 <li className="snap-start overflow-hidden rounded-lg" key={idx}>
//                   <Comp />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </SectionContent>
//       </div>
//     </section>
//   );
// }

// function P1() {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const isInView = useInView(ref, { margin: '-20% 0px' }); // animate once when ~80% in view

//   const labelVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 2,
//         delay: i * 0.4,
//       },
//     }),
//   };

//   const labels = [
//     { text: 'Company Overview', className: 'top-[10%] right-0 sm:-right-20' },
//     { text: 'Job Title', className: 'top-[30%] left-0 sm:-left-20' },
//     {
//       text: 'Diversity And Inclusion',
//       className: 'top-[50%] right-0 sm:-right-20',
//     },
//     { text: 'Job Description', className: 'top-[70%] left-0 sm:-left-20' },
//   ];

//   return (
//     <div ref={ref} className="relative mx-auto h-[380px] w-fit rounded-lg">
//       <Image
//         className="size-full object-cover"
//         src="/assets/img/post-job-1.png"
//         width={480}
//         height={480}
//         alt="post-job-image"
//       />

//       {labels.map((label, i) => (
//         <motion.span
//           key={label.text}
//           custom={i}
//           initial="hidden"
//           animate={isInView ? 'visible' : 'hidden'}
//           variants={labelVariants}
//           className={`absolute w-fit ${label.className}`}
//         >
//           <Label text={label.text} />
//         </motion.span>
//       ))}
//     </div>
//   );
// }
// function P2() {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const isInView = useInView(ref, { margin: '-20% 0px' });

//   const labelVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         delay: i * 0.15,
//       },
//     }),
//   };

//   const labels = [
//     { text: 'Phone Call Screening', className: 'top-[10%] left-0 sm:-left-20' },
//     {
//       text: 'Candidate Shortlisting',
//       className: 'top-[30%] right-0 sm:-right-20',
//     },
//     { text: 'In-Depth Interviews', className: 'top-[50%] left-0 sm:-left-20' },
//     { text: 'Resume Screening', className: 'top-[70%] right-0 sm:-right-20' },
//   ];

//   return (
//     <div ref={ref} className="relative mx-auto h-[380px] w-fit rounded-lg">
//       <Image
//         className="size-full object-cover"
//         src="/assets/img/post-job-2.png"
//         width={480}
//         height={480}
//         alt="post-job-image"
//       />

//       {labels.map((label, i) => (
//         <motion.span
//           key={label.text}
//           custom={i}
//           initial="hidden"
//           animate={isInView ? 'visible' : 'hidden'}
//           variants={labelVariants}
//           className={`absolute w-fit ${label.className}`}
//         >
//           <Label text={label.text} />
//         </motion.span>
//       ))}
//     </div>
//   );
// }

// function P3() {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const isInView = useInView(ref, { margin: '-20% 0px' });

//   const labelVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         delay: i * 0.15,
//       },
//     }),
//   };

//   const labels = [
//     { text: 'Hustle Free Hiring', className: 'top-[20%] right-0 sm:-right-20' },
//     {
//       text: 'Best Candidates',
//       className: 'top-1/2 left-0 -translate-y-1/2 sm:-left-20',
//     },
//     { text: 'Smooth Process', className: 'top-[70%] right-0 sm:-right-20' },
//   ];

//   return (
//     <div ref={ref} className="relative mx-auto h-[380px] w-fit rounded-lg">
//       <Image
//         className="size-full object-cover"
//         src="/assets/img/post-job-3.png"
//         width={480}
//         height={480}
//         alt="post-job-image"
//       />

//       {labels.map((label, i) => (
//         <motion.span
//           key={label.text}
//           custom={i}
//           initial="hidden"
//           animate={isInView ? 'visible' : 'hidden'}
//           variants={labelVariants}
//           className={`absolute w-fit ${label.className}`}
//         >
//           <Label text={label.text} />
//         </motion.span>
//       ))}
//     </div>
//   );
// }

// function Label({ text }: { text: string }) {
//   return (
//     <div className="w-[220px] rounded-sm bg-[#222222]/40 px-1.5 py-1.5 backdrop-blur-[2px]">
//       <span className="font-roboto block rounded-sm bg-[#121212] py-2 text-center text-sm leading-snug font-medium tracking-wide text-white capitalize">
//         {text}
//       </span>
//     </div>
//   );
// }

// // const data = [
// //   {
// //     img: '/assets/img/post-job-1.png',
// //     description: [
// //       'Company Overview',
// //       'Job Title',
// //       'Diversity And Inclusion',
// //       'Job Description',
// //     ],
// //   },
// //   {
// //     img: '/assets/img/post-job-2.png',
// //     description: [
// //       'Phone Call Screening',
// //       'Candidate Shortlisting',
// //       'In-Depth Interviews',
// //       'Resume Screening',
// //     ],
// //   },
// //   {
// //     img: '/assets/img/post-job-3.png',
// //     description: [
// //       'Hustle Free Hiring',
// //       'Best Candidates',
// //       'Smooth Process',
// //       //   'AI-Powered Matching',
// //     ],
// //   },
// // ];

// function P22() {
//   return (
//     <div className="relative mx-auto h-[380px] w-fit">
//       <Image
//         className="size-full object-cover"
//         src="/assets/img/post-job-2.png"
//         width={480}
//         height={480}
//         alt="post-job-image"
//       />
//       <span className="absolute top-[10%] left-0 w-fit sm:-left-20">
//         <Label text="Phone Call Screening" />
//       </span>
//       <span className="absolute top-[30%] right-0 w-fit sm:-right-20">
//         <Label text="Candidate Shortlisting" />
//       </span>

//       <span className="absolute top-[50%] left-0 w-fit sm:-left-20">
//         <Label text="In-Depth Interviews" />
//       </span>
//       <span className="absolute top-[70%] right-0 w-fit sm:-right-20">
//         <Label text="Resume Screening" />
//       </span>
//     </div>
//   );
// }
// function P33() {
//   return (
//     <div className="relative mx-auto h-[380px] w-fit">
//       <Image
//         className="size-full object-cover"
//         src="/assets/img/post-job-3.png"
//         width={480}
//         height={480}
//         alt="post-job-image"
//       />
//       <span className="absolute top-[20%] right-0 w-fit sm:-right-20">
//         <Label text="Hustle Free Hiring" />
//       </span>
//       <span className="absolute top-1/2 left-0 w-fit -translate-y-1/2 sm:-left-20">
//         <Label text="Best Candidates" />
//       </span>
//       <span className="absolute top-[70%] right-0 w-fit sm:-right-20">
//         <Label text="Smooth Process" />
//       </span>
//     </div>
//   );
// }
