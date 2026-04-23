import {
    Activity,
    FileCheck2,
    HeartPulse,
    Layers3,
    Network,
    ScanLine,
    ShieldCheck,
    Workflow,
} from 'lucide-react';
import type { AnnotationItem, GovernanceBlock, LensContent, LensId, WorkflowStage } from '@/types/landing';

/* ─── repo ─── */
export const repoUrl =
    process.env.NEXT_PUBLIC_REPO_URL ||
    'https://github.com/DinhLucent/PrismaFlex-Monitor-MaxWireLess';

/* ─── lens options ─── */
export const lensOptions: { id: LensId; label: string }[] = [
    { id: 'clinical', label: 'Clinical' },
    { id: 'it', label: 'IT' },
    { id: 'management', label: 'Management' },
];

/* ─── hero ─── */
export const hero = {
    eyebrow: 'Real-time PrismaFlex Monitoring',
    headline: 'Clinical visibility for continuous therapy.',
    body: 'Monitor treatment state, pressure trends, alarm severity, and review flow in one operational surface for ICU teams and hospital IT.',
    primaryCta: { label: 'View Workflow', href: '#workflow' },
    secondaryCta: { label: 'See Architecture', href: '#architecture' },
};

export const heroChips = [
    { value: '<3s', label: 'telemetry' },
    { value: '4-level', label: 'alerts' },
    { value: 'Audit-ready', label: 'review' },
    { value: 'Connector', label: 'ready' },
];

/* ─── proof band ─── */
export const proofPillars = [
    { title: 'Real-time Telemetry', body: 'Machine signals become visible clinical context in under three seconds.' },
    { title: '4-level Alerts', body: 'Severity, timing, and escalation path are structured—not ad-hoc notifications.' },
    { title: 'Traceable Review', body: 'Every clinical decision stays connected to the event that triggered it.' },
    { title: 'Connector-ready Architecture', body: 'Integration points are explicit so hospital IT can plan, not guess.' },
];

/* ─── workflow section ─── */
export const workflowSection = {
    eyebrow: 'Clinical Workflow',
    title: 'From signal to signed action.',
    body: 'The platform replaces feature-lists with a visible operating sequence: signal change, review, evaluation, and signed record.',
};

export const workflowStages: WorkflowStage[] = [
    { step: '01', name: 'Telemetry', detail: ['Real-time signal', 'enters the flow.'] },
    { step: '02', name: 'Analysis', detail: ['Status is paired with', 'clinical context.'] },
    { step: '03', name: 'Alerting', detail: ['Issues surface with', 'severity and timing.'] },
    { step: '04', name: 'Decision', detail: ['Clinician reviews', 'and escalates.'] },
    { step: '05', name: 'Permanent', detail: ['Action lands in', 'the clinical record.'] },
];

export const workflowLensContent: Record<LensId, LensContent> = {
    clinical: {
        summary: 'Focus: Early warning, shared context, and actionable review steps.',
        notes: [
            { icon: HeartPulse, title: 'Visual Authority', body: 'Trend and alert states appear before clinicians need to reconstruct changes from raw noise.' },
            { icon: ShieldCheck, title: 'Explicit Ownership', body: 'The workflow defines exactly when an event was seen, reviewed, and resolved or escalated.' },
            { icon: FileCheck2, title: 'Treatment Continuity', body: 'Responses become part of the clinical narrative so handoff and retrospective review stay aligned.' },
        ],
    },
    it: {
        summary: 'Focus: Deterministic event pipelines and reliable data handoff points.',
        notes: [
            { icon: ScanLine, title: 'Protocol Isolation', body: 'The platform separates protocol-heavy ingestion from the application-level state clinicians consumed.' },
            { icon: Workflow, title: 'State Integrity', body: 'Alerts move through a review sequence that can be reasoned about and logged without ambiguity.' },
            { icon: Network, title: 'Durable Handoff', body: 'The signed record is the single source of truth for downstream systems and hospital storage.' },
        ],
    },
    management: {
        summary: 'Focus: Response continuity, operational accountability, and scale.',
        notes: [
            { icon: Activity, title: 'Escalation Path', body: 'The sequence clarifies where a case becomes attention-worthy and how the system supports human response.' },
            { icon: ShieldCheck, title: 'Governance Guard', body: 'Review and approval are visible parts of the workflow, not hidden operational layers.' },
            { icon: Layers3, title: 'Repeatable Model', body: 'The explicit sequence supports training, auditing, and reuse across units or shifts.' },
        ],
    },
};

