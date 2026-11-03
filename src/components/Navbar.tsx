import React from 'react';
import { Shield, Radio } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface NavbarProps {
  onScrollToWaitlist: () => void;
  onScrollToTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollToWaitlist, onScrollToTerminal }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#05070B]/80 border-b border-white/[0.07] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-[#C5A880]/30 p-1 bg-[#0B1120] flex items-center justify-center transition-all duration-300 group-hover:border-[#C5A880] group-hover:shadow-[0_0_15px_rgba(197,168,128,0.3)]">
            <img src="/logo.png" alt="XIUD Crest" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold tracking-wider text-base text-white font-sans">
                XIUD
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#C5A880]/15 text-[#E5C388] border border-[#C5A880]/30 font-semibold tracking-widest">
                PROD
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono tracking-tight hidden sm:inline">
              XIU DEVELOPMENT
            </span>
          </div>
        </a>

        {/* Status Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-300">STATUS:</span>
          <span className="text-emerald-400 font-medium">BUILDING // PRE-LAUNCH</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onScrollToTerminal}
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/[0.04] transition-colors border border-transparent hover:border-slate-800"
          >
            <Radio className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Terminal</span>
          </button>

          <a
            href="https://github.com/xiud-bots"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white px-2.5 sm:px-3 py-1.5 rounded-md hover:bg-white/[0.04] transition-colors border border-white/[0.08]"
            title="Repositórios XIUD no GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <button
            onClick={onScrollToWaitlist}
            className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-md bg-gradient-to-r from-[#C5A880] to-[#E5C388] text-[#05070B] font-semibold hover:opacity-95 shadow-[0_0_20px_rgba(197,168,128,0.25)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Acesso Antecipado</span>
          </button>
        </div>
      </div>
    </header>
  );
};
