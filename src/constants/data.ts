import { IAgent, IFaq, IFeature, IPricingItem, ITestimonal } from '@/types';

export const agentsData: IAgent[] = [
  {
    id: '1',
    img: '/assets/img/character-1.png',
    name: 'Ben',
    country: 'Melbourne, Australia',
    music: '/assets/audio/ben-agent.mp3',
    description:
      "Hi, I'm Ben from Melbourne, Australia. With years of experience in tech and communication, I'm here to guide you through the process and make sure you get the most out of our platform. Let’s make something great together.",
  },
  {
    id: '2',
    img: '/assets/img/character-2.png',
    name: 'Maria',
    country: 'London, United Kingdom',
    music: '/assets/audio/maria-agent.mp3',
    description:
      "Hello there! I'm Maria, based in London. I love helping individuals grow and succeed. Whether you're just starting out or looking to take the next step in your career, I'm here to provide guidance and support tailored just for you.",
  },
  {
    id: '3',
    img: '/assets/img/character-3.png',
    name: 'Peter',
    country: 'Barcelona, Spain',
    music: '/assets/audio/peter-agent.mp3',
    description:
      'Hola! I’m Peter from the beautiful city of Barcelona, Spain. I specialize in helping candidates unlock their full potential. My goal is to ensure your talents are matched with the right opportunities, and that you feel empowered every step of the way.',
  },
  {
    id: '4',
    img: '/assets/img/character-4.png',
    name: 'Jazmin',
    country: 'Paris, France',
    music: '/assets/audio/jazmin-agent.mp3',
    description:
      "Bonjour! I'm Jazmin from Paris, France. I'm passionate about connecting people with the right opportunities. I'm here to walk you through every step and make sure you feel confident and supported throughout your journey.",
  },
];

export const testimonalsData: ITestimonal[] = [
  {
    name: 'Emily Johnson',
    text: "Our hiring process has transformed since we started using this AI solution. We've reduced our time-to-hire by 50% and found candidates who fit our culture perfectly!",
    company: 'Tech Innovators Inc.',
  },
  {
    name: 'Emily Johnson',
    text: "Our hiring process has transformed since we started using this AI solution. We've reduced our time-to-hire by 50% and found candidates who fit our culture perfectly!",
    company: 'Tech Innovators Inc.',
  },
  {
    name: 'Emily Johnson',
    text: "Our hiring process has transformed since we started using this AI solution. We've reduced our time-to-hire by 50% and found candidates who fit our culture perfectly!",
    company: 'Tech Innovators Inc.',
  },
];

