type ISection = {
  title: string;
  subtitle: string;
  description: string;
};

export type IFeaturesSection = ISection & {
  cards: { title: string; description: string; imgPath: string }[];
};
export const featuresSectionData: IFeaturesSection = {
  subtitle: 'Features',
  title: 'Features That Empower Your Recruitment Process',
  description:
    'Discover innovative features that optimize your hiring—from smart candidate matching to automated scheduling.',
  cards: [
    {
      title: 'Monitor and Manage Candidate Progress Efficiently',
      description:
        'Track candidates throughout the recruitment process, ensuring timely updates and streamlined communication.',
      imgPath: '',
    },
    {
      title: 'Automated Insights for Resume Evaluation Process',
      description:
        'Utilize AI to automatically evaluate resumes, highlighting key qualifications and matching skills to job requirements.',
      imgPath: '',
    },
    {
      title: 'Report and Analytics',
      description:
        'Generate insightful reports and analytics to assess recruitment performance, helping to make informed hiring decisions.',
      imgPath: '',
    },
    {
      title: 'Admin Control and Logs',
      description:
        'Maintain centralized control over the recruitment system with detailed logs for enhanced security and accountability.',
      imgPath: '',
    },
  ],
};

export type IATSSection = ISection & {
  imgSrc: string;
};
export const AtsIntegrationSectionData: IATSSection = {
  subtitle: 'ATS Integration',
  title: 'Seamless Integration with Applicant Tracking Systems (ATS)',
  description:
    'Seamlessly connect with your existing CRM or Applicant Tracking System (ATS) to streamline candidate management and enhance data flow across platforms.',
  imgSrc: '/assets/img/ats-integration.png',
};

export type IWorkflowSection = ISection & {
  imgSrcDark: string;
  imgSrcLight: string;
};

export const workflowSectionData: IWorkflowSection = {
  subtitle: 'Workflow',
  title: 'Creating Efficient Workflows to Enhance Your AI Recruitment Process',
  description:
    'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
  imgSrcDark: '/assets/img/workflow-dark.png',
  imgSrcLight: '/assets/img/workflow-light.png',
};

export type IAgent = {
  id: string;
  name: string;
  country: string;
  music: string;
  img: string;
  description: string;
};
export type IAIAgentsSection = ISection & {
  agents: IAgent[];
};

export const agentsData: IAgent[] = [
  {
    id: 'agent-ben-id',
    img: '/assets/img/agent-ben.png',
    name: 'Ben',
    country: 'Melbourne, Australia',
    music: '/assets/audio/ben-agent.mp3',
    description:
      "Hi, I'm Ben from Melbourne, Australia. With years of experience in tech and communication, I'm here to guide you through the process and make sure you get the most out of our platform. Let’s make something great together.",
  },
  {
    id: 'agent-jazmin-id',
    img: '/assets/img/agent-jazmin.png',
    name: 'Jazmin',
    country: 'Paris, France',
    music: '/assets/audio/jazmin-agent.mp3',
    description:
      "Bonjour! I'm Jazmin from Paris, France. I'm passionate about connecting people with the right opportunities. I'm here to walk you through every step and make sure you feel confident and supported throughout your journey.",
  },
  {
    id: 'agent-maria-id',
    img: '/assets/img/agent-maria.png',
    name: 'Maria',
    country: 'London, United Kingdom',
    music: '/assets/audio/maria-agent.mp3',
    description:
      "Hello there! I'm Maria, based in London. I love helping individuals grow and succeed. Whether you're just starting out or looking to take the next step in your career, I'm here to provide guidance and support tailored just for you.",
  },
  {
    id: 'agent-peter-id',
    img: '/assets/img/agent-peter.png',
    name: 'Peter',
    country: 'Barcelona, Spain',
    music: '/assets/audio/peter-agent.mp3',
    description:
      'Hola! I’m Peter from the beautiful city of Barcelona, Spain. I specialize in helping candidates unlock their full potential. My goal is to ensure your talents are matched with the right opportunities, and that you feel empowered every step of the way.',
  },
];

export const AIAgentsSectionData: IAIAgentsSection = {
  subtitle: 'AI Agents',
  title: 'Different Voice Agents for Specific Industries',
  description:
    'Discover how our Voice AI technology enhances candidate evaluation. Watch the demo to see its capabilities and benefits tailored for your hiring process!',
  agents: agentsData,
};

