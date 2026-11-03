import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Trash2 } from 'lucide-react';

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalConsole: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-1',
      command: 'system --status',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-semibold">[INITIALIZATION SUCCESSFUL]</p>
          <p>XIUD Terminal v1.0.4 conectado ao nó central.</p>
          <p className="text-slate-400">
            Digite <code className="text-[#C5A880] font-bold">help</code> para ver os comandos ou clique nos atalhos abaixo.
          </p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let output: React.ReactNode;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-[#E5C388] font-bold">Comandos disponíveis no XIUD CLI:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 font-mono">
              <div><strong className="text-white">about</strong> — Sobre a XIU Development</div>
              <div><strong className="text-white">status</strong> — Telemetria e diagnóstico</div>
              <div><strong className="text-white">stack</strong> — Tecnologias e padrões</div>
              <div><strong className="text-white">contact</strong> — Canais de comunicação</div>
              <div><strong className="text-white">clear</strong> — Limpar terminal</div>
            </div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
            <p className="text-white font-semibold">XIUD (XIU Development) — Visão Institucional</p>
            <p>
              Somos um estúdio de engenharia avançada de software dedicado à criação de produtos digitais com velocidade extrema, alta confiabilidade e arquitetura de ponta orientada por inteligência artificial.
            </p>
            <p className="text-slate-400">
              Desenvolvemos aplicações web de alta performance, plataformas escaláveis e ecossistemas inteligentes prontos para o mercado global.
            </p>
          </div>
        );
        break;

      case 'status':
        output = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-emerald-400">● TODOS OS SISTEMAS OPERACIONAIS</p>
            <p>• Gateway de IA: Conectado e Operacional</p>
            <p>• Repositórios GitHub: Sincronizados (xiud-bots)</p>
            <p>• Edge Deploy: Vercel CDN Ativa</p>
            <p>• Fator de Confiabilidade: 99.98%</p>
          </div>
        );
        break;

      case 'stack':
        output = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-sky-400 font-bold">Stack Tecnológica Primária:</p>
            <p>• Frontend: React 19, TypeScript, Next.js, Vite, Tailwind CSS</p>
            <p>• Backend: Python (FastAPI), Node.js, Go, PostgreSQL, Redis</p>
            <p>• Agentes & IA: Automação Cognitiva, DSPy, Modelos de Linguagem Avançados</p>
            <p>• Infraestrutura: Docker, Vercel, Cloudflare, GitHub Actions</p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-[#E5C388] font-bold">Canais Oficiais de Contato:</p>
            <p>• Contato Comercial: <a href="mailto:xiudsales@gmail.com" className="text-white underline hover:text-[#C5A880]">xiudsales@gmail.com</a></p>
            <p>• Organização GitHub: <a href="https://github.com/xiud-bots" target="_blank" rel="noreferrer" className="text-white underline hover:text-[#C5A880]">github.com/xiud-bots</a></p>
          </div>
        );
        break;

      default:
        output = (
          <div className="text-xs font-mono text-rose-400">
            Comando não reconhecido: "{rawCmd}". Digite <code className="text-white underline cursor-pointer" onClick={() => executeCommand('help')}>help</code> para ver os comandos válidos.
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: rawCmd,
        output,
      },
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  return (
    <section id="terminal" className="py-16 w-full max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-24">
      <div className="rounded-2xl border border-white/[0.1] bg-slate-950/90 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="text-xs font-mono text-slate-400 ml-2 font-medium flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#C5A880]" />
              xiud-console // guest@xiud-system:~
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setHistory([])}
              className="text-[11px] font-mono text-slate-400 hover:text-white px-2 py-0.5 rounded hover:bg-white/[0.05] transition-colors flex items-center gap-1"
              title="Limpar histórico"
            >
              <Trash2 className="w-3 h-3" />
              <span className="hidden sm:inline">Limpar</span>
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-6 font-mono text-xs space-y-4 max-h-[360px] overflow-y-auto">
          {history.map((item) => (
            <div key={item.id} className="space-y-1.5 animate-fadeIn">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400 font-bold">xiud:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="pl-4 text-slate-300">{item.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Suggested Command Chips */}
        <div className="px-4 py-2.5 bg-slate-900/40 border-t border-white/[0.05] flex items-center gap-2 overflow-x-auto text-[11px] font-mono">
          <span className="text-slate-500 shrink-0 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#C5A880]" />
            Atalhos:
          </span>
          {['about', 'status', 'stack', 'contact'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2 py-0.5 rounded bg-white/[0.04] hover:bg-[#C5A880]/15 text-slate-300 hover:text-[#E5C388] border border-white/[0.06] hover:border-[#C5A880]/30 transition-all shrink-0"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Input */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/60 border-t border-white/[0.08]">
          <span className="text-emerald-400 font-mono font-bold text-xs">xiud:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="digite um comando (ex: help)..."
            className="flex-1 bg-transparent text-xs text-white placeholder-slate-600 focus:outline-none font-mono"
          />
          <button
            onClick={() => executeCommand(inputVal)}
            className="p-1.5 rounded-md hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
            title="Executar comando"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
