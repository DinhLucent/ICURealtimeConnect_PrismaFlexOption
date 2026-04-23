import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { finalCta } from '@/content/landingContent';
import Reveal from '@/components/landing/ui/Reveal';

export default function FinalCtaSection() {
    return (
        <section className="final-shell">
            <Reveal className="final-content">
                <div className="final-signature">
                    <Image
                        src="/assets/wordmark-icu-b-connect.svg"
                        alt="ICU-B Connect"
                        width={180}
                        height={45}
                    />
                </div>
                <h2 className="final-title">{finalCta.headline}</h2>
                <p className="final-body">{finalCta.body}</p>
                <div className="hero-actions final-actions">
                    <a href={finalCta.primaryCta.href} className="primary-button">
                        {finalCta.primaryCta.label}
                        <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                        href={finalCta.secondaryCta.href}
                        target="_blank"
                        rel="noreferrer"
                        className="secondary-button"
                    >
                        {finalCta.secondaryCta.label}
                    </a>
                </div>
            </Reveal>
        </section>
    );
}
