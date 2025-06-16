'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

import { motion } from 'motion/react';
import * as variants from '@/lib/motion-variants';

interface PricingItem {
  type: string;
  price: string;
  per: string | null;
  numberOfUsers: string;
  badge?: string | null;
  features: string[];
}

const pricingData = [
  {
    type: 'Free',
    price: '0',
    per: 'Month',
    numberOfUsers: 'Single User',
    badge: null,
    features: [
      '60 min/mo included ($0.79 / add’l min)',
      '50 Candidate Screenings per Month',
      'Webhook API only',
      'Default “Call → SMS fallback” template',
      'Single active job posting',
      '5 saved prompts',
      'Basic logs + transcripts',
      'TLS, GDPR basics',
      'Community forum',
      'Self-serve docs',
      'Best-effort',
    ],
  },
  {
    type: 'Pro',
    price: '499',
    per: 'Org',
    numberOfUsers: 'Up To 5 Users',
    badge: 'Popular',
    features: [
      '2,500 min/mo included ($0.69 / add’l min)',
      '1,000 Candidate Screenings per Month',
      '2 native connectors (e.g., Greenhouse or HubSpot)',
      'Visual builder (voice, SMS, email) + A/B steps',
      '20 active job postings',
      '100 prompts + version history',
      'Choose 1 pack (Tech, Healthcare, Retail, etc.)',
      'Real-time KPIs (cost-per-hire, time-to-fill, etc.)',
      'PCI scope isolation, SSO',
      '8×5 chat/email',
      'Guided setup call (1 hr)',
      '99.9 % uptime',
    ],
  },
  {
    type: 'Enterprise',
    price: 'Custom Pricing',
    per: null,
    numberOfUsers: 'Unlimited Users',
    badge: null,
    features: [
      'Unlimited pooled minutes tiered volume discounts',
      'Unlimited Candidate Screenings per Month',
      'All native connectors + custom API build-outs',
      'Advanced builder + multi-brand routing,SLA-based triggers',
      'Unlimited job postings & bulk import',
      'Unlimited prompts + semantic search library',
      'Full library + bespoke tuning for niche roles',
      'Predictive analytics, AI quality scoring',
      'Full audit support, custom DPA, dedicated VPC',
      '24×7 priority + dedicated CSM',
      'White-glove onboarding, tailored training',
      '99.999 % uptime, hourly RTO/RPO',
    ],
  },
];

export default function Pricing({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  return (
    <div
      id="pricing"
      className={cn('py-14 sm:py-18 md:py-24 md:pt-36 lg:pt-40', className)}
    >
      <div className="container mx-auto">
        <motion.h1
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="text-clrTextLight dark:text-clrText font-nunito xs:leading-[52px] xs:text-[44px] mx-auto mb-4 max-w-[753px] text-center text-[40px] leading-[52px] font-bold capitalize sm:text-5xl"
        >
          Pricing Plan for Your Recruitment Solutions
        </motion.h1>
        <motion.p
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="dark:text-clrText text-clrTextLight font-roboto mx-auto max-w-xl px-2 text-center font-light tracking-wide"
        >
          Discover our flexible pricing options tailored to meet your hiring
          needs and budget.
        </motion.p>
      </div>
      <div className="relative mt-8 py-8 sm:mt-10 lg:mt-20 xl:mt-40">
        <motion.ul
          variants={variants.staggerContainer}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-10 max-sm:px-[5%]"
        >
          {pricingData.map((item, idx) => (
            <motion.li
              key={idx}
              className="relative z-20 w-[400px] xl:nth-[2]:-top-20"
              variants={variants.fadeInUp}
            >
              <PricingCard item={item} highlight={item.type === 'Pro'} />
            </motion.li>
          ))}
        </motion.ul>
        <div className="absolute inset-0 grid place-content-center">
          <div className="relative h-[600px] w-[calc(100vw-20px)]">
            <div className="absolute inset-0 z-10 grid h-full w-full place-content-center opacity-60">
              <div className="relative mx-auto h-24 w-[calc(100vw-20px)] blur-[120px]">
                <div className="absolute top-0 left-0 h-24 w-1/2 rounded-[389px] bg-[#00cc99]" />
                <div className="absolute top-0 left-1/2 h-24 w-1/2 rounded-[300px] bg-[#3c91e6]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingCard({
  item,
  highlight,
}: {
  item: PricingItem;
  highlight?: boolean;
}) {
  const { type, price, per, numberOfUsers, badge, features } = item;
  return (
    <div
      className={cn(
        highlight
          ? 'bg-linear-48 from-[#5cd9ba] to-[#81b5e9] p-[3px]'
          : 'bg-clrText border-clrTextLight border p-[1px] dark:border-transparent',
        'rounded-lg',
      )}
    >
      <div className="dark:text-clrText text-clrTextLight dark:bg-clrBlackPearl space-y-3 rounded-lg bg-white p-6">
        <div className="flex items-center justify-between">
          <span className="font-nunito block text-4xl font-semibold">
            {type}
          </span>
          {badge && (
            <span className="dark:text-clrBlackPearl block w-24 rounded-3xl bg-[#5cd9ba] text-center text-white">
              {badge}
            </span>
          )}
        </div>

        {/* <div className="relative h-3.5 w-24 rounded-3xl">
        <div className="absolute top-0 left-0 h-3.5 w-24" />
        <div className="absolute top-0 left-[29px] justify-start text-center font-['Nunito'] text-[10px] font-semibold tracking-tight text-[#0b132b]">
          Popular
        </div>
      </div> */}

        <div>
          <span className="text-3xl font-medium">${price}</span>
          <span className="text-2xl font-light opacity-[57%]">
            {per && `/${per}`}
          </span>
        </div>
        <p className="text-base font-light opacity-[57%]">{numberOfUsers}</p>
        <ul className="mt-4 min-h-[320px] space-y-1.5">
          {features.map((feature, idx) => (
            <li className="relative text-sm" key={idx}>
              <span className="absolute w-[10px] text-green-500">{'✓'}</span>
              <span className="ml-[20px] block font-light opacity-[57%]">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <button
          className={cn(
            highlight
              ? 'dark:text-clrBlackPearl border-transparent bg-linear-48 from-[#5cd9ba] to-[#81b5e9] text-white hover:opacity-80'
              : 'dark:text-clrText dark:border-clrText text-clrTextLight border-clrTextLight bg-transparent hover:bg-black/5 dark:hover:bg-white/5',
            'font-roboto block w-full cursor-pointer rounded-xl border py-2 font-medium transition-all duration-300 ease-in',
          )}
        >
          Get Started {type === 'Free' ? 'For' : 'With'}
        </button>
      </div>
    </div>
  );
}
