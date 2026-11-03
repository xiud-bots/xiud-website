import React from 'react';
import { Cpu, Network, Layers, ShieldCheck } from 'lucide-react';

export const TelemetrySection: React.FC = () => {
  const metrics = [
    {
      label: 'Arquitetura de Núcleo',
      value: '96%',
      status: 'Estável',
      icon: Cpu,
      color: 'from-amber-400 to-[#C5A880]',
      desc: 'Microsserviços & Edge Runtime',
      progress: 96,
    },
    {
      label: 'Rede de Agentes IA',
      value: 'OPERACIONAL',
      status: '10 Agentes Ativos',
      icon: Network,
      color: 'from-sky-400 to-blue-500',
      desc: 'Orquestração Autônoma Hermes Core',
      progress: 100,
    },
    {
      label: 'Design System & UI',
      value: '92%',
      status: 'Pixel-Engineered',
      icon: Layers,
      color: 'from-emerald-400 to-teal-500',
      desc: 'React 19 • Tailwind CSS • Framer',
      progress: 92,
    },
    {
      label: 'Segurança & Deploy',
      value: 'PRONTO',
      status: 'Vercel + GitHub',
      icon: ShieldCheck,
      color: 'from-indigo-400 to-purple-500',
      desc: 'SSL Criptografado & Edge CDN',
      progress: 98,
    },
  ];

  return (
    <section className="py-12 w-full max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse"></span>
          <h3 className="text-xs uppercase font-mono font-semibold tracking-wider text-slate-300">
            Telemetria de Desenvolvimento // Status dos Sistemas
          </h3>
        </div>
        <div className="text-[11px] font-mono text-slate-500 flex items-center gap-3">
          <span>LATÊNCIA: 18ms</span>
          <span className="hidden sm:inline">NÓ: XIUD-GLOBAL-01</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/40 border border-white/[0.07] hover:border-[#C5A880]/30 transition-all hover:bg-slate-900/60 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono text-slate-400 tracking-wide">
                  {m.label}
                </span>
                <div className="p-1.5 rounded-md bg-white/[0.03] text-slate-400 group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xl font-bold font-mono tracking-tight text-white">
                  {m.value}
                </span>
                <span className="text-[11px] font-mono text-[#C5A880] font-medium">
                  {m.status}
                </span>
              </div>

              <div className="w-full bg-slate-800/80 h-1 rounded-full overflow-hidden mb-2">
                <div
                  className={`h-full bg-gradient-to-r ${m.color} transition-all duration-1000`}
                  style={{ width: `${m.progress}%` }}
                ></div>
              </div>

              <p className="text-[11px] text-slate-500 font-mono truncate">
                {m.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
