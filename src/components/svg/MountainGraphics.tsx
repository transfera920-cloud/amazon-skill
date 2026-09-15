import React from 'react';

export const MountainHeroSvg: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 1200 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="skyGrad" x1="600" y1="0" x2="600" y2="420" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0c131f" stopOpacity="0.8" />
        <stop offset="40%" stopColor="#131e2e" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#0b0f17" stopOpacity="0.95" />
      </linearGradient>
      <linearGradient id="ridgeFarGrad" x1="0" y1="120" x2="1200" y2="380" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1e2c3f" stopOpacity="0.45" />
        <stop offset="50%" stopColor="#293b54" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#162232" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="ridgeMidGrad" x1="0" y1="180" x2="1200" y2="400" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1a2638" stopOpacity="0.8" />
        <stop offset="60%" stopColor="#1e324a" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#121a28" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="ridgeNearGrad" x1="0" y1="240" x2="1200" y2="420" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#111827" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#0b0f17" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="mistGrad" x1="0" y1="260" x2="1200" y2="340" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.0" />
        <stop offset="30%" stopColor="#94a3b8" stopOpacity="0.08" />
        <stop offset="70%" stopColor="#e2e8f0" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
      </linearGradient>
    </defs>

    {/* Background Base */}
    <rect width="1200" height="420" fill="url(#skyGrad)" />

    {/* Distant Ridge */}
    <path
      d="M0 240L140 190L290 230L460 140L620 210L780 120L950 200L1110 160L1200 190V420H0V240Z"
      fill="url(#ridgeFarGrad)"
    />

    {/* Contour Lines */}
    <path
      d="M50 220Q220 200 460 155Q700 190 920 150Q1080 170 1200 185"
      stroke="#38bdf8"
      strokeWidth="1"
      strokeOpacity="0.15"
      strokeDasharray="4 6"
    />
    <path
      d="M0 250Q280 230 520 180Q750 210 1020 180"
      stroke="#38bdf8"
      strokeWidth="1"
      strokeOpacity="0.1"
      strokeDasharray="3 5"
    />

    {/* Mid Ridge */}
    <path
      d="M0 280L180 220L340 265L530 185L720 250L890 190L1080 270L1200 240V420H0V280Z"
      fill="url(#ridgeMidGrad)"
    />

    {/* Morning Mist layer */}
    <ellipse cx="620" cy="300" rx="550" ry="60" fill="url(#mistGrad)" />

    {/* Fore Ridge */}
    <path
      d="M0 330L160 275L380 320L580 250L790 315L990 260L1200 325V420H0V330Z"
      fill="url(#ridgeNearGrad)"
    />

    {/* Climber Silhouette on the ridge at x=580, y=250 */}
    <g transform="translate(574, 230) scale(0.9)">
      {/* Head */}
      <circle cx="9" cy="4" r="3.2" fill="#d97706" />
      {/* Torso & pack */}
      <path d="M7 7.5L5 16L12 17L13 8.5Z" fill="#b45309" />
      {/* Backpack */}
      <rect x="2" y="8" width="4.5" height="7.5" rx="1.5" fill="#f59e0b" />
      {/* Legs walking posture */}
      <path d="M7 16L4 24L2 25" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 16L13 22L16 25" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
      {/* Trekking pole */}
      <line x1="13" y1="12" x2="18" y2="25" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="6" y1="12" x2="0" y2="25" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round" />
    </g>

    {/* Subtle Elevation Altitude Reference Line */}
    <g opacity="0.35">
      <line x1="100" y1="380" x2="1100" y2="380" stroke="#64748b" strokeWidth="1" strokeDasharray="6 8" />
      <text x="100" y="372" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">ALTITUDE GRADIENT</text>
      <text x="1080" y="372" fill="#94a3b8" fontSize="10" fontFamily="sans-serif" textAnchor="end">CHAPTER 07</text>
    </g>
  </svg>
);

