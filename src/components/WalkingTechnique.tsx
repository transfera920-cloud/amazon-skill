import React from 'react';
import { WALKING_TECHNIQUE_CORE, WALKING_TECHNIQUES } from '../data/chapter07';
import { DownhillTechniqueSvg } from './svg/MountainGraphics';
import { Compass } from 'lucide-react';

export const WalkingTechnique: React.FC = () => {
  return (
    <section id="walking-technique" className="py-20 sm:py-24 bg-[#0a0e16] border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase mb-3">
          WALKING TECHNIQUE
        </div>

        {/* H2 Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
          讓每一步，都有下一步的餘裕。
        </h2>

        {/* Core Philosophy */}
        <div className="bg-[#121822] border border-slate-800 rounded-xl p-6 sm:p-7 mb-10 text-slate-200">
          <p className="text-base sm:text-lg leading-relaxed font-normal">
            {WALKING_TECHNIQUE_CORE}
          </p>
        </div>

        {/* Downhill Control Subheading & Graphic */}
        <div className="bg-[#111722] border border-slate-800/90 rounded-xl p-6 sm:p-8 mb-10 overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
                TECHNIQUE IN DETAIL
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                DOWNHILL CONTROL
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>下坡重心與落點控制教學圖示</span>
            </div>
          </div>

          {/* SVG Diagram */}
          <div className="w-full bg-[#0d131d] rounded-lg p-2 sm:p-4 border border-slate-800/60 mb-8">
            <DownhillTechniqueSvg className="w-full h-auto max-h-[340px] mx-auto" />
          </div>

          {/* Three Techniques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WALKING_TECHNIQUES.map((tech) => (
              <div
                key={tech.step}
                className="bg-[#151d2a] border border-slate-800 p-5 rounded-lg flex flex-col justify-between group hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-amber-400 mb-2">
                    {tech.step}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-100 mb-2">{tech.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-400 uppercase">
                  STEP TECHNIQUE
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
