import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import {
  SectionContent,
  SectionDescription,
  SectionSubTitle,
  SectionTitle,
} from '../_shared/section';
import { PricingData } from '@/constants/data';
import PricingContent from './pricing-content';

export default function Pricing({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { title, subtitle, subIcon, description } = PricingData;
  return (
    <section
      id="pricing"
      className={cn(
        'dark:bg-clrCinder dbg-[#F9F9F9] bg-clrMercury/40',
        'py-20 sm:py-30 md:py-38 lg:py-42',
        className,
      )}
    >
      <div className="container mx-auto space-y-2 max-sm:px-[3%]">
        <SectionSubTitle text={subtitle} icon={subIcon} />
        <SectionTitle className="">
          <span>
            Pricing Plan for Your <br className="hidden sm:block" /> Recruitment
            Solutions
          </span>
        </SectionTitle>
        <SectionDescription
          className="mx-auto mt-3 max-w-3xl text-center"
          text={description}
        />
      </div>
      <SectionContent className={cn('mt-10')}>
        <PricingContent />
      </SectionContent>
    </section>
  );
}
