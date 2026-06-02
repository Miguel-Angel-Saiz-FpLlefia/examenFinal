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
    <div className="border border-amber-200 min-w-60 h-35 flex flex-col gap-1.5 bg-blue-400 mx-auto">
      <p className="text-[rgba(0,0,0,0.8)]">#{evento.id}</p>
      <h1 className="text-center text-2xl text-amber-100">{evento.nom}</h1>
      <p className="">
        Ciutat: <strong className="text-l">{evento.ciutat}</strong>
      </p>
      <p>
        data: <strong className="text-l">{evento.data}</strong>
      </p>
    </div>
  );
}
