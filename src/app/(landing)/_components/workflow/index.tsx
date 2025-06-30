import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import {
  SectionDescription,
  SectionLabel,
  SectionTitle,
  SectionWrapper,
} from '../_shared';
import { workflowSectionData } from '@/constants/data';
import Image from 'next/image';

export default function WorkFlow({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { title, subtitle, description, imgSrcDark, imgSrcLight } =
    workflowSectionData;
  return (
    <div className="bg-[#F0F0F0] dark:bg-transparent">
      <SectionWrapper
        className={cn(
          'mt-10 md:mt-20 lg:mt-40',
          'pb-10 md:pb-20 lg:pb-30',
          className,
        )}
      >
        <SectionLabel className="" text={subtitle} />
        <SectionTitle text={title} />
        <SectionDescription text={description} />
        <div className="relative mt-10 size-full w-[90%] md:mt-20">
          <Image
            className="block size-full object-cover dark:hidden"
            src={imgSrcLight}
            alt="workflow-image"
            width={600}
            height={600}
          />
          <Image
            className="hidden size-full object-cover dark:block"
            src={imgSrcDark}
            alt="workflow-image"
            width={600}
            height={600}
          />
        </div>
      </SectionWrapper>
    </div>
  );
}
