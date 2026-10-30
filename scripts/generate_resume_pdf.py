"""Generate a publication-safe PDF resume draft; replace placeholder fields before submitting.

Run: python scripts/generate_resume_pdf.py
The portfolio's live, print-friendly resume is driven by src/config.ts instead.
"""
from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'public' / 'resume.pdf'
FONT='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
BOLD='/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
if Path(FONT).exists():
    pdfmetrics.registerFont(TTFont('PortfolioSans',FONT))
    pdfmetrics.registerFont(TTFont('PortfolioSans-Bold',BOLD))
else:
    FONT='Helvetica'; BOLD='Helvetica-Bold'
FONT_NAME='PortfolioSans' if FONT.endswith('.ttf') else FONT
BOLD_NAME='PortfolioSans-Bold' if BOLD.endswith('.ttf') else BOLD
NAVY=colors.HexColor('#0F172A'); TEAL=colors.HexColor('#0D9488'); SLATE=colors.HexColor('#475569'); LIGHT=colors.HexColor('#E2E8F0')
styles={
    'name':ParagraphStyle('name',fontName=BOLD_NAME,fontSize=20,leading=26,textColor=NAVY,spaceAfter=5),
    'role':ParagraphStyle('role',fontName=BOLD_NAME,fontSize=10.5,leading=15,textColor=TEAL,spaceAfter=5),
    'meta':ParagraphStyle('meta',fontName=FONT_NAME,fontSize=8,leading=12,textColor=SLATE,spaceAfter=0),
    'head':ParagraphStyle('head',fontName=BOLD_NAME,fontSize=9,leading=12,textColor=TEAL,spaceBefore=14,spaceAfter=6),
    'body':ParagraphStyle('body',fontName=FONT_NAME,fontSize=8.5,leading=14,textColor=SLATE,spaceAfter=4),
    'small':ParagraphStyle('small',fontName=FONT_NAME,fontSize=7,leading=11,textColor=SLATE,spaceAfter=2),
    'bullet':ParagraphStyle('bullet',fontName=FONT_NAME,fontSize=8,leading=13,textColor=SLATE,leftIndent=12,firstLineIndent=-9,spaceAfter=3),
}

def P(text,style='body'):return Paragraph(text, styles[style])
def heading(text):return P(text.upper(),'head')

pdf=SimpleDocTemplate(str(OUTPUT),pagesize=A4,rightMargin=46,leftMargin=46,topMargin=40,bottomMargin=40,title='Cybersecurity & VAPT Practitioner — Resume Draft',author='Portfolio draft',subject='Entry-level cybersecurity resume with editable placeholders')
flow=[P('[Your Full Name]','name'),P('CYBERSECURITY &amp; VAPT PRACTITIONER','role'),P('[City, Country]  |  [Professional Email]  |  [LinkedIn URL]  |  [GitHub URL]','meta'),Spacer(1,11),HRFlowable(width='100%',thickness=1.4,color=TEAL),heading('Professional summary'),P('Aspiring cybersecurity practitioner with documented hands-on experience in an authorized virtual lab. Experience includes vulnerability assessment, controlled penetration testing, web security testing, Windows security reviews, memory-forensics exercises, network analysis, endpoint event monitoring and risk-based VAPT documentation. Emphasis on ethical testing, reproducible evidence and clear remediation advice.'),heading('Technical capabilities'),P('<b>Offensive security:</b> Nmap, Nessus, Metasploit lab exercises, Kali Linux, SQLmap, DVWA, Mutillidae, SQL injection and LFI testing.'),P('<b>Defensive and monitoring:</b> Windows Event Viewer, Wazuh agent setup/troubleshooting, Avast/EICAR validation, Windows security policy and hardening review.'),P('<b>Forensics and network:</b> Volatility, Practice_1.vmem, Wireshark, TCP/IP, SHA-256 integrity verification, Hyper-V, GNS3 and Linux CLI.'),P('<b>Framework familiarity:</b> NIST CSF, NIST SP 800-53, CIS Controls, OWASP WSTG, ISO/IEC 27001 and MITRE ATT&amp;CK.'),heading('Featured capstone project'),P('<b>Vulnerability Assessment &amp; Penetration Testing — Comprehensive Cybersecurity Lab Assessment</b>'),P('Scope: Kali Linux, Windows 7, Metasploitable 2 and intentionally vulnerable training web apps.'),P('• Built and tested a constrained virtual lab with configured networking and phased VM usage.','bullet'),P('• Assessed exposed network services; validated the intentionally exposed root bind shell on TCP 1524 with root identity evidence.','bullet'),P('• Investigated DVWA LFI and Mutillidae SQLi behavior with baseline and response/timing evidence; did not claim data extraction.','bullet'),P('• Practiced memory analysis using Practice_1.vmem and packet inspection with Wireshark; compared SHA-256 checksums.','bullet'),P('• Reviewed Windows failed-logon Event ID 4625 locally and configured Wazuh; centralized alert ingestion was not fully verified.','bullet'),P('• Consolidated findings, limitations, risk severity and remediation suggestions into VAPT documentation.','bullet'),heading('Additional laboratory work'),P('Wireless WEP capture analysis (Aircrack-ng)  •  Network scanning (Nmap / Nessus)  •  Windows endpoint security  •  Digital forensics  •  Wazuh troubleshooting  •  Simulated phishing SOAR playbook design (INC-001)'),heading('Education & certifications'),P('<b>Qualification:</b> [Degree / Qualification]  |  <b>Institution:</b> [College / University]  |  <b>Year:</b> [Graduation Year]'),P('<b>Training:</b> [Cybersecurity Course / Training Institute]'),P('<b>Verified certifications:</b> [Add completed certifications and credential links only]'),Spacer(1,12),HRFlowable(width='100%',thickness=.7,color=LIGHT),Spacer(1,5),P('DRAFT — Update identity, education, credentials and contacts before sharing. All practical work described is authorized laboratory experience; no paid industry experience or production SOAR deployment is implied.','small')]
pdf.build(flow)
print(OUTPUT)
