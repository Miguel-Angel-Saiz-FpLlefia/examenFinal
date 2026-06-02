"use client";
import React, { useState, useEffect } from "react";
import { Resource, Eventos } from "@/data/eventos";
import EventCard from "@/component/EventCard";

export default function events() {
  const [eventos, setEventos] = useState<Resource[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/events")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar los datos!");
        }
        return res.json();
      })
      .then((data) => {
        setEventos(data.dades);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "No hay datos");
        setLoading(false);
      });
  }, []);

  console.log(eventos);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {loading && <p>Cargando los datos de la api...</p>}
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {eventos.map((evento) => (
          <EventCard key={evento.id} evento={evento} />
        ))}
      </main>
    </div>
  );
}
