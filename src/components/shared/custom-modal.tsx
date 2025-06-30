'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { Loader, Mic, Phone, X } from 'lucide-react';
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
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useAppStore } from '@/store/useAppStore';
import { agentsData } from '@/constants/data';
import { PhoneInput } from '../ui/phone-input';
import { useSubmitAiAgentForm } from '@/hooks/api/useSubmitAIAgentForm';
import { isValidPhoneNumber } from 'react-phone-number-input';
import {
  ResponsiveModal,
  ResponsiveModalClose,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
} from '../ui/responsive-modal';
import { useState } from 'react';
import {
  MatomoAction,
  MatomoCategory,
  trackMatomoEvent,
} from '@/lib/matomo-utils';

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

export default function CustomModal({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const { mutateAsync: submitForm, isPending: isSubmitting } =
    useSubmitAiAgentForm();

  const {
    isModalOpen,
    closeModal,
    selectedAgentId,
    setSelectedAgentId,
    setIsCharacterTalking,
    setIsTryLiveOn,
    modalContext,
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
      agent: {
        id: selectedAgentId,
      },
    };

    const payload = {
      firstname: data.firstName,
      lastname: data.lastName,
      emailaddress: data.email,
      phonenumber: data.phoneNumber,
      howdidyouhearaboutus: data.source,
      companyname: data.companyName || '',
      jobtitle: data.jobTitle || '',
    };

    try {
      // submit the form data to the API.
      await submitForm(payload);

      toast.success('Thank you for your submission!', {
        description: '',
        duration: 1000,
        position: 'top-right',
      });

      if (modalContext === 'agentInteraction') {
        if (selectedAgentId) {
          setIsCharacterTalking(true);
          toast.success(
            `You are now connected to ${agentsData.find((agent) => agent.id === selectedAgentId)?.name}`,
            {
              description: 'Your AI Agent is ready to assist you.',
              duration: 3000,
              position: 'top-right',
            },
          );
        }
      } else if (modalContext === 'tryLive') {
        setIsTryLiveOn(true);
        toast.success('You are now in the live interaction mode!', {
          description: '',
          position: 'top-right',
        });
      }

      trackMatomoEvent(
        MatomoCategory.Form,
        MatomoAction.Submitted,
        'Try AI Agent Form (Try AI Agent Button)',
      );

      handleCloseModal();
    } catch (error) {
      toast.error('Error submitting form. Please try again later.');
    }
  }

  const handleCallOnPhone = async () => {
    if (isSubmitting) return;
    // validate form before proceeding
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

      toast.success('Thank you for your interest!', {
        description: 'Our AI Agent is calling you now. Please wait a moment.',
        position: 'top-right',
      });

      trackMatomoEvent(
        MatomoCategory.Form,
        MatomoAction.Submitted,
        'Try AI Agent Form (Get A Phone Call Button)',
      );

      handleCloseModal();
    } catch (error) {
      if (error) {
        toast.error('Error submitting form. Please try again later.');
      }
    }
  };

  const handleCloseModal = () => {
    if (isSubmitting) return;
    form.reset();
    closeModal();
    trackMatomoEvent(
      MatomoCategory.Modal,
      MatomoAction.Closed,
      modalContext === 'agentInteraction'
        ? 'Expeiance AI Agent Interaction ModalClose (Hero Section)'
        : 'Expeiance AI Agent Interaction ModalClose (TryLive Section)',
    );
  };

  return (
    <ResponsiveModal open={isModalOpen} onOpenChange={handleCloseModal}>
      <ResponsiveModalContent
        data-lenis-prevent
        aria-describedby="modal"
        className={cn(
          // 'dark:bg-clrBlackPearl scrollbar-hide h-full max-h-[calc(100vh-30px)] overflow-y-auto bg-white xl:min-w-[550px]',
          className,
        )}
      >
        <ResponsiveModalHeader className="hidden">
          <ResponsiveModalTitle>Modal Form</ResponsiveModalTitle>
          <ResponsiveModalDescription>Modal Desc</ResponsiveModalDescription>
        </ResponsiveModalHeader>

        <div className="">
          <div className="font-nunito dark:text-clrText text-clrTextLight">
            <div className="flex items-center justify-between">
              <h3 className="py-2 text-[24px] font-extrabold">
                Experience Our AI Agents
              </h3>
              <ResponsiveModalClose className="cursor-pointer">
                <X className="size-8" />
                <span className="sr-only">Close</span>
              </ResponsiveModalClose>
            </div>
            <hr className="text-clrDawnyGreen" />
            <p className="my-3 mb-4 text-[12px] leading-[18px] font-light tracking-wide lg:text-base lg:leading-[24px]">
              Fill out the form below to experience our AI recruitment services.
              Please provide your full name, email address, and phone number
            </p>
          </div>

          <hr className="text-clrDawnyGreen" />

          <div className="pt-3 pb-2">
            <p className="text-[12px] font-light tracking-wide lg:text-sm">
              Choose An Agent to Talk To Live
            </p>
            <div>
              <ul className="flex justify-evenly gap-4 py-2 pt-4 xl:gap-6">
                {agentsData.map((agent, index) => (
                  <li
                    onClick={() => {
                      setSelectedAgentId(agent.id);
                    }}
                    key={index}
                    className={cn(
                      'inline-block cursor-pointer transition-all duration-300 ease-in-out',
                      'opacity-60 hover:scale-115 hover:opacity-100',
                      selectedAgentId === agent.id
                        ? 'scale-115 opacity-100'
                        : '',
                    )}
                  >
                    <div>
                      <Image
                        className="size-full object-cover"
                        src={agent.img}
                        width={100}
                        height={100}
                        alt="character"
                      />
                    </div>
                    <span className="dark:text-clrText block pt-1 text-center text-sm text-black">
                      {agent.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="text-clrDawnyGreen mb-4" />
          <Form {...form}>
            <form
              id="try_ai_agent_form"
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative space-y-3"
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
                      <FormLabel className="font-nunito text-sm">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isSubmitting}
                          className="font-nunito border-clrTextLight h-11 text-sm"
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
                      <FormLabel className="font-nunito text-sm">
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isSubmitting}
                          className="font-nunito border-clrTextLight h-11 text-sm"
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
                    <FormLabel className="font-nunito text-sm">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isSubmitting}
                        className="border-clrTextLight h-11 text-sm"
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
                    <FormLabel className="font-nunito text-sm">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <PhoneInput
                        disabled={isSubmitting}
                        className="border-clrTextLight h-11 text-sm"
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
                            className="border-clrTextLight data-[size=default]:h-11"
                          >
                            <SelectValue
                              className=""
                              placeholder="Select an option"
                            />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent className="dark:bg-clrBlackPearl dark:text-clrText text-clrTextLight bg-white">
                          {[
                            { value: 'google', label: 'Google Search' },
                            { value: 'social-media', label: 'Social Media' },
                            {
                              value: 'friend-family',
                              label: 'Friend or Family',
                            },
                            {
                              value: 'advertisement',
                              label: 'Advertisement',
                            },
                            {
                              value: 'blog-article',
                              label: 'Blog or Article',
                            },
                            { value: 'youtube', label: 'YouTube' },
                            { value: 'podcast', label: 'Podcast' },
                            { value: 'email', label: 'Email Newsletter' },
                            { value: 'event', label: 'Event or Conference' },
                            {
                              value: 'partner',
                              label: 'Partner or Referral',
                            },
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
                            {
                              value: 'word-of-mouth',
                              label: 'Word of Mouth',
                            },
                            { value: 'other', label: 'Other' },
                          ].map((item) => (
                            <SelectItem
                              key={item.value}
                              value={item.value}
                              className="dark:hover:bg-clrTextLight/10 hover:bg-clrTextLight/10 focus:bg-clrTextLight/10 px-4 py-3 text-base"
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
                      <FormLabel className="font-nunito text-sm">
                        Company Name (optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isSubmitting}
                          className="font-nunito border-clrTextLight h-11 text-sm"
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
                      <FormLabel className="font-nunito text-sm">
                        Job Title (optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isSubmitting}
                          className="font-nunito border-clrTextLight h-11 text-sm"
                          placeholder="Your Job Title"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs font-light" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="font-roboto group relative h-11 w-full cursor-pointer rounded-sm transition-opacity duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-20"
                >
                  <span className="from-clrDawnyGreen/95 to-clrDenimBlue/95 hover:to-clrDenimBlue hover:from-clrDawnyGreen absolute inset-0 rounded-sm bg-linear-53" />
                  <div className="text-clrZeusDark pointer-events-none absolute top-1/2 flex w-full -translate-y-1/2 items-center justify-center gap-2">
                    <Mic className="size-5" />
                    <span className="">Try AI Agent Now</span>
                  </div>
                </button>

                <button
                  disabled={isSubmitting}
                  onClick={handleCallOnPhone}
                  type="button"
                  className="group from-clrDawnyGreen to-clrDenimBlue relative inline-block h-11 w-full cursor-pointer rounded-sm bg-linear-90 p-[2px] disabled:cursor-not-allowed disabled:opacity-20"
                >
                  <div className="dark:text-clrText text-clrTextLight font-roboto dark:bg-clrBlackPearl dark:group-hover:bg-clrBlackPearl/70 flex h-full w-full items-center justify-center gap-2 rounded-sm bg-white transition-colors duration-300 ease-in-out group-hover:bg-white/80 group-hover:backdrop-blur-2xl">
                    <Phone className="size-5" />
                    <span className="">Get a Call</span>
                  </div>
                </button>
              </div>
            </form>
          </Form>
        </div>
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
}
