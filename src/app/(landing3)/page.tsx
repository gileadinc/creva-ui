import { ThemeToggleBtn } from '@/components/theme-toggle-btn';
import AtsIntegration from './_components/ats-integration';
import Faq from './_components/faq';
import Footer from './_components/footer';
import Hero from './_components/hero';
import Industry from './_components/industry';
import Navbar from './_components/navbar';
import Partners from './_components/partners';
import PostJob from './_components/post-job';
import Pricing from './_components/pricing';
import Ranking from './_components/ranking';
import Testimonals from './_components/testimonals';
import Review from './_components/review';
import AIAgents from './_components/ai-agents';
import TryLive from './_components/try-live';
import Cta from './_components/cta';

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar className="h-[80px]" />
      <Hero className="mt-[80px]" />
      <Partners />
      <Industry />
      <PostJob />
      <Review />
      <TryLive />
      <AtsIntegration />
      <Ranking />
      <AIAgents />
      <Testimonals />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
      <ThemeToggleBtn className="fixed right-10 bottom-10 z-[999]" />
    </div>
  );
}
