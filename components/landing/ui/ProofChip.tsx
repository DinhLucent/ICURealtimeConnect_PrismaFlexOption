export default function ProofChip({ value, label }: { value: string; label: string }) {
    return (
        <div className="hero-signal-card">
            <p className="hero-signal-value">{value}</p>
            <p className="hero-signal-label">{label}</p>
        </div>
    );
}
