import { motion } from 'motion/react';
import { Activity, Check, Fingerprint, LockKeyhole, Network } from 'lucide-react';

/** An original decorative illustration. It does not depict live telemetry or results. */
export function NetworkVisual() {
  const nodes = [
    [112, 124], [235, 64], [360, 112], [456, 64], [530, 165],
    [72, 270], [200, 239], [336, 245], [490, 305], [126, 404],
    [282, 400], [419, 431], [542, 407]
  ];
  const links = [[0,1],[0,5],[0,6],[1,2],[1,6],[2,3],[2,7],[2,4],[3,4],[4,8],[5,6],[5,9],[6,7],[6,9],[6,10],[7,8],[7,10],[7,11],[8,12],[8,11],[9,10],[10,11],[11,12]];
  return (
    <div className="relative isolate mx-auto h-[430px] w-full max-w-[565px] sm:h-[530px]" aria-label="Decorative illustration of an isolated security testing network" role="img">
      <div className="absolute inset-0 rounded-[34px] border border-slate-200/80 bg-white/65 shadow-[0_32px_90px_-40px_rgba(15,23,42,.23)] backdrop-blur-sm dark:border-slate-700 dark:bg-[#14212a]/80" />
      <div className="absolute inset-0 overflow-hidden rounded-[34px] network-grid" />
      <div className="absolute left-6 top-6 z-10 flex items-center gap-2 rounded-full border border-teal-200 bg-white px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[.12em] text-teal-700 shadow-sm dark:border-teal-900 dark:bg-slate-900 dark:text-teal-300 sm:left-8 sm:top-8">
        <span className="h-1.5 w-1.5 rounded-full bg-teal-500" /> Authorized lab environment
      </div>
      <div className="absolute right-6 top-7 z-10 font-mono text-[10px] tracking-[.12em] text-slate-400 dark:text-slate-500">FIG. 01 / NETWORK</div>
      <svg className="absolute inset-0 h-full w-full p-4" viewBox="0 0 620 500" fill="none" aria-hidden="true">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop stopColor="#0D9488" stopOpacity=".18"/><stop offset="1" stopColor="#0D9488" stopOpacity="0"/></radialGradient>
          <linearGradient id="line" x1="0" y1="0" x2="600" y2="500"><stop stopColor="#94a3b8" stopOpacity=".16"/><stop offset=".6" stopColor="#0D9488" stopOpacity=".32"/><stop offset="1" stopColor="#94a3b8" stopOpacity=".11"/></linearGradient>
        </defs>
        <circle cx="325" cy="250" r="220" fill="url(#glow)" />
        <circle cx="325" cy="250" r="180" stroke="#0D9488" strokeOpacity=".14" strokeDasharray="3 10" />
        <circle cx="325" cy="250" r="127" stroke="#0D9488" strokeOpacity=".18" />
        <circle cx="325" cy="250" r="79" stroke="#0D9488" strokeOpacity=".22" strokeDasharray="5 7" />
        {links.map(([a,b], i) => <path key={i} d={`M ${nodes[a][0]} ${nodes[a][1]} L ${nodes[b][0]} ${nodes[b][1]}`} stroke="url(#line)" strokeWidth="1.5" />)}
        {nodes.map(([x,y],i) => <g key={i}><circle cx={x} cy={y} r="11" fill="#0D9488" fillOpacity=".08"/><circle cx={x} cy={y} r="3.5" fill={i % 4 === 0 ? '#0D9488' : '#94A3B8'} /></g>)}
        <circle cx="325" cy="250" r="64" fill="#F8FAFC" stroke="#0D9488" strokeOpacity=".25" strokeWidth="2" className="dark:fill-[#14212a]" />
        <path d="M325 211l35 13v25c0 23-15 42-35 49-20-7-35-26-35-49v-25l35-13z" fill="#0D9488" fillOpacity=".10" stroke="#0D9488" strokeWidth="2.5" />
        <path d="M310 251l10 10 22-24" stroke="#0D9488" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <motion.div initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .4, duration: .6 }} className="absolute bottom-20 left-3 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-[0_18px_50px_-20px_rgba(15,23,42,.32)] dark:border-slate-700 dark:bg-slate-900/95 sm:bottom-23 sm:left-[-22px] sm:p-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-400"><Network size={20}/></span>
        <div><div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Methodology</div><div className="mt-0.5 text-xs font-extrabold text-slate-800 dark:text-white sm:text-sm">Scope → Validate → Report</div></div>
      </motion.div>
      <motion.div initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .65, duration: .6 }} className="absolute bottom-10 right-3 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[0_18px_50px_-20px_rgba(15,23,42,.25)] dark:border-slate-700 dark:bg-slate-900/95 sm:bottom-14 sm:right-[-14px] sm:p-5">
        <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800 dark:text-white"><Fingerprint size={15} className="text-teal-600"/> Evidence integrity</div>
        <div className="mt-2 flex gap-1.5">{[12,16,8,20,12,17,10,19,7,13].map((w,i)=><span key={i} style={{width:w}} className="h-1.5 rounded-full bg-teal-500/65" />)}</div>
        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-teal-700 dark:text-teal-400"><Check size={12}/> SHA-256 verification workflow</div>
      </motion.div>
      <div className="absolute bottom-6 left-7 flex items-center gap-3 text-slate-400 dark:text-slate-500"><LockKeyhole size={13}/><Activity size={13}/><span className="font-mono text-[9px] tracking-[.13em]">ETHICAL TESTING • DOCUMENTED EVIDENCE</span></div>
    </div>
  );
}
