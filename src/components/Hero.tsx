import React from 'react';
import { MountainHeroSvg } from './svg/MountainGraphics';
import { ShieldAlert, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative w-full bg-[#0a0e16] border-b border-slate-800/80 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <MountainHeroSvg className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        {/* Sole H1 Header */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
          體能與技巧
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-3xl mb-10 font-normal">
          從體能訓練、步行技巧，
          <br className="hidden sm:inline" />
          到高山環境適應，提升登山安全能力。
        </p>

        {/* Primary CTA */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            id="hero-cta-btn"
            href="#self-check"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-lg text-base font-medium text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-950/30 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <span>先確認今天的能力</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#core"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg text-base font-normal text-slate-300 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500"
          >
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
            <span>核心登山理念</span>
          </a>
        </div>

        {/* Footnote statement */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 text-xs sm:text-sm text-slate-400 flex flex-wrap items-center gap-y-2 gap-x-6">
          <span className="text-emerald-400 font-mono tracking-wider font-semibold">
            亞馬遜國家山岳協會 · 登山教育教材
          </span>
          <span className="text-slate-500">•</span>
          <span>以評估、節奏與餘裕建立真實的安全餘裕</span>
        </div>
      </div>
    </section>
  );
};
