import React from 'react';
import { RefreshCw } from 'lucide-react';

export const FieldPractice: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0a0e16] border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase mb-3">
          FIELD PRACTICE
        </div>

        {/* H2 Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
          從可重複的路段，練習可持續的節奏。
        </h2>

        <div className="bg-[#121822] border border-slate-800 rounded-xl p-6 sm:p-8 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                訓練不是一味加量。當你能在相近條件下穩定完成、隔天仍可恢復日常活動，再把其中一個變因微幅往前推，讓能力慢慢跟上想走的路線。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
