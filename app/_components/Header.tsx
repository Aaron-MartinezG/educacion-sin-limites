"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/lib/context/AppContext";

export default function Header() {
  const { usuario, isAutenticado, cerrarSesion } = useApp();
  const pathname = usePathname();

  const esInicio = pathname === "/";
  const esLecciones = pathname.startsWith("/tracks") || pathname.startsWith("/leccion");
  const esPerfil = pathname.startsWith("/perfil");

  const claseLink = (activo: boolean) =>
    activo
      ? "font-semibold text-azul-oscuro underline underline-offset-4 decoration-2"
      : "text-gris hover:text-azul-oscuro transition-colors";

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="font-extrabold text-xl text-azul-oscuro whitespace-nowrap">
          Educación Sin Límites
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-base">
          <Link href="/" className={claseLink(esInicio)}>
            Inicio
          </Link>
          <Link href="/tracks" className={claseLink(esLecciones)}>
            Lecciones
          </Link>
          {isAutenticado && (
            <Link href="/perfil" className={claseLink(esPerfil)}>
              Perfil
            </Link>
          )}
          <Link href="/#mexico" className="text-gris hover:text-azul-oscuro transition-colors">
            México
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {isAutenticado && usuario && (
            <>
              <span className="hidden sm:flex items-center gap-1 border-2 border-amarillo-card rounded-full px-3 py-1 text-sm font-bold text-gris-oscuro">
                🪙 {usuario.monedas}
              </span>
              <span className="hidden sm:flex items-center gap-1 bg-verde-bosque text-white rounded-full px-3 py-1 text-sm font-bold">
                ⭐ {usuario.estrellas}
              </span>
              <button
                onClick={cerrarSesion}
                className="text-sm text-gris hover:text-azul-oscuro transition-colors"
              >
                Salir
              </button>
            </>
          )}
          {!isAutenticado && (
            <Link
              href="/login"
              className="text-sm font-semibold text-azul-oscuro hover:underline"
            >
              Iniciar sesión
            </Link>
          )}
          <Link
            href={isAutenticado ? "/perfil" : "/login"}
            aria-label="Perfil"
            className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 hover:border-azul-oscuro hover:text-azul-oscuro transition-colors flex-shrink-0"
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
          </Link>
        </div>
      </div>
    </header>
  );
}
