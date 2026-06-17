"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/lib/context/AppContext";

export default function Home() {
  const { isAutenticado, iniciarSesion } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (isAutenticado) {
      router.push("/tracks");
    }
  }, [isAutenticado, router]);

  const handleEntrar = () => {
    iniciarSesion();
    router.push("/tracks");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center bg-fondo">
      <div className="mb-8 text-8xl animate-bounce">🌟</div>

      <h1 className="text-5xl font-extrabold text-naranja mb-4 leading-tight">
        ¡Educación
        <br />
        Sin Límites!
      </h1>

      <p className="text-xl text-gris max-w-md mb-10 leading-relaxed">
        Aprende Matemáticas y Español de forma divertida. ¡Gana medallas y sube tu racha! 🏅🔥
      </p>

      <div className="flex flex-col gap-4 items-center">
        <button
          onClick={handleEntrar}
          className="bg-naranja hover:bg-naranja-claro text-white font-bold text-xl py-4 px-12 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          ¡Entrar a aprender! 🚀
        </button>
        <p className="text-sm text-gris">Demo — sin necesidad de cuenta</p>
      </div>

      <div className="mt-16 flex gap-8 text-4xl">
        <span title="Matemáticas">🔢</span>
        <span title="Español">📖</span>
        <span title="Logros">🏆</span>
        <span title="Racha diaria">🔥</span>
      </div>
    </div>
  );
}
