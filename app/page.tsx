'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  ArrowRight,
  FileCheck2,
  HeartPulse,
  Layers3,
  Network,
  ScanLine,
  ShieldCheck,
  Stethoscope,
  Workflow,
} from 'lucide-react';

type LensId = 'clinical' | 'it' | 'management';

type AnnotationItem = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const repoUrl =
  process.env.NEXT_PUBLIC_REPO_URL ||
  'https://github.com/DinhLucent/PrismaFlex-Monitor-MaxWireLess';

const lensOptions: { id: LensId; label: string }[] = [
  { id: 'clinical', label: 'Clinical' },
  { id: 'it', label: 'IT' },
  { id: 'management', label: 'Management' },
];

const heroSignals = [
  { value: '<3s', label: 'Target latency' },
  { value: '24/7', label: 'Monitoring model' },
  { value: '4-level', label: 'Alert design' },
  { value: 'Audit-ready', label: 'Workflow trace' },
];

const audienceCards = [
  {
    icon: Stethoscope,
    title: 'Clinicians',
    text: 'Review device state, clinical context, and the exact step that still requires action.',
    points: ['Trend-first visibility', 'Alert context before escalation', 'Signed workflow trace'],
  },
  {
    icon: HeartPulse,
    title: 'Health Operations',
    text: 'Turn ad-hoc CRRT monitoring into a repeatable operating surface for rounds, handoff, and review.',
    points: ['Consistent treatment story', 'Clear accountability path', 'Shift-ready documentation'],
  },
  {
    icon: Network,
    title: 'IT And Integration Teams',
    text: 'Understand interfaces, boundaries, and extension points without exposing internal deployment details.',
    points: ['Connector-ready architecture', 'Layered system narrative', 'Public-safe technical framing'],
  },
];

const proofPillars = [
  {
    title: 'Clinical Readability',
    body: 'Make the status of a treatment legible in seconds instead of burying context in scattered screens.',
  },
  {
    title: 'Workflow Traceability',
    body: 'Show what happened, who reviewed it, and where a decision entered the clinical record.',
  },
  {
    title: 'Integration Readiness',
    body: 'Frame the platform as a clean sequence of collection, normalization, orchestration, and consumption.',
  },
  {
    title: 'Public-Safe Storytelling',
    body: 'Use synthetic diagrams and product language only: no patient data, no internal endpoints, no hidden operations.',
  },
];

const valueStages = [
  { label: 'Raw Telemetry', sub: 'Machine signals enter the system.', width: 620, focus: false },
  { label: 'Trend Recognition', sub: 'Patterns become legible and comparable.', width: 540, focus: false },
  { label: 'Alert Awareness', sub: 'Potential issues receive severity and timing.', width: 460, focus: true },
  { label: 'Clinical Review', sub: 'Staff review context and decide what comes next.', width: 360, focus: false },
  { label: 'Documented Decision', sub: 'The response becomes part of a durable record.', width: 270, focus: false },
];

const whyNotes: AnnotationItem[] = [
  {
    icon: Activity,
    title: 'Earlier signal recognition',
    body: 'The system reframes raw telemetry into a visible operating story instead of disconnected machine values.',
  },
  {
    icon: Workflow,
    title: 'Workflow continuity',
    body: 'The alert path leads into review and documentation rather than ending at notification alone.',
  },
  {
    icon: FileCheck2,
    title: 'Documented action',
    body: 'Clinical decisions remain connected to the event that triggered them, which improves trust and reviewability.',
  },
];

const workflowStages = [
  {
    step: '01',
    name: 'Device Stream',
    detail: ['Structured telemetry', 'enters the flow.'],
  },
  {
    step: '02',
    name: 'Context Review',
    detail: ['Status is paired with', 'clinical context.'],
  },
  {
    step: '03',
    name: 'Alert Framing',
    detail: ['Potential issues surface', 'with severity and timing.'],
  },
  {
    step: '04',
    name: 'Clinical Decision',
    detail: ['A clinician reviews', 'and escalates if needed.'],
  },
  {
    step: '05',
    name: 'Signed Record',
    detail: ['The action lands in', 'an auditable record.'],
  },
];

