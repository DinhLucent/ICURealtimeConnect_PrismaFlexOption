'use client';

import React from 'react';
import type { LensId } from '@/types/landing';
import { workflowSection, workflowLensContent, lensOptions } from '@/content/landingContent';
import Reveal from '@/components/landing/ui/Reveal';
import SectionHeading from '@/components/landing/ui/SectionHeading';
import LensTabs from '@/components/landing/ui/LensTabs';
import AnnotationStack from '@/components/landing/ui/AnnotationStack';
import WorkflowDiagram from '@/components/landing/diagrams/WorkflowDiagram';

export default function WorkflowSection() {
    const [activeLens, setActiveLens] = React.useState<LensId>('clinical');
    const activeLensLabel = lensOptions.find((l) => l.id === activeLens)?.label ?? 'Clinical';
    const lens = workflowLensContent[activeLens];

    return (
        <section id="workflow" className="section-shell section-shell-split">
            <Reveal className="section-copy">
                <SectionHeading
                    eyebrow={workflowSection.eyebrow}
                    title={workflowSection.title}
                    body={workflowSection.body}
                />
                <LensTabs activeLens={activeLens} onChange={setActiveLens} />
                <AnnotationStack summary={lens.summary} items={lens.notes} />
            </Reveal>

            <Reveal delay={0.12}>
                <WorkflowDiagram lensLabel={activeLensLabel} />
            </Reveal>
        </section>
    );
}
