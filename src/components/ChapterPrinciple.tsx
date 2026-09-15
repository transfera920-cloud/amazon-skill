import React from 'react';
import { Eye, Activity, Shield } from 'lucide-react';

export const ChapterPrinciple: React.FC = () => {
  return (
    <section id="core" className="py-20 sm:py-24 bg-[#0d121c] border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow / Label */}
        <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase mb-3">
          CHAPTER PRINCIPLE
        </div>

        {/* H2 Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-8">
          安全登山不是挑戰身體極限，而是在能力範圍內完成旅程。
        </h2>

        {/* Core Concepts */}
        <div className="bg-[#131924] border border-slate-800 rounded-xl p-6 sm:p-8 mb-12 shadow-sm">
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-4">
            裝備可以準備，路線可以查閱；但真正把人帶回山下的，是體能、技巧與判斷能力之間的平衡。
          </p>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            這一章不教你走得更快，而是幫你看清何時該前進、放慢、調整，或停下來。
          </p>
        </div>

        {/* Three Visual Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Concept 1 */}
          <div className="bg-[#141b27] border border-slate-800/90 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-sky-950/70 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-slate-400 mb-1">01 CONCEPT</div>
              <h3 className="text-lg font-semibold text-slate-100 mb-3">看見能力差距</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                誠實審視自身目前在體能、技巧與經驗上的真實限制，不以過往巔峰或同伴能力作為今日決策基準。
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-sky-400/80 font-mono">
              GAP RECOGNITION
            </div>
          </div>

          {/* Concept 2 */}
          <div className="bg-[#141b27] border border-slate-800/90 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-amber-950/70 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-slate-400 mb-1">02 CONCEPT</div>
              <h3 className="text-lg font-semibold text-slate-100 mb-3">建立可持續節奏</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                找出呼吸、心跳與步頻能長期協同的穩定速率；登山的關鍵在於長時間的能量穩定釋放與定時補給。
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-amber-400/80 font-mono">
              SUSTAINABLE PACING
            </div>
          </div>

          {/* Concept 3 */}
          <div className="bg-[#141b27] border border-slate-800/90 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-slate-400 mb-1">03 CONCEPT</div>
              <h3 className="text-lg font-semibold text-slate-100 mb-3">保留風險餘裕</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                永遠不把體能消耗至底線，為午後變天、陡下疲勞或意外延誤保留足以安全撤退的體力與判斷能量。
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-emerald-400/80 font-mono">
              SAFETY MARGIN
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
