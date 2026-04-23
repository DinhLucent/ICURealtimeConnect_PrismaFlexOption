import HeroSection from '@/components/landing/HeroSection';
import ProofBand from '@/components/landing/ProofBand';
import WorkflowSection from '@/components/landing/WorkflowSection';
import ArchitectureSection from '@/components/landing/ArchitectureSection';
import GovernanceSection from '@/components/landing/GovernanceSection';
import FinalCtaSection from '@/components/landing/FinalCtaSection';
import FooterOwnership from '@/components/landing/FooterOwnership';

export default function LandingPage() {
  return (
    <main className="marketing-shell">
      <HeroSection />
      <ProofBand />
      <WorkflowSection />
      <ArchitectureSection />
      <GovernanceSection />
      <FinalCtaSection />
      <FooterOwnership />
    </main>
  );
}
