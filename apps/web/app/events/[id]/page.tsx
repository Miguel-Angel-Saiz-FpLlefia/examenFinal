import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ResourceEvent({ params }: PageProps) {
  const { id } = await params;
  console.log(id);
  const evento = await fetch(`http://localhost:3001/api/events/${id}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error("Error al cargar los datos!");
      }
      return res.json();
    },
  );

  console.log(evento);

  return (
    <div className="border border-amber-200 min-w-60 h-40 flex flex-col gap-1.5 bg-blue-400 mx-auto">
      <p className="text-[rgba(0,0,0,0.8)]">#{evento.id}</p>
      <h1 className="text-center text-2xl text-amber-100">{evento.nom}</h1>
      <p className="">
        Ciutat: <strong className="text-l">{evento.ciutat}</strong>
      </p>
      <p>
        data: <strong className="text-l">{evento.data}</strong>
      </p>
      <Link href={"/events"}>Volver a los eventos</Link>
    </div>
  );
}
