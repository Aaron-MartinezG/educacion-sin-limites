"use client";

import Link from "next/link";
import { useApp } from "@/lib/context/AppContext";

export default function Header() {
  const { isAutenticado, cerrarSesion } = useApp();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl text-azul-oscuro">
          Educación Sin Límites
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-base">
          <Link
            href="/"
            className="font-semibold text-azul-oscuro underline underline-offset-4 decoration-2"
          >
            Inicio
          </Link>
          <Link href="/tracks" className="text-gris hover:text-azul-oscuro transition-colors">
            Lecciones
          </Link>
          <Link href="/#mexico" className="text-gris hover:text-azul-oscuro transition-colors">
            México
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {isAutenticado && (
            <button
              onClick={cerrarSesion}
              className="text-sm text-gris hover:text-azul-oscuro transition-colors"
            >
              Salir
            </button>
          )}
          <button
            aria-label="Perfil"
            className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 hover:border-azul-oscuro hover:text-azul-oscuro transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
