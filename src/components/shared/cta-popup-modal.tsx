'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';
import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';

import { useAppStore } from '@/store/useAppStore';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../ui/dialog';
import { useRouter } from 'next/navigation';
import {
  MatomoAction,
  MatomoCategory,
  trackMatomoEvent,
} from '@/lib/matomo-utils';
export default function CtaPopUpModal({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const router = useRouter();
  const { isCtaDialogOpen, closeCtaDialog } = useAppStore();
  const handleModalChange = () => {
    trackMatomoEvent(MatomoCategory.Modal, MatomoAction.Closed, 'Cta Pop Up');
    closeCtaDialog();
  };
  const handleGetStarted = () => {
    trackMatomoEvent(
      MatomoCategory.Button,
      MatomoAction.Clicked,
      'Get Started For Free Button (CTA Pop Up)',
    );
    router.push('/sign-up');
  };

  return (
    <Dialog open={isCtaDialogOpen} onOpenChange={handleModalChange}>
      <DialogHeader className="hidden">
        <DialogTitle>Cta Pop Up</DialogTitle>
        <DialogDescription>Cta Pop UP</DialogDescription>
      </DialogHeader>
      <DialogContent
        aria-describedby="modal"
        className={cn(
          'bg-linear-48 from-[#5cd9ba] to-[#81b5e9] px-10 py-10 sm:min-w-xl md:min-w-2xl',
          className,
        )}
      >
        <div className="relative z-40 container mx-auto size-full">
          <div className="absolute top-[5%] right-0 left-0 rotate-180">
            <Image
              className="size-full object-cover"
              src="/assets/svg/cta-pattern-large.svg"
              alt="pattern"
              width={100}
              height={100}
            />
          </div>
          <div className="absolute right-0 bottom-0 left-0">
            <Image
              className="size-full object-cover"
              src="/assets/svg/cta-pattern-large.svg"
              alt="pattern"
              width={100}
              height={100}
            />
          </div>

          <div className="relative z-10 w-full space-y-5">
            <motion.h1
              variants={variants.fadeInUp}
              initial="start"
              whileInView="end"
              viewport={{ once: true }}
              className="font-nunito text-center text-4xl font-bold text-white lg:text-5xl dark:text-[#0b132b]"
            >
              Limited Time Offer Get 30 Free Minutes
            </motion.h1>
            <motion.p
              variants={variants.fadeInUp}
              initial="start"
              whileInView="end"
              viewport={{ once: true }}
              className="font-nunito mx-auto text-center text-lg font-light text-white dark:text-[#0b132b]"
            >
              Sign up now to unlock 30 free minutes of our AI recruitment
              software and elevate your hiring experience!
            </motion.p>

            <motion.button
              onClick={handleGetStarted}
              variants={variants.buttonVariant}
              initial="start"
              whileInView="end"
              viewport={{ once: true }}
              className="dark:bg-clrBlackPearl/95 dark:hover:bg-clrBlackPearl font-roboto dark:text-clrText text-clrTextLight mx-auto block cursor-pointer justify-start bg-white px-6 py-3 text-center font-medium hover:bg-white/85"
            >
              Get Started For Free
            </motion.button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
