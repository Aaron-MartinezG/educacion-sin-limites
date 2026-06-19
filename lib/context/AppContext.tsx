"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Usuario, ProgresoLeccion, ResultadoQuiz } from "@/lib/types";

const USUARIO_MOCK: Usuario = {
  id: "usuario-demo-1",
  nombre: "Estudiantito",
  avatar: "🦊",
  racha: 5,
  fechaInicio: "2025-01-15",
  nivel: 5,
  monedas: 125,
  estrellas: 48,
  estrellasTotales: 450,
  aventurasCompletadas: 12,
  logrosObtenidos: 8,
  logrosTotales: 20,
};

interface AppContextValue {
  usuario: Usuario | null;
  isAutenticado: boolean;
  progreso: ProgresoLeccion[];
  resultados: ResultadoQuiz[];
  iniciarSesion: () => void;
  cerrarSesion: () => void;
  actualizarProgreso: (progreso: ProgresoLeccion) => void;
  guardarResultado: (resultado: ResultadoQuiz) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [progreso, setProgreso] = useState<ProgresoLeccion[]>([]);
  const [resultados, setResultados] = useState<ResultadoQuiz[]>([]);

  const iniciarSesion = () => setUsuario(USUARIO_MOCK);

  const cerrarSesion = () => {
    setUsuario(null);
    setProgreso([]);
    setResultados([]);
  };

  const actualizarProgreso = (nuevo: ProgresoLeccion) => {
    setProgreso((prev) => {
      const idx = prev.findIndex((p) => p.leccionId === nuevo.leccionId);
      if (idx >= 0) {
        const copia = [...prev];
        copia[idx] = nuevo;
        return copia;
      }
      return [...prev, nuevo];
    });
  };

  const guardarResultado = (resultado: ResultadoQuiz) => {
    setResultados((prev) => {
      const idx = prev.findIndex((r) => r.leccionId === resultado.leccionId);
      if (idx >= 0) {
        const copia = [...prev];
        copia[idx] = resultado;
        return copia;
      }
      return [...prev, resultado];
    });
  };

  return (
    <AppContext.Provider
      value={{
        usuario,
        isAutenticado: usuario !== null,
        progreso,
        resultados,
        iniciarSesion,
        cerrarSesion,
        actualizarProgreso,
        guardarResultado,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp debe usarse dentro de <AppProvider>");
  return ctx;
}
