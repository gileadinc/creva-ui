'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

const navbarLinks = [
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
let lastScrollTop = 0;
export default function Navbar({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const closeMenu = () => setIsMobileNavOpen(false);
  const openMenu = () => setIsMobileNavOpen(true);

  const mobileNavRef = useRef<HTMLElement>(
    null,
  ) as React.RefObject<HTMLElement>;

  const handleClickOutside = () => {
    closeMenu();
  };

  useOnClickOutside(mobileNavRef, handleClickOutside);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileNavOpen) {
        setIsNavbarVisible(true);
        return;
      }
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsNavbarVisible(false);
      } else if (scrollTop < lastScrollTop) {
        setIsNavbarVisible(true);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileNavOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileNavOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    if (isMobileNavOpen) {
      closeMenu();
    }
  };

  return (
    <div className={cn('fixed z-100 w-full px-[3%]', className)}>
      <header
        ref={mobileNavRef}
        className={cn(
          isNavbarVisible ? 'top-0' : '-top-[100px]',
          isMobileNavOpen
            ? 'rounded-b-none'
            : 'bg-clrFirefly/80 rounded-xl backdrop-blur-xl',
          'relative m-4 mx-auto flex h-[65px] max-w-7xl items-center rounded-xl transition-all duration-300 ease-in',
        )}
      >
        <div className="z-90 flex w-full items-center justify-between gap-4 px-[2%]">
          <Image
            className="cursor-pointer"
            src={'/assets/svg/creva-logo.svg'}
            width={120}
            height={120}
            alt="creva logo"
          />
          <nav className="hidden lg:block">
            <ul className="flex flex-1 text-white sm:gap-6 md:gap-10 lg:gap-14">
              {navbarLinks.map(({ name, href }, idx) => (
                <li
                  onClick={() => handleClick(href)}
                  className="text-clrText font-roboto hover:text-clrDawnyGreen cursor-pointer transition-colors duration-300 ease-in-out"
                  key={idx}
                >
                  {name}
                </li>
              ))}
            </ul>
          </nav>
          <button className="group relative hidden h-8 w-32 cursor-pointer text-sm font-medium text-white transition-colors duration-300 ease-in-out lg:block">
            <div className="absolute top-0 left-0 -z-10 h-8 w-32 rounded-[35px] bg-linear-48 from-[#5cd9ba] to-[#81b5e9]" />
            <span className="text-clrText bg-clrFirefly font-roboto group-hover:bg-clrFirefly/70 absolute top-1/2 left-1/2 grid h-[28.5px] w-[123px] -translate-x-1/2 -translate-y-1/2 place-content-center rounded-[35px] text-sm font-light capitalize transition-colors duration-300 ease-in-out group-hover:backdrop-blur-xl">
              Sign Up
            </span>
          </button>

          {/* mobile menu button */}
          <div className="relative h-8 w-8 lg:hidden">
            <span
              onClick={openMenu}
              className={cn(
                'absolute inset-0 transition-all duration-300 ease-in-out',
                isMobileNavOpen
                  ? 'pointer-events-none scale-90 opacity-0'
                  : 'scale-100 opacity-100',
              )}
            >
              <Menu className="size-8 cursor-pointer text-white" />
            </span>
            <span
              onClick={closeMenu}
              className={cn(
                'absolute inset-0 transition-all duration-300 ease-in-out',
                isMobileNavOpen
                  ? 'scale-100 opacity-100'
                  : 'pointer-events-none scale-90 opacity-0',
              )}
            >
              <X className="size-8 cursor-pointer text-white" />
            </span>
          </div>
        </div>

        {/* MOBILE NAV */}
        <div
          className={cn(
            isMobileNavOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0',
            'bg-clrFirefly/60 absolute top-0 h-[410px] w-full rounded-xl px-[2%] backdrop-blur-xl transition-all duration-300 ease-in lg:hidden',
          )}
        >
          <div className="h-[55px]"></div>
          <nav className="mb-2 block rounded-b-xl px-2 py-2 lg:hidden">
            <ul className="mb-4 flex flex-col gap-4 text-white">
              {navbarLinks.map(({ name, href }, idx) => (
                <li
                  onClick={() => handleClick(href)}
                  className="text-clrText cursor-pointer py-2 text-center transition-colors duration-300 ease-in-out hover:text-[#5cd9ba]"
                  key={idx}
                >
                  {name}
                </li>
              ))}
            </ul>

            <button className="group relative h-10 w-full cursor-pointer text-sm font-medium text-white transition-colors duration-300 ease-in-out">
              <div className="absolute top-0 left-0 -z-10 h-10 w-full rounded-[35px] bg-linear-48 from-[#5cd9ba] to-[#81b5e9]" />
              <span className="text-clrText bg-clrFirefly font-roboto group-hover:bg-clrFirefly/70 absolute top-1/2 left-1/2 grid h-[34px] w-[calc(100%-4px)] -translate-x-1/2 -translate-y-1/2 place-content-center rounded-[35px] text-sm font-light capitalize transition-colors duration-300 ease-in-out group-hover:backdrop-blur-xl">
                Sign Up
              </span>
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
}
