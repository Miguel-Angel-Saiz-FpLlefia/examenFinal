import React from "react";
import Link from "next/link";

export interface Resource {
  id: number;
  nom: string;
  data: string;
  ciutat: string;
}

interface ResourceCardProps {
  evento: Resource;
}

export default function EventCard({ evento }: ResourceCardProps) {
  return (
    <div className="border border-amber-200 min-w-42">
      <p className="text-[rgba(255,255,255,0.4)]">{evento.id}</p>
      <h1>{evento.nom}</h1>
      <p>Ciutat: {evento.ciutat}</p>
      <p>data: {evento.data}</p>
    </div>
  );
}
