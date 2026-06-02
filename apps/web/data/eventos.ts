export interface Resource {
  id: number;
  nom: string;
  data: string;
  ciutat: string;
}

export const Eventos: Resource[] = [
  {
    id: 1,
    nom: "Hackathon Fullstack",
    data: "2026-06-20",
    ciutat: "Barcelona",
  },
  {
    id: 2,
    nom: "Hackathon Backend",
    data: "2026-08-09",
    ciutat: "Madrid",
  },
  {
    id: 3,
    nom: "42 Festival",
    data: "2026-10-06",
    ciutat: "Barcelona",
  },
];
