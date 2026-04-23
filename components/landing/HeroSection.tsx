import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { hero, heroChips, repoUrl } from '@/content/landingContent';
import Reveal from '@/components/landing/ui/Reveal';
import ProofChip from '@/components/landing/ui/ProofChip';
import HeroVisual from '@/components/landing/visuals/HeroVisual';

export default function HeroSection() {
    return (
        <>
            <header className="site-nav">
                <div className="brand-lockup">
                    <Image
                        src="/assets/wordmark-icu-b-connect.svg"
                        alt="ICU-B Connect"
                        width={180}
                        height={45}
                        priority
                    />
                </div>

                <nav className="nav-links" aria-label="Primary">
                    <a href="#workflow">Workflow</a>
                    <a href="#architecture">Architecture</a>
                    <a href="#governance">Governance</a>
                </nav>

                <a href={repoUrl} target="_blank" rel="noreferrer" className="nav-cta">
                    Repository
                </a>
            </header>

            <section className="hero-shell">
                <Reveal className="hero-copy">
                    <div className="hero-copy-inner">
                        <p className="eyebrow">{hero.eyebrow}</p>
                        <h1 className="hero-title">{hero.headline}</h1>
                        <p className="hero-body">{hero.body}</p>

                        <div className="hero-actions">
                            <a href={hero.primaryCta.href} className="primary-button">
                                {hero.primaryCta.label}
                                <ArrowRight className="h-4 w-4" />
                            </a>
                            <a href={hero.secondaryCta.href} className="secondary-button">
                                {hero.secondaryCta.label}
                            </a>
                        </div>

                        <div className="hero-signal-grid">
                            {heroChips.map((chip) => (
                                <ProofChip key={chip.label} value={chip.value} label={chip.label} />
                            ))}
                        </div>
                    </div>
                </Reveal>

                <Reveal className="hero-visual" delay={0.12}>
                    <HeroVisual />
                </Reveal>
            </section>
        </>
    );
}
