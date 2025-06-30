// import { cn } from '@/lib/utils';
// import { ClassValue } from 'clsx';
// import Image from 'next/image';

// export default function AuthBanner({
//   className,
// }: {
//   className?: React.CSSProperties | ClassValue | string;
// }) {
//   return (
//     <div
//       className={cn(
//         'dark:from-clrBlackPearl dark:to-clrFirefly dark:text-clrText from-clrDawnyGreen to-clrDenimBlue text-clrBlackPearl relative container mx-auto size-full w-full overflow-hidden rounded-3xl bg-linear-48',
//         className,
//       )}
//     >
//       <div className="absolute inset-0 left-5 z-50 flex h-full max-w-xl flex-col justify-center space-y-6 lg:px-[1%] lg:pr-[4%] xl:left-10">
//         <h1 className="font-nunito font-bold lg:text-[64px] lg:leading-[74px] xl:text-[78px] xl:leading-[84px]">
//           Revolutionize Your Hiring Process
//         </h1>
//         <p className="font-roboto mr-2 font-light lg:text-[16px] lg:leading-[28px] xl:text-[20px] xl:leading-[30px]">
//           Discover how our cutting-edge recruitment software can streamline your
//           talent management. With advanced features designed to enhance
//           candidate matching and improve collaboration, sign up today for a more
//           efficient hiring experience!
//         </p>
//       </div>
//       <div className="absolute inset-0 z-10 opacity-15">
//         <Image
//           className="size-full object-cover"
//           src="/assets/svg/auth-pattern-white.svg"
//           alt="banner"
//           width={100}
//           height={100}
//         />
//       </div>
//     </div>
//   );
// }
'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthBanner({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  return (
    <div className={cn('size-full', className)}>
      <div className="fixed top-0 right-0 bottom-0 hidden w-[50%] xl:w-[66%] dark:block">
        <Image
          priority
          loading="eager"
          className="size-full object-cover opacity-0"
          src="/assets/img/auth-bg-pic.png"
          alt="Auth Banner"
          width={500}
          height={500}
        />
      </div>

      {/* <div className="fixed top-[20px] right-[2%] bottom-[20px] w-[640px] rounded-3xl bg-linear-48 from-[#087e8b] to-[#0c0c0c]/60"></div> */}

      <div
        className={cn(
          'relative container mx-auto size-full w-full overflow-hidden rounded-3xl',
          // 'text-clrTextLight bg-linear-72 from-[#087e8b] to-[#0c0c0c]',
          'dark:from-clrBlackPearl dark:to-clrFirefly dark:text-clrText from-clrDawnyGreen to-clrDenimBlue text-clrBlackPearl relative container mx-auto size-full w-full overflow-hidden rounded-3xl bg-linear-48',
          className,
        )}
      >
        <Link
          href="/"
          className="absolute top-10 left-8 z-[999] hidden w-[148px] lg:block"
        >
          <Image
            className="size-full object-contain"
            src="/assets/svg/creva-auth-logo.svg"
            width={100}
            height={100}
            alt="creva-logo"
          />
        </Link>

        <div className="absolute inset-0 left-5 z-50 flex h-full max-w-xl flex-col justify-center space-y-6 lg:px-[1%] lg:pr-[4%] xl:left-10">
          <h1 className="font-raleway mt-20 font-semibold lg:text-[64px] lg:leading-[74px] xl:text-[76px] xl:leading-[82px]">
            Revolutionize Your Hiring Process
          </h1>
          <p className="font-opensans mr-5 font-light lg:text-[16px] lg:leading-[28px] xl:text-[20px] xl:leading-[30px]">
            Discover how our cutting-edge recruitment software can streamline
            your talent management. With advanced features designed to enhance
            candidate matching and improve collaboration, sign up today for a
            more efficient hiring experience!
          </p>
        </div>
        <div className="absolute inset-0 z-10 opacity-15">
          <Image
            className="size-full object-cover"
            src="/assets/svg/auth-pattern-white.svg"
            alt="banner"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