const workflowLensContent: Record<LensId, { summary: string; notes: AnnotationItem[] }> = {
  clinical: {
    summary: 'Clinical lens: emphasize early warning, shared context, and a review step that is easy to follow in a live ICU workflow.',
    notes: [
      {
        icon: HeartPulse,
        title: 'Early warning visibility',
        body: 'Trend and alert state should appear before a clinician has to reconstruct what changed from raw device output.',
      },
      {
        icon: ShieldCheck,
        title: 'Explicit review ownership',
        body: 'The workflow makes it clear when an event has been seen, reviewed, and either resolved or escalated.',
      },
      {
        icon: FileCheck2,
        title: 'Treatment continuity',
        body: 'The response becomes part of the treatment narrative so handoff and retrospective review stay aligned.',
      },
    ],
  },
  it: {
    summary: 'IT lens: show a clean event pipeline where machine signal, application state, and durable records remain distinct but connected.',
    notes: [
      {
        icon: ScanLine,
        title: 'Event normalization',
        body: 'The monitoring path separates raw ingestion from the application-level state clinicians actually need to consume.',
      },
      {
        icon: Workflow,
        title: 'Deterministic state flow',
        body: 'Alerts move through a review sequence that can be reasoned about, logged, and extended without rewriting the whole surface.',
      },
      {
        icon: Network,
        title: 'Durable handoff point',
        body: 'The signed record becomes the reliable point for downstream systems, analytics, or governance review.',
      },
    ],
  },
  management: {
    summary: 'Management lens: focus on response continuity, operational accountability, and confidence that the workflow can scale without becoming ambiguous.',
    notes: [
      {
        icon: Activity,
        title: 'Clear escalation path',
        body: 'The sequence shows where a case becomes attention-worthy and how the system supports a timely human response.',
      },
      {
        icon: ShieldCheck,
        title: 'Governance checkpoint',
        body: 'Review and approval are visible as part of the workflow rather than hidden in a separate operational layer.',
      },
      {
        icon: Layers3,
        title: 'Repeatable operating model',
        body: 'Because the sequence is explicit, it can be trained, audited, and reused across shifts or future units.',
      },
    ],
  },
};

const architectureLensContent: Record<LensId, { summary: string; notes: AnnotationItem[] }> = {
  clinical: {
    summary: 'Clinical lens: architecture matters because it determines whether the monitoring surface remains readable, stable, and clinically relevant.',
    notes: [
      {
        icon: Activity,
        title: 'Readable clinical surface',
        body: 'The workspace is downstream of normalization so clinicians see context-rich status instead of machine-native noise.',
      },
      {
        icon: FileCheck2,
        title: 'Audit continuity',
        body: 'The audit layer is treated as a core system concern, which keeps treatment review and record integrity aligned.',
      },
      {
        icon: ShieldCheck,
        title: 'Safe abstraction boundary',
        body: 'The diagram communicates operational logic without exposing deployment details that do not belong in a public-facing narrative.',
      },
    ],
  },
  it: {
    summary: 'IT lens: the architecture is organized as collection, normalization, workspace, audit, and connector layers so integration points remain legible.',
    notes: [
      {
        icon: ScanLine,
        title: 'Collection edge',
        body: 'Device-specific handling stays near ingestion, which protects the rest of the stack from protocol complexity.',
      },
      {
        icon: Layers3,
        title: 'Layer separation',
        body: 'Realtime application concerns, durable review state, and external connectors are shown as related but not collapsed into one box.',
      },
      {
        icon: Network,
        title: 'Connector posture',
        body: 'External systems appear as extension points, which makes the platform story credible without overclaiming implementation detail.',
      },
    ],
  },
  management: {
    summary: 'Management lens: the architecture should read as a governable system, not merely a collection of technologies.',
    notes: [
      {
        icon: ShieldCheck,
        title: 'Controlled operating surface',
        body: 'The workspace is framed as a layer with clear inputs and outputs, which supports accountability and scale planning.',
      },
      {
        icon: Activity,
        title: 'Operational continuity',
        body: 'Audit and connector layers show how the system supports supervision, review, and future organizational requirements.',
      },
      {
        icon: Layers3,
        title: 'Expansion readiness',
        body: 'The layered diagram communicates a platform foundation that can grow without redefining the product story each time.',
      },
    ],
  },
};

