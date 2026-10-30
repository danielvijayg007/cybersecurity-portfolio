/**
 * Public portfolio settings. Never put passwords, API keys or secrets here.
 * These details are shown on your publicly accessible website.
 */
export const portfolioConfig = {
  fullName: 'DANIEL VIJAY GORREMACHU',
  shortName: 'DANIEL GORREMACHU',
  role: 'Cybersecurity & VAPT Practitioner',
  subtitle: 'Cybersecurity Enthusiast  /  VAPT  /  Security Operations',
  email: 'danielvijayg.off@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/danielvijayg007/',
  github: 'https://github.com/danielvijayg007',
  location: 'BALLARI, KARNATAKA, INDIA',
  education: {
    qualification: 'MCA (Master of Computer Applications)',
    institution: 'KARNATAK UNIVERSITY, DHARWAD',
    graduationYear: '2024', // Examination/completion year; formal degree conferred in 2026.
    training: 'Cybersecurity With GenAI , NIIT'
  },
  /** Public, redacted degree certificate. Do not publish your original. */
  degreeCredential: {
    title: 'Master of Computer Applications',
    university: 'Karnatak University, Dharwad',
    examination: 'October 2024',
    classification: 'First Class',
    conferralDate: '23 April 2026',
    image: '/credentials/mca-degree-public.webp',
    pdf: '/credentials/mca-degree-public.pdf'
  },
  /** Add only certifications you have earned and can verify. */
  certifications: [] as { title: string; issuer: string; year: string; url?: string }[],
  /** Existing resume PDF. Edit or replace separately if it contains placeholders. */
  resumePdf: '/resume.pdf',
  /** Leave blank until a redacted VAPT report is available. */
  vaptReportPdf: '',
  /** Configure a real form provider endpoint here, if needed. */
  contactFormEndpoint: ''
};