export const DownhillTechniqueSvg: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 600 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="slopeGrad" x1="0" y1="100" x2="600" y2="320" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
    </defs>

    {/* Ground Terrain Slope */}
    <path
      d="M0 130 C120 150, 240 185, 360 220 C460 250, 530 270, 600 290 L600 320 L0 320 Z"
      fill="url(#slopeGrad)"
    />
    <path
      d="M0 130 C120 150, 240 185, 360 220 C460 250, 530 270, 600 290"
      stroke="#475569"
      strokeWidth="2.5"
    />

    {/* Stepping stones / stable ground points */}
    <ellipse cx="250" cy="190" rx="18" ry="6" fill="#334155" stroke="#64748b" strokeWidth="1.5" />
    <ellipse cx="370" cy="225" rx="16" ry="5" fill="#0f766e" stroke="#14b8a6" strokeWidth="1.5" />
    <ellipse cx="480" cy="260" rx="18" ry="6" fill="#334155" stroke="#64748b" strokeWidth="1.5" />

    {/* Climber Downhill posture at x=250, y=190 */}
    <g transform="translate(240, 110)">
      {/* Head */}
      <circle cx="20" cy="10" r="7" fill="#fbbf24" />
      {/* Eye sight line looking ahead to step 2/3 */}
      <line x1="26" y1="10" x2="130" y2="115" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4 3" />
      <circle cx="130" cy="115" r="4" fill="#38bdf8" />
      <text x="138" y="112" fill="#38bdf8" fontSize="11" fontWeight="bold">01 眼睛先看 2~3 步</text>

      {/* Body Torso */}
      <path d="M16 17 L22 38 L12 40 Z" fill="#f59e0b" />
      {/* Backpack */}
      <rect x="5" y="18" width="9" height="18" rx="3" fill="#d97706" />

      {/* Bent knee for shock absorption */}
      <path d="M15 38 L10 58 L10 78" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 38 L25 56 L20 78" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Foot landing quietly */}
      <path d="M6 78 L14 78" stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round" />
      <text x="-40" y="74" fill="#fbbf24" fontSize="11" fontWeight="bold">02 短步、穩定落點</text>

      {/* Pole in front assisting balance */}
      <line x1="24" y1="30" x2="48" y2="76" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="48" cy="76" r="3" fill="#10b981" />
      <text x="56" y="74" fill="#10b981" fontSize="11" fontWeight="bold">03 杖為支撐提示</text>
    </g>

    {/* Center of gravity indicator */}
    <circle cx="255" cy="148" r="4" fill="#ef4444" />
    <line x1="255" y1="148" x2="255" y2="188" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="3 3" />
    <text x="262" y="152" fill="#fca5a5" fontSize="10">重心垂直落於足弓內</text>
  </svg>
);

export const TeamRhythmSvg: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 760 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Trail line */}
    <path
      d="M30 110 Q200 90 380 110 T730 100"
      stroke="#334155"
      strokeWidth="3"
      strokeDasharray="6 6"
    />

    {/* Station 1: Leader */}
    <g transform="translate(620, 50)">
      <circle cx="20" cy="20" r="16" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="2" />
      <text x="20" y="24" fill="#93c5fd" fontSize="11" fontWeight="bold" textAnchor="middle">領</text>
      <text x="20" y="55" fill="#f1f5f9" fontSize="12" fontWeight="600" textAnchor="middle">領隊定節奏</text>
      <text x="20" y="70" fill="#94a3b8" fontSize="10" textAnchor="middle">穩定步頻與短休</text>
    </g>

    {/* Visual line to member 1 */}
    <path d="M590 70 L480 70" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" />
    <text x="535" y="62" fill="#38bdf8" fontSize="10" textAnchor="middle">可視距離</text>

    {/* Station 2: Member 1 */}
    <g transform="translate(430, 50)">
      <circle cx="20" cy="20" r="15" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
      <text x="20" y="24" fill="#e2e8f0" fontSize="11" fontWeight="bold" textAnchor="middle">員</text>
      <text x="20" y="55" fill="#f1f5f9" fontSize="12" fontWeight="600" textAnchor="middle">隊員相隨</text>
      <text x="20" y="70" fill="#94a3b8" fontSize="10" textAnchor="middle">保持視線接觸</text>
    </g>

    {/* Acoustic sound wave to member 2 */}
    <path d="M400 70 L290 70" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 4" />
    <text x="345" y="62" fill="#fbbf24" fontSize="10" textAnchor="middle">可聽距離</text>

    {/* Station 3: Member 2 */}
    <g transform="translate(240, 50)">
      <circle cx="20" cy="20" r="15" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
      <text x="20" y="24" fill="#e2e8f0" fontSize="11" fontWeight="bold" textAnchor="middle">員</text>
      <text x="20" y="55" fill="#f1f5f9" fontSize="12" fontWeight="600" textAnchor="middle">訊息傳遞</text>
      <text x="20" y="70" fill="#94a3b8" fontSize="10" textAnchor="middle">呼應或哨音確認</text>
    </g>

    {/* Buffer to Sweeper */}
    <path d="M210 70 L100 70" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" />
    <text x="155" y="62" fill="#10b981" fontSize="10" textAnchor="middle">照應緩衝</text>

    {/* Station 4: Sweeper */}
    <g transform="translate(50, 50)">
      <circle cx="20" cy="20" r="16" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
      <text x="20" y="24" fill="#6ee7b7" fontSize="11" fontWeight="bold" textAnchor="middle">壓</text>
      <text x="20" y="55" fill="#f1f5f9" fontSize="12" fontWeight="600" textAnchor="middle">壓隊照應</text>
      <text x="20" y="70" fill="#94a3b8" fontSize="10" textAnchor="middle">後方間距掌控</text>
    </g>
  </svg>
);
