import { ModeToggle } from '@/components/toggle-theme-icon';
import CharacterCreation from './_components/characters-creation';
import Cta from './_components/cta';
import Faq from './_components/faq';
import Features from './_components/features';
import Footer from './_components/footer';
import Hero from './_components/hero';
import HowItWorks from './_components/how-it-works';
import LiveDemo from './_components/live-demo';
import Navbar from './_components/navbar';
import Partners from './_components/partners';
import Pricing from './_components/pricing';
import Testimonals from './_components/testimonals';
import VoiceAgentDemo from './_components/voice-agent-demo';

export default function LandingPage() {
  return (
    <div className="dark:bg-clrBlackPearl size-full bg-white">
      <ModeToggle className="fixed right-10 bottom-20 z-90" />
      <Navbar />
      <Hero />
      <CharacterCreation />
      <Partners />
      <Features />
      <LiveDemo />
      <Pricing />
      <Testimonals />
      <VoiceAgentDemo />
      <HowItWorks />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