export type IProcessSection = ISection & {
  cards: { subtitle: string; title: string; imgPath: string }[];
};
export const processSectionData: IProcessSection = {
  subtitle: 'Process',
  title: 'How Our AI Simplifies Your Hiring Process',
  description:
    'Discover how our AI technology streamlines candidate sourcing, enhances matching accuracy, and automates tasks, making hiring easier and more efficient for your team.',
  cards: [
    {
      subtitle: 'Post',
      title: 'Post your job to multiple Job Boards Effortlessly',
      imgPath: '/assets/img/post-process.png',
    },
    {
      subtitle: 'Review',
      title:
        'AI-Enhanced Resume Reviews for a More Efficient Evaluation Process',
      imgPath: '/assets/img/review-process.png',
    },
    {
      subtitle: 'Screen',
      title:
        'Streamline Your Process with Voice AI for Efficient Screening Calls',
      imgPath: '/assets/img/screen-process.png',
    },
    {
      subtitle: 'Action',
      title: 'Shortlist Candidates and Take Action in Your Recruitment Process',
      imgPath: '/assets/img/action-process.png',
    },
  ],
};

export type ITestimonialsSection = ISection & {
  cards: {
    name: string;
    position: string;
    text: string;
  }[];
};
export const testimonialsSectionData: ITestimonialsSection = {
  title: 'Testimonials from Clients Who Transformed Their Hiring',
  subtitle: 'Testimonials',
  description:
    'See how our AI solutions have reshaped recruitment experiences for businesses like yours.',
  cards: [
    {
      name: 'John Doe',
      position: 'CEO, Tech Innovations',
      text: 'The AI recruitment solution has revolutionized our hiring process, making it faster and more efficient.',
    },
    {
      name: 'Jane Smith',
      position: 'HR Manager at Tech Innovations',
      text: 'We’ve seen a significant improvement in candidate quality and engagement since implementing this system.',
    },
    {
      name: 'JEmily Johnson',
      position: 'HR Manager, Global Corp',
      text: "Our hiring process has transformed since we started using this AI solution. We've reduced our time-to-hire by 50% and found candidates who fit our culture perfectly!",
    },
  ],
};

export enum IPricingFeature {
  users = 'Users',
  phonecallminutes = 'Phone Call Minutes',
  candidateScreenings = 'Candidate Screenings',
  integrations = 'Integrations',
  workflowAutomoation = 'Workflow Automation',
  jobPostings = 'Job Postings',
  industryPacks = 'Industry Packs',
  customPrompts = 'Custom Prompts',
  dashboardAndKPIs = 'Dashboard & KPIs',
  securityAndcompliance = 'Security & Compliance',
  support = 'Support',
  onBoarding = 'Onboarding',
  SLAs = 'SLAs',
}
export type IPricingFeatureEntry = {
  key: IPricingFeature;
  value: string;
};

export type IPricingPlan = {
  type: 'Free' | 'Pro' | 'Enterprise';
  price: string;
  features: IPricingFeatureEntry[];
};
export type IPricingSection = ISection & {
  plans: IPricingPlan[];
};

