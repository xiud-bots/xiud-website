import React from 'react';
import { Terminal, Bot, Sparkles, ArrowUpRight } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const pillars = [
    {
      step: '01',
      title: 'Engenharia Web & Cloud de Alta Performance',
      subtitle: 'Interfaces ultrarrápidas, modernas e acessíveis',
      desc: 'Construção de aplicações resilientes, SPAs/SSRs de altíssima fidelidade, design systems coesos e experiências de navegação pixel-perfect otimizadas para Core Web Vitals.',
      tags: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Edge Computing'],
      icon: Terminal,
      glow: 'group-hover:border-[#C5A880]/50 group-hover:shadow-[0_0_30px_rgba(197,168,128,0.15)]',
    },
    {
      step: '02',
      title: 'Arquitetura de Agentes Autônomos de IA',
      subtitle: 'Sistemas inteligentes orientados a objetivos complexos',
      desc: 'Orquestração de multi-agentes inteligentes capazes de colaborar, executar tarefas de engenharia, infraestrutura, análise de dados e automação cognitiva em escala.',
      tags: ['Autonomous Agents', 'Multi-Agent Trees', 'Hermes Core', 'LLM Tool Calling', 'Workflows'],
      icon: Bot,
      glow: 'group-hover:border-[#38BDF8]/50 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]',
    },
    {
      step: '03',
      title: 'Produtos Digitais, SaaS & Ferramentas Pro',
      subtitle: 'Soluções comerciais de alto impacto',
      desc: 'Desenvolvimento e monetização de softwares corporativos, extensões profissionais para navegadores e plataformas de análise de dados voltadas para o mercado global.',
      tags: ['Chrome Extensions Pro', 'SaaS Engines', 'Data Analytics', 'Stripe Integration', 'Cloud Native'],
      icon: Sparkles,
      glow: 'group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    },
  ];

  return (
    <section id="pilares" className="py-16 w-full max-w-6xl mx-auto px-4 sm:px-6 scroll-mt-24">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[#C5A880]/10 text-[#E5C388] border border-[#C5A880]/20 uppercase tracking-widest">
          Pilares Estratégicos
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
          O que estamos construindo na XIUD
        </h2>
        <p className="text-sm text-slate-400 font-sans leading-relaxed">
          Unimos precisão de engenharia de software com o estado da arte da inteligência artificial autônoma para criar plataformas digitais duráveis e velozes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className={`relative p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-white/[0.08] backdrop-blur-sm transition-all duration-300 flex flex-col justify-between group ${p.glow}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs text-[#C5A880] tracking-wider font-semibold">
                    [ PILAR {p.step} ]
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-slate-300 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#E5C388] transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mb-4">
                  {p.subtitle}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                  {p.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {p.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover indicator arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
