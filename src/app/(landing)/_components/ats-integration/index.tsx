import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import {
  SectionWrapper,
  SectionDescription,
  SectionLabel,
  SectionTitle,
} from '../_shared';
import { AtsIntegrationSectionData } from '@/constants/data';
import Image from 'next/image';

export default function ATSIntegration({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { title, description, imgSrc, subtitle } = AtsIntegrationSectionData;
  return (
    <SectionWrapper className={cn('mt-40', className)}>
      <SectionLabel className="" text={subtitle} />
      <SectionTitle text={title} />
      <SectionDescription text={description} />
      <div className="mt-20">
        <Image
          className="size-full object-cover"
          src={imgSrc}
          alt="ats-integrations"
          width={1000}
          height={1000}
        />
      </div>
    </SectionWrapper>
  );
}