export const pricingSectionData: IPricingSection = {
  subtitle: 'Pricing',
  title: 'Pricing Plan for Your Recruitment Solutions',
  description:
    'Discover our flexible pricing options tailored to meet your hiring needs and budget.',

  plans: [
    {
      type: 'Free',
      price: '0',
      features: [
        { key: IPricingFeature.users, value: 'Single User' },
        {
          key: IPricingFeature.phonecallminutes,
          value: '60 min/mo included ($0.79 / add’l min)',
        },
        {
          key: IPricingFeature.candidateScreenings,
          value: '50 Candidates / mo',
        },
        {
          key: IPricingFeature.integrations,
          value: 'Webhook API only',
        },
        {
          key: IPricingFeature.workflowAutomoation,
          value: 'Default “Call → SMS fallback” template',
        },
        {
          key: IPricingFeature.jobPostings,
          value: '1 active posting',
        },
        {
          key: IPricingFeature.industryPacks,
          value: '---------------------------------',
        },
        {
          key: IPricingFeature.customPrompts,
          value: '5 saved prompts',
        },
        {
          key: IPricingFeature.dashboardAndKPIs,
          value: 'Basic logs + transcripts',
        },
        {
          key: IPricingFeature.securityAndcompliance,
          value: 'TLS, GDPR basics',
        },
        {
          key: IPricingFeature.support,
          value: 'Community forum',
        },
        {
          key: IPricingFeature.onBoarding,
          value: 'Self-serve docs',
        },
        {
          key: IPricingFeature.SLAs,
          value: 'Best-effort',
        },
      ],
    },
    {
      type: 'Pro',
      price: '499',
      features: [
        { key: IPricingFeature.users, value: 'up to 5 users' },
        {
          key: IPricingFeature.phonecallminutes,
          value: '2,500 min/mo included ($0.69 / add’l min)',
        },
        {
          key: IPricingFeature.candidateScreenings,
          value: '1,000 Candidates / mo',
        },
        {
          key: IPricingFeature.integrations,
          value:
            'Webhook API only 2 native connectors (e.g., Greenhouse or HubSpot)',
        },
        {
          key: IPricingFeature.workflowAutomoation,
          value: 'Visual builder (voice, SMS, email) + A/B steps',
        },
        {
          key: IPricingFeature.jobPostings,
          value: '20 active postings',
        },
        {
          key: IPricingFeature.industryPacks,
          value: 'Choose 1 pack (Tech, Healthcare, Retail, etc.)',
        },
        {
          key: IPricingFeature.customPrompts,
          value: '100 prompts + version history',
        },
        {
          key: IPricingFeature.dashboardAndKPIs,
          value: 'Real-time KPIs (cost-per-hire, time-to-fill, etc.)',
        },
        {
          key: IPricingFeature.securityAndcompliance,
          value: 'PCI scope isolation, SSO',
        },
        {
          key: IPricingFeature.support,
          value: '8×5 chat/email',
        },
        {
          key: IPricingFeature.onBoarding,
          value: 'Guided setup call (1 hr)',
        },
        {
          key: IPricingFeature.SLAs,
          value: '99.9 % uptime',
        },
      ],
    },
    {
      type: 'Enterprise',
      price: 'Custom',
      features: [
        { key: IPricingFeature.users, value: 'Unlimited Users' },
        {
          key: IPricingFeature.phonecallminutes,
          value: 'Unlimited pooled minutes tiered volume discounts',
        },
        {
          key: IPricingFeature.candidateScreenings,
          value: 'Unlimited Candidates',
        },
        {
          key: IPricingFeature.integrations,
          value: 'All native connectors + custom API build-outs',
        },
        {
          key: IPricingFeature.workflowAutomoation,
          value: 'Advanced builder + multi-brand routing, SLA-based triggers',
        },
        {
          key: IPricingFeature.jobPostings,
          value: 'Unlimited postings & bulk import',
        },
        {
          key: IPricingFeature.industryPacks,
          value: 'Full library + bespoke tuning for niche roles',
        },
        {
          key: IPricingFeature.customPrompts,
          value: 'Unlimited prompts + semantic search library',
        },
        {
          key: IPricingFeature.dashboardAndKPIs,
          value: 'Predictive analytics, AI quality scoring',
        },
        {
          key: IPricingFeature.securityAndcompliance,
          value: 'Full audit support, custom DPA, dedicated VPC',
        },
        {
          key: IPricingFeature.support,
          value: '24×7 priority + dedicated CSM',
        },
        {
          key: IPricingFeature.onBoarding,
          value: 'White-glove onboarding, tailored training',
        },
        {
          key: IPricingFeature.SLAs,
          value: '99.999 % uptime, hourly RTO/RPO',
        },
      ],
    },
  ],
};

export type IFaqSection = ISection & {
  faqs: { question: string; answer: string }[];
};
export const faqSectionData: IFaqSection = {
  subtitle: 'FAQ',
  title: 'Frequently Asked Questions About Creva',
  description:
    'Have questions about our hiring transformation services? This section answers common inquiries to help you understand how our solutions can enhance your recruitment process for a successful hiring journey.',
  faqs: [
    {
      question: 'What is the AI recruitment solution?',
      answer:
        'Our AI recruitment solution uses advanced algorithms to streamline the hiring process, from candidate sourcing to interview scheduling.',
    },
    {
      question: 'How does the AI improve candidate matching?',
      answer:
        'The AI analyzes candidate profiles and job requirements to provide highly accurate matches, ensuring you find the best fit for your roles.',
    },
    {
      question: 'Can I integrate this with my existing ATS?',
      answer:
        'Yes, our solution seamlessly integrates with most Applicant Tracking Systems (ATS) to enhance your recruitment workflow.',
    },
    {
      question: 'Is there a demo available?',
      answer:
        'Absolutely! We offer a demo to showcase how our AI recruitment solution works and its benefits for your hiring process.',
    },
    {
      question: 'What industries does this solution cater to?',
      answer:
        'Our AI recruitment solution is versatile and can be tailored to various industries, including tech, healthcare, finance, and more.',
    },
  ],
};
