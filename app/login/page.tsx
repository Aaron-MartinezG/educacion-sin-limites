"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useApp } from "@/lib/context/AppContext";

export default function LoginPage() {
  const { isAutenticado, iniciarSesion } = useApp();
  const router = useRouter();

  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAutenticado) router.push("/tracks");
  }, [isAutenticado, router]);

  const entrar = () => {
    iniciarSesion();
    router.push("/tracks");
  };

  const enviarFormulario = (evento: React.FormEvent) => {
    evento.preventDefault();
    if (!usuario.trim() || !contrasena.trim()) {
      setError("Escribe tu usuario y tu contraseña para continuar.");
      return;
    }
    setError("");
    entrar();
  };

  return (
    <div className="bg-crema min-h-full flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-sm p-8">
        <div className="text-center mb-8">
          <p className="text-3xl mb-2 select-none">🦅</p>
          <h1 className="text-2xl font-extrabold text-azul-oscuro mb-1">¡Bienvenido de nuevo!</h1>
          <p className="text-gris">Inicia sesión para seguir tu aventura de aprendizaje.</p>
        </div>

        <form onSubmit={enviarFormulario} className="space-y-4">
          <div>
            <label htmlFor="usuario" className="block text-sm font-semibold text-gris-oscuro mb-1.5">
              Usuario o correo
            </label>
            <input
              id="usuario"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="estudiantito@correo.com"
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gris-oscuro focus:outline-none focus:border-azul-medio transition-colors"
            />
          </div>

          <div>
            <label htmlFor="contrasena" className="block text-sm font-semibold text-gris-oscuro mb-1.5">
              Contraseña
            </label>
            <input
              id="contrasena"
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              placeholder="••••••••"
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gris-oscuro focus:outline-none focus:border-azul-medio transition-colors"
            />
          </div>

          {error && <p className="text-rosa text-sm font-semibold">{error}</p>}

          <button
            type="submit"
            className="w-full bg-azul-oscuro text-white font-bold text-lg py-3 rounded-xl shadow-md hover:opacity-90 transition-opacity"
          >
            Iniciar sesión
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 border-t border-gray-200" />
          <span className="text-xs text-gris uppercase tracking-wide">o</span>
          <div className="flex-1 border-t border-gray-200" />
        </div>

        <button
          onClick={entrar}
          className="w-full border-2 border-verde-bosque text-verde-bosque font-bold text-lg py-3 rounded-xl hover:bg-verde-bosque hover:text-white transition-colors"
        >
          Continuar como invitado
        </button>

        <p className="text-gris text-xs text-center mt-6">
          Modo demostración: cualquier usuario y contraseña te dan acceso, o entra directo como
          invitado.
        </p>

        <p className="text-center text-sm text-gris mt-4">
          <Link href="/" className="text-azul-medio font-semibold hover:underline">
            ← Volver al inicio
          </Link>
        </p>
      </div>
    </div>
  );
}
