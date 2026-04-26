import Image from 'next/image';
import {
  Activity,
  ArrowRight,
  BellRing,
  ClipboardCheck,
  Database,
  FileCheck2,
  HeartPulse,
  MonitorCheck,
  Network,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';

const repoUrl =
  process.env.NEXT_PUBLIC_REPO_URL ||
  'https://github.com/DinhLucent/ICURealtimeConnect_PrismaFlexOption';

const proofItems = [
  {
    value: '<3s',
    label: 'Telemetry latency',
    detail: 'Fast-path updates keep the monitoring surface close to live device state.',
  },
  {
    value: '4-level',
    label: 'Alert design',
    detail: 'Alarm, warning, caution, and advisory states stay visibly separated.',
  },
  {
    value: 'H00/Hxx/OC',
    label: 'Clinical chronology',
    detail: 'Baseline, hourly rows, and order-change events preserve treatment order.',
  },
  {
    value: 'Audit',
    label: 'Review workflow',
    detail: 'Operator identity, role state, approvals, unlocks, and export remain traceable.',
  },
];

const monitorBullets = [
  'Device cards show patient context, therapy mode, sync status, and key pressures.',
  'Alarm queue separates severity so the team can scan the room quickly.',
  'Trend panels make pressure movement visible before staff reconstruct it manually.',
  'System status keeps collector, Mirth, database, and backup posture visible.',
];

const workflowSteps = [
  { title: 'Signal', body: 'PrismaFlex telemetry enters the realtime stream.', icon: Activity },
  { title: 'Detect', body: 'Severity and pressure changes are normalized.', icon: BellRing },
  { title: 'Review', body: 'Nurse reviews the event and adds context.', icon: Stethoscope },
  { title: 'Decide', body: 'Doctor opens trend, journal, and patient context.', icon: HeartPulse },
  { title: 'Approve', body: 'Review, reject, unlock, or finalize the record.', icon: ClipboardCheck },
  { title: 'Record', body: 'Audit-ready history is stored for handoff and export.', icon: FileCheck2 },
];

const journalPoints = [
  'Locked H00 baseline after the session starts.',
  'Hourly snapshots and OC rows stay interleaved by clinical time.',
  'Operator check-in ties manual edits to a named nurse or doctor.',
  'Approved records become read-only until a controlled unlock.',
];

const analyzerCards = [
  'Alarm timeline',
  'Pressure trends',
  'Pump and scale context',
  'Raw telemetry review',
];

const architectureNodes = [
  'PrismaFlex',
  'Collector',
  'Mirth Connect',
  'FastAPI',
  'Monitoring UI',
  'EMR / HIS / LIS',
];

const governanceItems = [
  { title: 'Role-based access', body: 'Nurse, doctor, and admin actions stay separated.', icon: ShieldCheck },
  { title: 'Chronology lock', body: 'Clinical timestamps do not jump after edits or restores.', icon: Activity },
  { title: 'Audit trail', body: 'Operator, role, action, and change history remain inspectable.', icon: Database },
  { title: 'Export and print', body: 'Final records support PDF, Excel, and clinical handoff.', icon: FileCheck2 },
];

export default function LandingPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <main id="main-content" className="site-shell">
        <header className="top-nav" aria-label="Primary navigation">
          <a href="#" className="brand-mark" aria-label="ICU-B Connect home">
            <Image
              src="/assets/wordmark-icu-b-connect.svg"
              alt="ICU-B Connect"
              width={188}
              height={46}
              priority
            />
          </a>
          <nav className="nav-links" aria-label="Landing sections">
            <a href="#monitoring">Monitoring</a>
            <a href="#workflow">Workflow</a>
            <a href="#journal">Journal</a>
            <a href="#architecture">Architecture</a>
          </nav>
          <a href={repoUrl} target="_blank" rel="noreferrer" className="nav-action">
            Repository
          </a>
        </header>

        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Real-time PrismaFlex monitoring</p>
            <h1 id="hero-title">
              From device signal to reviewable clinical action.
            </h1>
            <p className="hero-lede">
              ICU-B Connect turns PrismaFlex CRRT telemetry into live monitoring,
              alert awareness, treatment journal review, and audit-ready clinical records.
            </p>
            <div className="hero-actions">
              <a href="#monitoring" className="button button-primary">
                View Monitoring Flow
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#workflow" className="button button-secondary">
                See Workflow
              </a>
            </div>
          </div>

          <div className="hero-visual-card" aria-label="ICU-B Connect visual overview">
            <Image
              src="/assets/user-hero-dashboard.png"
              alt="ICU-B Connect hero visual with PrismaFlex machine and central telemetry dashboard"
              width={1586}
              height={992}
              priority
              className="hero-visual-image"
              sizes="(max-width: 960px) 100vw, 62vw"
            />
          </div>
        </section>

        <section className="proof-grid" aria-label="Platform proof points">
          {proofItems.map((item) => (
            <article key={item.label} className="proof-card">
              <p className="proof-value">{item.value}</p>
              <h2>{item.label}</h2>
              <p>{item.detail}</p>
            </article>
          ))}
        </section>

        <section id="monitoring" className="split-section">
          <div className="section-copy">
            <p className="eyebrow">Central monitoring</p>
            <h2>One view. Every device. Real-time and actionable.</h2>
            <p>
              The central surface keeps device state, telemetry continuity,
              alarm queue, pressure trends, and treatment summary in one calm clinical workspace.
            </p>
            <ul className="check-list">
              {monitorBullets.map((item) => (
                <li key={item}>
                  <MonitorCheck className="h-4 w-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <figure className="media-panel media-panel-wide">
            <Image
              src="/assets/user-clinical-dashboard.png"
              alt="ICU-B Connect monitoring dashboard with device cards, alarms, and pressure trends"
              width={1536}
              height={1024}
              loading="eager"
              className="media-image"
              sizes="(max-width: 960px) 100vw, 58vw"
            />
          </figure>
        </section>

        <section id="workflow" className="workflow-section" aria-labelledby="workflow-title">
          <div className="section-center">
            <p className="eyebrow">Clinical workflow</p>
            <h2 id="workflow-title">Realtime signal becomes documented response.</h2>
            <p>
              Monitoring is only useful when the path from device event to clinical review
              remains explicit. This flow is the product story.
            </p>
          </div>
          <div className="workflow-rail">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="workflow-card">
                  <div className="workflow-icon">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="workflow-index">{String(index + 1).padStart(2, '0')}</p>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="journal" className="split-section split-section-reverse">
          <figure className="media-panel">
            <Image
              src="/assets/treatment-journal-review.png"
              alt="Treatment Journal report table with treatment records and review actions"
              width={2048}
              height={1024}
              loading="eager"
              className="media-image"
              sizes="(max-width: 960px) 100vw, 55vw"
            />
          </figure>
          <div className="section-copy">
            <p className="eyebrow">Treatment journal</p>
            <h2>Chronological. Reviewable. Locked when it matters.</h2>
            <p>
              Treatment activity becomes a durable clinical record with hourly snapshots,
              order-change rows, operator identity, approval state, and export readiness.
            </p>
            <ul className="check-list">
              {journalPoints.map((item) => (
                <li key={item}>
                  <ClipboardCheck className="h-4 w-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="analysis" className="analysis-section" aria-labelledby="analysis-title">
          <div className="analysis-copy">
            <p className="eyebrow">Deep analyzer</p>
            <h2 id="analysis-title">Clinical depth when the live screen is not enough.</h2>
            <p>
              Alarms, pressure trends, pump behavior, scale balance, and raw telemetry can be
              reviewed in context for troubleshooting, handoff, and retrospective analysis.
            </p>
            <div className="tag-row">
              {analyzerCards.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <figure className="analysis-media media-panel">
            <Image
              src="/assets/treatment-analyzer-deep.png"
              alt="Treatment Analyzer interface with tabs for alarms, parameters, pressures, scales, and pumps"
              width={2048}
              height={1024}
              loading="eager"
              className="media-image"
              sizes="(max-width: 960px) 100vw, 70vw"
            />
          </figure>
        </section>

        <section className="split-section device-section">
          <div className="section-copy">
            <p className="eyebrow">Device-aware design</p>
            <h2>Built around the real PrismaFlex workflow.</h2>
            <p>
              The landing keeps the machine visible because the product is not a generic
              dashboard. It is a PrismaFlex-specific clinical monitoring layer.
            </p>
            <div className="note-card">
              <Stethoscope className="h-5 w-5" />
              <p>
                Visuals should explain device context first, then software workflow.
                That keeps the page credible for clinicians and IT in the same room.
              </p>
            </div>
          </div>
          <figure className="media-panel">
            <Image
              src="/assets/user-prismaflex-views.png"
              alt="Multi-angle PrismaFlex reference views"
              width={1536}
              height={1024}
              loading="eager"
              className="media-image"
              sizes="(max-width: 960px) 100vw, 56vw"
            />
          </figure>
        </section>

        <section id="architecture" className="architecture-section" aria-labelledby="architecture-title">
          <div className="section-center">
            <p className="eyebrow">System architecture</p>
            <h2 id="architecture-title">A layered path from machine signal to clinical record.</h2>
            <p>
              The architecture stays simple on the public page: device ingestion, integration,
              realtime application, clinical UI, and hospital-system readiness.
            </p>
          </div>
          <div className="architecture-chain" aria-label="ICU-B Connect architecture chain">
            {architectureNodes.map((node, index) => (
              <div key={node} className="architecture-node-wrap">
                <div className="architecture-node">
                  {index === 0 ? <Activity className="h-5 w-5" /> : null}
                  {index === 1 ? <Network className="h-5 w-5" /> : null}
                  {index === 2 ? <Database className="h-5 w-5" /> : null}
                  {index === 3 ? <ShieldCheck className="h-5 w-5" /> : null}
                  {index === 4 ? <MonitorCheck className="h-5 w-5" /> : null}
                  {index === 5 ? <FileCheck2 className="h-5 w-5" /> : null}
                  <span>{node}</span>
                </div>
                {index < architectureNodes.length - 1 ? (
                  <ArrowRight className="architecture-arrow h-5 w-5" />
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section id="governance" className="governance-section">
          <div className="section-copy governance-copy">
            <p className="eyebrow">Governance and audit</p>
            <h2>Reviewability makes speed usable.</h2>
            <p>
              Realtime telemetry becomes safer when edits, review boundaries, clinical
              chronology, and final exports are controlled by visible rules.
            </p>
          </div>
          <div className="governance-grid">
            {governanceItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="governance-card">
                  <Icon className="h-5 w-5" />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="final-cta">
          <div>
            <p className="eyebrow">ICU-B Connect</p>
            <h2>One system for monitoring, review, and analysis.</h2>
            <p>
              Designed for ICU Zone B - Cho Ray Hospital as an operational CRRT monitoring platform.
            </p>
          </div>
          <div className="final-actions">
            <a href="#monitoring" className="button button-light">
              Review Platform
            </a>
            <a href={repoUrl} target="_blank" rel="noreferrer" className="button button-outline-light">
              Open Repository
            </a>
          </div>
        </section>

        <footer className="footer">
          <span>ICU-B Connect</span>
          <span>Realtime PrismaFlex CRRT monitoring, treatment review, and audit-ready records.</span>
        </footer>
      </main>
    </>
  );
}
