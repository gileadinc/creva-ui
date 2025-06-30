'use client';
import CrevaLogo from '@/components/icons/creva-logo';
import FooterLogo from '@/components/icons/footer-logo';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { useLenis } from 'lenis/react';
import Image from 'next/image';
const footerLinks = [
  {
    name: 'Features',
    href: 'features',
  },
  {
    name: 'Ranking',
    href: 'ranking',
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
  const lenis = useLenis();

  const handleClick = (href: string) => {
    lenis?.scrollTo(`#${href}`);
  };
  return (
    <footer
      className={cn(
        'dark:bg-clrCinder font-roboto dark:text-clrPorcelain text-clrTextLight bg-[#F6FEFF]d bg-clrMercury/40',
        className,
      )}
    >
      <div className="animate-scroll-gradient hidden h-0.5 w-full bg-[linear-gradient(90deg,#36343C,#36343C,#36343C,#36343C,#f3f520,#59d102,#f3f520,#36343C,#36343C,#36343C,#36343C,#36343C)] bg-[length:33%_100%] dark:block" />

      <div className="animate-scroll-gradient block h-0.5 w-full bg-[linear-gradient(90deg,#d1d1d1,#d1d1d1,#d1d1d1,#d1d1d1,#f3f520,#59d102,#f3f520,#d1d1d1,#d1d1d1,#d1d1d1,#d1d1d1,#d1d1d1)] bg-[length:33%_100%] dark:hidden" />

      <div className="mx-auto size-full max-w-7xl px-[4%] pt-20">
        <div className="flex flex-wrap sm:grid sm:grid-cols-[1fr_2fr]">
          {/* First: Logo - full width */}
          <div className="max-sm:mb-5">
            <Image
              src="/assets/svg/creva-logo.svg"
              width={140}
              height={140}
              alt="creva-logo"
            />
          </div>

          {/* Second & Third: Wrapped in flex container */}
          <div className="flex justify-between gap-6 max-sm:flex-wrap">
            {/* Links */}
            <div className="w-[200px] min-w-[150px]">
              <h3 className="text-2xl leading-10 font-bold capitalize opacity-60">
                Links
              </h3>
              <ul className="mt-3 space-y-2">
                {footerLinks.map((item, idx) => (
                  <li
                    onClick={() => handleClick(item.href)}
                    key={idx}
                    className="cursor-pointer opacity-60 transition-all duration-300 ease-linear hover:text-black hover:opacity-100 dark:hover:text-white"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="max-sm:max-w-[200px]">
              <h3 className="text-2xl leading-10 font-bold capitalize opacity-60">
                Contact Us
              </h3>
              <ul className="mt-3 space-y-2">
                {contactData.map(({ value }, idx) => (
                  <li
                    key={idx}
                    className="cursor-pointer opacity-60 transition-all duration-300 ease-linear hover:text-black hover:opacity-100 dark:hover:text-white"
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
          <span className="font-roboto dark:text-clrPorcelain text-clrTextLight block text-center text-sm opacity-[57%]">
            © <span className="mr-1">{new Date().getFullYear()}</span> Cerva.
            All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
