import { workflowStages } from '@/content/landingContent';

export default function WorkflowDiagram({ lensLabel }: { lensLabel: string }) {
    return (
        <div className="diagram-frame workflow-frame">
            <div className="diagram-label-row">
                <span className="diagram-tag">Sequence</span>
                <span className="diagram-meta">{lensLabel} lens active</span>
            </div>
            <svg
                viewBox="0 0 980 320"
                className="diagram-svg"
                aria-label="Clinical workflow sequence"
            >
                <line x1="72" y1="132" x2="908" y2="132" className="diagram-link diagram-link-accent" />
                {workflowStages.map((stage, index) => {
                    const x = 92 + index * 204;
                    const highlight = index === 2 || index === 3;

                    return (
                        <g key={stage.step}>
                            <circle
                                cx={x}
                                cy={132}
                                r={14}
                                className={highlight ? 'diagram-step-dot diagram-step-dot-focus' : 'diagram-step-dot'}
                            />
                            <line x1={x} y1="146" x2={x} y2="246" className="diagram-link diagram-link-soft" />
                            <rect
                                x={x - 62}
                                y="30"
                                width="124"
                                height="58"
                                rx="10"
                                className={highlight ? 'diagram-node diagram-node-focus' : 'diagram-node'}
                            />
                            <rect
                                x={x - 84}
                                y="176"
                                width="168"
                                height="84"
                                rx="10"
                                className="diagram-node diagram-note"
                            />
                            <text x={x - 44} y="54" className="diagram-step-label">
                                {stage.step}
                            </text>
                            <text x={x - 44} y="74" className="diagram-title">
                                {stage.name}
                            </text>
                            <text x={x - 66} y="208" className="diagram-copy">
                                {stage.detail.map((line, lineIndex) => (
                                    <tspan key={line} x={x - 66} dy={lineIndex === 0 ? 0 : 16}>
                                        {line}
                                    </tspan>
                                ))}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}
