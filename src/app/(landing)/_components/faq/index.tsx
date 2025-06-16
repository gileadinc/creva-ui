'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';
interface IFaq {
  question: string;
  answer: string;
}

const faqData: IFaq[] = [
  {
    question: 'What is Creva?',
    answer:
      'Creva is a hiring transformation service that helps companies streamline their recruitment process, ensuring they find the right talent efficiently and effectively.',
  },
  {
    question: 'How does Creva improve the hiring process?',
    answer:
      'Creva utilizes advanced technology and data-driven strategies to enhance candidate sourcing, screening, and selection, reducing time-to-hire and improving candidate quality.',
  },
  {
    question: "Who can benefit from Creva's services?",
    answer:
      'Creva is designed for companies of all sizes looking to optimize their hiring processes, from startups to large enterprises.',
  },
  {
    question: 'What industries does Creva serve?',
    answer:
      'Creva serves a wide range of industries, including technology, healthcare, finance, and more, adapting its solutions to meet specific industry needs.',
  },
  {
    question: 'How can I get started with Creva?',
    answer:
      'Getting started with Creva is easy! Simply visit our website, sign up for a consultation, and our team will guide you through the process of transforming your hiring strategy.',
  },
];

export default function Faq({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      id="faq"
      className={cn(
        'mx-auto max-w-4xl px-4 pt-4 pb-12 sm:pt-8 md:pt-24 lg:pb-20',
        className,
      )}
    >
      <div className="dark:text-clrText text-clrTextLight container mx-auto text-center">
        <motion.h1
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="font-nunito xs:leading-[52px] xs:text-[44px] mx-auto mb-4 max-w-[753px] text-center text-[40px] leading-[52px] font-bold capitalize sm:text-5xl"
        >
          Frequently Asked Questions About Creva
        </motion.h1>
        <motion.p
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="font-roboto mx-auto max-w-3xl font-light sm:px-2"
        >
          Have questions about our hiring transformation services? This section
          answers common inquiries to help you understand how our solutions can
          enhance your recruitment process for a successful hiring journey.
        </motion.p>
      </div>

      <div className="container mx-auto mt-20 max-w-2xl">
        <motion.ul
          variants={variants.staggerContainer}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="min-h-[550px] space-y-8"
        >
          {faqData.map((faq, idx) => (
            <motion.li key={idx} variants={variants.fadeInUp}>
              <FaqCard
                item={faq}
                isOpen={openIndex === idx}
                onClick={() => handleToggle(idx)}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

function FaqCard({
  item,
  isOpen,
  onClick,
}: {
  item: IFaq;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div>
      <div
        className="dark:border-clrText/80 border-clrTextLight bg-clrAquaHaze hover:bg-clrAquaHaze/80 flex cursor-pointer items-center justify-between rounded-md border px-3 py-3 opacity-[0.95] transition-all dark:bg-transparent dark:hover:bg-white/10"
        onClick={onClick}
      >
        <h2 className="dark:text-clrText/80 text-clrTextLight text-left">
          {item.question}
        </h2>
        <span className="flex h-8 w-8 items-center justify-center rounded-full">
          {isOpen ? (
            <Minus className="dark:text-clrText/80 text-clrTextLight" />
          ) : (
            <Plus className="dark:text-clrText/80 text-clrTextLight" />
          )}
        </span>
      </div>

      <div
        className={cn(
          'dark:text-clrText/80 text-clrTextLight overflow-hidden px-3 transition-all duration-300 ease-in-out',
          isOpen ? 'mt-2 max-h-[200px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <p className="text-sm font-light tracking-wider">{item.answer}</p>
      </div>
    </div>
  );
}
