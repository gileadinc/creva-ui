'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  IPricingSubscriptionItem,
  pricingData,
  pricingPerCandidateData,
} from './pricing-data';
import { Button } from '@/components/ui/button';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { GlowingEffect2 } from '@/components/ui/glowing-effect-2';
import { useEffect, useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { useRouter } from 'next/navigation';
export default function PricingContent({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  return (
    <div className={cn('size-full', className)}>
      <Tabs defaultValue="subscription" className="w-full">
        <TabsList className="dark:bg-clrOnyx mx-auto h-12 gap-5 rounded-xs bg-white px-2 py-1">
          <TabsTrigger
            className={cn(
              'dark:bg-clrCinder dark:text-clrPorcelain bg-clrMercury/40 text-clrCinder h-9',
              'dark:data-[state=active]:from-clrSunnyYellow dark:data-[state=active]:to-clrAlienGreen dark:data-[state=active]:text-clrOnyx dark:data-[state=active]:bg-gradient-to-r',
              'data-[state=active]:from-clrSunnyYellow data-[state=active]:to-clrAlienGreen data-[state=active]:text-clrOnyx data-[state=active]:bg-gradient-to-r',
              'rounded-xs transition-all',
              'xs-[260px] w-fit sm:w-[300px] md:w-[400px]',
            )}
            value="subscription"
          >
            Subscription Plan
          </TabsTrigger>
          <TabsTrigger
            className={cn(
              'dark:bg-clrCinder dark:text-clrPorcelain bg-clrMercury/40 text-clrCinder h-9',
              'dark:data-[state=active]:from-clrSunnyYellow dark:data-[state=active]:to-clrAlienGreen dark:data-[state=active]:text-clrOnyx dark:data-[state=active]:bg-gradient-to-r',
              'data-[state=active]:from-clrSunnyYellow data-[state=active]:to-clrAlienGreen data-[state=active]:text-clrOnyx data-[state=active]:bg-gradient-to-r',
              'rounded-xs transition-all',
              'xs-[260px] w-fit sm:w-[300px] md:w-[400px]',
            )}
            value="percandidate"
          >
            Pay Per Candidate
          </TabsTrigger>
        </TabsList>
        <div className="font-roboto dark:text-clrPorcelain mx-auto mt-5 max-w-3xl px-4">
          <p className="font-roboto text-center font-light">
            Subscribe for unlimited access to candidates, streamlining your
            recruitment process and maximizing your hiring potential.
          </p>
        </div>
        <div className="relative mt-8 py-8 sm:mt-10">
          <TabsContent value="subscription">
            <SubscriptionContent />
          </TabsContent>
          <TabsContent value="percandidate" className="size-full">
            <PerCandidateContent />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

function SubscriptionContent() {
  return (
    <div>
      <ul className="flex flex-wrap justify-center gap-6 max-sm:px-[5%]">
        {pricingData.map((item, idx) => (
          <li
            key={idx}
            className={cn(
              // 'relative z-20 w-[400px] self-stretch xl:nth-[2]:-top-20',
              'relative z-20 w-[400px] self-stretch',
            )}
          >
            <PricingCard item={item} highlight={item.type === 'Pro'} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingCard({
  item,
  highlight,
}: {
  item: IPricingSubscriptionItem;
  highlight?: boolean;
}) {
  const { type, price, per, numberOfUsers, badge, features } = item;
  const router = useRouter();
  const handleGetStarted = (type: string) => {
    router.push('/sign-up');
  };
  return (
    <div className={cn('relative h-full rounded-lg p-[2px]')}>
      <GlowingEffect2
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={4}
      />
      <div
        className={cn(
          'flex h-full flex-col space-y-3 rounded-lg p-6',
          'dark:bg-clrOnyx font-roboto bg-white dark:text-[#f0f0f0]',
        )}
      >
        <div className="flex items-center justify-between">
          <span className="font-nunito block text-3xl font-semibold">
            {type}
          </span>
        </div>

        <div>
          <span className="text-4xl font-medium">${price}</span>
          <span className="text-2xl font-light opacity-[80%]">
            {per && `/${per}`}
          </span>
        </div>
        <p className="font-light">{numberOfUsers}</p>
        <ul className="mt-4 mb-8 min-h-[320px] space-y-2">
          {features.map((feature, idx) => (
            <li className="relative" key={idx}>
              <span className="absolute w-[10px] text-green-500">{'✓'}</span>
              <span className="ml-[20px] block opacity-[90%] sm:opacity-[80%]">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        {/* <button
          className={cn(
            highlight
              ? 'dark:text-clrBlackPearl border-transparent bg-linear-48 from-[#5cd9ba] to-[#81b5e9] text-white hover:opacity-80'
              : 'dark:text-clrText dark:border-clrText text-clrTextLight border-clrTextLight bg-transparent hover:bg-black/5 dark:hover:bg-white/5',
            'font-roboto mt-auto block w-full cursor-pointer rounded-xl border py-2 font-medium transition-all duration-300 ease-in',
          )}
        >
          Get Started {type === 'Free' ? `For ${type}` : `With ${type}`}
        </button> */}
        {type !== 'Pro' ? (
          <Button
            onClick={() => handleGetStarted(type)}
            variant="brandOutline"
            className="font-opensans mt-auto hidden h-10 w-full rounded-md text-xl font-bold md:block"
          >
            Get Started {type === 'Free' ? `For ${type}` : `With ${type}`}
          </Button>
        ) : (
          <Button
            onClick={() => handleGetStarted(type)}
            variant="brand"
            className="mt-auto"
          >
            Get Started With {type}
          </Button>
        )}
      </div>
    </div>
  );
}

function PerCandidateContent() {
  const { features, totalPrice, type } = pricingPerCandidateData;
  const router = useRouter();
  const [progress, setProgress] = useState([3]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (progress[0] === 0) {
      setPrice(0);
    } else {
      setPrice(progress[0] * 200);
    }
  }, [progress]);

  const handleGetStartedNow = () => {
    router.push('/sign-up');
  };

  return (
    <div className="dark:bg-clrOnyx font-roboto relative mx-auto w-full max-w-[840px] rounded-sm bg-white px-8 py-10 dark:text-[#f0f0f0]">
      <GlowingEffect2
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={4}
      />
      <div className="">
        <h3 className="text-2xl font-semibold">{type}</h3>

        <div className="mt-5 mb-5 space-y-5">
          <div className="flex justify-between">
            <span>Number of Candidates</span>
            <span className="text-lg font-semibold">{progress[0]}</span>
          </div>
          <div className="w-full">
            <Slider
              value={progress}
              onValueChange={setProgress}
              max={100}
              step={1}
              className=""
              rangeClassName="bg-linear-51 from-clrSunnyYellow to-clrAlienGreen"
              thumbClassName="bg-white"
            />
          </div>
        </div>

        <div>
          <div>
            <span className="text-4xl font-medium">${price}</span>
            <span className="text-2xl font-light opacity-[80%]">/Total</span>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 sm:gap-10">
            <ul className="flex flex-col gap-4 text-base">
              {features.slice(0, 6).map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <ul className="flex flex-col gap-4 text-base">
              {features.slice(6).map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          <Button
            onClick={handleGetStartedNow}
            variant={'brand'}
            className="mt-10 h-10 w-full"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
}
