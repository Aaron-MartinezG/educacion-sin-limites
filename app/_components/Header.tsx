"use client";

import Link from "next/link";
import { useApp } from "@/lib/context/AppContext";

export default function Header() {
  const { usuario, isAutenticado, cerrarSesion } = useApp();

  return (
    <header className="bg-naranja text-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span>🌟</span>
          <span>Educación Sin Límites</span>
        </Link>

        {isAutenticado && (
          <nav className="flex items-center gap-4">
            <Link href="/tracks" className="hover:underline font-medium">
              Lecciones
            </Link>
            <Link href="/perfil" className="hover:underline font-medium">
              Mi Perfil
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-xl">{usuario?.avatar}</span>
              <span className="font-medium">{usuario?.nombre}</span>
            </div>
            <button
              onClick={cerrarSesion}
              className="text-sm underline opacity-80 hover:opacity-100"
            >
              Salir
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
