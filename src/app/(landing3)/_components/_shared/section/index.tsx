import AIAgentsIcon from '@/components/icons/ai-agents-icon';
import AtsIcon from '@/components/icons/ats-icon';
import FaqIcon from '@/components/icons/faq-icon';
import IndustryIcon from '@/components/icons/industry-icon';
import LiveIcon from '@/components/icons/live-icon';
import PostJobIcon from '@/components/icons/post-job-icon';
import PricingIcon from '@/components/icons/pricing-icon';
import RankingIcon from '@/components/icons/ranking-icon';
import ReviewIcon from '@/components/icons/review-icon';
import TestimonalIcon from '@/components/icons/testimonal-icon';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

export function SectionTitle({
  className,
  text,
  children,
}: {
  className?: React.CSSProperties | ClassValue | string;
  text?: string;
  children?: React.ReactNode;
}) {
  if (children) {
    return (
      <h2
        className={cn(
          'font-roboto text-clrTextLight dark:text-clrPorcelain font-medium capitalize',
          'text-center',

          // 'text-4xl leading-[40px] sm:text-5xl sm:leading-[52.67px] lg:text-6xl lg:leading-[70.23px]',
          'text-4xl leading-[40px] md:text-5xl md:leading-[52px] lg:text-[50px] lg:leading-[64px]',

          className,
        )}
      >
        {children}
      </h2>
    );
  }
  return (
    <h2
      className={cn(
        'font-roboto text-clrTextLight dark:text-clrPorcelain font-medium capitalize',
        'text-center',

        // 'lg:text-6xll lg:leading-[70.23px]l text-4xl leading-[40px] md:text-5xl md:leading-[52.67px] lg:text-[48px] lg:leading-[68px]',
        'text-4xl leading-[40px] md:text-5xl md:leading-[52px] lg:text-[50px] lg:leading-[64px]',

        className,
      )}
    >
      {text}
    </h2>
  );
}

export function SectionSubTitle({
  className,
  text,
  icon,
}: {
  className?: React.CSSProperties | ClassValue | string;
  text?: string;
  icon: string;
}) {
  return (
    <div
      className={cn(
        'dark:bg-clrMirage bg-clrTextLight',
        'flex items-center justify-center gap-3',
        'mx-auto h-8 w-48',
        className,
      )}
    >
      <span className="block">{getIcon(icon)}</span>
      <span className="from-clrSunnyYellow to-clrAlienGreen font-roboto block bg-linear-51 bg-clip-text text-transparent">
        {text}
      </span>
    </div>
  );
}

export function SectionDescription({
  className,
  text,
}: {
  className?: React.CSSProperties | ClassValue | string;
  text?: string;
}) {
  if (!text) {
    return <></>;
  }
  return (
    <p
      className={cn(
        'font-roboto text-clrTextLight dark:text-clrPorcelain font-light',
        'text-center',
        // 'text-base font-light sm:text-lg sm:leading-[24px] md:text-xl md:leading-[28px]',
        'text-base font-light sm:text-lg sm:leading-[24px] lg:text-xl lg:leading-[28px]',
        className,
      )}
    >
      {text}
    </p>
  );
}

export function SectionContent({
  className,
  children,
}: {
  className?: React.CSSProperties | ClassValue | string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn('container mx-auto max-w-7xl px-4', className)}>
      {children}
    </div>
  );
}

function getIcon(icon: string) {
  switch (icon) {
    case 'industry-icon':
      return <IndustryIcon className="size-5" />;
    case 'post-job-icon':
      return <PostJobIcon className="size-5" />;
    case 'review-icon':
      return <ReviewIcon className="size-5" />;
    case 'live-icon':
      return <LiveIcon className="size-5" />;
    case 'ats-icon':
      return <AtsIcon className="size-5" />;
    case 'ranking-icon':
      return <RankingIcon className="size-5" />;
    case 'ai-agents-icon':
      return <AIAgentsIcon className="size-5" />;
    case 'testimonial-icon':
      return <TestimonalIcon className="size-5" />;
    case 'pricing-icon':
      return <PricingIcon className="size-5" />;
    case 'faq-icon':
      return <FaqIcon className="size-5" />;
    default:
      return null;
  }
}