/* ─── architecture section ─── */
export const architectureSection = {
    eyebrow: 'Platform Architecture',
    title: 'Engineered for medical precision.',
    body: 'A layered system designed for reliability: collection, normalization, clinical workspace, and secure EMR delivery.',
};

export const architectureLensContent: Record<LensId, LensContent> = {
    clinical: {
        summary: 'Architecture ensures the platform remains readable, stable, and clinically accurate.',
        notes: [
            { icon: Activity, title: 'Objective Surface', body: 'Real-time filtering ensures clinicians see context-rich status instead of machine-native noise.' },
            { icon: FileCheck2, title: 'Durable Integrity', body: 'Audit layers are core system concerns, keeping treatment review and record integrity aligned.' },
            { icon: ShieldCheck, title: 'Safe Boundaries', body: 'Operational logic is communicated clearly without exposing sensitive hospital networking detail.' },
        ],
    },
    it: {
        summary: 'Layered ingestion and normalization ensure integration points remain legible and secure.',
        notes: [
            { icon: ScanLine, title: 'Collection Edge', body: 'Device handling stays near ingestion, protecting the stack from direct machine protocol complexity.' },
            { icon: Layers3, title: 'Service Separation', body: 'Realtime concerns and durable state are isolated to ensure stability during peak treatment loads.' },
            { icon: Network, title: 'Expansion Ready', body: 'External systems connect via explicit extension points, making the system architecture predictable.' },
        ],
    },
    management: {
        summary: 'A governable system designed for accountability and organizational scale.',
        notes: [
            { icon: ShieldCheck, title: 'Accountable Ops', body: 'The clinical workspace is a controlled surface with clear inputs and auditable outputs.' },
            { icon: Activity, title: 'Continuous Support', body: 'Durable layers ensure the system supports supervision and retrospective review requirements.' },
            { icon: Layers3, title: 'Platform Maturity', body: 'The architecture communicates a foundation that scales without redefining the product narrative.' },
        ],
    },
};

/* ─── governance section ─── */
export const governanceSection = {
    eyebrow: 'Governance & Safety',
    title: 'Traceable. Auditable. Reliable.',
    body: 'Alarm traceability, role-based review, and durable history ensure the platform is operationally responsible.',
};

export const governanceNotes: AnnotationItem[] = [
    { icon: ShieldCheck, title: 'Full Traceability', body: 'Severity, timing, and clinical acknowledgement remain linked to the original machine event.' },
    { icon: Workflow, title: 'Role Guardrails', body: 'The workflow keeps approval explicit, supporting structured ICU operations instead of workarounds.' },
    { icon: FileCheck2, title: 'Disconnection Aware', body: 'The system makes monitoring gaps legible, ensuring that continuity is never silently lost.' },
];

export const governanceBlocks: GovernanceBlock[] = [
    { title: 'Audit Logic', body: 'Events are linked to acknowledgement and follow-up action.' },
    { title: 'Process Flow', body: 'Roles and approval steps stay visible and auditable.' },
    { title: 'Gap Detection', body: 'The system accounts for network or device disconnection.' },
    { title: 'History Log', body: 'Durable records support retrospective review and training.' },
];

/* ─── final CTA ─── */
export const finalCta = {
    headline: 'Clinical monitoring that reads clearly, scales cleanly, and delivers precisely.',
    body: 'ICU-B Connect turns PrismaFlex signal flow into a reviewable clinical narrative.',
    primaryCta: { label: 'View Workflow', href: '#workflow' },
    secondaryCta: { label: 'Open Repository', href: repoUrl },
};

/* ─── footer ─── */
export const footerOwnership = '© 2026 ICU-B Connect. Internal Clinical Monitoring Platform. All rights reserved.';
export const footerNote = 'Public-safe presentation: synthetic diagrams, product-level architecture, zero patient or hospital-sensitive data.';
