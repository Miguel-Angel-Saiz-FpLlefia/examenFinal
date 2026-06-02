import { Eventos } from "@/data/eventos";

export default function events() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {Eventos.map((evento) => (
          <div className="border border-amber-200 min-w-42">
            <p className="text-[rgba(255,255,255,0.4)]">{evento.id}</p>
            <h1>{evento.nom}</h1>
            <p>Ciutat: {evento.ciutat}</p>
            <p>data: {evento.data}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
