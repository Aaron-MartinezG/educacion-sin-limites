export interface Usuario {
  id: string;
  nombre: string;
  avatar: string;
  racha: number;
  fechaInicio: string;
}

export interface Logro {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
  obtenido: boolean;
  fechaObtenido?: string;
}

export interface Ejercicio {
  id: string;
  tipo: "opcion-multiple" | "completar" | "fraccion";
  pregunta: string;
  opciones?: string[];
  respuestaCorrecta: string | number;
  puntos: number;
}

export interface Leccion {
  id: string;
  titulo: string;
  descripcion: string;
  trackId: string;
  orden: number;
  ejercicios: Ejercicio[];
  duracionMinutos: number;
}

export interface Track {
  id: string;
  nombre: string;
  descripcion: string;
  materia: "matematicas" | "espanol";
  icono: string;
  color: string;
  lecciones: LeccionResumen[];
}

export interface LeccionResumen {
  id: string;
  titulo: string;
  orden: number;
  estado: "completada" | "actual" | "bloqueada";
  progreso: number;
}

export interface ProgresoLeccion {
  leccionId: string;
  aciertos: number;
  errores: number;
  completada: boolean;
  fechaCompletado?: string;
}

export interface ResultadoQuiz {
  leccionId: string;
  puntaje: number;
  total: number;
  aciertos: number;
  errores: number;
}
