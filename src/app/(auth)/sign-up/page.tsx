// 'use client';
// import AuthForm from '../_components/auth-form';

// export default function SignUpPage() {
//   return (
//     <div className="size-full">
//       <AuthForm className="w-full" formType="sign-up" />
//     </div>
//   );
// }
import { cn } from '@/lib/utils';
import AuthForm from '../_components/auth-form';
import AuthBanner from '../_components/auth-banner';

export default function SignUpPage() {
  return (
    <div
      className={cn(
        'dark:to-clrFirefly dark:from-clrBlackPearl size-full min-h-screen bg-linear-52 px-[40px]',
      )}
    >
      <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="z-10 mx-auto grid size-full w-full max-w-[500px] place-items-center py-[2%] md:min-w-[400px]">
          <AuthForm formType="sign-up" />
        </div>
        <div className="relative hidden h-[calc(100vh-40px)] self-center lg:block">
          <div className="fixed inset-y-5 right-10 w-[45%]">
            <AuthBanner />
          </div>
        </div>
      </div>
    </div>
  );
}
