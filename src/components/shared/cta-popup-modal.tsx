'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';

import { useAppStore } from '@/store/useAppStore';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../ui/dialog';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

export default function CtaPopUpModal({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const router = useRouter();
  const { isCtaDialogOpen, closeCtaDialog } = useAppStore();
  const handleModalChange = () => {
    closeCtaDialog();
  };

  const handleGetStarted = () => {
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
          'px-10 py-10 sm:min-w-xl md:min-w-2xl',
          'bg-clrWoodsmoke/80 border-none backdrop-blur-lg',
          className,
        )}
      >
        <div className="absolute inset-0 rounded-lg">
          <Image
            className="size-full rounded-lg object-cover opacity-60"
            // src="/assets/svg/cta-mask.svg"
            src="/assets/img/cta-mask-big.png"
            alt="galaxy background"
            width={500}
            height={500}
          />
        </div>
        <div className="relative z-40 container mx-auto size-full">
          <div className="relative z-10 w-full space-y-5">
            <h1 className="font-raleway text-clrTextLight text-center text-4xl font-bold lg:text-5xl">
              Limited Time Offer Get 30 Free Minutes
            </h1>
            <p className="font-opensans text-clrTextLight mx-auto text-center text-lg font-light">
              Sign up now to unlock 30 free minutes of our AI recruitment
              software and elevate your hiring experience!
            </p>

            <Button
              onClick={handleGetStarted}
              className="mx-auto block h-12 cursor-pointer px-6 py-2"
              variant="brand"
            >
              <span className="font-roboto text-base font-semibold tracking-wide">
                Get Started For Free
              </span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
