"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/lib/context/AppContext";

const MATERIAS = [
  { icono: "📊", label: "Mate" },
  { icono: "📖", label: "Lectura" },
  { icono: "🧪", label: "Ciencia" },
  { icono: "🎨", label: "Arte" },
];

const FEATURES_MEXICO = [
  "Adaptado al calendario escolar",
  "Lenguaje claro y cercano",
  "Contenido alineado al plan SEP",
  "Ejemplos de nuestra cultura",
];

export default function Home() {
  const { isAutenticado, iniciarSesion } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (isAutenticado) router.push("/tracks");
  }, [isAutenticado, router]);

  const handleEntrar = () => {
    iniciarSesion();
    router.push("/tracks");
  };

  return (
    <div className="bg-crema">
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Texto */}
        <div className="flex-1 space-y-7">
          <h1 className="text-5xl md:text-6xl font-extrabold text-azul-oscuro leading-tight">
            ¡Aprender es una
            <br />
            gran aventura!
          </h1>
          <p className="text-lg text-gris leading-relaxed max-w-sm">
            Lecciones divertidas diseñadas para ti, sin complicaciones y siempre a tu ritmo.
          </p>
          <button
            onClick={handleEntrar}
            className="bg-verde-bosque text-white font-bold text-lg py-4 px-8 rounded-xl shadow-md hover:opacity-90 transition-opacity"
          >
            ¡Empezar mi aventura ahora!
          </button>
          <div className="flex gap-3 flex-wrap pt-1">
            <span className="border-2 border-amarillo-card rounded-full px-4 py-2 text-sm font-semibold text-gris-oscuro">
              🇲🇽 Hecho en México
            </span>
            <span className="border-2 border-gray-300 rounded-full px-4 py-2 text-sm font-semibold text-gris-oscuro">
              ⭐ 100% Gratis
            </span>
          </div>
        </div>

        {/* Ilustración */}
        <div className="flex-1 relative flex justify-center items-center py-10">
          {/* Círculos decorativos */}
          <div className="absolute -top-2 right-6 w-20 h-20 bg-amarillo-card rounded-full z-0" />
          <div className="absolute -bottom-2 left-6 w-20 h-20 bg-verde rounded-full z-0 opacity-80" />

          {/* Marco de la ilustración */}
          <div className="relative z-10 rotate-1 rounded-[2rem] border-[5px] border-gray-900 overflow-hidden shadow-2xl w-full max-w-md">
            {/* Cielo */}
            <div className="relative bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100 px-4 pt-6 pb-2">
              <div className="absolute top-3 right-8 text-2xl select-none">☁️</div>
              <div className="absolute top-8 left-10 text-xl select-none">☁️</div>
              {/* Logo / insignia */}
              <div className="flex justify-center">
                <div className="inline-flex flex-col items-center bg-white/75 backdrop-blur-sm rounded-xl px-5 py-2 shadow-sm">
                  <span className="text-3xl select-none">🦅</span>
                  <span className="text-[9px] font-black text-azul-oscuro tracking-widest uppercase">
                    Educación Sin Límites
                  </span>
                </div>
              </div>
            </div>

            {/* Escena parque */}
            <div className="relative bg-gradient-to-b from-green-400 to-green-500 px-4 pt-3 pb-8 min-h-44 overflow-hidden">
              {/* Árboles de fondo */}
              <span className="absolute bottom-10 left-1 text-6xl select-none">🌳</span>
              <span className="absolute bottom-8 right-3 text-6xl select-none">🌲</span>
              {/* Niños */}
              <div className="flex justify-center items-end gap-1 relative z-10 pt-2">
                <span className="text-6xl select-none">👦</span>
                <span className="text-6xl select-none">👧</span>
                <span
                  className="text-6xl select-none"
                  style={{ display: "inline-block", transform: "scaleX(-1)" }}
                >
                  👧
                </span>
              </div>
              {/* Detalles suelo */}
              <span className="absolute bottom-2 left-12 text-base select-none">🌸</span>
              <span className="absolute bottom-1 right-14 text-base select-none">📚</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ¿POR QUÉ SOMOS DIFERENTES? ────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-azul-oscuro mb-3">
            ¿Por qué somos diferentes?
          </h2>
          <p className="text-gris text-lg">Creamos un espacio donde el error es parte del juego.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card izquierda — Lecciones divertidas */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                🚀
              </div>
              <h3 className="text-2xl font-bold text-azul-oscuro">Lecciones divertidas</h3>
            </div>
            <p className="text-gris leading-relaxed mb-8">
              Olvídate de los libros aburridos. Aquí aprendes con juegos, retos y actividades que te
              harán querer saber más cada día. Desde matemáticas hasta historia, ¡todo es una
              misión!
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {MATERIAS.map(({ icono, label }) => (
                <div
                  key={label}
                  className="border border-gray-200 rounded-xl py-4 flex flex-col items-center gap-1.5 text-sm font-medium text-gris-oscuro"
                >
                  <span className="text-2xl">{icono}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card derecha — Sin castigos */}
          <div className="md:col-span-1 bg-amarillo-card rounded-3xl p-8 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-sm">
                ❤️
              </div>
              <h3 className="text-2xl font-bold text-azul-oscuro">Sin castigos</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm flex-1">
              Si te equivocas, ¡no pasa nada! En nuestra plataforma, cada error es una oportunidad
              para ganar puntos extra y volver a intentarlo.
            </p>
            <div>
              <div className="w-full bg-yellow-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-yellow-700 h-3 rounded-full"
                  style={{ width: "85%" }}
                />
              </div>
              <p className="text-sm font-semibold text-gray-700 mt-2">
                ¡Casi llegas al siguiente nivel!
              </p>
            </div>
          </div>

          {/* Card México */}
          <div
            id="mexico"
            className="md:col-span-3 bg-verde-seccion rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="flex-1 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-verde-bosque rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                  📍
                </div>
                <h3 className="text-2xl font-bold">Hecho con amor para México</h3>
              </div>
              <p className="leading-relaxed text-green-100">
                Entendemos nuestras raíces. Todo nuestro contenido está diseñado pensando en las
                escuelas y familias mexicanas, usando ejemplos que tú conoces y amas.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-green-100">
                {FEATURES_MEXICO.map((feat) => (
                  <div key={feat} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 text-green-300 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ilustración México */}
            <div className="flex-shrink-0">
              <div className="rounded-2xl border-4 border-white shadow-xl overflow-hidden w-48 h-40 relative">
                {/* Cielo */}
                <div className="bg-gradient-to-b from-sky-400 to-sky-200 h-2/5 relative">
                  <span className="absolute right-3 top-2 text-sm select-none">☀️</span>
                  <span className="absolute left-3 top-3 text-xs select-none">☁️</span>
                </div>
                {/* Pirámide */}
                <div className="bg-gradient-to-b from-amber-500 to-amber-700 h-3/5 flex items-center justify-center">
                  <span className="text-5xl select-none">🏛️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8 text-3xl">
          ⭐
        </div>
        <h2 className="text-4xl font-extrabold text-azul-oscuro mb-4">¿Listo para comenzar?</h2>
        <p className="text-gris text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          Únete a miles de niños que ya están descubriendo que aprender puede ser el juego más
          divertido de todos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleEntrar}
            className="bg-verde-bosque text-white font-bold text-lg py-4 px-10 rounded-xl shadow-md hover:opacity-90 transition-opacity"
          >
            ¡Crear mi cuenta gratis!
          </button>
          <button className="border-2 border-azul-oscuro text-azul-oscuro font-bold text-lg py-4 px-10 rounded-xl hover:bg-azul-oscuro hover:text-white transition-colors">
            Saber más
          </button>
        </div>
        <p className="text-gris text-sm mt-6">
          No necesitas tarjeta de crédito. Solo tus ganas de aprender.
        </p>
      </section>
    </div>
  );
}
