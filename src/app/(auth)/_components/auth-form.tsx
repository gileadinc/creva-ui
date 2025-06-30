// 'use client';
// import { cn } from '@/lib/utils';
// import { ClassValue } from 'clsx';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import { Button } from '@/components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import GoogleIcon from '@/components/icons/google-icon';
// import { useRouter } from 'next/navigation';
// import CrevaLogo from '@/components/icons/creva-logo';
// import { ModeToggle } from '@/components/toggle-theme-icon';
// import { Eye, EyeOff } from 'lucide-react';
// import { useState } from 'react';
// import { toast } from 'sonner';

// export const signUpSchema = z
//   .object({
//     firstName: z.string().min(2, {
//       message: 'First name must be at least 2 characters.',
//     }),
//     lastName: z.string().min(2, {
//       message: 'Last name must be at least 2 characters.',
//     }),
//     emailAddressOrPassword: z.string().min(1, {
//       message: 'Email or phone is required.',
//     }),
//     password: z.string().min(6, {
//       message: 'Password must be at least 6 characters.',
//     }),
//     confirmPassword: z.string().min(6),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: 'Passwords do not match',
//     path: ['confirmPassword'],
//   });

// export const signInSchema = z.object({
//   emailAddressOrPassword: z.string().min(1, {
//     message: 'Email or phone is required.',
//   }),
//   password: z.string().min(6, {
//     message: 'Password must be at least 6 characters.',
//   }),
// });

// type SignUpValues = z.infer<typeof signUpSchema>;
// type SignInValues = z.infer<typeof signInSchema>;

// export default function AuthForm({
//   className,
//   isSignUp = false,
//   onSuccess,
// }: {
//   className?: React.CSSProperties | ClassValue | string;
//   isSignUp?: boolean;
//   onSuccess?: (values: SignUpValues | SignInValues) => void;
// }) {
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
//     useState(false);
//   const router = useRouter();

//   const authSchema = isSignUp ? signUpSchema : signInSchema;
//   const form = useForm<z.infer<typeof authSchema>>({
//     resolver: zodResolver(authSchema),
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       emailAddressOrPassword: '',
//       password: '',
//       confirmPassword: '',
//     } as any,
//   });

//   function onSubmit(values: SignUpValues | SignInValues) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values);
//     if (onSuccess) {
//       onSuccess(values);
//     }

//     toast.success(isSignUp ? 'Sign Up Successful!' : 'Sign In Successful!', {
//       duration: 3000,
//       position: 'top-right',
//     });
//   }

//   return (
//     <div className={cn('flex size-full min-h-screen items-center', className)}>
//       <div className="mx-auto w-[90%] max-w-xl space-y-4">
//         <div className="flex w-full items-center justify-between">
//           <CrevaLogo className="relative -left-4 h-[60px] w-fit" />
//           <ModeToggle className="" />
//         </div>
//         <div>
//           <h1 className="text-2xl font-semibold">
//             {isSignUp ? 'Sign Up' : 'Sign In'}
//           </h1>
//           <div className="text-muted-foreground my-1 text-sm">
//             {isSignUp ? (
//               <p>
//                 Already have an account?{' '}
//                 <span
//                   onClick={() => {
//                     router.push('/sign-in');
//                   }}
//                   className="text-clrCyanBlue ml-2 cursor-pointer underline underline-offset-2"
//                 >
//                   Sign In
//                 </span>
//               </p>
//             ) : (
//               <p>
//                 Don&apos;t have an account?{' '}
//                 <span
//                   onClick={() => {
//                     router.push('/sign-up');
//                   }}
//                   className="text-clrCyanBlue ml-2 cursor-pointer underline underline-offset-2"
//                 >
//                   Sign Up Now
//                 </span>
//               </p>
//             )}
//           </div>
//         </div>
//         <div>
//           <Form {...form}>
//             <form
//               onSubmit={form.handleSubmit(onSubmit)}
//               className={cn('space-y-3', isSignUp ? 'space-y-3' : 'space-y-5')}
//             >
//               {isSignUp && (
//                 <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                   <FormField
//                     control={form.control}
//                     name="firstName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="font-nunito text-sm font-medium">
//                           First Name
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             className="font-nunito border-clrTextLight h-10 rounded-sm text-sm"
//                             placeholder="First Name"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage className="text-xs font-light" />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="lastName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="font-nunito text-sm font-medium">
//                           Last Name
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             className="font-nunito border-clrTextLight h-10 rounded-sm text-sm"
//                             placeholder="Last Name"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage className="text-xs font-light" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//               )}
//               <FormField
//                 control={form.control}
//                 name="emailAddressOrPassword"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="font-nunito text-sm font-medium">
//                       Email Address Or Phone Number
//                     </FormLabel>
//                     <FormControl>
//                       <Input
//                         className="font-nunito border-clrTextLight h-10 rounded-sm text-sm"
//                         placeholder="Email Address Or Phone Number"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage className="text-xs font-light" />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="password"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="font-nunito text-sm font-medium">
//                       Password
//                     </FormLabel>
//                     <FormControl>
//                       <div className="relative">
//                         <Input
//                           type={isPasswordVisible ? 'text' : 'password'}
//                           className="font-nunito border-clrTextLight h-10 rounded-sm text-sm"
//                           placeholder={
//                             isPasswordVisible ? 'Your Password' : '************'
//                           }
//                           {...field}
//                         />
//                         <span
//                           className="absolute top-1/2 right-5 z-10 -translate-y-1/2 cursor-pointer"
//                           onClick={() => {
//                             setIsPasswordVisible(!isPasswordVisible);
//                           }}
//                         >
//                           {isPasswordVisible ? <EyeOff /> : <Eye />}
//                         </span>
//                       </div>
//                     </FormControl>
//                     <FormMessage className="text-xs font-light" />
//                   </FormItem>
//                 )}
//               />

