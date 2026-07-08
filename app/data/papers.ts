export interface Paper {
  id: number;
  title: string;
  description: string;
  date: string;
  url: string;
}

export const papers: Paper[] = [
  {
    id: 3,
    title: "Stranded or Fungible? Testing the Thermodynamic Computing Moat",
    description: "Extropic's thermodynamic hardware bets its energy-based-model advantage is stranded. On the axis this study can measure, the moat looks more like a head start.",
    date: "2026",
    url: "/papers/thermodynamic-computing-moat"
  },
  {
    id: 2,
    title: "Hard Limits on Sparse Bioelectric Control",
    description: "Bioelectric repair is treated as a dose problem. It is a dimensionality problem: below a critical number of independent intervention sites, no amount of stimulation can work.",
    date: "2026",
    url: "/papers/sparse-bioelectric-control"
  },
  {
    id: 1,
    title: "Culture Without Function: Emergent Coordination in Artificial Systems",
    description: "Modeling emergent coordination through costly signals and social learning",
    date: "2025",
    url: "/papers/emergent-culture"
  }
]; 