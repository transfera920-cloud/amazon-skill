import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';

export const Conclusion: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-[#0a0e16] to-[#0d131e] border-b border-slate-800 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-12 h-12 rounded-full bg-amber-950/60 border border-amber-500/40 flex items-center justify-center text-amber-400 mx-auto mb-8">
          <ShieldCheck className="w-6 h-6" />
        </div>

        {/* Large Conclusion Header */}
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-relaxed sm:leading-snug mb-10">
          登山能力不是用來證明自己，
          <br />
          而是讓每一趟旅程都能平安回來。
        </h2>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 font-normal">
          在每一次走向稜線與山谷之前，誠實盤點五大能力、調校步頻與裝備，把最充分的安全餘裕留給回家的路。
        </p>

        {/* CTA to Self Check */}
        <div>
          <a
            href="#self-check"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-xl shadow-amber-950/40 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <span>回到能力自評</span>
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