//               {isSignUp && (
//                 <FormField
//                   control={form.control}
//                   name="confirmPassword"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="font-nunito text-sm font-medium">
//                         Confirm Password
//                       </FormLabel>
//                       <FormControl>
//                         <div className="relative">
//                           <Input
//                             type={
//                               isConfirmPasswordVisible ? 'text' : 'password'
//                             }
//                             className="font-nunito border-clrTextLight h-10 rounded-sm text-sm"
//                             placeholder={
//                               isConfirmPasswordVisible
//                                 ? 'Your Password'
//                                 : '************'
//                             }
//                             {...field}
//                           />
//                           <span
//                             className="absolute top-1/2 right-5 z-10 -translate-y-1/2 cursor-pointer"
//                             onClick={() => {
//                               setIsConfirmPasswordVisible(
//                                 !isConfirmPasswordVisible,
//                               );
//                             }}
//                           >
//                             {isConfirmPasswordVisible ? <EyeOff /> : <Eye />}
//                           </span>
//                         </div>
//                       </FormControl>
//                       <FormMessage className="text-xs font-light" />
//                     </FormItem>
//                   )}
//                 />
//               )}

//               <Button
//                 type="submit"
//                 className="from-clrDawnyGreen to-clrDenimBlue text-clrBlackPearl mt-4 block h-10 w-full cursor-pointer bg-linear-48 hover:opacity-90 dark:bg-white dark:text-black"
//               >
//                 {isSignUp ? 'Sign Up' : 'Sign In'}
//               </Button>
//               <p className="relative flex items-center text-sm text-gray-500">
//                 <span className="flex-grow border-t border-gray-300 dark:border-gray-600" />
//                 <span className="mx-4">OR</span>
//                 <span className="flex-grow border-t border-gray-300 dark:border-gray-600" />
//               </p>
//               <div className="flex w-full cursor-pointer items-center justify-center rounded-2xl border px-6 py-2">
//                 <GoogleIcon className="mr-auto" />
//                 <span className="block flex-1 text-center">
//                   Continue with Google
//                 </span>
//               </div>
//             </form>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// }
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
import { isValidPhoneNumber } from 'react-phone-number-input';
import { Input } from '@/components/ui/input';
import GoogleIcon from '@/components/icons/google-icon';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { PhoneInput } from '@/components/ui/phone-input';

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(2, 'First name must be at least 2 characters')
      .max(50, 'First name is too long'),
    lastName: z
      .string()
      .min(2, 'Last name must be at least 2 characters')
      .max(50, 'Last name is too long'),
    phoneNumber: z
      .string()
      .refine(isValidPhoneNumber, { message: 'Invalid phone number' }),
    email: z.string().email('Invalid email address'),
    companyName: z
      .string()
      .min(2, 'Company name is too short')
      .max(100, 'Company name is too long'),
    industry: z.string().min(2, 'Industry is required'),
    companySize: z.string().min(1, 'Company size is required'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(
        /[^A-Za-z0-9]/,
        'Password must contain at least one special character',
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export const signInSchema = z.object({
  emailOrPhoneNumber: z.string().min(5, 'Email or phone number is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type SignUpValues = z.infer<typeof signUpSchema>;
type SignInValues = z.infer<typeof signInSchema>;

export default function AuthForm({
  className,
  formType = 'sign-in',
  onSuccess,
}: {
  className?: React.CSSProperties | ClassValue | string;
  formType?: 'sign-in' | 'sign-up';
  onSuccess?: (values: SignUpValues | SignInValues) => void;
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const router = useRouter();
  const isSignUp = formType === 'sign-up';

  const signUpForm = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      companyName: '',
      industry: '',
      companySize: '',
      password: '',
      confirmPassword: '',
    },
  });

  const signInForm = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      emailOrPhoneNumber: '',
      password: '',
    },
  });

  function onSubmit(values: SignUpValues | SignInValues) {
    console.log({ values });
    if (onSuccess) {
      onSuccess(values);
    }

    toast.success(isSignUp ? 'Sign Up Successful!' : 'Sign In Successful!', {
      duration: 3000,
      style: {
        fontSize: '14px',
      },
    });
  }

  return (
    <div className={cn('pt-8', className)}>
      <div className="relative">
        <div
          onClick={() => {
            router.push('/');
          }}
          className="absolute top-0 right-0 block cursor-pointer lg:hidden"
        >
          <Image
            className="object-contain"
            src="/assets/svg/creva-auth-logo.svg"
            width={100}
            height={100}
            alt="creva-logo"
          />
        </div>
        <h1 className="justify-start text-3xl leading-9 font-bold capitalize">
          {isSignUp ? 'Sign Up' : `Sign In`}
        </h1>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-muted-foreground k block text-base leading-normal font-light">
            {isSignUp ? 'Already have an account?' : `Dont have an account?`}
          </span>
          <span
            onClick={() => {
              if (isSignUp) {
                console.log('Switching to Sign In');
                router.push('/sign-in');
              } else {
                console.log('Switching to Sign Up');
                router.push('/sign-up');
              }
            }}
            className="text-clrCyanBlue block cursor-pointer text-base leading-normal font-semibold underline underline-offset-2"
          >
            {isSignUp ? 'Sign In' : 'Sign Up Now'}
          </span>
        </div>
      </div>
      <div className="mt-5">
        {isSignUp ? (
          <Form {...signUpForm}>
            <form
              onSubmit={signUpForm.handleSubmit(onSubmit)}
              className={cn('space-y-3')}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={signUpForm.control}
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
                  control={signUpForm.control}
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
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={signUpForm.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-nunito text-sm">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <PhoneInput
                          className="border-clrTextLight font-nunito h-10 text-sm"
                          placeholder="Enter a phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs font-light" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signUpForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-nunito text-sm font-medium">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="border-clrTextLight font-nunito h-10 rounded-sm text-sm"
                          placeholder="Email Address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs font-light" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={signUpForm.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-nunito text-sm font-medium">
                        Company Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="font-nunito border-clrTextLight h-10 rounded-sm text-sm"
                          placeholder="Company Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs font-light" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signUpForm.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-nunito text-sm font-medium">
                        Industry
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="font-nunito border-clrTextLight h-10 rounded-sm text-sm"
                          placeholder="Industry"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs font-light" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={signUpForm.control}
                name="companySize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-nunito text-sm font-medium">
                      Company Size
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="font-nunito border-clrTextLight h-10 rounded-sm text-sm"
                        placeholder="Company Size"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs font-light" />
                  </FormItem>
                )}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={signUpForm.control}
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
                            placeholder={'Your Password'}
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
                <FormField
                  control={signUpForm.control}
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
                            placeholder={'Confirm Password'}
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
              </div>
              <Button
                type="submit"
                className="from-clrDawnyGreen to-clrDenimBlue text-clrBlackPearl mt-4 block h-10 w-full cursor-pointer bg-linear-48 hover:opacity-90 dark:bg-white dark:text-black"
              >
                Sign Up
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
        ) : (
          <Form {...signInForm}>
            <form
              onSubmit={signInForm.handleSubmit(onSubmit)}
              className={cn('space-y-3')}
            >
              <FormField
                control={signInForm.control}
                name="emailOrPhoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-nunito text-sm font-medium">
                      Email or Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="font-nunito border-clrTextLight h-10 rounded-sm text-sm"
                        placeholder="Email or Phone Number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs font-light" />
                  </FormItem>
                )}
              />
              <FormField
                control={signInForm.control}
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
                          placeholder={'Your Password'}
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
              <Button
                type="submit"
                className="from-clrDawnyGreen to-clrDenimBlue text-clrBlackPearl mt-4 block h-10 w-full cursor-pointer bg-linear-48 hover:opacity-90 dark:bg-white dark:text-black"
              >
                Sign In
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
        )}
      </div>
    </div>
  );
}
