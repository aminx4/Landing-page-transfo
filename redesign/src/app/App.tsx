import { HeroSection } from './components/HeroSection';
import { ChallengesSection } from './components/ChallengesSection';
import { ValuePropositionSection } from './components/ValuePropositionSection';
import { CredibilitySection } from './components/CredibilitySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ChallengesSection />
      <ValuePropositionSection />
      <CredibilitySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
