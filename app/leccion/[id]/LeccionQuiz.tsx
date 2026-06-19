"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/lib/context/AppContext";
import { calcularPorcentaje, obtenerMensajeFeedback } from "@/lib/utils";
import type { Leccion } from "@/lib/types";

const ILUSTRACIONES: Record<string, string> = {
  fraccion: "🍕",
  "opcion-multiple": "📖",
  completar: "✏️",
};

export default function LeccionQuiz({ leccion }: { leccion: Leccion }) {
  const { isAutenticado, actualizarProgreso, guardarResultado } = useApp();
  const router = useRouter();

  const [indice, setIndice] = useState(0);
  const [respuestas, setRespuestas] = useState<Record<string, string>>({});
  const [terminada, setTerminada] = useState(false);

  useEffect(() => {
    if (!isAutenticado) router.push("/");
  }, [isAutenticado, router]);

  if (!isAutenticado) return null;

  const total = leccion.ejercicios.length;
  const ejercicio = leccion.ejercicios[indice];
  const seleccion = respuestas[ejercicio.id] ?? null;
  const progreso = Math.round(((indice + 1) / total) * 100);
  const esCorrecta = seleccion !== null && seleccion === String(ejercicio.respuestaCorrecta);

  const aciertos = leccion.ejercicios.filter(
    (e) => respuestas[e.id] === String(e.respuestaCorrecta)
  ).length;
  const errores = Object.keys(respuestas).length - aciertos;

  const elegirOpcion = (opcion: string) => {
    if (seleccion !== null) return;
    setRespuestas((prev) => ({ ...prev, [ejercicio.id]: opcion }));
  };

  const anterior = () => {
    if (indice === 0) return;
    setIndice((i) => i - 1);
  };

  const siguiente = () => {
    if (indice + 1 < total) {
      setIndice((i) => i + 1);
      return;
    }

    guardarResultado({
      leccionId: leccion.id,
      puntaje: calcularPorcentaje(aciertos, total),
      total,
      aciertos,
      errores,
    });
    actualizarProgreso({
      leccionId: leccion.id,
      aciertos,
      errores,
      completada: true,
      fechaCompletado: new Date().toISOString(),
    });
    setTerminada(true);
  };

  if (terminada) {
    const puntaje = calcularPorcentaje(aciertos, total);
    return (
      <div className="bg-crema min-h-full">
        <section className="max-w-xl mx-auto px-6 py-16 text-center">
          <div className="bg-white rounded-3xl p-10 shadow-sm">
            <p className="text-5xl mb-4">🏆</p>
            <h1 className="text-3xl font-extrabold text-azul-oscuro mb-2">¡Lección completada!</h1>
            <p className="text-gris text-lg mb-6">{obtenerMensajeFeedback(puntaje)}</p>
            <p className="text-gris-oscuro font-semibold mb-8">
              Acertaste {aciertos} de {total} ({puntaje}%)
            </p>
            <Link
              href="/tracks"
              className="inline-block bg-azul-oscuro text-white font-bold text-lg py-3 px-8 rounded-xl shadow-md hover:opacity-90 transition-opacity"
            >
              Volver al mapa
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-crema min-h-full">
      <section className="max-w-xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="font-semibold text-azul-medio">Lección: {leccion.titulo}</span>
          <span className="text-gris">Progreso: {progreso}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-8">
          <div
            className="bg-amarillo h-3 rounded-full transition-all"
            style={{ width: `${progreso}%` }}
          />
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
          <h1 className="text-2xl font-extrabold text-azul-oscuro mb-2">{ejercicio.pregunta}</h1>
          <p className="text-gris mb-6">{leccion.descripcion}</p>

          <div className="relative w-32 h-32 mx-auto mb-8 flex items-center justify-center">
            <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-azul/30 rounded-full" />
            <span className="relative text-7xl select-none">
              {ILUSTRACIONES[ejercicio.tipo] ?? "✨"}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {(ejercicio.opciones ?? []).map((opcion) => {
              const elegida = seleccion === opcion;
              const correcta = opcion === String(ejercicio.respuestaCorrecta);
              let estilo = "border-2 border-azul-medio/30 text-gris-oscuro hover:border-azul-medio";
              if (seleccion !== null && correcta) {
                estilo = "border-2 border-verde-bosque bg-green-50 text-verde-bosque";
              } else if (elegida && !correcta) {
                estilo = "border-2 border-rosa bg-red-50 text-rosa";
              }
              return (
                <button
                  key={opcion}
                  onClick={() => elegirOpcion(opcion)}
                  disabled={seleccion !== null}
                  className={`py-3 rounded-xl font-semibold text-lg transition-colors ${estilo}`}
                >
                  {opcion}
                </button>
              );
            })}
          </div>

          {seleccion !== null && (
            <p className={`font-semibold mb-2 ${esCorrecta ? "text-verde-bosque" : "text-rosa"}`}>
              {esCorrecta ? "¡Correcto! 🎉" : "¡Casi! Sigue intentando 💪"}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-6">
          <button
            onClick={anterior}
            disabled={indice === 0}
            className="bg-gray-100 text-gris-oscuro font-bold py-3 px-6 rounded-xl disabled:opacity-40 hover:bg-gray-200 transition-colors"
          >
            ← Anterior
          </button>
          <button
            onClick={siguiente}
            disabled={seleccion === null}
            className="bg-azul-oscuro text-white font-bold py-3 px-6 rounded-xl disabled:opacity-40 hover:opacity-90 transition-opacity"
          >
            {indice + 1 === total ? "Finalizar" : "Siguiente →"}
          </button>
        </div>
      </section>
    </div>
  );
}
