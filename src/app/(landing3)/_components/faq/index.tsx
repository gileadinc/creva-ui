import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import {
  SectionContent,
  SectionDescription,
  SectionSubTitle,
  SectionTitle,
} from '../_shared/section';
import { FaqData, IFaqItem } from '@/constants/data';

export default function Faq({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { subtitle, subIcon, description, items } = FaqData;
  return (
    <section
      id="faq"
      className={cn('py-20 sm:py-30 md:py-38 lg:py-42', className)}
    >
      <div className="container mx-auto space-y-2 max-sm:px-[3%]">
        <SectionSubTitle text={subtitle} icon={subIcon} />
        {/* <SectionTitle text={title} /> */}
        <SectionTitle>
          <span>
            Frequently Asked Questions <br className="hidden sm:block" /> About
            Creva
          </span>
        </SectionTitle>
        <SectionDescription
          className="mx-auto mt-3 max-w-3xl text-center"
          text={description}
        />
      </div>
      <SectionContent className={cn('mt-20 max-w-[1440px] md:mt-30 lg:mt-40')}>
        <ul className="grid grid-cols-1 place-items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <li key={idx} className="mx-auto md:max-w-[420px] lg:max-w-[460px]">
              <FaqItem item={item} />
            </li>
          ))}
        </ul>
      </SectionContent>
    </section>
  );
}

function FaqItem({ item }: { item: IFaqItem }) {
  const { answer, question } = item;
  return (
    <div className="font-roboto dark:bg-clrCinder dark:text-clrPorcelain text-clrTextLight outline-clrTextLight/20 bg-clrMercury/40 relative size-full space-y-4 rounded-md py-8 outline dark:outline-transparent">
      <h2 className="font-roboto ps-6 pe-2 text-lg font-medium">{question}</h2>
      <p className="px-6 leading-[24px] font-light">{answer}</p>
    </div>
  );
}
