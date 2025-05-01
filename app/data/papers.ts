export interface Paper {
  id: number;
  title: string;
  description: string;
  date: string;
  url: string;
}

export const papers: Paper[] = [
  {
    id: 1,
    title: "Culture Without Function: Emergent Coordination in Artificial Systems",
    description: "Modeling emergent coordination through costly signals and social learning",
    date: "2025",
    url: "/papers/emergent-culture"
  }
]; 