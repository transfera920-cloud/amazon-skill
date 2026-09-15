import React, { useState, useEffect } from 'react';
import { AbilitySelfAssessment } from '../types';
import { RotateCcw, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

const DEFAULT_ASSESSMENT: AbilitySelfAssessment = {
  fitness: 3,
  experience: 2,
  technique: 2,
  mental: 3,
  gear: 3,
};

const STORAGE_KEY = 'amazon_edu_ch07_self_check';

const DIMENSIONS: {
  key: keyof AbilitySelfAssessment;
  name: string;
  number: string;
  description: string;
}[] = [
  { key: 'fitness', name: '體能', number: '01', description: '持續步行、爬升與恢復節奏' },
  { key: 'experience', name: '經驗', number: '02', description: '路況、行程與天候的實際累積' },
  { key: 'technique', name: '技巧', number: '03', description: '步行、下降、杖與背負操作' },
  { key: 'mental', name: '心理', number: '04', description: '壓力下的節奏、溝通與調整意願' },
  { key: 'gear', name: '裝備能力', number: '05', description: '使用、保養與備援判斷' },
];

export const SelfCheck: React.FC = () => {
  const [scores, setScores] = useState<AbilitySelfAssessment>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (
            typeof parsed.fitness === 'number' &&
            typeof parsed.experience === 'number' &&
            typeof parsed.technique === 'number' &&
            typeof parsed.mental === 'number' &&
            typeof parsed.gear === 'number'
          ) {
            return parsed;
          }
        }
      } catch {
        // Fallback to default
      }
    }
    return DEFAULT_ASSESSMENT;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
    } catch {
      // Storage unavailable or disabled
    }
  }, [scores]);

  const handleScoreChange = (key: keyof AbilitySelfAssessment, value: number) => {
    setScores((prev) => ({
      ...prev,
      [key]: Math.min(5, Math.max(1, value)),
    }));
  };

  const handleReset = () => {
    setScores(DEFAULT_ASSESSMENT);
  };

  // Average calculation
  const total =
    scores.fitness + scores.experience + scores.technique + scores.mental + scores.gear;
  const average = (total / 5).toFixed(1);

  // Radar Chart Mathematics
  // 5 dimensions arranged clockwise starting at top (-90 deg):
  // 0: fitness (top, -90)
  // 1: experience (right-top, -18)
  // 2: technique (right-bottom, 54)
  // 3: mental (left-bottom, 126)
  // 4: gear (left-top, 198)
  const cx = 150;
  const cy = 150;
  const maxR = 100;
  const angles = [-90, -18, 54, 126, 198].map((deg) => (deg * Math.PI) / 180);

  const getCoordinates = (value: number, angleIndex: number) => {
    const r = (value / 5) * maxR;
    const angle = angles[angleIndex];
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  };

  // Compute polygon points for current scores
  const scoreKeys: (keyof AbilitySelfAssessment)[] = [
    'fitness',
    'experience',
    'technique',
    'mental',
    'gear',
  ];
  const radarPolygonPoints = scoreKeys
    .map((k, idx) => {
      const pt = getCoordinates(scores[k], idx);
      return `${pt.x.toFixed(1)},${pt.y.toFixed(1)}`;
    })
    .join(' ');

  // Grid levels (1 to 5)
  const gridPolygons = [1, 2, 3, 4, 5].map((lvl) => {
    return angles
      .map((angle) => {
        const r = (lvl / 5) * maxR;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  });

  return (
    <section id="self-check" className="py-20 sm:py-24 bg-[#0d121c] border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs font-mono tracking-widest text-amber-400 uppercase mb-3">
          SELF CHECK
        </div>

        {/* H2 Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
          登山能力自評表
        </h2>

        {/* Description */}
        <div className="bg-[#141a24] border border-slate-800 rounded-xl p-5 sm:p-6 mb-10 text-slate-300">
          <p className="text-base sm:text-lg leading-relaxed mb-3">
            依照你最近三次相近條件的行程，為每個面向選擇 1–5 分。
          </p>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            這不是登山許可或醫療判斷，而是一個把路線選擇拉回當下能力的起點。
          </p>
          <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-500" />
              1 基礎建立
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              3 穩定運用
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              5 能整合判斷
            </span>
          </div>
        </div>

        {/* Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: Input sliders / stepped selectors (7 cols) */}
          <div className="lg:col-span-7 bg-[#131924] border border-slate-800/90 rounded-xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="text-sm font-semibold text-slate-200">面向評估調整</div>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors focus:outline-none focus:ring-1 focus:ring-amber-500 rounded px-2 py-1"
                aria-label="重設為預設自評分數"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>重設預設值</span>
              </button>
            </div>

            {DIMENSIONS.map((dim) => {
              const currentVal = scores[dim.key];
              return (
                <div key={dim.key} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor={`slider-${dim.key}`}
                      className="text-base font-medium text-slate-200 flex items-center gap-2"
                    >
                      <span className="text-xs font-mono text-emerald-400 font-semibold">
                        {dim.number}
                      </span>
                      <span>{dim.name}</span>
                    </label>
                    <span className="text-sm font-mono font-bold text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2.5 py-0.5 rounded">
                      {currentVal} 分
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{dim.description}</p>

                  {/* Accessible range slider & button group */}
                  <div className="pt-1 flex items-center gap-3">
                    <input
                      id={`slider-${dim.key}`}
                      type="range"
                      min="1"
                      max="5"
                      step="1"
                      value={currentVal}
                      onChange={(e) => handleScoreChange(dim.key, parseInt(e.target.value, 10))}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      aria-label={`${dim.name} 分數 1 到 5`}
                    />
                  </div>

                  {/* Discrete buttons with min 44px touch targets */}
                  <div className="grid grid-cols-5 gap-1.5 pt-1" role="group" aria-label={`${dim.name} 分數快捷按鈕`}>
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => handleScoreChange(dim.key, val)}
                        className={`min-h-[44px] flex items-center justify-center rounded text-xs font-mono font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                          currentVal === val
                            ? 'bg-emerald-500 text-slate-950 font-bold'
                            : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
                        }`}
                        aria-pressed={currentVal === val}
                        aria-label={`設定 ${dim.name} 為 ${val} 分`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Radar Chart and Score Summary (5 cols) */}
          <div className="lg:col-span-5 bg-[#131924] border border-slate-800/90 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center">
            <div className="w-full flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <span className="text-xs font-mono text-slate-400 tracking-wider">ABILITY RADAR</span>
              <span className="text-xs text-emerald-400 font-mono">即時運算</span>
            </div>

            {/* SVG Radar Chart */}
            <div className="relative w-full max-w-[280px] aspect-square my-2">
              <svg
                viewBox="0 0 300 300"
                className="w-full h-full overflow-visible"
                aria-label="能力雷達圖"
                role="img"
              >
                {/* Background Grid Polygons */}
                {gridPolygons.map((pts, i) => (
                  <polygon
                    key={i}
                    points={pts}
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth={i === 4 ? '1.5' : '1'}
                    strokeDasharray={i === 4 ? undefined : '2 3'}
                  />
                ))}

                {/* Axis Radial Lines */}
                {angles.map((angle, i) => {
                  const x = cx + maxR * Math.cos(angle);
                  const y = cy + maxR * Math.sin(angle);
                  return (
                    <line
                      key={i}
                      x1={cx}
                      y1={cy}
                      x2={x}
                      y2={y}
                      stroke="#334155"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Radar Fill Area */}
                <polygon
                  points={radarPolygonPoints}
                  fill="rgba(16, 185, 129, 0.25)"
                  stroke="#10b981"
                  strokeWidth="2.5"
                />

                {/* Vertex Points */}
                {scoreKeys.map((k, idx) => {
                  const pt = getCoordinates(scores[k], idx);
                  return (
                    <circle
                      key={k}
                      cx={pt.x}
                      cy={pt.y}
                      r="4.5"
                      fill="#fbbf24"
                      stroke="#0f172a"
                      strokeWidth="1.5"
                    />
                  );
                })}

                {/* Dimension Labels around perimeter */}
                {DIMENSIONS.map((dim, idx) => {
                  const angle = angles[idx];
                  const labelR = maxR + 24;
                  const lx = cx + labelR * Math.cos(angle);
                  const ly = cy + labelR * Math.sin(angle);
                  return (
                    <text
                      key={dim.key}
                      x={lx}
                      y={ly + 4}
                      fill="#e2e8f0"
                      fontSize="11"
                      fontWeight="600"
                      textAnchor="middle"
                      fontFamily="sans-serif"
                    >
                      {dim.name} ({scores[dim.key]})
                    </text>
                  );
                })}
              </svg>
            </div>

            {/* Average Score Badge */}
            <div className="mt-4 pt-4 border-t border-slate-800 w-full flex flex-col items-center">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                綜合平均評估
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-400 tracking-tight">
                {average} <span className="text-lg font-normal text-slate-500">/ 5.0</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 max-w-xs">
                {parseFloat(average) >= 3.5
                  ? '各面向運用相對均衡，仍需針對特定長下坡或惡劣天候保留充裕緩衝。'
                  : parseFloat(average) >= 2.5
                  ? '具備基礎認知，建議在熟悉路徑循序累積經驗與負重穩定度。'
                  : '目前建議優先在安全、低風險環境下建立基本步行與體能基礎。'}
              </p>
            </div>
          </div>
        </div>

        {/* Section 9: Capability Advice (中低海拔單日健行) */}
        <div className="bg-[#121924] border border-slate-800 rounded-xl p-6 sm:p-8">
          <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase mb-2">
            ROUTE DISCRETION
          </div>

          {/* H3 Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            中低海拔單日健行
          </h3>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            可考慮路標清楚、行程約 4–6 小時的單日健行；在出發前確認天候、折返時間與每位隊員的近期狀態。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#17202d] border border-slate-800 p-4 rounded-lg flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-slate-200 mb-1">保留明確的折返時間</div>
                <p className="text-xs text-slate-400">
                  出發前設定嚴格的撤退時限，不因接近山頂而延遲回程。
                </p>
              </div>
            </div>

            <div className="bg-[#17202d] border border-slate-800 p-4 rounded-lg flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-slate-200 mb-1">安排規律短休與補給</div>
                <p className="text-xs text-slate-400">
                  每行走 50–60 分鐘短休 5–10 分鐘，主動攝取水分與熱量。
                </p>
              </div>
            </div>

            <div className="bg-[#17202d] border border-slate-800 p-4 rounded-lg flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-slate-200 mb-1">隊伍內至少有一位熟悉路線者</div>
                <p className="text-xs text-slate-400">
                  具備近期路況判讀、撤退路線與通訊點掌握的實際經驗。
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Mandatory Note */}
          <div className="border-t border-slate-800/80 pt-4 flex items-start gap-3 text-xs sm:text-sm text-slate-400">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p>
              建議僅供行前能力盤點；實際路線仍需依天候、路況、隊伍狀態與官方資訊調整。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
