# Evidence-Led Cybersecurity Portfolio

A premium, responsive personal cybersecurity portfolio for an entry-level VAPT and security operations candidate. Built with **React 19 + TypeScript + Vite 6 + Tailwind CSS 4 + Motion + Lucide**. Content is based on controlled lab work, not fabricated employment or production results.

## Quick start

Prerequisite: Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

**Windows convenience:** After extracting the ZIP, double-click `START_HERE_WINDOWS.bat` to install dependencies and launch the site. This requires Node.js and an internet connection the first time.

Open the local URL printed in your terminal (usually `http://localhost:5173`). Build for production:

```bash
npm run typecheck
npm run build
npm run preview
```

`dist/` is the deployable output.

**Important build note:** Dependencies were not downloadable in the artifact-building environment, so `npm install` and a complete Vite runtime build could not be tested there. The source has been checked syntactically. Run `npm install && npm run build` before public release.

## Edit your personal details

Open **`src/config.ts`**:

- Replace `[Your Full Name]`, `YOUR NAME` and `[City, Country]`.
- Add a professional email, LinkedIn URL and GitHub URL.
- Update education/training and add **only verifiable** certifications.
- For the contact form, add `contactFormEndpoint` from a provider such as Formspree. Alternatively set `email` to use a `mailto:` draft, where the user chooses whether to send.
- Update `resumePdf` and `vaptReportPdf` with public file paths after uploading real PDFs.

**Contact form behavior:** The site starts in **explicit demo mode**. Nothing is transmitted. Once `contactFormEndpoint` is configured it uses a real POST; with only an email it opens the visitor's email application. No fake “message sent” confirmation is displayed.

## Content accuracy

`src/data.ts` is the editable source of truth for:

- Five skill groups and the 15 tools
- Seven assessment workflow stages and nine capstone phases
- Seven finding topics, each with a validation status and impact-qualified severity
- Seven practical project cards with problem, objective, methodology, outcome and skills
- Fifteen evidence items and descriptions

Do not alter the evidence statuses unless you have the actual dated proof. In particular: root bind shell on TCP 1524 was observed; VSFTPD backdoor exploitation was **not independently confirmed**; a DVWA `/etc/hostname` response was observed; SQLi effects were tested but no database exfiltration is claimed; Event ID 4625 was locally observed but end-to-end Wazuh alert ingestion was not fully verified; Splunk SOAR was a **conceptual simulated workflow**, not deployed production automation.

## Add real screenshots

1. Review and redact the actual screenshot. Do not publish passwords, tokens, personal records, unpublished exploits, or confidential internal data.
2. Save it to `public/evidence/` (prefer compressed `.webp`).
3. In `src/data.ts`, find the evidence ID and change its `file` from `''` to a path such as `'/evidence/EV-04-root-verification.webp'`.
4. Reload the website. Thumbnails and the keyboard-accessible lightbox will use the actual image.

The local image preview control is **ephemeral**; it does not write to disk, store images on the server, or persist across refreshes.

## Resume

- `public/resume.pdf` is a professional **placeholder-bearing draft**, downloadable immediately from the site.
- `/?view=resume` opens a print-friendly React resume using `src/config.ts`; click **Print / Save as PDF**.
- After editing personal details, export the updated print view to PDF and replace `public/resume.pdf`.
- The included generator `scripts/generate_resume_pdf.py` can regenerate the placeholder PDF if you have Python + ReportLab. Its textual placeholders are separate from the React config.

## VAPT report PDF

Place a **redacted** real PDF at `public/vapt-report.pdf`, then set `vaptReportPdf: '/vapt-report.pdf'` in `src/config.ts`. Until then, the site displays **Report not uploaded**, rather than a broken or fictitious link.

## Deploy

**Vercel**: Import this folder as a GitHub repository. Framework: Vite. Build command: `npm run build`. Output: `dist`. Deploy. HTTPS is provided by the platform.

**Netlify**: Import this folder/repository. Build command: `npm run build`. Publish directory: `dist`. The included `public/_redirects` supports the site's browser routes.

After deploying, replace the `og:image` URL if you prefer a branded raster image; update the site title, metadata and identity. If you use a contact provider, follow its spam protection and privacy guidance. No API secrets belong in `src/config.ts` because it is public frontend code.

## Features

- Semantic one-page site with sticky desktop and mobile navigation
- Light/dark theme, stored locally in the browser
- Original decorative network diagram (not fictitious security telemetry)
- Skills/tools cards, interactive seven-stage methodology timeline
- Nine expandable assessment phases and evidence-qualified findings
- Client-side filters and seven reusable project case-study dialogs
- Screenshot gallery with lightbox, arrow-key navigation, Escape-close, focus management, and temporary local previews
- Education and verified-credentials placeholders
- PDF resume draft + current-config printable resume
- Safe contact demo with browser validation, optional real endpoint, and no invented sends
- Reduced-motion behavior, labels, landmarks and responsive layouts

## Source tree

```text
src/
  App.tsx                  # Layout and interactive React sections
  config.ts                # Identity, credentials, URLs and contact settings
  data.ts                  # All lab findings, skills, projects and evidence
  types.ts                 # Shared TypeScript content interfaces
  index.css                # Tailwind design system and accessibility styles
  components/
    Icon.tsx               # Lucide icon registry
    NetworkVisual.tsx      # Original responsive SVG illustration
public/
  evidence/README.md       # Screenshot publishing instructions
  resume.pdf               # Draft with placeholders
  og-cover.svg             # Open Graph cover
  favicon.svg
  _redirects               # Netlify fallback
scripts/
  generate_resume_pdf.py   # Optional Python draft generator
```

### Ethical publishing note

The portfolio is for showcasing **authorized educational practice**. Always obtain permission before sharing data from any system, and ensure public evidence contains no confidential or identifying target information.


## Make your name larger or smaller

Your name is now the primary oversized heading on the homepage. Set `fullName` and `shortName` in `src/config.ts`. To adjust its display size, change the `.hero-name` `font-size` rule in `src/index.css` (currently `clamp(3.4rem, 6.4vw, 7rem)` with a mobile override). The role appears immediately below your name.
