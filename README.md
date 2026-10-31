# ICU-B Connect — Real-Time ICU Telemetry & CRRT Clinical Dashboard

Web platform and architectural specification for real-time telemetry, alarm triage, and clinical decision support for Baxter Prismaflex Continuous Renal Replacement Therapy (CRRT) machines in Intensive Care Units (ICU).

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)
![Device](https://img.shields.io/badge/Device-Baxter_Prismaflex_CRRT-DC2626?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-0D9488?style=flat-square)

---

## Clinical Telemetry Interface

The web interface centralizes telemetry from isolated dialysis machines at patient bedsides into a unified clinical workstation dashboard. Clinicians monitor transmembrane pressure (TMP), filter clotting indicators, fluid balance, and alarm states in real time.

<div align="center">
  <img src="public/assets/hero-flagship-dashboard-prismaflex.png" alt="ICU-B Connect Flagship Clinical Dashboard" width="95%" />
</div>

---

## 3-Tier Telemetry Architecture

```mermaid
graph LR
    A[🏥 Baxter Prismaflex Machine] -->|Optical RS-232 Serial| B(🖥️ Edge Windows Collector)
    B -->|Structured JSON / HL7| C(🔄 Mirth Connect Integration Bridge)
    C -->|REST / WebSocket| D[🚀 Clinical Backend Core]
    D -->|Real-time Stream| E[📊 Next.js ICU-B Telemetry Webapp]
```

1. **Edge Acquisition (Tier 1)**: Hardware interface connected to the Prismaflex serial diagnostic port. Captures raw flow rates, pressure sensor readings (arterial, venous, pre-filter, effluent), and machine alert states.
2. **Integration Bridge (Tier 2)**: Mirth Connect channel broker standardizing edge frames into validated HL7/JSON clinical structures across protected hospital network segments.
3. **Clinical Presentation (Tier 3)**: Next.js App Router application delivering responsive vitals curves, threshold notifications, and treatment history to nursing stations and attending physicians.

<div align="center">
  <img src="public/assets/diagram-system-architecture-prismaflex.svg" alt="System Architecture Diagram" width="90%" />
</div>

---

## Clinical Workflow & Decision Support

The platform models the complete bedside care pathway: raw machine telemetry is analyzed for physiological anomalies, presented for nurse review, validated by intensive care physicians, and archived into clinical records.

<div align="center">
  <img src="public/assets/diagram-clinical-workflow-prismaflex.svg" alt="Clinical Workflow Diagram" width="90%" />
</div>

---

## Deep Analytics & Treatment Verification

<table width="100%">
  <tr>
    <td width="50%" align="center">
      <b>Treatment Analyzer & Pressure Waveforms</b><br/>
      <img src="public/assets/treatment-analyzer-deep.png" alt="Treatment Analyzer" width="100%" />
    </td>
    <td width="50%" align="center">
      <b>Clinical Review & Event Journal</b><br/>
      <img src="public/assets/treatment-journal-review.png" alt="Treatment Journal Review" width="100%" />
    </td>
  </tr>
</table>

---

## Safety & Compliance Disclosure

- **Privacy Guaranteed**: This repository contains strictly simulated, de-identified parameters and synthetic waveforms. Zero Protected Health Information (PHI) or hospital identifiers are retained or transmitted.
- **Independent Interface**: Designed as an auxiliary monitoring and telemetry viewer to assist medical staff; never alters active dialysis pump settings or replaces primary bedside machine alarms.

---

## Getting Started

### Prerequisites

- Node.js 18.17 or higher
- npm or pnpm

### Installation & Local Run

```bash
git clone https://github.com/DinhLucent/ICURealtimeConnect_PrismaFlexOption.git
cd ICURealtimeConnect_PrismaFlexOption
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Static Export

```bash
npm run build
```

Generates a static web bundle in `out/`, pre-configured for automated deployment via GitHub Actions (`.github/workflows/deploy-pages.yml`) or Vercel.

---

## License

MIT License. Copyright (c) 2022-present Đinh Hoàng Sáng.

---
Built by [DinhLucent](https://github.com/DinhLucent)
