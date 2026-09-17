import React, { useState } from 'react';
import { Compass, Menu, X, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: '核心理念', href: '#core' },
    { name: '五大面向', href: '#ability-map' },
    { name: '能力自評', href: '#self-check' },
    { name: '訓練流程', href: '#training-flow' },
    { name: '步行技巧', href: '#walking-technique' },
    { name: '團隊行進', href: '#team-rhythm' },
    { name: '十個單元', href: '#field-guide' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0c1017]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Identifier */}
          <a
            href="https://amazon-hike.com/"
            className="flex items-center space-x-3 group text-slate-100 hover:text-white transition-colors py-2"
            aria-label="亞馬遜國家山岳協會 首頁"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-colors">
              <Compass className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs tracking-widest text-emerald-400/90 font-medium">
                亞馬遜國家山岳協會
              </span>
              <span className="text-sm font-semibold text-slate-200 tracking-wider">
                登山教育平台 · 第七章
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="主要導覽">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors font-normal"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#self-check"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-amber-200 bg-amber-950/40 hover:bg-amber-900/60 border border-amber-600/40 hover:border-amber-500 rounded-lg transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>能力自評</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? '關閉主選單' : '開啟主選單'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-[#0e141e] border-b border-slate-800 px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#self-check"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-base font-medium text-amber-200 bg-amber-950/50 border border-amber-600/50 text-center"
            >
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>先確認今天的能力</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
