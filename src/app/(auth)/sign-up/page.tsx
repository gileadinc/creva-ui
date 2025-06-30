import { cn } from '@/lib/utils';
import AuthForm from '../_components/auth-form';
import AuthBanner from '../_components/auth-banner';

export default function SignUpPage() {
  return (
    <div
      className={cn('dark:bg-clrWoodsmoke size-full min-h-[100vh] px-[40px]')}
    >
      <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="z-10 mx-auto grid min-h-[100vh] w-full max-w-[500px] place-items-center py-[2%] md:min-w-[400px]">
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
