'use client';
import CrevaLogo from '@/components/icons/creva-logo';
import MenuIcon from '@/components/icons/menu-icon';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useLenis } from 'lenis/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/store/useAppStore';
const navLinks = [
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

export default function Navbar({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const lenis = useLenis();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isModalOpen } = useAppStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTarget = (href: string) => {
    lenis?.scrollTo(`#${href}`);
  };

  const handleSignUp = () => {
    router.push('/sign-up');
  };

  return (
    <header
      className={cn(
        'dark:bg-clrOnyx/60 fixed z-[9999] w-full bg-white/60 backdrop-blur-3xl',
        isModalOpen && 'hidden',
        className,
      )}
    >
      <div className="container mx-auto flex size-full max-w-7xl items-center justify-between max-sm:px-[4%] sm:px-[2%]">
        <div
          onClick={() => handleScrollToTarget('hero')}
          className="cursor-pointer"
        >
          <CrevaLogo className="max-sm:w-[90px]" />
        </div>
        <nav className="hidden flex-1 md:block">
          <ul className="flex items-center justify-center gap-10">
            {navLinks.map(({ name, href }, idx) => (
              <li
                onClick={() => handleScrollToTarget(href)}
                key={idx}
                className="cursor-pointer"
              >
                {name}
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Button
            onClick={handleSignUp}
            variant="brandOutline"
            className="font-opensans hidden h-10 w-36 rounded-md text-lg font-bold md:block"
          >
            Sign Up
          </Button>

          {/* MOBILE NAV START*/}
          <Popover open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <PopoverTrigger className="block md:hidden">
              {/* <MenuIcon className="block size-8 cursor-pointer lg:hidden" /> */}
              <MenuIcon className="block size-8 cursor-pointer sm:size-10 md:hidden" />
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="dark:bg-clrOnyx/10 dark:border-clrAlienGreen/40 border-clrAlienGreen/40 bg-clrPorcelain/10 mt-5 block border shadow-xl backdrop-blur-lg md:hidden"
            >
              <ul className="dark:bg-clrOnyx/40 bg-clrPorcelain/40 z-[9999] w-full space-y-2 backdrop-blur-2xl">
                {navLinks.map(({ name, href }, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleScrollToTarget(href)}
                    className="cursor-pointer py-2 text-center hover:opacity-50"
                  >
                    {name}
                  </li>
                ))}

                <Button
                  onClick={handleSignUp}
                  variant="brandOutline"
                  className="font-opensans mx-auto block h-10 w-[90%] rounded-md text-lg font-bold"
                >
                  Sign Up
                </Button>
              </ul>
            </PopoverContent>
          </Popover>

          {/* MOBILE NAV END*/}
        </div>
      </div>
    </header>
  );
}
