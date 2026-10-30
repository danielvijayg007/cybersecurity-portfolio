# Publish-safe screenshots

The portfolio intentionally ships with **no fabricated screenshots**.

1. Redact private IPs, usernames, passwords, access tokens, personally identifiable information, and exploitation-sensitive material where appropriate.
2. Export real images as optimized `.webp`, `.jpg`, or `.png` files, ideally 1400–1800 px wide with clear, readable evidence.
3. Place them in this directory.
4. Open `src/data.ts`, locate the corresponding item in `evidence`, and set `file: '/evidence/your-file.webp'`.
5. Add a complete **redacted** report to `public/`, then set `vaptReportPdf` in `src/config.ts`.

The website's **Preview locally** control is only a client-side preview and does not persist files across refreshes or deploy files to a server.
