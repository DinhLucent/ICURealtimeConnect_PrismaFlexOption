'use client';

import React from 'react';
import type { LensId } from '@/types/landing';
import { architectureSection, architectureLensContent, lensOptions } from '@/content/landingContent';
import Reveal from '@/components/landing/ui/Reveal';
import SectionHeading from '@/components/landing/ui/SectionHeading';
import LensTabs from '@/components/landing/ui/LensTabs';
import AnnotationStack from '@/components/landing/ui/AnnotationStack';
import ArchitectureDiagram from '@/components/landing/diagrams/ArchitectureDiagram';

export default function ArchitectureSection() {
    const [activeLens, setActiveLens] = React.useState<LensId>('clinical');
    const activeLensLabel = lensOptions.find((l) => l.id === activeLens)?.label ?? 'Clinical';
    const lens = architectureLensContent[activeLens];

    return (
        <section id="architecture" className="section-shell section-shell-split architecture-shell">
            <Reveal className="section-copy">
                <SectionHeading
                    eyebrow={architectureSection.eyebrow}
                    title={architectureSection.title}
                    body={architectureSection.body}
                />
                <LensTabs activeLens={activeLens} onChange={setActiveLens} />
                <AnnotationStack summary={lens.summary} items={lens.notes} />
            </Reveal>

            <Reveal delay={0.12}>
                <ArchitectureDiagram lensLabel={activeLensLabel} />
            </Reveal>
        </section>
    );
}
