export interface AbilityItem {
  id: string;
  number: string;
  name: string;
  description: string;
  defaultScore: number;
}

export interface TrainingStep {
  step: string;
  title: string;
  subtitle: string;
  detail: string;
}

export interface WalkingTechniqueItem {
  step: string;
  title: string;
  description: string;
}

export interface TeamRhythmStep {
  step: string;
  title: string;
  desc: string;
}

export interface TeachingUnit {
  id: string;
  number: string;
  title: string;
  intro: string;
  trainingMethod: string;
  practicalTips: string;
  commonErrors: string;
  leaderAdvice: string;
}

export interface AbilitySelfAssessment {
  fitness: number;
  experience: number;
  technique: number;
  mental: number;
  gear: number;
}
