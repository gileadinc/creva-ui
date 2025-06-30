export type IPricingSubscriptionItem = {
  type: string;
  price: string;
  per: string | null;
  numberOfUsers: string;
  badge?: string | null;
  features: string[];
};
export const pricingData: IPricingSubscriptionItem[] = [
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
    badge: null,
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

export type IPricingPerCandidateItem = {
  type: string;
  numberOfUsers: number;
  totalPrice: number;
  features: string[];
};

export const pricingPerCandidateData: IPricingPerCandidateItem = {
  type: 'Per Candidate',
  totalPrice: 400,
  numberOfUsers: 12,
  features: [
    '2,500 min/mo included ($0.69 / add’l min)',
    '1,000 Candidate Screenings per Month',
    '2 native connectors (e.g., Greenhouse or HubSpot)',
    'Visual builder (voice, SMS, email) + A/B steps',
    '20 active job postings',
    '99.9 % uptime',
    //
    '100 prompts + version history',
    'Choose 1 pack (Tech, Healthcare, Retail, etc.)',
    'Real-time KPIs (cost-per-hire, time-to-fill, etc.)',
    'PCI scope isolation, SSO',
    '8×5 chat/email',
    'Guided setup call (1 hr)',
  ],
};
