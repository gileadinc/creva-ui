'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import GoogleIcon from '@/components/icons/google-icon';
import { useRouter } from 'next/navigation';
import CrevaLogo from '@/components/icons/creva-logo';
import { ModeToggle } from '@/components/toggle-theme-icon';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export const signUpSchema = z
  .object({
    firstName: z.string().min(2, {
      message: 'First name must be at least 2 characters.',
    }),
    lastName: z.string().min(2, {
      message: 'Last name must be at least 2 characters.',
    }),
    emailAddressOrPassword: z.string().min(1, {
      message: 'Email or phone is required.',
    }),
    password: z.string().min(6, {
      message: 'Password must be at least 6 characters.',
    }),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const signInSchema = z.object({
  emailAddressOrPassword: z.string().min(1, {
    message: 'Email or phone is required.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
});

type SignUpValues = z.infer<typeof signUpSchema>;
type SignInValues = z.infer<typeof signInSchema>;

export default function AuthForm({
  className,
  isSignUp = false,
  onSuccess,
}: {
  className?: React.CSSProperties | ClassValue | string;
  isSignUp?: boolean;
  onSuccess?: (values: SignUpValues | SignInValues) => void;
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const router = useRouter();

  const authSchema = isSignUp ? signUpSchema : signInSchema;
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      emailAddressOrPassword: '',
      password: '',
      confirmPassword: '',
    } as any,
  });

  function onSubmit(values: SignUpValues | SignInValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    if (onSuccess) {
      onSuccess(values);
    }

    toast.success(isSignUp ? 'Sign Up Successful!' : 'Sign In Successful!', {
      duration: 3000,
      position: 'top-right',
    });
  }

  return (
    <div className={cn('flex size-full min-h-screen items-center', className)}>
      <div className="mx-auto w-[90%] max-w-xl space-y-4">
        <div className="flex w-full items-center justify-between">
          <CrevaLogo className="relative -left-4 h-[60px] w-fit" />
          <ModeToggle className="" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h1>
          <div className="text-muted-foreground my-1 text-sm">
            {isSignUp ? (
              <p>
                Already have an account?{' '}
                <span
                  onClick={() => {
                    router.push('/sign-in');
                  }}
                  className="text-clrCyanBlue ml-2 cursor-pointer underline underline-offset-2"
                >
                  Sign In
                </span>
              </p>
            ) : (
              <p>
                Don&apos;t have an account?{' '}
                <span
                  onClick={() => {
                    router.push('/sign-up');
                  }}
                  className="text-clrCyanBlue ml-2 cursor-pointer underline underline-offset-2"
                >
                  Sign Up Now
                </span>
              </p>
            )}
          </div>
        </div>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={cn('space-y-3', isSignUp ? 'space-y-3' : 'space-y-5')}
            >
              {isSignUp && (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-nunito text-sm font-medium">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="font-nunito border-clrTextLight h-10 rounded-sm text-sm"
                            placeholder="First Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs font-light" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-nunito text-sm font-medium">
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="font-nunito border-clrTextLight h-10 rounded-sm text-sm"
                            placeholder="Last Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs font-light" />
                      </FormItem>
                    )}
                  />
                </div>
              )}
              <FormField
                control={form.control}
                name="emailAddressOrPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-nunito text-sm font-medium">
                      Email Address Or Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="font-nunito border-clrTextLight h-10 rounded-sm text-sm"
                        placeholder="Email Address Or Phone Number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs font-light" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-nunito text-sm font-medium">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={isPasswordVisible ? 'text' : 'password'}
                          className="font-nunito border-clrTextLight h-10 rounded-sm text-sm"
                          placeholder={
                            isPasswordVisible ? 'Your Password' : '************'
                          }
                          {...field}
                        />
                        <span
                          className="absolute top-1/2 right-5 z-10 -translate-y-1/2 cursor-pointer"
                          onClick={() => {
                            setIsPasswordVisible(!isPasswordVisible);
                          }}
                        >
                          {isPasswordVisible ? <EyeOff /> : <Eye />}
                        </span>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs font-light" />
                  </FormItem>
                )}
              />

              {isSignUp && (
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-nunito text-sm font-medium">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={
                              isConfirmPasswordVisible ? 'text' : 'password'
                            }
                            className="font-nunito border-clrTextLight h-10 rounded-sm text-sm"
                            placeholder={
                              isConfirmPasswordVisible
                                ? 'Your Password'
                                : '************'
                            }
                            {...field}
                          />
                          <span
                            className="absolute top-1/2 right-5 z-10 -translate-y-1/2 cursor-pointer"
                            onClick={() => {
                              setIsConfirmPasswordVisible(
                                !isConfirmPasswordVisible,
                              );
                            }}
                          >
                            {isConfirmPasswordVisible ? <EyeOff /> : <Eye />}
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs font-light" />
                    </FormItem>
                  )}
                />
              )}

              <Button
                type="submit"
                className="from-clrDawnyGreen to-clrDenimBlue text-clrBlackPearl mt-4 block h-10 w-full cursor-pointer bg-linear-48 hover:opacity-90 dark:bg-white dark:text-black"
              >
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </Button>
              <p className="relative flex items-center text-sm text-gray-500">
                <span className="flex-grow border-t border-gray-300 dark:border-gray-600" />
                <span className="mx-4">OR</span>
                <span className="flex-grow border-t border-gray-300 dark:border-gray-600" />
              </p>
              <div className="flex w-full cursor-pointer items-center justify-center rounded-2xl border px-6 py-2">
                <GoogleIcon className="mr-auto" />
                <span className="block flex-1 text-center">
                  Continue with Google
                </span>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
