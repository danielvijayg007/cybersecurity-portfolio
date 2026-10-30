export type ProjectCategory = 'Offensive' | 'Defensive' | 'Forensics' | 'Network' | 'Governance';
export type Severity = 'Critical' | 'High' | 'Impact-dependent' | 'Needs verification';

export interface SkillGroup {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}
export interface Tool {
  name: string;
  group: string;
  note?: string;
  icon: string;
}
export interface Phase {
  number: string;
  title: string;
  summary: string;
  methods: string[];
  outcome: string;
}
export interface Finding {
  id: string;
  name: string;
  severity: Severity;
  status: string;
  component: string;
  evidence: string;
  impact: string;
  remediation: string;
  reference: string;
}
export interface Evidence {
  id: string;
  title: string;
  description: string;
  category: string;
  file: string;
  icon: string;
}
export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  kicker: string;
  problem: string;
  objective: string;
  tools: string[];
  methods: string[];
  outcome: string;
  skills: string[];
  evidenceIds: string[];
  icon: string;
}
