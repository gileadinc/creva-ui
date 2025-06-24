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
    name: 'AI Agents',
    href: 'ai-agents',
  },
  {
    name: 'Process',
    href: 'process',
  },
  {
    name: 'Testimonials',
    href: 'testimonials',
  },
  {
    name: 'Pricing',
    href: 'pricing',
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
  const handleScrollToTarget = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer
      className={cn('text-clrSeaShell relative bg-[#090909] pt-30', className)}
    >
      <div className="container mx-auto max-w-7xl px-[2%]">
        <div className="grid grid-cols-1 max-md:gap-10 md:grid-cols-[1.5fr_3fr] lg:grid-cols-[1.5fr_2fr]">
          <div className="w-fit max-md:mx-auto">
            <Image
              className="cursor-pointer"
              src={'/assets/svg/creva-logo.svg'}
              width={180}
              height={180}
              alt="creva logo"
            />
          </div>
          <div className="max-xs:flex-col max-xs:gap-10 flex justify-between max-md:px-[4%]">
            <div className="min-w-[150px]">
              <h3 className="text-lg font-medium">Links</h3>
              <ul className="mt-4 space-y-3">
                {linksData.map(({ name, href }, idx) => (
                  <li
                    onClick={() => handleScrollToTarget(href)}
                    key={idx}
                    className="hover:text-clrBrand cursor-pointer"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-[150px]">
              <h3 className="text-lg font-medium">Contact Us</h3>
              <ul className="mt-4 space-y-3">
                {contactData.map(({ value }, idx) => (
                  <li key={idx}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="mt-20" />
        <div className="grid place-content-center py-4 pt-6">
          <span className="font-roboto block text-center text-sm">
            © <span className="mr-1">{new Date().getFullYear()}</span> Cerva.
            All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
