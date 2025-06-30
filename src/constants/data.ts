type ISection = {
  subtitle: string;
  subIcon: string;
  title: string;
  description: string;
};

export type IIndustryAIAgents = ISection & {};
export const IndustryAiAgentsData: IIndustryAIAgents = {
  subIcon: 'industry-icon',
  subtitle: 'Every Industry',
  title: 'Industry-Specific AI Agents Designed for You',
  description:
    'Discover how our AI technology streamlines candidate sourcing, enhances matching accuracy, and automates tasks, making hiring easier and more efficient for your team.',
};
export type IPostJob = ISection & {};
export const PostJobData: IPostJob = {
  subIcon: 'post-job-icon',
  subtitle: 'Post Job',
  title:
    'Simplify Your Hiring Process with Our AI-Powered Job Posting Solution',
  description:
    'Discover how our AI technology streamlines candidate sourcing, enhances matching accuracy, and automates tasks, making hiring easier and more efficient for your team.',
};

export type IReview = ISection & {};
export const ReviewData: IReview = {
  subIcon: 'review-icon',
  subtitle: 'Review',
  title: 'Review Resumes in Seconds with AI-Enhanced Evaluation',
  description: '',
};

export type ITryLive = ISection & {};
export const TryLiveData: ITryLive = {
  subIcon: 'live-icon',
  subtitle: 'Live',
  title: 'Try The Live AI Voice Interaction Demo',
  description: '',
};

export type IAtsIntegration = ISection & {};
export const AtsIntegrationData: IAtsIntegration = {
  subIcon: 'ats-icon',
  subtitle: 'ATS Integration',
  title: 'Industry-Specific AI Agents Designed for You',
  description:
    'Discover how our AI technology streamlines candidate sourcing, enhances matching accuracy, and automates tasks, making hiring easier and more efficient for your team.',
};
export type IRanking = ISection & {};
export const RankingData: IRanking = {
  subIcon: 'ranking-icon',
  subtitle: 'Ranking',
  title: 'Optimize Your Hiring with AI-Driven Candidate Ranking',
  description:
    'Transform your hiring process with our AI-powered Candidate Ranking service. Our advanced algorithms analyze candidate profiles, skills, and experiences to provide you with a prioritized list of the best-fit candidates for your positions.',
};

export type IAgent = {
  id: string;
  name: string;
  country: string;
  music: string;
  img: string;
  description: string;
};

export type IAIAgents = ISection & {
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
export const AIAgentsData: IAIAgents = {
  subIcon: 'ai-agents-icon',
  subtitle: 'Agents',
  title: 'Our AI Hiring Agents Your Company’s Trusted HR Team',
  description:
    ' Leverage our AI Hiring Agents to enhance your recruitment process. Our intelligent algorithms assess candidates  skills and experiences, delivering a prioritized list of top talent. ',
  agents: agentsData,
};

export type ITestimonials = ISection & {};
export const TestimonialsData: ITestimonials = {
  subIcon: 'testimonial-icon',
  subtitle: 'Testimonials',
  title: 'Testimonials from Clients Who Transformed Their Hiring',
  description:
    'See how our AI solutions have reshaped recruitment experiences for businesses like yours.',
};

export type IPricing = ISection & {};
export const PricingData: IPricing = {
  subIcon: 'pricing-icon',
  subtitle: 'Pricing',
  title: 'Pricing Plan for Your Recruitment Solutions',
  description:
    'Discover our flexible pricing options tailored to meet your hiring needs and budget.',
};

export type IFaqItem = {
  question: string;
  answer: string;
};
export type IFaq = ISection & {
  items: IFaqItem[];
};
export const FaqData: IFaq = {
  subIcon: 'faq-icon',
  subtitle: 'FAQ',
  title: 'Frequently Asked Questions About Creva',
  description:
    'Have questions about our hiring transformation services? This section answers common inquiries to help you understand how our solutions can enhance your recruitment process for a successful hiring journey.',
  items: [
    {
      question: 'How does the Pay Per Candidate option work?',
      answer:
        "The Pay Per Candidate option allows you to pay only for the candidates you receive. You'll be charged a fee for each candidate who matches your job description and is sent to you, providing flexibility and budget control.",
    },
    {
      question: 'What does the Subscription Plan include?',
      answer:
        'The Subscription Plan offers unlimited access to candidates for a fixed monthly fee. This plan is ideal for companies with ongoing hiring needs, allowing you to post multiple jobs and receive as many candidates as you need without additional costs.',
    },
    {
      question: 'How do I create a job posting?',
      answer:
        'To create a job posting, simply fill out the user-friendly form on our platform. Include details about the position, required skills, and company information. Our AI will help generate a compelling job description.',
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer:
        'Yes, you can cancel your subscription at any time. Simply go to your account settings and follow the cancellation process. You will continue to have access until the end of your billing cycle.',
    },
    {
      question: 'How do I ensure I receive quality candidates?',
      answer:
        'To attract quality candidates, provide detailed job descriptions and clearly outline your requirements. Our platform also uses AI to match candidates based on their skills and experience to your specific needs.',
    },
    {
      question: 'What support do you offer to clients?',
      answer:
        'We offer dedicated customer support through chat, email, and phone. Our team is available to assist you with any questions, technical issues, or guidance you may need throughout the hiring process.',
    },
  ],
};