const governanceNotes: AnnotationItem[] = [
  {
    icon: ShieldCheck,
    title: 'Alarm traceability',
    body: 'Severity, timing, acknowledgement, and action remain part of the same visible event story.',
  },
  {
    icon: Workflow,
    title: 'Role-based review',
    body: 'The workflow keeps handoff and approval explicit, which supports structured clinical operations rather than informal workarounds.',
  },
  {
    icon: FileCheck2,
    title: 'Disconnect awareness',
    body: 'Continuity matters as much as speed: the system makes monitoring gaps legible instead of silently losing operational context.',
  },
];

const governanceBlocks = [
  {
    title: 'Alarm traceability',
    body: 'Critical events remain linked to acknowledgement and follow-up action.',
  },
  {
    title: 'Review boundary',
    body: 'Roles and approval steps stay visible instead of dissolving into ad-hoc process.',
  },
  {
    title: 'Continuity awareness',
    body: 'The operating story accounts for disconnection and monitoring gaps, not only success paths.',
  },
  {
    title: 'Treatment history',
    body: 'The durable record supports retrospective review, training, and governance checks.',
  },
];

const rolloutStages = [
  {
    phase: 'Phase 1',
    title: 'Single-unit deployment',
    detail: ['Establish the core monitoring', 'surface in one ICU environment.'],
  },
  {
    phase: 'Phase 2',
    title: 'Multi-device monitoring',
    detail: ['Expand the same operating story', 'across more treatment contexts.'],
  },
  {
    phase: 'Phase 3',
    title: 'Connector expansion',
    detail: ['Expose structured outputs for', 'external systems or analytics.'],
  },
  {
    phase: 'Phase 4',
    title: 'Platform foundation',
    detail: ['Support future device classes', 'without rewriting the narrative.'],
  },
];

const rolloutSignals = [
  'Single-unit rollout first',
  'Multi-device expansion next',
  'Connector-ready integration path',
  'Future device classes supported by the same model',
];

const releaseRules = [
  'Synthetic visual examples only',
  'No hospital identifiers or patient information',
  'No operational scripts, secrets, or private endpoints',
  'Architecture and workflow shown at product level',
];

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-body">{body}</p>
    </div>
  );
}

