let eventos = [
  {
    id: "1",
    nom: "Hackathon Fullstack",
    data: "2026-06-20",
    ciutat: "Barcelona",
  },
  {
    id: "2",
    nom: "Hackathon Backend",
    data: "2026-08-09",
    ciutat: "Madrid",
  },
  {
    id: "3",
    nom: "42 Festival",
    data: "2026-10-06",
    ciutat: "Barcelona",
  },
  {
    id: "4",
    nom: "JoCuenca",
    data: "2027-01-25",
    ciutat: "Cuenca",
  },
];

const getEventos = (req, res) => {
  res.json({ dades: eventos, total: eventos.length });
};

const getEventoById = (req, res) => {
  const { id } = req.params;
  const evento = eventos.find((c) => c.id === id);
  if (!evento) {
    return res.status(404).json({ error: "Evento no encontrado", id });
  }
  res.json(evento);
};

export { getEventos, getEventoById };
