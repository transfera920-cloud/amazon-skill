import React from 'react';
import { TRAINING_FLOW_STEPS, TRAINING_FLOW_LEADER_NOTE } from '../data/chapter07';
import { ShieldAlert, ArrowRight } from 'lucide-react';

export const TrainingFlow: React.FC = () => {
  return (
    <section id="training-flow" className="py-20 sm:py-24 bg-[#0d121c] border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase mb-3">
          TRAINING FLOW
        </div>

        {/* H2 Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
          體能訓練，沿著一條可回頭檢視的路走。
        </h2>
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mb-12">
          循序漸進的五階進程，讓身體逐步適應山徑負荷，每一次推進都能回到前一步檢核。
        </p>

        {/* Flow visual steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12 relative">
          {TRAINING_FLOW_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="bg-[#141b27] border border-slate-800 rounded-xl p-5 flex flex-col justify-between relative group hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    {step.step}
                  </span>
                  {index < TRAINING_FLOW_STEPS.length - 1 && (
                    <ArrowRight className="hidden md:block w-3.5 h-3.5 text-slate-400 -mr-2" />
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-100 mb-1">{step.title}</h3>
                <div className="text-xs font-medium text-amber-400/90 mb-3">{step.subtitle}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{step.detail}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/70 text-[10px] font-mono text-slate-400 uppercase">
                STAGE {step.step}
              </div>
            </div>
          ))}
        </div>

        {/* Leader Note */}
        <div className="bg-[#121924] border border-amber-500/30 rounded-xl p-6 sm:p-7 flex items-start gap-4 shadow-sm">
          <div className="w-9 h-9 rounded-lg bg-amber-950/70 border border-amber-500/40 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider mb-1">
              領隊提醒
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              {TRAINING_FLOW_LEADER_NOTE}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