function AnnotationStack({
  summary,
  items,
}: {
  summary?: string;
  items: AnnotationItem[];
}) {
  return (
    <div>
      {summary ? <p className="lens-summary">{summary}</p> : null}
      <div className="annotation-stack">
        {items.map((item) => (
          <div key={item.title} className="annotation-item">
            <item.icon className="h-4 w-4" />
            <div>
              <p className="annotation-title">{item.title}</p>
              <p className="annotation-body">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LensTabs({
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

function HeroDiagram() {
  return (
    <div className="diagram-frame poster-frame">
      <div className="diagram-label-row">
        <span className="diagram-tag">Poster Diagram</span>
        <span className="diagram-meta">Clinical + technical narrative</span>
      </div>
      <svg
        viewBox="0 0 720 420"
        className="diagram-svg"
        aria-label="Clinical telemetry platform overview"
      >
        <defs>
          <linearGradient id="accentFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(15,159,152,0.10)" />
            <stop offset="50%" stopColor="rgba(15,159,152,0.42)" />
            <stop offset="100%" stopColor="rgba(15,159,152,0.10)" />
          </linearGradient>
        </defs>

        <rect x="36" y="44" width="160" height="92" rx="10" className="diagram-node" />
        <rect x="276" y="44" width="170" height="92" rx="10" className="diagram-node" />
        <rect x="526" y="32" width="158" height="104" rx="10" className="diagram-node diagram-node-focus" />
        <rect x="526" y="206" width="158" height="104" rx="10" className="diagram-node" />
        <rect x="276" y="246" width="170" height="92" rx="10" className="diagram-node" />
        <rect x="36" y="246" width="160" height="92" rx="10" className="diagram-node" />

        <path d="M196 90 H276" className="diagram-link" />
        <path d="M446 90 H526" className="diagram-link diagram-link-accent" />
        <path d="M606 136 V206" className="diagram-link" />
        <path d="M526 258 H446" className="diagram-link" />
        <path d="M276 292 H196" className="diagram-link" />
        <path d="M116 246 V136" className="diagram-link diagram-link-soft" />
        <path d="M446 292 H526" className="diagram-link diagram-link-soft" />

        <rect x="212" y="82" width="54" height="16" rx="8" fill="url(#accentFlow)" />
        <rect x="462" y="82" width="48" height="16" rx="8" fill="url(#accentFlow)" />

        <text x="56" y="72" className="diagram-title">Device Interface</text>
        <text x="56" y="96" className="diagram-copy">Telemetry ingress</text>
        <text x="56" y="114" className="diagram-copy">PrismaFlex-ready stream</text>

        <text x="296" y="72" className="diagram-title">Normalization Layer</text>
        <text x="296" y="96" className="diagram-copy">Context shaping</text>
        <text x="296" y="114" className="diagram-copy">Signal, timing, severity</text>

        <text x="546" y="64" className="diagram-title">Clinical Workspace</text>
        <text x="546" y="88" className="diagram-copy">Trend review</text>
        <text x="546" y="106" className="diagram-copy">Alert framing</text>
        <text x="546" y="124" className="diagram-copy">Decision support surface</text>

        <text x="546" y="238" className="diagram-title">Audit Story</text>
        <text x="546" y="262" className="diagram-copy">Acknowledgement</text>
        <text x="546" y="280" className="diagram-copy">Approval state</text>
        <text x="546" y="298" className="diagram-copy">Record continuity</text>

        <text x="296" y="274" className="diagram-title">Integration Layer</text>
        <text x="296" y="298" className="diagram-copy">Connector-ready routing</text>
        <text x="296" y="316" className="diagram-copy">Hospital systems, analytics</text>

        <text x="56" y="274" className="diagram-title">Governance</text>
        <text x="56" y="298" className="diagram-copy">Public-safe presentation</text>
        <text x="56" y="316" className="diagram-copy">No PHI, no internal ops</text>

        <text x="223" y="94" className="diagram-chip">stream</text>
        <text x="472" y="94" className="diagram-chip">review</text>
      </svg>
    </div>
  );
}

function ValueDiagram() {
  return (
    <div className="diagram-frame value-frame">
      <div className="diagram-label-row">
        <span className="diagram-tag">Pyramid / Funnel</span>
        <span className="diagram-meta">Raw signal to documented decision</span>
      </div>
      <svg viewBox="0 0 760 420" className="diagram-svg" aria-label="Why it matters funnel">
        {valueStages.map((stage, index) => {
          const x = 380 - stage.width / 2;
          const y = 40 + index * 68;
          const rectClass = stage.focus ? 'diagram-node diagram-node-focus' : 'diagram-node';
          return (
            <g key={stage.label}>
              <rect x={x} y={y} width={stage.width} height="48" rx="10" className={rectClass} />
              <text x="380" y={y + 20} textAnchor="middle" className="diagram-title">
                {stage.label}
              </text>
              <text x="380" y={y + 37} textAnchor="middle" className="diagram-copy">
                {stage.sub}
              </text>
              {index < valueStages.length - 1 ? (
                <path
                  d={`M380 ${y + 48} V ${y + 68}`}
                  className={stage.focus ? 'diagram-link diagram-link-accent' : 'diagram-link diagram-link-soft'}
                />
              ) : null}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function WorkflowDiagram({ lensLabel }: { lensLabel: string }) {
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
                className={
                  highlight ? 'diagram-step-dot diagram-step-dot-focus' : 'diagram-step-dot'
                }
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

function ArchitectureDiagram({ lensLabel }: { lensLabel: string }) {
  return (
    <div className="diagram-frame architecture-frame">
      <div className="diagram-label-row">
        <span className="diagram-tag">Architecture</span>
        <span className="diagram-meta">{lensLabel} lens active</span>
      </div>
      <svg
        viewBox="0 0 920 420"
        className="diagram-svg"
        aria-label="System architecture overview"
      >
        <rect x="48" y="84" width="176" height="92" rx="10" className="diagram-node" />
        <rect x="268" y="84" width="176" height="92" rx="10" className="diagram-node" />
        <rect x="488" y="84" width="176" height="92" rx="10" className="diagram-node diagram-node-focus" />
        <rect x="708" y="84" width="164" height="92" rx="10" className="diagram-node" />

        <rect x="488" y="248" width="176" height="92" rx="10" className="diagram-node" />
        <rect x="708" y="248" width="164" height="92" rx="10" className="diagram-node" />

        <path d="M224 130 H268" className="diagram-link" />
        <path d="M444 130 H488" className="diagram-link diagram-link-accent" />
        <path d="M664 130 H708" className="diagram-link" />
        <path d="M576 176 V248" className="diagram-link diagram-link-soft" />
        <path d="M664 294 H708" className="diagram-link diagram-link-soft" />

        <text x="68" y="112" className="diagram-title">Collection Edge</text>
        <text x="68" y="136" className="diagram-copy">Device adapter</text>
        <text x="68" y="154" className="diagram-copy">Signal acquisition</text>

        <text x="288" y="112" className="diagram-title">Normalization</text>
        <text x="288" y="136" className="diagram-copy">Mapping, timing, event shaping</text>
        <text x="288" y="154" className="diagram-copy">Operational consistency</text>

        <text x="508" y="112" className="diagram-title">Clinical Workspace</text>
        <text x="508" y="136" className="diagram-copy">Monitoring surface</text>
        <text x="508" y="154" className="diagram-copy">Review and escalation</text>

        <text x="728" y="112" className="diagram-title">Consumer Layer</text>
        <text x="728" y="136" className="diagram-copy">Dashboards</text>
        <text x="728" y="154" className="diagram-copy">Operational reporting</text>

        <text x="508" y="276" className="diagram-title">Audit Layer</text>
        <text x="508" y="300" className="diagram-copy">Decision trail</text>
        <text x="508" y="318" className="diagram-copy">Approval continuity</text>

        <text x="728" y="276" className="diagram-title">External Connectors</text>
        <text x="728" y="300" className="diagram-copy">EMR / HIS / analytics</text>
        <text x="728" y="318" className="diagram-copy">Public-safe abstraction only</text>
      </svg>
    </div>
  );
}

function GovernanceDiagram() {
  return (
    <div className="diagram-frame governance-frame">
      <div className="diagram-label-row">
        <span className="diagram-tag">Layers / Matrix</span>
        <span className="diagram-meta">Safety and operational controls</span>
      </div>
      <svg viewBox="0 0 780 360" className="diagram-svg" aria-label="Governance and safety map">
        <rect x="46" y="54" width="284" height="98" rx="12" className="diagram-node diagram-node-focus" />
        <rect x="450" y="54" width="284" height="98" rx="12" className="diagram-node" />
        <rect x="46" y="210" width="284" height="98" rx="12" className="diagram-node" />
        <rect x="450" y="210" width="284" height="98" rx="12" className="diagram-node" />
        <path d="M330 103 H450" className="diagram-link diagram-link-accent" />
        <path d="M188 152 V210" className="diagram-link diagram-link-soft" />
        <path d="M592 152 V210" className="diagram-link diagram-link-soft" />

        <text x="72" y="88" className="diagram-title">Alarm Traceability</text>
        <text x="72" y="112" className="diagram-copy">Severity, timing, acknowledgement</text>
        <text x="72" y="130" className="diagram-copy">and action remain linked.</text>

        <text x="476" y="88" className="diagram-title">Role Review</text>
        <text x="476" y="112" className="diagram-copy">Review and approval are visible</text>
        <text x="476" y="130" className="diagram-copy">as structured workflow states.</text>

        <text x="72" y="244" className="diagram-title">Disconnect Awareness</text>
        <text x="72" y="268" className="diagram-copy">Continuity gaps surface as</text>
        <text x="72" y="286" className="diagram-copy">operational information.</text>

        <text x="476" y="244" className="diagram-title">Treatment History</text>
        <text x="476" y="268" className="diagram-copy">Durable records support review,</text>
        <text x="476" y="286" className="diagram-copy">training, and governance checks.</text>
      </svg>
    </div>
  );
}

function RolloutDiagram() {
  return (
    <div className="diagram-frame rollout-frame">
      <div className="diagram-label-row">
        <span className="diagram-tag">Tree / Rollout Map</span>
        <span className="diagram-meta">From focused deployment to platform</span>
      </div>
      <svg viewBox="0 0 980 340" className="diagram-svg" aria-label="Expansion and rollout path">
        <line x1="118" y1="118" x2="862" y2="118" className="diagram-link diagram-link-accent" />
        {rolloutStages.map((stage, index) => {
          const x = 120 + index * 248;
          const boxX = x - 88;
          const isFocus = index < 2;

          return (
            <g key={stage.phase}>
              <circle
                cx={x}
                cy={118}
                r={16}
                className={isFocus ? 'diagram-step-dot diagram-step-dot-focus' : 'diagram-step-dot'}
              />
              <line x1={x} y1="134" x2={x} y2="186" className="diagram-link diagram-link-soft" />
              <rect
                x={boxX}
                y="186"
                width="176"
                height="108"
                rx="12"
                className={isFocus ? 'diagram-node diagram-node-focus' : 'diagram-node'}
              />
              <text x={boxX + 18} y="212" className="diagram-step-label">
                {stage.phase}
              </text>
              <text x={boxX + 18} y="234" className="diagram-title">
                {stage.title}
              </text>
              <text x={boxX + 18} y="258" className="diagram-copy">
                {stage.detail.map((line, lineIndex) => (
                  <tspan key={line} x={boxX + 18} dy={lineIndex === 0 ? 0 : 16}>
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

export default function LandingPage() {
  const [activeLens, setActiveLens] = React.useState<LensId>('clinical');
  const activeLensLabel = lensOptions.find((lens) => lens.id === activeLens)?.label ?? 'Clinical';
  const workflowLens = workflowLensContent[activeLens];
  const architectureLens = architectureLensContent[activeLens];

  return (
    <main className="marketing-shell">
      <div className="ambient-orb ambient-orb-left" />
      <div className="ambient-orb ambient-orb-right" />

      <header className="site-nav">
        <div className="brand-lockup">
          <span className="brand-mark">ICU-B</span>
          <div>
            <p className="brand-name">Connect</p>
            <p className="brand-caption">Public project landing</p>
          </div>
        </div>

        <nav className="nav-links" aria-label="Primary">
          <a href="#value">Why It Matters</a>
          <a href="#workflow">Workflow</a>
          <a href="#architecture">Architecture</a>
          <a href="#rollout">Rollout</a>
        </nav>

        <a href={repoUrl} target="_blank" rel="noreferrer" className="nav-cta">
          View Repo
        </a>
      </header>

      <section className="hero-shell">
        <Reveal className="hero-copy">
          <p className="eyebrow">Clinical Telemetry / Workflow / Interoperability</p>
          <h1 className="hero-title">
            CRRT monitoring that clinicians can read and IT teams can explain.
          </h1>
          <p className="hero-body">
            ICU-B Connect is a public-facing product narrative for a PrismaFlex-ready
            monitoring platform. It packages signal flow, alert context, signed review,
            and connector-ready architecture into one coherent story.
          </p>

          <div className="hero-actions">
            <a href={repoUrl} target="_blank" rel="noreferrer" className="primary-button">
              Explore Public Repo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#workflow" className="secondary-button">
              Review Clinical Workflow
            </a>
          </div>

          <div className="hero-signal-grid">
            {heroSignals.map((signal) => (
              <div key={signal.label} className="hero-signal-card">
                <p className="hero-signal-value">{signal.value}</p>
                <p className="hero-signal-label">{signal.label}</p>
              </div>
            ))}
          </div>

          <div className="hero-audience-row">
            <span>Clinicians</span>
            <span>Biomedical engineers</span>
            <span>Hospital IT</span>
          </div>

          <p className="hero-note">
            Built for presentation and public sharing: synthetic diagrams, product-level
            architecture, and zero patient or hospital-sensitive data.
          </p>
        </Reveal>

        <Reveal className="hero-visual" delay={0.12}>
          <HeroDiagram />
        </Reveal>
      </section>

      <section className="proof-band">
        {proofPillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 0.08} className="proof-item">
            <p className="proof-title">{pillar.title}</p>
            <p className="proof-body">{pillar.body}</p>
          </Reveal>
        ))}
      </section>

      <section id="value" className="section-shell section-shell-split value-shell">
        <Reveal className="section-copy">
          <SectionHeading
            eyebrow="Why It Matters"
            title="Raw telemetry becomes operational clinical logic."
            body="The system does not stop at data capture. It translates machine signals into trends, alert awareness, review workflow, and durable clinical action."
          />
          <AnnotationStack items={whyNotes} />
        </Reveal>

        <Reveal delay={0.12}>
          <ValueDiagram />
        </Reveal>
      </section>

      <section className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Audience Fit"
            title="One narrative for care teams, operations, and integration stakeholders."
            body="The landing is structured like a deck: each block explains a different decision lens without changing the product story."
          />
        </Reveal>

        <div className="audience-grid">
          {audienceCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08} className="audience-card">
              <div className="audience-header">
                <card.icon className="h-5 w-5" />
                <h3>{card.title}</h3>
              </div>
              <p className="audience-text">{card.text}</p>
              <ul className="audience-points">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="workflow" className="section-shell section-shell-split">
        <Reveal className="section-copy">
          <SectionHeading
            eyebrow="Clinical Workflow"
            title="From signal to signed action."
            body="This section is designed to work in both a landing page and a presentation. It shows the operating sequence instead of a feature checklist."
          />
          <LensTabs activeLens={activeLens} onChange={setActiveLens} />
          <AnnotationStack summary={workflowLens.summary} items={workflowLens.notes} />
        </Reveal>

        <Reveal delay={0.12}>
          <WorkflowDiagram lensLabel={activeLensLabel} />
        </Reveal>
      </section>

      <section id="architecture" className="section-shell section-shell-split architecture-shell">
        <Reveal className="section-copy">
          <SectionHeading
            eyebrow="System Architecture"
            title="A product diagram that engineers can trust."
            body="The technical story is expressed as a clean set of layers: collection, normalization, clinical workspace, audit continuity, and external connectors."
          />
          <LensTabs activeLens={activeLens} onChange={setActiveLens} />
          <AnnotationStack summary={architectureLens.summary} items={architectureLens.notes} />
        </Reveal>

        <Reveal delay={0.12}>
          <ArchitectureDiagram lensLabel={activeLensLabel} />
        </Reveal>
      </section>

      <section id="governance" className="section-shell section-shell-split governance-shell">
        <Reveal className="section-copy">
          <SectionHeading
            eyebrow="Governance & Safety"
            title="Fast is not enough. The system also has to be reviewable."
            body="This part of the landing is aimed at healthcare specialists and technical management who need operational confidence, not just realtime performance."
          />
          <AnnotationStack items={governanceNotes} />
        </Reveal>

        <Reveal delay={0.12}>
          <GovernanceDiagram />
        </Reveal>

        <div className="governance-grid">
          {governanceBlocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 0.06} className="governance-card">
              <p className="governance-card-title">{block.title}</p>
              <p className="governance-card-body">{block.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="rollout" className="section-shell section-shell-split rollout-shell">
        <Reveal className="section-copy">
          <SectionHeading
            eyebrow="Expansion & Rollout"
            title="A platform story, not a one-off screen."
            body="The rollout path starts focused and grows outward: one environment, more devices, more connectors, and more operating contexts over time."
          />
          <div className="rollout-signal-list">
            {rolloutSignals.map((signal) => (
              <div key={signal} className="rollout-signal-item">
                {signal}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <RolloutDiagram />
        </Reveal>
      </section>

      <section id="release" className="section-shell release-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Public Release Posture"
            title="What belongs in the public repo and what stays private."
            body="A public landing works best when it markets the system clearly while drawing a hard boundary around sensitive operational detail."
          />
        </Reveal>

        <div className="release-layout">
          <Reveal className="release-panel">
            <p className="panel-kicker">Keep Public</p>
            <ul className="release-list">
              {releaseRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="release-note">
            <p className="editorial-quote">
              The best public healthcare product page does not pretend to be a live clinical
              system. It demonstrates clarity, discipline, and trust boundaries.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="final-shell">
        <Reveal>
          <p className="eyebrow">Public Launch</p>
          <h2 className="final-title">Ready to publish this as a standalone repo.</h2>
          <p className="final-body">
            The separate site is now isolated from the main application and structured for GitHub
            Pages or Vercel deployment.
          </p>
          <div className="hero-actions final-actions">
            <a href={repoUrl} target="_blank" rel="noreferrer" className="primary-button">
              Open Project Link
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#architecture" className="secondary-button">
              Review Diagram Structure
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
