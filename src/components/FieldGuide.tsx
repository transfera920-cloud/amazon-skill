import React, { useState } from 'react';
import { TEACHING_UNITS } from '../data/chapter07';
import {
  BookOpen,
  Activity,
  Compass,
  AlertTriangle,
  ShieldAlert,
  ChevronDown,
  Layers,
} from 'lucide-react';

export const FieldGuide: React.FC = () => {
  // We can track active expanded unit, or allow all expanded.
  // By default, open the first 2 or all, or provide expand/collapse all.
  // All units remain rendered in the DOM for search bots, screen readers, and HTML crawlers!
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    TEACHING_UNITS.forEach((unit) => {
      initial[unit.id] = true; // All open by default for complete reading accessibility!
    });
    return initial;
  });

  const [activeFilter, setActiveFilter] = useState<string>('all');

  const toggleUnit = (id: string) => {
    setExpandedUnits((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const next: Record<string, boolean> = {};
    TEACHING_UNITS.forEach((u) => (next[u.id] = true));
    setExpandedUnits(next);
  };

  const collapseAll = () => {
    const next: Record<string, boolean> = {};
    TEACHING_UNITS.forEach((u) => (next[u.id] = false));
    setExpandedUnits(next);
  };

  return (
    <section id="field-guide" className="py-20 sm:py-24 bg-[#0a0e16] border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase mb-3">
          FIELD GUIDE · TEN MODULES
        </div>

        {/* H2 Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
          十個教學單元，把能力帶回每一次行程。
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-400 max-w-3xl mb-8 leading-relaxed">
          每一節都從能力介紹、訓練方法、實務技巧、常見錯誤與領隊提醒出發。
        </p>

        {/* Quick Navigator & Controls */}
        <div className="bg-[#111722] border border-slate-800 p-4 rounded-xl mb-10 flex flex-wrap items-center justify-between gap-4">
          {/* Quick jump pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
            <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1 flex-shrink-0">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              快速跳轉:
            </span>
            {TEACHING_UNITS.map((u) => (
              <a
                key={u.id}
                href={`#${u.id}`}
                className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60 flex-shrink-0 transition-colors"
                title={u.title}
              >
                {u.number}
              </a>
            ))}
          </div>

          {/* Expand/Collapse Toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={expandAll}
              className="text-xs px-3 py-1.5 rounded bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              展開全部
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className="text-xs px-3 py-1.5 rounded bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              收合全部
            </button>
          </div>
        </div>

        {/* Units List */}
        <div className="space-y-8">
          {TEACHING_UNITS.map((unit) => {
            const isExpanded = expandedUnits[unit.id] ?? true;

            return (
              <article
                key={unit.id}
                id={unit.id}
                className="scroll-mt-24 bg-[#121924] border border-slate-800 rounded-xl overflow-hidden shadow-sm transition-all"
              >
                {/* Unit Header Bar (Clickable) */}
                <button
                  type="button"
                  onClick={() => toggleUnit(unit.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left bg-[#151e2b] hover:bg-[#182332] transition-colors border-b border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  aria-expanded={isExpanded}
                  aria-controls={`content-${unit.id}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-sm font-mono font-bold text-emerald-400 flex-shrink-0">
                      {unit.number}
                    </span>
                    {/* H3 Unit Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                      {unit.number} {unit.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block text-xs font-mono text-slate-400">
                      五段式教學
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-emerald-400' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Five Sections Content Container */}
                <div
                  id={`content-${unit.id}`}
                  className={`${isExpanded ? 'block' : 'hidden'} p-6 sm:p-8 space-y-6 bg-[#121924]`}
                >
                  {/* 1. 能力介紹 */}
                  <div className="bg-[#161f2e] border border-slate-800/80 rounded-lg p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-6 h-6 rounded bg-sky-950/70 text-sky-400 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-sm font-bold text-sky-300 font-mono tracking-wider">
                        能力介紹
                      </h4>
                    </div>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed pl-8">
                      {unit.intro}
                    </p>
                  </div>

                  {/* 2. 訓練方法 */}
                  <div className="bg-[#161f2e] border border-slate-800/80 rounded-lg p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-6 h-6 rounded bg-emerald-950/70 text-emerald-400 flex items-center justify-center flex-shrink-0">
                        <Activity className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-sm font-bold text-emerald-300 font-mono tracking-wider">
                        訓練方法
                      </h4>
                    </div>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed pl-8">
                      {unit.trainingMethod}
                    </p>
                  </div>

                  {/* 3. 實務技巧 */}
                  <div className="bg-[#161f2e] border border-slate-800/80 rounded-lg p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-6 h-6 rounded bg-indigo-950/70 text-indigo-400 flex items-center justify-center flex-shrink-0">
                        <Compass className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-sm font-bold text-indigo-300 font-mono tracking-wider">
                        實務技巧
                      </h4>
                    </div>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed pl-8">
                      {unit.practicalTips}
                    </p>
                  </div>

                  {/* 4. 常見錯誤 */}
                  <div className="bg-[#161f2e] border border-slate-800/80 rounded-lg p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-6 h-6 rounded bg-rose-950/70 text-rose-400 flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-sm font-bold text-rose-300 font-mono tracking-wider">
                        常見錯誤
                      </h4>
                    </div>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed pl-8">
                      {unit.commonErrors}
                    </p>
                  </div>

                  {/* 5. 領隊提醒 */}
                  <div className="bg-gradient-to-r from-amber-950/30 via-[#161f2e] to-[#161f2e] border border-amber-500/30 rounded-lg p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-6 h-6 rounded bg-amber-950/80 text-amber-400 flex items-center justify-center flex-shrink-0">
                        <ShieldAlert className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-sm font-bold text-amber-300 font-mono tracking-wider">
                        領隊提醒
                      </h4>
                    </div>
                    <p className="text-sm sm:text-base text-slate-100 leading-relaxed pl-8 font-medium">
                      {unit.leaderAdvice}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
