'use client';
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
    value: 'Charlottesville, California',
  },
  {
    name: 'Email',
    value: 'contact@creva.com',
  },
  {
    name: 'Phone',
    value: '(434) 123-4356',
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
  };

  return (
    <div className={cn('bg-clrBlackPearl relative pt-16', className)}>
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
          <div className="xs:flex-1 xs:justify-between max-xs:pl-5 flex flex-wrap gap-8">
            <div className="xs:basis-[100px]">
              <h2 className="text-clrText/80 text-lg">Links</h2>
              <ul className="mt-4 flex flex-col gap-2 opacity-[57%]">
                {linksData.map(({ name, href }, idx) => (
                  <li
                    onClick={() => handleClick(href)}
                    className="text-clrText hover:text-clrDawnyGreen cursor-pointer font-light transition-colors duration-300 ease-in-out"
                    key={idx}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="xs:basis-[180px]">
              <h2 className="text-clrText/80 text-lg">Contact Us</h2>
              <ul className="mt-4 flex flex-col gap-2 opacity-[57%]">
                {contactData.map(({ value }, idx) => (
                  <li className="text-clrText font-light" key={idx}>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="mt-8 text-[#5CD9BA]" />
        <div className="grid place-content-center py-4">
          <span className="font-roboto text-clrText block text-center text-xs opacity-[57%]">
            © 2020 Cerva. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
}
