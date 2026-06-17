export function calcularPorcentaje(aciertos: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((aciertos / total) * 100);
}

export function obtenerMensajeFeedback(porcentaje: number): string {
  if (porcentaje >= 90) return "¡Excelente! Eres una estrella ⭐";
  if (porcentaje >= 70) return "¡Muy bien! Sigue así 💪";
  if (porcentaje >= 50) return "¡Buen intento! Puedes mejorar 🌱";
  return "¡No te rindas! Inténtalo de nuevo 🔥";
}

export function formatearRacha(dias: number): string {
  if (dias === 1) return "1 día";
  return `${dias} días`;
}
