# AIA Calculator

AIA Calculator is a single-page React + TypeScript web app that estimates annual ROI from automating common back-office workflows. The current app focuses on a fast, marketing-friendly experience: users pick a process and provide a few staffing/cost assumptions, and the calculator immediately returns estimated annual dollar savings and hours reclaimed.

## Project Overview

### What it does today

The app lets a user configure four inputs:

1. Process to automate (scheduling, invoicing, inventory, reporting)
2. Number of employees
3. Hours worked per week
4. Average hourly rate

From those values, it computes:

- **Annual Savings ($)**
- **Hours Reclaimed (hrs/year)**

The formulas are intentionally simple and transparent:

- It assumes the chosen process consumes **20% of working time**
- It applies a process-specific **time reduction factor**
- It annualizes outcomes using **52 weeks/year**

### Architecture and stack

- **Frontend framework**: React 18 + TypeScript
- **Bundler/dev server**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Linting**: ESLint

### Code structure (high-level)

- `src/App.tsx`: Entire UI + input state + ROI calculation logic in a single component
- `src/main.tsx`: React entry point and app mounting
- `src/index.css`: Tailwind directives and base styles
- `package.json`: scripts and dependency definitions

## MVP-Ready Assessment

### Verdict: **Yes, with caveats**

This project is **MVP-ready for demo/lead-generation use** and **early stakeholder validation**, but it is **not yet production-ready for high-confidence financial decisioning**.

## Why it is MVP-ready

- **Clear core value proposition**: Quickly shows potential automation impact in money + time.
- **Working end-to-end interaction**: Inputs update outputs immediately through reactive state.
- **Simple UX**: One screen, low cognitive load, no onboarding friction.
- **Modern baseline tech**: Common, maintainable frontend stack suitable for quick iteration.

## Gaps to address after MVP (recommended next steps)

### 1) Product/logic rigor

- Expose assumptions in the UI (20% time allocation and reduction rates).
- Add configurable assumptions per industry/company size.
- Add confidence ranges (best/expected/worst case) rather than single-point outputs.
- Add input validation and guardrails for unrealistic values.

### 2) Trust and conversion readiness

- Provide explanation text for how calculations are derived.
- Offer downloadable/emailable results for follow-up.
- Track analytics events (input changes, CTA clicks, conversion funnels).
- Add clear privacy/disclaimer language for financial estimates.

### 3) Engineering hardening

- Break `App.tsx` into smaller components and a dedicated calculation module.
- Add unit tests for calculator formulas and edge cases.
- Add E2E smoke coverage for key user flows.
- Add CI checks for lint/build/test.

### 4) Accessibility and UX quality

- Improve semantic labeling and keyboard/assistive support checks.
- Validate color contrast for gradients/overlay text.
- Ensure responsive behavior on very small/mobile viewports.

### 5) Deployment and operations

- Add environment strategy for staging/production.
- Add observability (frontend error tracking).
- Add versioned release notes/changelog discipline.

## MVP-Ready status summary

- **Demo MVP**: ✅ Ready now
- **Lead-gen MVP**: ✅ Ready with minor copy/analytics additions
- **Production-grade ROI tool**: ⚠️ Needs assumption transparency, testing, and trust/compliance enhancements

---

If helpful, the next practical milestone would be: **"MVP v1.1"** with assumption controls, explanation text, event tracking, and tests for formula correctness.
