import type { LensId } from '@/types/landing';
import { lensOptions } from '@/content/landingContent';

export default function LensTabs({
    activeLens,
    onChange,
}: {
    activeLens: LensId;
    onChange: (nextLens: LensId) => void;
}) {
    return (
        <div className="lens-switcher">
            <p className="lens-label">Audience Lens</p>
            <div className="lens-tabs" role="tablist" aria-label="Audience lens">
                {lensOptions.map((lens) => (
                    <button
                        key={lens.id}
                        type="button"
                        role="tab"
                        aria-selected={activeLens === lens.id}
                        className={activeLens === lens.id ? 'lens-tab lens-tab-active' : 'lens-tab'}
                        onClick={() => onChange(lens.id)}
                    >
                        {lens.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
