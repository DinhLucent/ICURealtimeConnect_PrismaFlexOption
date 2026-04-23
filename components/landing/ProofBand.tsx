import { proofPillars } from '@/content/landingContent';
import Reveal from '@/components/landing/ui/Reveal';

export default function ProofBand() {
    return (
        <section className="proof-band">
            {proofPillars.map((pillar, index) => (
                <Reveal key={pillar.title} delay={index * 0.08} className="proof-item">
                    <p className="proof-title">{pillar.title}</p>
                    <p className="proof-body">{pillar.body}</p>
                </Reveal>
            ))}
        </section>
    );
}
