import React from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { WaitlistForm } from './components/WaitlistForm';
import { TelemetrySection } from './components/TelemetrySection';
import { PillarsSection } from './components/PillarsSection';
import { TerminalConsole } from './components/TerminalConsole';
import { Footer } from './components/Footer';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export const App: React.FC = () => {
  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTerminal = () => {
    const el = document.getElementById('terminal');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#05070B] text-slate-100 flex flex-col justify-between selection:bg-[#C5A880]/30 selection:text-[#E5C388] font-sans">
      {/* Background canvas for floating constellation/circuits */}
      <BackgroundCanvas />

      {/* Subtle radial background glow overlays */}
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none z-0" />
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar onScrollToWaitlist={scrollToWaitlist} onScrollToTerminal={scrollToTerminal} />

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center">
        {/* HERO SECTION */}
        <section className="pt-16 sm:pt-24 pb-16 px-4 sm:px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-[#C5A880]/30 text-xs font-mono text-slate-300 shadow-[0_0_20px_rgba(197,168,128,0.15)] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse"></span>
            <span className="text-[#E5C388] font-semibold tracking-wide">
              XIU DEVELOPMENT // PROTOCOLO V1.0
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">FASE DE PRÉ-LANÇAMENTO</span>
          </div>

          {/* Majestic XIUD Emblem with Multi-layer Glow */}
          <div className="relative mb-8 group">
            {/* Ambient Backlight Halo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#C5A880]/20 via-[#38BDF8]/10 to-[#C5A880]/20 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 animate-glow"></div>

            {/* Emblem Container */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 p-3 rounded-2xl bg-[#090D16]/90 border border-[#C5A880]/40 backdrop-blur-xl shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
              <img
                src="/logo.png"
                alt="XIUD — XIU Development Shield"
                className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl">
            Engenharia de Software. <br />
            <span className="gold-text-gradient">Sistemas Autônomos.</span> <br />
            O Futuro em Construção.
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed font-sans">
            A <strong className="text-white font-semibold">XIUD (XIU Development)</strong> é uma organização dedicada à arquitetura de software de alta performance, produtos digitais de impacto e sistemas operacionais orientados por agentes autônomos. Nosso portal oficial e os primeiros produtos públicos estão sendo preparados para lançamento.
          </p>

          {/* Waitlist / Early Access Form */}
          <div className="w-full mb-12">
            <WaitlistForm />
          </div>

          {/* Highlights checklist */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Alta Performance & Confiabilidade</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Multi-Agent Orchestration</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Arquitetura de Nuvem Resiliente</span>
            </div>
          </div>
        </section>

        {/* TELEMETRY SECTION */}
        <TelemetrySection />

        {/* PILLARS SECTION */}
        <PillarsSection />

        {/* INTERACTIVE TERMINAL CONSOLE */}
        <TerminalConsole />

        {/* PRE-LAUNCH ROADMAP / FAQ ACCORDION PREVIEW */}
        <section className="py-16 w-full max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-white/[0.08] backdrop-blur-md">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#E5C388] font-bold">
                O que esperar da XIUD no lançamento oficial?
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 font-sans leading-relaxed">
              <div className="space-y-2 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
                  Ecossistema de Produtos SaaS
                </h4>
                <p className="text-slate-400">
                  Lançamento de extensões avançadas para o ecossistema web, ferramentas analíticas corporativas e soluções de inteligência de mercado sob a bandeira XIUD Pro.
                </p>
              </div>

              <div className="space-y-2 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                  Infraestrutura Agêntica Autônoma
                </h4>
                <p className="text-slate-400">
                  Documentações abertas, relatórios técnicos de engenharia e frameworks de orquestração de multi-agentes autônomos com integração LLM de ponta.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-mono">
                Dúvidas comerciais ou propostas de parcerias estratégicas?
              </span>
              <a
                href="mailto:gabriel@xiud.com"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-white bg-slate-800 hover:bg-slate-700 px-3.5 py-2 rounded-lg border border-white/[0.1] transition-colors"
              >
                <span>Falar com a Diretoria</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
