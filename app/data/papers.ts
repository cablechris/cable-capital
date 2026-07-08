export interface Paper {
  id: number;
  title: string;
  description: string;
  date: string;
  url: string;
}

export const papers: Paper[] = [
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