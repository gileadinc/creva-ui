'use client';
import {
  MatomoAction,
  MatomoCategory,
  trackMatomoEvent,
} from '@/lib/matomo-utils';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';

const linksData = [
  {
    name: 'Features',
    href: 'features',
  },
  {
    name: 'Pricing',
    href: 'pricing',
  },

  {
    name: 'Testimonials',
    href: 'testimonials',
  },
  {
    name: 'How it works',
    href: 'howitworks',
  },
  {
    name: 'FAQ',
    href: 'faq',
  },
];

const contactData = [
  {
    name: 'Location',
    value: '13785 Research Blvd, Suite 125 Austin, TX 78750',
  },
  {
    name: 'Email',
    value: '422 Langone St STE A, San Jose, CA 95113',
  },
  {
    name: 'Phone',
    value: '+1 408 769 9094',
  },
];

export default function Footer({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const handleClick = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    trackMatomoEvent(
      MatomoCategory.Link,
      MatomoAction.Clicked,
      `Footer Nav link: ${id}`,
    );
  };

  return (
    <div
      className={cn(
        'dark:bg-clrBlackPearl relative bg-white pt-16 md:pt-24',
        className,
      )}
    >
      <div className="mx-auto max-w-6xl md:px-[1%]">
        <div className="xs:flex-row relative container mx-auto flex flex-col flex-wrap justify-between gap-6">
          <div className="max-xs:pl-5 sm:w-[200px] md:flex-1">
            <Image
              className="cursor-pointer"
              src={'/assets/svg/creva-logo.svg'}
              width={120}
              height={120}
              alt="creva logo"
            />
          </div>
          <div className="xs:flex-1 xs:justify-between max-xs:pl-5 xs:gap-4 flex flex-wrap md:gap-8">
            <div className="xs:basis-[100px]">
              <h2 className="dark:text-clrText/80 text-clrTextLight text-lg font-medium">
                Links
              </h2>
              <ul className="mt-4 flex flex-col gap-2 opacity-[90%] dark:opacity-[57%]">
                {linksData.map(({ name, href }, idx) => (
                  <li
                    onClick={() => handleClick(href)}
                    className="dark:text-clrText dark:hover:text-clrDawnyGreen cursor-pointer font-light text-black transition-colors duration-300 ease-in-out hover:text-black"
                    key={idx}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="xs:basis-[200px] sm:basis-[220px] lg:basis-[240px]">
              <h2 className="dark:text-clrText/80 text-clrTextLight text-lg font-medium">
                Contact Us
              </h2>
              <ul className="mt-4 flex flex-col gap-2 opacity-[90%] dark:opacity-[50%]">
                {contactData.map(({ value }, idx) => (
                  <li
                    className="dark:text-clrText font-light text-black"
                    key={idx}
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="mt-8 text-[#5CD9BA]" />
        <div className="grid place-content-center py-4 pt-6">
          <span className="font-roboto dark:text-clrText block text-center text-sm text-black opacity-[57%]">
            © <span className="mr-1">{new Date().getFullYear()}</span> Cerva.
            All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
}
