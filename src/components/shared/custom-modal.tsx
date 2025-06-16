'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useEffect, useState } from 'react';
interface IAgent {
  img: string;
  name: string;
  country: string;
  music: string;
}

const agentsData: IAgent[] = [
  {
    img: '/assets/img/character-1.png',
    name: 'Ben',
    country: 'Melbourne, Australia',
    music: '/assets/music/agent-1.mp3',
  },
  {
    img: '/assets/img/character-4.png',
    name: 'Jazmin',
    country: 'Paris, France',
    music: '/assets/music/agent-1.mp3',
  },
  {
    img: '/assets/img/character-2.png',
    name: 'Maria',
    country: 'London, United Kingdom',
    music: '/assets/music/agent-1.mp3',
  },
  {
    img: '/assets/img/character-3.png',
    name: 'Peter',
    country: 'los angeles, California',
    music: '/assets/music/agent-1.mp3',
  },
];

const formSchema = z.object({
  fullName: z
    .string({ message: 'Fullname is required' })
    .min(4, { message: 'Fullname must be at least 4 characters long' })
    .max(50, { message: 'Fullname must be at most 50 characters long' }),
  email: z
    .string({ message: 'email is required' })
    .email({ message: 'Invalid email address' }),
  phoneNumber: z
    .string({ message: 'Phone number is required' })
    .min(7, { message: 'Phone number must be at least 7 digits' })
    .max(15, { message: 'Phone number must be at most 15 digits' })
    .regex(/^\d+$/, { message: 'Phone number must contain only digits' }),
});

export default function CustomModal({
  className,
  isOpen,
  onClose,
  showFormOnly = false,
  agent,
}: {
  className?: React.CSSProperties | ClassValue | string;
  isOpen: boolean;
  onClose: () => void;
  showFormOnly?: boolean;
  agent?: IAgent | null;
}) {
  const [selectedCharacter, setSelectedCharacter] = useState<IAgent | null>(
    agentsData[0],
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
    },
  });

  useEffect(() => {
    if (agent) {
      setSelectedCharacter(agent);
    }
  }, [agent]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const data = {
      ...values,
      agent: showFormOnly
        ? null
        : {
            name: selectedCharacter?.name || '',
            country: selectedCharacter?.country || '',
          },
    };
    console.log('Form submitted with data:', data);
    toast.success('Thank you for your submission!', {
      description: 'We will get back to you soon.',
      duration: 3000,
      position: 'top-right',
    });
  }

  const handleCloseModal = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogHeader className="hidden">
        <DialogTitle>Modal Form</DialogTitle>
        <DialogDescription>Modal Desc</DialogDescription>
      </DialogHeader>
      <DialogContent
        aria-describedby="modal"
        className={cn(
          'dark:bg-clrBlackPearl bg-clrAquaHaze z-100 overflow-hidden overflow-y-auto xl:w-fit',
          className,
        )}
      >
        <div className="max-h-full overflow-y-auto">
          <div className="font-nunito dark:text-clrText text-clrTextLight">
            <h3 className="py-2 text-[24px] font-extrabold">
              {showFormOnly
                ? 'Experience our AI Agents'
                : ' Experience AI Agents Live'}
            </h3>
            <hr className="text-clrDawnyGreen" />
            <p className="my-3 mb-4 text-[12px] leading-[18px] font-light tracking-wide lg:text-sm">
              Fill out the form below to experience our AI recruitment services.
              Please provide your full name, email address, and phone number
            </p>
          </div>
          {!showFormOnly && <hr className="text-clrDawnyGreen" />}

          {!showFormOnly && (
            <div className="pt-3 pb-2">
              <p className="text-[12px] font-light tracking-wide lg:text-sm">
                Choose An Agent to Talk To Live
              </p>
              <div>
                <ul className="flex justify-evenly gap-4 py-2 pt-4 xl:gap-6">
                  {agentsData.map((agent, index) => (
                    <li
                      onClick={() => setSelectedCharacter(agent)}
                      key={index}
                      className={cn(
                        'inline-block cursor-pointer transition-all duration-300 ease-in-out',
                        'opacity-60 hover:scale-115 hover:opacity-100',
                        selectedCharacter?.name === agent.name
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
                      <span className="dark:text-clrText text-clrTextLight block pt-1 text-center text-xs">
                        {agent.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <hr className="text-clrDawnyGreen mb-4" />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-nunito text-sm font-light">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="font-nunito h-11 text-sm"
                        placeholder="Your Full Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs font-light" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-nunito text-sm font-light">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-11 text-sm"
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
                    <FormLabel className="font-nunito text-sm font-light">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-11 text-sm"
                        placeholder="your Phone Number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs font-light" />
                  </FormItem>
                )}
              />

              {/* <button
                type="submit"
                className="relative mt-8 h-10 w-full rounded-sm"
              >
                <div className="absolute top-0 left-0 h-10 w-full rounded-sm bg-linear-70 from-[#5cd9ba] to-[#81b5e9]" />
                <div className="font-roboto text-clrZeusDark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-start text-base font-normal">
                  Get Started
                </div>
              </button> */}
              <Button className="group relative mt-3 h-11 w-full cursor-pointer rounded-sm p-[2px]">
                <div className="from-clrDawnyGreen/85 to-clrDenimBlue/85 group-hover:to-clrDenimBlue group-hover:from-clrDawnyGreen absolute inset-0 rounded-sm bg-linear-53" />
                <span className="text-clrZeusDark pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  Get Started
                </span>
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
