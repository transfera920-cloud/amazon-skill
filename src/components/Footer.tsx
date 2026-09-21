import React from 'react';
import { Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080b11] text-slate-400 py-10 sm:py-12 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-200">
                <a
                  href="https://amazon-hike.com/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  亞馬遜國家山岳協會
                </a>{" "}
                ／ 登山教育平台
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
      </div>
    </footer>
  );
};