export const pricingData: IPricingItem[] = [
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

export const faqData: IFaq[] = [
  {
    question: 'What is Creva?',
    answer:
      'Creva is a hiring transformation service that helps companies streamline their recruitment process, ensuring they find the right talent efficiently and effectively.',
  },
  {
    question: 'How does Creva improve the hiring process?',
    answer:
      'Creva utilizes advanced technology and data-driven strategies to enhance candidate sourcing, screening, and selection, reducing time-to-hire and improving candidate quality.',
  },
  {
    question: "Who can benefit from Creva's services?",
    answer:
      'Creva is designed for companies of all sizes looking to optimize their hiring processes, from startups to large enterprises.',
  },
  {
    question: 'What industries does Creva serve?',
    answer:
      'Creva serves a wide range of industries, including technology, healthcare, finance, and more, adapting its solutions to meet specific industry needs.',
  },
  {
    question: 'How can I get started with Creva?',
    answer:
      'Getting started with Creva is easy! Simply visit our website, sign up for a consultation, and our team will guide you through the process of transforming your hiring strategy.',
  },
];

export const featuresData: IFeature[] = [
  {
    img: '/assets/svg/phone-sc-icon.svg',
    title: 'AI-Powered Phone Screening',
    description:
      'Automate initial candidate evaluations with AI-powered phone screenings, delivering consistent assessments and saving time in the hiring process.',
    detailData: [
      {
        title: 'Consistent Evaluation Criteria',
        text: 'Ensure every candidate is assessed using the same AI-driven script, eliminating human bias and increasing fairness.',
      },
      {
        title: 'Time-Saving Automation',
        text: 'Replace manual phone interviews with automated calls, freeing up recruiters for higher-value tasks.',
      },
      {
        title: 'Smart Response Analysis',
        text: 'AI analyzes candidate responses in real-time, scoring tone, confidence, and content relevance.',
      },
    ],
  },
  {
    img: '/assets/svg/prompts-icon.svg',
    title: 'Custom Prompts',
    description:
      'Create tailored prompts for interviews and assessments, enabling focused evaluations that align with your specific hiring criteria and company culture.',
    detailData: [
      {
        title: 'Role-Specific Questions',
        text: 'Customize interview questions to evaluate the specific skills and experience needed for each role.',
      },
      {
        title: 'Cultural Fit Assessments',
        text: 'Craft prompts that reflect your company’s values and working style to assess cultural compatibility.',
      },
      {
        title: 'Flexible Prompt Library',
        text: 'Build and reuse a library of prompts tailored for different positions, seniority levels, and departments.',
      },
    ],
  },
  {
    img: '/assets/svg/ai-agents-icon.svg',
    title: 'Industry-specific AI agents',
    description:
      'Leverage tailored AI agents designed for specific industries, providing targeted insights and recommendations to optimize your recruitment process.',
    detailData: [
      {
        title: 'Tailored Intelligence',
        text: 'AI agents trained on industry-specific data ensure better alignment with domain-specific roles and jargon.',
      },
      {
        title: 'Role-Relevant Insights',
        text: 'Receive smart suggestions on candidate suitability based on industry trends and benchmarks.',
      },
      {
        title: 'Compliance and Standards',
        text: 'Ensure interviews and assessments comply with sector-specific regulations and standards.',
      },
    ],
  },
  {
    img: '/assets/svg/resume-screening-icon.svg',
    title: 'Resume screening',
    description:
      'Utilize AI-driven resume screening to quickly identify top candidates by analyzing qualifications, experience, and skills against job requirements.',
    detailData: [
      {
        title: 'Keyword Matching',
        text: 'Automatically detect keywords and qualifications from resumes that align with job descriptions.',
      },
      {
        title: 'Skill-Based Scoring',
        text: 'Assign intelligent scores based on experience, education, and skills relevance to the position.',
      },
      {
        title: 'Bias-Free Filtering',
        text: 'Reduce unconscious bias with neutral, criteria-based candidate filtering.',
      },
    ],
  },
  {
    img: '/assets/svg/work-flow-icon.svg',
    title: 'Create A Work Flow',
    description:
      'Our AI assists you in designing a personalized workflow, enabling automated decision-making based on candidate screening results.',
    detailData: [
      {
        title: 'Drag-and-Drop Workflow Builder',
        text: 'Easily create recruitment flows with AI-powered components for screening, scoring, and decision-making.',
      },
      {
        title: 'Custom Decision Paths',
        text: 'Set logic rules to automatically advance or reject candidates based on performance or screening data.',
      },
      {
        title: 'Integrated Feedback Loops',
        text: 'Allow hiring managers to inject feedback that refines future automation logic.',
      },
    ],
  },
  {
    img: '/assets/svg/ats-icon.svg',
    title: 'Integration With CRM/ATS',
    description:
      'Seamlessly connect with your existing CRM or Applicant Tracking System (ATS) to streamline candidate management and enhance data flow across platforms.',
    detailData: [
      {
        title: 'Real-Time Data Sync',
        text: 'Automatically push candidate data and updates between your ATS and the AI system without manual entry.',
      },
      {
        title: 'Two-Way Communication',
        text: 'Send and receive status updates, notes, and interview results directly in your ATS or CRM.',
      },
      {
        title: 'API-Based Flexibility',
        text: 'Flexible integrations with major platforms like Greenhouse, Lever, and Salesforce ensure smooth workflows.',
      },
    ],
  },
];
