'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Loader, Mic, Phone } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useAppStore } from '@/store/useAppStore';
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
} from '../ui/responsive-modal';

import toast from 'react-hot-toast';
import { agentsData } from '@/constants/data';
import { Button } from '../ui/button';
import { PhoneInput } from '../ui/phone-input';
import { useSubmitAiAgentForm } from '@/hooks/api/useSubmitAIAgentForm';

const formSchema = z.object({
  firstName: z
    .string({ message: 'FirstName is required' })
    .min(4, { message: 'FirstName must be at least 4 characters long' })
    .max(20, { message: 'FirstName must be at most 20 characters long' }),
  lastName: z
    .string({ message: 'LastName is required' })
    .min(4, { message: 'LastName must be at least 4 characters long' })
    .max(20, { message: 'LastName must be at most 20 characters long' }),
  email: z
    .string({ message: 'email is required' })
    .email({ message: 'Invalid email address' }),
  phoneNumber: z
    .string()
    .refine(isValidPhoneNumber, { message: 'Invalid phone number' }),
  source: z.string({
    required_error: 'Please select an option.',
  }),
  companyName: z.string().optional(),
  jobTitle: z.string().optional(),
});
export default function ModalForm({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const { mutateAsync: submitForm, isPending: isSubmitting } =
    useSubmitAiAgentForm();
  const {
    isModalOpen,
    modalContext,
    closeModal,
    selectedAgentId,
    setSelectedAgentId,
    setIsAgentTalking,
    setIsTryLiveOn,
    setTryLiveModalCount,
    tryLiveModalCount,
  } = useAppStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      companyName: '',
      jobTitle: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = {
      ...values,
      howdidyouhearaboutus: values.source,
      agent: {
        id: 'agent-id',
      },
    };

    const payload = {
      firstname: data.firstName,
      lastname: data.lastName,
      emailaddress: data.email,
      phonenumber: data.phoneNumber,
      howdidyouhearaboutus: data.howdidyouhearaboutus,
      companyname: data.companyName || '',
      jobtitle: data.jobTitle || '',
    };

    try {
      // submit the form data to the API.
      await submitForm(payload);

      toast.success('Form Submitted Successfully');

      // create a web socket connection to API.

      if (modalContext === 'redirectToLive') {
        if (selectedAgentId) {
          setIsTryLiveOn(true);
          setIsAgentTalking(true);
          // toast.loading('Connecting to AI Agent...');
          // toast.success('You are now connected to the AI Agent');
        }

        // // scroll to live demo section.
        const target = document.getElementById('ai-agents');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (modalContext === 'tryLive') {
        if (selectedAgentId) {
          setIsAgentTalking(true);
          setIsTryLiveOn(true);
          // toast.loading('Connecting to AI Agent...', { duration: 2000 });
          // toast.success('You are now connected to the AI Agent');
        }
      }
      setTryLiveModalCount(tryLiveModalCount + 1);

      handleCloseModal();
    } catch (error) {
      console.log('Error submitting form:', error);
      toast.error('Error submitting form. Please try again later.');
    }
  }

  const handleCloseModal = () => {
    if (isSubmitting) return;
    form.reset();
    closeModal();
  };

  const handleCallOnPhone = async () => {
    if (isSubmitting) return;
    const isValid = await form.trigger();
    if (!isValid) {
      return;
    }
    try {
      const values = form.getValues();
      const payload = {
        firstname: values.firstName,
        lastname: values.lastName,
        emailaddress: values.email,
        phonenumber: values.phoneNumber,
        howdidyouhearaboutus: values.source,
        companyname: values.companyName || '',
        jobtitle: values.jobTitle || '',
      };
      await submitForm(payload);
      toast.success('Thank you for you intereset', {});
      toast.loading(
        'Our AI Agent is calling you now. Please Wait a moment...',
        {
          duration: 3000,
        },
      );

      handleCloseModal();
    } catch (error) {
      toast.error('Error submitting form. Please try again later.');
    }
  };

  return (
    <ResponsiveModal open={isModalOpen} onOpenChange={handleCloseModal}>
      <ResponsiveModalContent
        side={'top'}
        aria-describedby="modal"
        className={cn(
          'dark:bg-clrWoodsmoke scrollbar-hide h-full max-h-[calc(100dvh-2%)] bg-white lg:max-h-[calc(100vh-5%)] xl:min-w-[500px]',
          className,
        )}
      >
        <ResponsiveModalHeader className="hidden">
          <ResponsiveModalTitle>Try AI Modal Form</ResponsiveModalTitle>
          <ResponsiveModalDescription>
            Try AI Modal Description
          </ResponsiveModalDescription>
        </ResponsiveModalHeader>
        <div className="h-full">
          <div className="dark:text-clrTextLight text-clrTextDark">
            <h3 className="font-raleway py-2 text-[24px] font-extrabold">
              Experience Our AI Agents
            </h3>
            <hr className="text-clrBrand" />
            <p className="font-opensans my-3 mb-4 text-[12px] leading-[18px] tracking-wide lg:text-base lg:leading-[24px] dark:font-light">
              Fill out the form below to experience our AI recruitment services.
              Please provide your full name, email address, and phone number
            </p>
          </div>
          <hr className="text-clrBrand" />
          <div className="pt-3 pb-2">
            <p className="font-opensans text-[12px] font-light tracking-wide lg:text-sm">
              Choose An Agent to Talk To Live
            </p>
            <div>
              <ul className="flex justify-evenly gap-4 py-2 pt-4 xl:gap-6">
                {agentsData.map(({ id, img, name }, index) => (
                  <li
                    onClick={() => {
                      setSelectedAgentId(id);
                    }}
                    key={index}
                    className={cn(
                      'inline-block cursor-pointer transition-all duration-300 ease-in-out',
                      'opacity-60 hover:scale-115 hover:opacity-100',
                      selectedAgentId === id ? 'scale-115 opacity-100' : '',
                    )}
                  >
                    <div>
                      <Image
                        className="size-full object-cover"
                        src={img}
                        width={100}
                        height={100}
                        alt="character"
                      />
                    </div>
                    <span className="dark:text-clrTextLight text-clrTextDark font-opensans block pt-1 text-center text-sm font-medium">
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="text-clrBrand mb-4" />
          <Form {...form}>
            <form
              id="try_ai_agent_form_l2"
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative space-y-4"
            >
              {isSubmitting && (
                <Loader className="absolute top-1/3 left-1/2 size-10 -translate-x-1/2 -translate-y-1/2 animate-spin" />
              )}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-raleway text-sm">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isSubmitting}
                          className="font-raleway border-clrTextDark h-11 text-sm"
                          placeholder="Your First Name"
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
                      <FormLabel className="font-raleway text-sm">
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isSubmitting}
                          className="font-raleway border-clrTextDark h-11 text-sm"
                          placeholder="Your Last Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs font-light" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-raleway text-sm">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isSubmitting}
                        className="font-raleway border-clrTextDark h-11 text-sm"
                        placeholder="Your Email Address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs font-light" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-raleway text-sm">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <PhoneInput
                        disabled={isSubmitting}
                        className="border-clrTextDark font-raleway h-11 text-sm"
                        placeholder="Enter a phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs font-light" />
                  </FormItem>
                )}
              />

              <div>
                <FormField
                  control={form.control}
                  name="source"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel className="font-nunito text-sm">
                        How did you hear about us?
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="w-full text-sm">
                          <SelectTrigger
                            disabled={isSubmitting}
                            className="border-clrTextDark data-[size=default]:h-11"
                          >
                            <SelectValue
                              className="font-raleway"
                              placeholder="Select an option"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="dark:bg-clrWoodsmoke dark:text-clrTextLight text-clrTextDark bg-white">
                          {[
                            { value: 'google', label: 'Google Search' },
                            { value: 'social-media', label: 'Social Media' },
                            {
                              value: 'friend-family',
                              label: 'Friend or Family',
                            },
                            { value: 'advertisement', label: 'Advertisement' },
                            { value: 'blog-article', label: 'Blog or Article' },
                            { value: 'youtube', label: 'YouTube' },
                            { value: 'podcast', label: 'Podcast' },
                            { value: 'email', label: 'Email Newsletter' },
                            { value: 'event', label: 'Event or Conference' },
                            { value: 'partner', label: 'Partner or Referral' },
                            { value: 'app-store', label: 'App Store' },
                            { value: 'linkedin', label: 'LinkedIn' },
                            { value: 'facebook', label: 'Facebook' },
                            { value: 'twitter', label: 'Twitter/X' },
                            { value: 'instagram', label: 'Instagram' },
                            { value: 'tiktok', label: 'TikTok' },
                            { value: 'reddit', label: 'Reddit' },
                            { value: 'online-forum', label: 'Online Forum' },
                            { value: 'tv-radio', label: 'TV or Radio' },
                            { value: 'print-media', label: 'Print Media' },
                            { value: 'word-of-mouth', label: 'Word of Mouth' },
                            { value: 'other', label: 'Other' },
                          ].map((item) => (
                            <SelectItem
                              key={item.value}
                              value={item.value}
                              className="hover:bg-clrTextDark/10 font-raleway px-4 py-3 text-base"
                            >
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-xs font-light" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-raleway text-sm">
                        Company Name (optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isSubmitting}
                          className="font-raleway border-clrTextDark h-11 text-sm"
                          placeholder="Your Company Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs font-light" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-raleway text-sm">
                        Job Title (optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isSubmitting}
                          className="font-raleway border-clrTextDark h-11 text-sm"
                          placeholder="Your Job Title"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs font-light" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex h-10 cursor-pointer items-center gap-2 rounded-sm"
                  size="sm"
                  variant="brand"
                >
                  <Mic className="size-5" />
                  <span className="font-opensans">Try AI Agent Now</span>
                </Button>

                <Button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleCallOnPhone}
                  className="flex h-10 cursor-pointer items-center gap-2 rounded-sm border-2"
                  size="sm"
                  variant="brandOutline"
                >
                  <Phone className="size-4" />
                  <span className="font-opensans">Get a Call</span>
                </Button>
              </div>
              <div className="opacity-0 lg:hidden">opacity-0</div>
            </form>
          </Form>
        </div>
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
}
