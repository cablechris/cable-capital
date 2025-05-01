export interface TraitData {
  epoch: number;
  totalTraits: number;
  functionalTraits: number;
  nonFunctionalTraits: number;
}

export interface TraitPropagationData {
  epoch: number;
  originalTraits: number;
  hybridTraits: number;
  subculturalTraits: number;
  metaPreferenceTraits: number;
}

export interface MetaPreferenceData {
  epoch: number;
  alignmentScore: number;
  entropyScore: number;
  diversityScore: number;
}

export interface BaselineTraitData {
  traitId: number;
  lifespan: number;
}

export interface NetworkNode {
  id: number;
  cluster: number;
  x: number;
  y: number;
}

export interface NetworkLink {
  source: number;
  target: number;
  value: number;
}

export interface TraitSurvivalProps {
  title?: string;
  description?: string;
}

export interface TraitPropagationProps {
  title?: string;
  description?: string;
}

export interface MetaPreferenceProps {
  title?: string;
  description?: string;
}

export interface BaselineTraitProps {
  title?: string;
  description?: string;
}

export interface SubculturalNetworkProps {
  title?: string;
  description?: string;
} 