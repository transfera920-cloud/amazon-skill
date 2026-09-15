import React from 'react';
import { TEAM_RHYTHM_CORE, TEAM_RHYTHM_STEPS, TEAM_RHYTHM_NOTE } from '../data/chapter07';
import { TeamRhythmSvg } from './svg/MountainGraphics';
import { Users, Info, ChevronDown } from 'lucide-react';

export const TeamRhythm: React.FC = () => {
  return (
    <section id="team-rhythm" className="py-20 sm:py-24 bg-[#0d121c] border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase mb-3">
          TEAM RHYTHM
        </div>

        {/* H2 Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
          隊伍走得遠，靠的是彼此看得見。
        </h2>

        {/* Core Philosophy */}
        <div className="bg-[#131924] border border-slate-800 rounded-xl p-6 sm:p-7 mb-10 text-slate-200">
          <p className="text-base sm:text-lg leading-relaxed font-normal">
            {TEAM_RHYTHM_CORE}
          </p>
        </div>

        {/* Visual Formation diagram */}
        <div className="bg-[#111722] border border-slate-800/90 rounded-xl p-6 sm:p-8 mb-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">
              隊伍間距與通訊視野示意
            </span>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
              <Users className="w-3.5 h-3.5" />
              <span>動態隊形</span>
            </div>
          </div>

          <div className="w-full bg-[#0d131d] rounded-lg p-3 sm:p-6 border border-slate-800/60 mb-8 overflow-x-auto">
            <div className="min-w-[640px]">
              <TeamRhythmSvg className="w-full h-auto max-h-[160px]" />
            </div>
          </div>

          {/* Sequential Step cards */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400 tracking-wider uppercase mb-2">
              隊伍節奏傳遞鏈
            </div>
            {TEAM_RHYTHM_STEPS.map((step, idx) => (
              <div key={step.step} className="flex flex-col items-center">
                <div className="w-full bg-[#151d2a] border border-slate-800 p-4 rounded-lg flex items-center justify-between hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-md bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center text-xs font-mono font-bold text-emerald-400 flex-shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-100">{step.title}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                </div>

                {idx < TEAM_RHYTHM_STEPS.length - 1 && (
                  <div className="my-1 text-slate-600 flex items-center justify-center">
                    <ChevronDown className="w-4 h-4 text-emerald-500/70" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Note requirement */}
        <div className="bg-[#121924] border border-slate-800/90 rounded-xl p-5 sm:p-6 flex items-start gap-3">
          <Info className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            {TEAM_RHYTHM_NOTE}
          </p>
        </div>
      </div>
    </section>
  );
};
