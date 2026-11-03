import React from 'react';
import { Globe, Shield, Heart } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#05070B] text-slate-400 py-12 px-4 sm:px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-[#C5A880]/30 p-1 bg-[#0B1120] flex items-center justify-center">
            <img src="/logo.png" alt="XIUD" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-wider text-sm text-white font-sans">
              XIUD — XIU Development
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              Engenharia de Software, Sistemas Autônomos & IA
            </span>
          </div>
        </div>

        {/* Info & Leadership */}
        <div className="text-center md:text-left text-xs font-mono space-y-1">
          <p className="text-slate-300">
            Liderança Executiva: <span className="text-[#C5A880] font-semibold">Gabriel Aragão</span> (@domaragao)
          </p>
          <p className="text-slate-500 flex items-center justify-center md:justify-start gap-1">
            <span>Construído com excelência pelo</span>
            <span className="text-slate-400 font-semibold">Core Staff XIUD</span>
            <Heart className="w-3 h-3 text-[#C5A880] inline fill-[#C5A880]/20" />
          </p>
        </div>

        {/* Badges / Links */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href="https://github.com/xiud-bots"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <span className="text-slate-700">•</span>
          <div className="flex items-center gap-1 text-emerald-400">
            <Shield className="w-3.5 h-3.5" />
            <span>Vercel Edge</span>
          </div>
          <span className="text-slate-700">•</span>
          <div className="flex items-center gap-1 text-slate-400">
            <Globe className="w-3.5 h-3.5" />
            <span>© 2025 XIUD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
