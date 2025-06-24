'use client';
import MenuIcon from '@/components/icons/menu-icon';
// import MaskImage from '@/components/shared/mask-image';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
// import MaskImage from '@/components/shared/mask-image';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store/useAppStore';
import { useRouter } from 'next/navigation';
const navLinks = [
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
let lastScrollTop = 0;
export default function NavBar({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { isModalOpen } = useAppStore();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsNavbarVisible(false);
        setIsMobileMenuOpen(false);
      } else if (scrollTop < lastScrollTop) {
        setIsNavbarVisible(true);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTarget = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    if (isMobileMenuOpen) {
      // close it.
    }
  };

  return (
    <div
      className={cn(
        'fixed z-[999] h-[100px] w-full',
        isModalOpen && 'hidden',
        className,
      )}
    >
      <header
        className={cn(
          'absolute w-full transition-all duration-300 ease-in-out',
          isNavbarVisible ? 'bottom-0' : 'bottom-100',
        )}
      >
        <div className="container mx-auto flex size-full max-w-[1360px] items-center">
          <div className="mx-[3%] flex w-full items-center justify-between rounded-md px-[1%] py-3 backdrop-blur-xl">
            <div className="w-[118px]">
              <Image
                className="size-full cursor-pointer object-contain"
                src={'/assets/svg/creva-logo.svg'}
                width={100}
                height={100}
                alt="creva logo"
              />
            </div>
            <nav className="hidden flex-1 lg:block">
              <ul className="flex justify-center gap-10">
                {navLinks.map(({ name, href }, idx) => (
                  <li
                    onClick={() => handleScrollToTarget(href)}
                    className="dark:text-clrTextLight hover:text-clrBrand cursor-pointer px-2 py-2 text-center text-[16px]"
                    key={idx}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              {/* MOBILE NAV START*/}
              <Popover
                open={isMobileMenuOpen}
                onOpenChange={setIsMobileMenuOpen}
              >
                <PopoverTrigger className="block lg:hidden">
                  <MenuIcon className="block size-8 cursor-pointer lg:hidden" />
                </PopoverTrigger>
                <PopoverContent
                  align="end"
                  className="dark:bg-clrWoodsmoke/10 dark:border-clrBrand/40 border-clrTextDark/40 bg-clrSeaShell/10 mt-5 block border shadow-xl backdrop-blur-lg lg:hidden"
                >
                  <ul className="dark:bg-clrWoodsmoke/40 bg-clrSeaShell/40 z-[9999] w-full space-y-2 backdrop-blur-2xl">
                    {navLinks.map(({ name, href }, idx) => (
                      <li
                        key={idx}
                        onClick={() => handleScrollToTarget(href)}
                        className="hover:text-clrBrand cursor-pointer py-2 text-center"
                      >
                        {name}
                      </li>
                    ))}
                    <Button
                      onClick={() => {
                        router.push('/sign-up');
                      }}
                      className="mx-auto block h-full w-[90%] cursor-pointer rounded-md"
                      variant={'brandOutline'}
                    >
                      <span className="font-opensans text-base font-normal">
                        Sign Up
                      </span>
                    </Button>
                  </ul>
                </PopoverContent>
              </Popover>

              {/* MOBILE NAV END*/}

              <Button
                onClick={() => {
                  router.push('/sign-up');
                }}
                className="hidden h-11 w-36 cursor-pointer rounded-full lg:block"
                variant={'brandOutline'}
              >
                <span className="font-opensans text-lg font-normal">
                  Sign Up
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* <MaskImage className="opacity-20" /> */}
    </div>
  );
}
