import React from 'react';
import { FIVE_ABILITIES } from '../data/chapter07';
import { ShieldCheck } from 'lucide-react';

export const AbilityMap: React.FC = () => {
  return (
    <section id="ability-map" className="py-20 sm:py-24 bg-[#0a0e16] border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase mb-3">
          ABILITY MAP
        </div>

        {/* H2 Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
          登山能力，從五個面向一起看。
        </h2>
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mb-12">
          登山能力並非單一的體力數據，而是五個緊密牽連的維度；任何一項的不足，都可能在長途或惡劣天氣下放大風險。
        </p>

        {/* Five Abilities Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {FIVE_ABILITIES.map((item) => (
            <div
              key={item.id}
              className="bg-[#121822] border border-slate-800/80 rounded-xl p-6 relative overflow-hidden group hover:border-slate-700 transition-colors"
            >
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider">
                  {item.number}
                </span>
                <span className="text-xs font-mono text-slate-400 uppercase">DIMENSION</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">{item.name}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}

          {/* Integrated summary node */}
          <div className="bg-gradient-to-br from-emerald-950/40 via-[#121822] to-[#121822] border border-emerald-500/30 rounded-xl p-6 flex flex-col justify-center">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
              SYSTEMIC BALANCE
            </span>
            <div className="text-lg font-semibold text-slate-100 mb-1">五力協同</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              單項突出無法抵銷不足。安全行進由五個面向中最脆弱的一環決定整體承受上限。
            </p>
          </div>
        </div>

        {/* SAFE RANGE Callout */}
        <div className="bg-[#131b26] border-l-4 border-amber-500 rounded-r-xl p-6 sm:p-8 shadow-sm">
          <div className="text-xs font-mono tracking-widest text-amber-400 uppercase mb-2">
            SAFE RANGE
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            能力範圍，不是限制
          </h3>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4">
            它是讓你選出更適合路線、更能照顧自己與同伴的起點。
          </p>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>誠實盤點能帶來寬廣的安全餘裕，而非阻礙你走向山林的理由。</span>
          </div>
        </div>
      </div>
    </section>
  );
};
