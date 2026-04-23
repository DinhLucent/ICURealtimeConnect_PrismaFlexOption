export default function ArchitectureDiagram({ lensLabel }: { lensLabel: string }) {
    return (
        <div className="diagram-frame architecture-frame flagship-diagram">
            <div className="diagram-label-row">
                <span className="diagram-tag">Real-time Architecture</span>
                <span className="diagram-meta">{lensLabel} context active</span>
            </div>
            <svg
                viewBox="0 0 1000 480"
                className="diagram-svg"
                aria-label="System architecture overview"
            >
                {/* Layer: Ingestion */}
                <rect x="50" y="60" width="200" height="100" rx="12" className="diagram-node" />
                <rect x="300" y="60" width="200" height="100" rx="12" className="diagram-node" />

                {/* Layer: Clinical */}
                <rect x="550" y="60" width="200" height="100" rx="12" className="diagram-node diagram-node-focus" />
                <rect x="800" y="60" width="150" height="100" rx="12" className="diagram-node" />

                {/* Layer: Persistence */}
                <rect x="550" y="300" width="200" height="100" rx="12" className="diagram-node" />
                <rect x="800" y="300" width="150" height="100" rx="12" className="diagram-node" />

                {/* Logic Paths */}
                <path d="M250 110 H300" className="diagram-link" />
                <path d="M500 110 H550" className="diagram-link diagram-link-accent" />
                <path d="M750 110 H800" className="diagram-link" />
                <path d="M650 160 V300" className="diagram-link diagram-link-soft" />
                <path d="M750 350 H800" className="diagram-link diagram-link-soft" />

                <text x="75" y="95" className="diagram-title">Collection</text>
                <text x="75" y="118" className="diagram-copy">PrismaFlex Signal</text>

                <text x="325" y="95" className="diagram-title">Processing</text>
                <text x="325" y="118" className="diagram-copy">Normalization</text>

                <text x="575" y="95" className="diagram-title">Workspace</text>
                <text x="575" y="118" className="diagram-copy">Clinical Review</text>

                <text x="820" y="95" className="diagram-title">Consumer</text>
                <text x="820" y="118" className="diagram-copy">Dashboards</text>

                <text x="575" y="335" className="diagram-title">Audit Ledger</text>
                <text x="575" y="358" className="diagram-copy">Durable State</text>

                <text x="820" y="335" className="diagram-title">EMR Bridge</text>
                <text x="820" y="358" className="diagram-copy">Handoff</text>
            </svg>
        </div>
    );
}
