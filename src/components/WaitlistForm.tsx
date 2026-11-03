import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Sparkles, Key, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [protocol, setProtocol] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [waitlistCount, setWaitlistCount] = useState(64);

  useEffect(() => {
    const saved = localStorage.getItem('xiud_waitlist_registered');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setProtocol(data.protocol);
        setStatus('success');
      } catch {
        // ignore
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setStatus('error');
      setErrorMessage('Por favor, insira um endereço de e-mail válido.');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      const generatedProtocol = `XIUD-${Math.floor(1000 + Math.random() * 9000)}-ALPHA`;
      setProtocol(generatedProtocol);
      setStatus('success');
      setWaitlistCount((prev) => prev + 1);

      localStorage.setItem(
        'xiud_waitlist_registered',
        JSON.stringify({
          email: email.trim(),
          protocol: generatedProtocol,
          timestamp: new Date().toISOString(),
        })
      );

      // Trigger high-tech champagne gold confetti
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#C5A880', '#E5C388', '#38BDF8', '#FFFFFF'],
        });
      } catch {
        // confetti fallback
      }
    }, 700);
  };

  return (
    <div className="w-full max-w-xl mx-auto scroll-mt-28" id="waitlist-section">
      {status === 'success' ? (
        <div className="p-6 rounded-xl bg-slate-900/90 border border-[#C5A880]/40 backdrop-blur-xl shadow-[0_0_30px_rgba(197,168,128,0.15)] text-left transition-all animate-fadeIn">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#C5A880]/15 text-[#E5C388] border border-[#C5A880]/30 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold uppercase">
                  Acesso Registrado
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Protocolo: <strong className="text-white">{protocol}</strong>
                </span>
              </div>
              <h4 className="text-base font-semibold text-white">
                Você está na lista prioritária da XIUD
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Seu endereço foi registrado na lista de espera dos nossos sistemas. Enviaremos notificações exclusivas assim que o portal oficial e os primeiros produtos forem liberados.
              </p>
              <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Posição estimada na fila de ativação: #{waitlistCount}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative space-y-3">
          <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-1.5 rounded-xl bg-slate-900/80 border border-white/[0.1] focus-within:border-[#C5A880]/60 focus-within:shadow-[0_0_25px_rgba(197,168,128,0.2)] transition-all">
            <div className="relative flex-1 flex items-center pl-3">
              <Key className="w-4 h-4 text-slate-500 shrink-0 mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Informe seu e-mail corporativo ou pessoal..."
                className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none py-2 font-mono"
                disabled={status === 'loading'}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#C5A880] to-[#E5C388] text-[#05070B] font-semibold text-xs tracking-wide uppercase font-mono hover:opacity-95 transition-all shadow-[0_0_15px_rgba(197,168,128,0.3)] disabled:opacity-50 shrink-0"
            >
              {status === 'loading' ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-[#05070B] border-t-transparent rounded-full animate-spin"></span>
                  <span>Registrando...</span>
                </>
              ) : (
                <>
                  <span>Solicitar Acesso</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 text-xs font-mono text-rose-400 pl-2">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="flex items-center justify-between px-2 text-[11px] font-mono text-slate-500">
            <span>● Acesso pré-lançamento estritamente confidencial</span>
            <span className="text-slate-400 font-medium">+{waitlistCount} pioneiros na fila</span>
          </div>
        </form>
      )}
    </div>
  );
};
