import Image from 'next/image';

export default function HeroVisual() {
    return (
        <div className="diagram-frame poster-frame">
            <Image
                src="/assets/hero-flagship-dashboard-prismaflex.png"
                alt="ICU-B Connect clinical monitoring dashboard"
                width={1800}
                height={1800}
                priority
                className="hero-dashboard-image"
                style={{ width: '100%', height: 'auto' }}
            />
        </div>
    );
}
