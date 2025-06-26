import { ThemeToggleBtn } from '@/components/theme-toggle-btn';
import Hero from './_components/hero';

import Partners from './_components/partners';
import Features from './_components/features';
import ATSIntegration from './_components/ats-integration';
import AIAgents from './_components/ai-agents';
import Process from './_components/process';
import Testimonals from './_components/testimonals';
import Pricing from './_components/pricing';
import Faq from './_components/faq';
import Footer from './_components/footer';
import Cta from './_components/cta';
import NavBar from './_components/navbar';
import WorkFlow from './_components/workflow';

export default function LandingPage() {
  return (
    <div className="dark:bg-clrWoodsmoke overflow-x-hidden bg-white">
      <NavBar className="h-[100px]" />
      <main className="max-sm:px-[3%]">
        <Hero />
        <Partners />
        <Features />
        <ATSIntegration />
        <WorkFlow />
        <AIAgents />
        <Process />
        <Testimonals />
        <Pricing />
        <Faq />
        <Cta />
        <Footer />
        <ThemeToggleBtn className="fixed bottom-10 left-10 z-[999]" />
      </main>
    </div>
  );
}
