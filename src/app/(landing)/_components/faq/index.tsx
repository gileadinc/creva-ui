'use client';
import { faqSectionData } from '@/constants/data';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';
import {
  SectionDescription,
  SectionLabel,
  SectionTitle,
  SectionWrapper,
} from '../_shared';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
export default function Faq({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { title, description, faqs, subtitle } = faqSectionData;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    console.log('Toggling FAQ at index:', index);
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div id="faq" className="mt-10 md:mt-20 lg:mt-40">
      <SectionWrapper className={cn('', className)}>
        <div className="grid grid-cols-1 lg:grid-cols-8 lg:gap-10">
          <div className="col-span-4">
            <SectionLabel className="" text={subtitle} />
            <SectionTitle text={title} />
            <SectionDescription text={description} />
          </div>
          <div className="col-span-4 max-lg:mt-20 max-lg:max-w-3xl">
            <span className="block h-[30px] w-full"></span>
            <div>
              <motion.ul
                variants={variants.staggerContainer}
                initial="start"
                whileInView="end"
                viewport={{ once: true }}
                className="min-h-[550px] space-y-8"
              >
                {faqs.map((faq, idx) => (
                  <motion.li variants={variants.fadeInUp} key={idx}>
                    <FaqItem
                      key={idx}
                      isOpen={openIndex === idx}
                      question={faq.question}
                      answer={faq.answer}
                      onClick={() => handleToggle(idx)}
                    />
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

function FaqItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={() => {
        console.log('FAQ item clicked:', question);
        onClick();
      }}
      className={cn(
        'cursor-pointer rounded-md border-2 p-4 transition-colors duration-300 ease-in-out',
        isOpen
          ? 'border-clrBrand/10 dark:border-clrBrand dark:bg-clrBrand/40 bg-clrTextDark/10'
          : 'border-foreground/40',
        'hover:dark:bg-clrBrand/40 hover:bg-clrTextDark/10',
      )}
    >
      <div className="flex items-center justify-between">
        <h3
          className={cn(
            'font-roboto text-clrTextDark dark:text-clrSeaShell flex-1 text-lg font-normal',
          )}
        >
          {question}
        </h3>
        <span className="block">
          {!isOpen ? (
            <ChevronDown className="" />
          ) : (
            <ChevronUp className="text-clrBrand" />
          )}
        </span>
      </div>
      <div
        className={cn(
          'transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-[100px] py-4 pl-4 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <p className="font-roboto text-clrTextDark dark:text-clrSeaShell text-sm font-light">
          {answer}
        </p>
      </div>
    </div>
  );
}
