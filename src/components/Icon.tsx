import {
  Activity, ArrowUpRight, BarChart3, BookOpen, Boxes, Clock3, Code2,
  Crosshair, FileCode2, FileText, Fingerprint, Globe2, Laptop, ListChecks,
  MemoryStick, Network, Radar, ScanSearch, Settings2, Shield,
  ShieldCheck, Terminal, Wifi, Workflow, type LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  activity: Activity, chart: BarChart3, book: BookOpen, boxes: Boxes, clock: Clock3,
  code: Code2, crosshair: Crosshair, 'file-code': FileCode2, 'file-text': FileText,
  fingerprint: Fingerprint, globe: Globe2, laptop: Laptop, list: ListChecks,
  memory: MemoryStick, network: Network, radar: Radar, scan: ScanSearch,
  settings: Settings2, shield: Shield, 'shield-check': ShieldCheck,
  terminal: Terminal, wifi: Wifi, workflow: Workflow, 'arrow-up': ArrowUpRight
};

export function FeatureIcon({ name, size = 20, className = '' }: {name:string; size?:number; className?:string}) {
  const Component = iconMap[name] || ShieldCheck;
  return <Component size={size} strokeWidth={1.8} className={className} aria-hidden="true" />;
}
