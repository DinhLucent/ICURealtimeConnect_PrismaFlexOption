import Image from 'next/image';
import { governanceSection, governanceNotes, footerNote } from '@/content/landingContent';
import Reveal from '@/components/landing/ui/Reveal';
import SectionHeading from '@/components/landing/ui/SectionHeading';
import AnnotationStack from '@/components/landing/ui/AnnotationStack';

export default function GovernanceSection() {
    return (
        <section id="governance" className="section-shell section-shell-split governance-shell">
            <Reveal className="section-copy">
                <SectionHeading
                    eyebrow={governanceSection.eyebrow}
                    title={governanceSection.title}
                    body={governanceSection.body}
                />
                <AnnotationStack items={governanceNotes} />
            </Reveal>

            <Reveal delay={0.12} className="governance-visual">
                <div className="diagram-frame">
                    <div className="diagram-label-row">
                        <span className="diagram-tag">Operational Audit Flow</span>
                        <span className="diagram-meta">State & Record Integrity</span>
                    </div>
                    <Image
                        src="/assets/diagram-audit-flow.svg"
                        alt="Clinical Audit Flow"
                        width={800}
                        height={360}
                        className="diagram-svg"
                    />
                </div>

                <p className="hero-note" style={{ marginTop: '2.5rem' }}>
                    {footerNote}
                </p>
            </Reveal>
        </section>
    );
}
