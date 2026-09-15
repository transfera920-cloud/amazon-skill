import React from 'react';
import { Compass, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080b11] text-slate-400 py-12 sm:py-16 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-200">
                <a
                  href="https://amazon-hike.com/intro"
                  className="hover:text-emerald-400 transition-colors"
                >
                  亞馬遜國家山岳協會
                </a>{" "}
                ／ 登山教育平台
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Chapter 07 · 體能與技巧
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400">
            <a href="#top" className="hover:text-slate-200 transition-colors">
              回頁首
            </a>
            <a href="#core" className="hover:text-slate-200 transition-colors">
              核心理念
            </a>
            <a href="#ability-map" className="hover:text-slate-200 transition-colors">
              五大面向
            </a>
            <a href="#self-check" className="hover:text-slate-200 transition-colors">
              能力自評
            </a>
            <a href="#field-guide" className="hover:text-slate-200 transition-colors">
              十個單元
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>登山安全教育非營利知識平台 · 嚴格遵守戶外安全指引</span>
          </div>
          <div className="font-mono">
            SAFE MOUNTAIN TRAVEL · 07 CAPABILITY &amp; TECHNIQUE
          </div>
        </div>
      </div>
    </footer>
  );
};
