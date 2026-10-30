/**
 * EDIT THIS FILE FIRST. These are public portfolio settings, not secrets.
 * Blank values intentionally produce clear placeholders / demo behavior.
 */
export const portfolioConfig = {
  fullName: 'DANIEL VIJAY GORREMACHU',
  shortName: 'DANIEL GORREMACHU',
  role: 'Cybersecurity & VAPT Practitioner',
  subtitle: 'Cybersecurity Enthusiast  /  VAPT  /  Security Operations',
  email: 'danielvijayg.off@gmail.com', // e.g. 'hello@example.com'; leave empty until ready to publish
  linkedIn: 'https://www.linkedin.com/in/danielvijayg007/', // e.g. 'https://www.linkedin.com/in/your-profile/'
  github: '', // e.g. 'https://github.com/yourhandle'
  location: 'BALLARI, KARNATAKA, INDIA',
  education: {
    qualification: 'MCA (Master of Computer Applications)',
    institution: 'KARNATAK UNIVERSITY, DHARWAD',
    graduationYear: '2024',
    training: 'Cybersecurity With GenAI , NIIT'
  },
  /** Add only certifications you have earned and can verify. */
  certifications: [] as { title: string; issuer: string; year: string; url?: string }[],
  /** The provided PDF is a placeholder-bearing draft; replace it with your own. */
  resumePdf: '/resume.pdf',
  /** Leave blank until a redacted VAPT report is ready for public sharing. */
  vaptReportPdf: '',
  /** Optional real contact-form endpoint, e.g. https://formspree.io/f/xxxxxxxx. */
  contactFormEndpoint: ''
};
