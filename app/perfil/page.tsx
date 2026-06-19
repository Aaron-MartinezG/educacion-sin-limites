"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useApp } from "@/lib/context/AppContext";
import { formatearRacha } from "@/lib/utils";
import logrosData from "@/data/logros.json";
import type { Logro } from "@/lib/types";

const logros = logrosData as Logro[];

const RECOMPENSA = {
  nombre: "Cofre de Oro",
  progreso: 75,
  estrellasFaltantes: 3,
};

const DIFICULTAD_ESTILO: Record<string, string> = {
  facil: "bg-green-100 text-verde-bosque",
  media: "bg-amarillo-card/40 text-gris-oscuro",
  dificil: "bg-red-100 text-rosa",
};

const DIFICULTAD_LABEL: Record<string, string> = {
  facil: "Fácil",
  media: "Media",
  dificil: "Difícil",
};

export default function PerfilPage() {
  const { usuario, isAutenticado } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (!isAutenticado) router.push("/");
  }, [isAutenticado, router]);

  if (!isAutenticado || !usuario) return null;

  return (
    <div className="bg-crema min-h-full">
      <section className="max-w-3xl mx-auto px-6 py-10">
        {/* Hero */}
        <div className="bg-blue-50 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 mb-6">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-5xl flex-shrink-0 shadow-sm">
            {usuario.avatar}
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-azul-oscuro mb-2">¡Hola, Campeón!</h1>
            <p className="text-gris-oscuro mb-4">
              ¡Mira todo lo que has logrado, sigue así! Cada paso te hace más inteligente.
            </p>
            <div className="flex gap-3 justify-center md:justify-start flex-wrap">
              <span className="bg-amarillo-card text-gris-oscuro font-bold text-sm rounded-full px-4 py-1.5">
                🏅 Nivel {usuario.nivel}
              </span>
              <span className="bg-verde-bosque text-white font-bold text-sm rounded-full px-4 py-1.5">
                ⚡ ¡En racha!
              </span>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center">
            <div className="w-11 h-11 rounded-full bg-blue-50 text-azul-medio flex items-center justify-center text-xl mx-auto mb-3">
              🗺️
            </div>
            <p className="text-2xl font-extrabold text-azul-oscuro">{usuario.aventurasCompletadas}</p>
            <p className="text-sm text-gris">Aventuras completadas</p>
          </div>
          <div className="bg-white border-2 border-amarillo-card rounded-2xl p-5 text-center">
            <div className="w-11 h-11 rounded-full bg-amarillo-card/30 text-gris-oscuro flex items-center justify-center text-xl mx-auto mb-3">
              ⭐
            </div>
            <p className="text-2xl font-extrabold text-azul-oscuro">{usuario.estrellasTotales}</p>
            <p className="text-sm text-gris">Estrellas totales</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center">
            <div className="w-11 h-11 rounded-full bg-green-50 text-verde-bosque flex items-center justify-center text-xl mx-auto mb-3">
              ⏱️
            </div>
            <p className="text-2xl font-extrabold text-azul-oscuro">{formatearRacha(usuario.racha)}</p>
            <p className="text-sm text-gris">Aprendiendo seguido</p>
          </div>
        </div>

        {/* Logros */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-extrabold text-azul-oscuro">Mis Logros</h2>
          <span className="text-sm text-gris">
            {usuario.logrosObtenidos} / {usuario.logrosTotales} Ganados
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {logros.map((logro) => (
            <div
              key={logro.id}
              className={`rounded-2xl p-4 text-center border ${
                logro.obtenido ? "border-gray-200 bg-white" : "border-dashed border-gray-300 bg-gray-50"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mx-auto mb-2 ${
                  logro.obtenido ? "bg-blue-50" : "bg-gray-200"
                }`}
              >
                {logro.obtenido ? logro.icono : "🔒"}
              </div>
              <p className={`text-xs font-bold mb-1 ${logro.obtenido ? "text-azul-oscuro" : "text-gris"}`}>
                {logro.nombre}
              </p>
              {logro.obtenido && logro.dificultad && (
                <span
                  className={`inline-block text-[10px] font-bold rounded-full px-2 py-0.5 ${DIFICULTAD_ESTILO[logro.dificultad]}`}
                >
                  {DIFICULTAD_LABEL[logro.dificultad]}
                </span>
              )}
              {!logro.obtenido && <span className="text-[10px] text-gris">Nivel siguiente</span>}
            </div>
          ))}
        </div>

        {/* Camino al éxito */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-10">
          <div className="flex items-center justify-between mb-3 text-sm">
            <h3 className="text-lg font-bold text-azul-oscuro">Tu Camino al Éxito</h3>
            <span className="text-gris">
              Próximo Regalo: {RECOMPENSA.nombre}{" "}
              <span className="font-bold text-gris-oscuro">{RECOMPENSA.progreso}%</span>
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-3">
            <div className="bg-amarillo h-3 rounded-full" style={{ width: `${RECOMPENSA.progreso}%` }} />
          </div>
          <p className="text-sm text-gris text-center">
            ¡Solo te faltan {RECOMPENSA.estrellasFaltantes} estrellas para abrir el cofre!
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/tracks"
            className="inline-block bg-azul-oscuro text-white font-bold text-lg py-4 px-10 rounded-xl shadow-md hover:opacity-90 transition-opacity"
          >
            ¡A Seguir Aprendiendo! 🚀
          </Link>
        </div>
      </section>
    </div>
  );
}
