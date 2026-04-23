'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
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

const repoUrl =
  process.env.NEXT_PUBLIC_REPO_URL ||
  'https://github.com/DinhLucent/PrismaFlex-Monitor-MaxWireLess';

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

function WorkflowDiagram() {
  return (
    <div className="diagram-frame workflow-frame">
      <div className="diagram-label-row">
        <span className="diagram-tag">Sequence</span>
        <span className="diagram-meta">From signal to signed action</span>
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
              <rect x={x - 84} y="176" width="168" height="84" rx="10" className="diagram-node diagram-note" />
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

function ArchitectureDiagram() {
  return (
    <div className="diagram-frame architecture-frame">
      <div className="diagram-label-row">
        <span className="diagram-tag">Architecture</span>
        <span className="diagram-meta">Editorial system map</span>
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

export default function LandingPage() {
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
          <a href="#workflow">Workflow</a>
          <a href="#architecture">Architecture</a>
          <a href="#release">Release posture</a>
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
          <div className="annotation-stack">
            <div className="annotation-item">
              <Workflow className="h-4 w-4" />
              <div>
                <p className="annotation-title">Signal framing</p>
                <p className="annotation-body">
                  Show telemetry as a clinical event, not as raw device noise.
                </p>
              </div>
            </div>
            <div className="annotation-item">
              <ShieldCheck className="h-4 w-4" />
              <div>
                <p className="annotation-title">Accountable review</p>
                <p className="annotation-body">
                  Keep the approval step explicit so the workflow communicates ownership.
                </p>
              </div>
            </div>
            <div className="annotation-item">
              <FileCheck2 className="h-4 w-4" />
              <div>
                <p className="annotation-title">Auditable continuity</p>
                <p className="annotation-body">
                  Treat the record as the end state of the decision, not an afterthought.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <WorkflowDiagram />
        </Reveal>
      </section>

      <section id="architecture" className="section-shell section-shell-split architecture-shell">
        <Reveal className="section-copy">
          <SectionHeading
            eyebrow="System Architecture"
            title="A product diagram that engineers can trust."
            body="The technical story is expressed as a clean set of layers: collection, normalization, clinical workspace, audit continuity, and external connectors."
          />
          <div className="annotation-stack">
            <div className="annotation-item">
              <ScanLine className="h-4 w-4" />
              <div>
                <p className="annotation-title">Collection edge</p>
                <p className="annotation-body">
                  Device-specific logic stays at the boundary, not inside the user-facing narrative.
                </p>
              </div>
            </div>
            <div className="annotation-item">
              <Layers3 className="h-4 w-4" />
              <div>
                <p className="annotation-title">Operational separation</p>
                <p className="annotation-body">
                  The clinical workspace and the audit layer stay related, but they are not the same concern.
                </p>
              </div>
            </div>
            <div className="annotation-item">
              <Activity className="h-4 w-4" />
              <div>
                <p className="annotation-title">Connector posture</p>
                <p className="annotation-body">
                  External systems are shown as extension points, which keeps the public story accurate and safe.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <ArchitectureDiagram />
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
