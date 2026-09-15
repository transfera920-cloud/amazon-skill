import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChapterPrinciple } from './components/ChapterPrinciple';
import { AbilityMap } from './components/AbilityMap';
import { SelfCheck } from './components/SelfCheck';
import { FieldPractice } from './components/FieldPractice';
import { TrainingFlow } from './components/TrainingFlow';
import { WalkingTechnique } from './components/WalkingTechnique';
import { TeamRhythm } from './components/TeamRhythm';
import { FieldGuide } from './components/FieldGuide';
import { Conclusion } from './components/Conclusion';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e16] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200 antialiased font-sans">
      <Navbar />
      <main id="main-content">
        <Hero />
        <ChapterPrinciple />
        <AbilityMap />
        <SelfCheck />
        <FieldPractice />
        <TrainingFlow />
        <WalkingTechnique />
        <TeamRhythm />
        <FieldGuide />
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
}
