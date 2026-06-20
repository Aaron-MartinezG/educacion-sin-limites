"use client";

import { Fragment, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useApp } from "@/lib/context/AppContext";
import tracksData from "@/data/tracks.json";
import type { Track } from "@/lib/types";

const tracks = tracksData as Track[];

export default function TracksPage() {
  const { isAutenticado } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (!isAutenticado) router.push("/");
  }, [isAutenticado, router]);

  if (!isAutenticado) return null;

  return (
    <div className="bg-crema min-h-full">
      <section className="max-w-2xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-extrabold text-azul-oscuro mb-2">¡Hola, Aventurero!</h1>
        <p className="text-gris text-lg mb-14">
          ¿Qué vamos a aprender hoy? ¡Tu mapa te está esperando!
        </p>

        <div className="flex flex-col items-stretch">
          {tracks.map((track, index) => {
            const leccionActual = track.lecciones.find((l) => l.estado === "actual") ?? track.lecciones[0];
            const esMatematicas = track.materia === "matematicas";

            return (
              <Fragment key={track.id}>
                <div
                  className={`w-full sm:w-[360px] bg-white rounded-3xl p-6 shadow-sm text-left ${
                    index % 2 === 0 ? "self-start" : "self-end"
                  }`}
                >
                  <span
                    className={`inline-block text-xs font-bold uppercase tracking-wide rounded-full px-3 py-1 mb-3 ${
                      esMatematicas ? "bg-blue-50 text-azul-medio" : "bg-green-50 text-verde-bosque"
                    }`}
                  >
                    {esMatematicas ? "Matemáticas" : "Español"}
                  </span>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${
                        esMatematicas ? "bg-blue-50" : "bg-green-50"
                      }`}
                    >
                      {track.icono}
                    </div>
                    <h2 className="text-xl font-bold text-azul-oscuro">{track.nombre}</h2>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="font-semibold text-gris-oscuro">
                      {leccionActual.progreso}% completado
                    </span>
                    <span className="font-semibold text-gris">
                      {leccionActual.progreso >= 50 ? "¡Casi llegas!" : "¡Buen inicio!"}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-5">
                    <div
                      className="bg-amarillo h-3 rounded-full"
                      style={{ width: `${leccionActual.progreso}%` }}
                    />
                  </div>
                  <Link
                    href={`/leccion/${leccionActual.id}`}
                    className={`block w-full text-center font-bold py-3 rounded-xl text-white transition-opacity hover:opacity-90 ${
                      esMatematicas ? "bg-azul-oscuro" : "bg-verde-bosque"
                    }`}
                  >
                    {esMatematicas ? "¡Continuar Aventura! ▶" : "¡Ir al Bosque! 📖"}
                  </Link>
                </div>

                <div
                  className={`h-12 border-l-2 border-dashed border-gray-300 my-2 ${
                    index % 2 === 0 ? "self-start ml-10 rotate-[20deg]" : "self-end mr-10 -rotate-[20deg]"
                  }`}
                />
              </Fragment>
            );
          })}

          <div className="w-full max-w-xs mx-auto bg-gray-100 rounded-3xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-3 text-2xl">
              🔒
            </div>
            <p className="text-xs font-semibold text-gris uppercase tracking-wide mb-1">
              Siguiente nivel
            </p>
            <h3 className="text-lg font-bold text-gray-400 mb-2">Ciencias: El Espacio</h3>
            <p className="text-sm text-gris">Completa más lecciones para desbloquear este mundo.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
