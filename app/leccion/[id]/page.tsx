import { notFound } from "next/navigation";
import leccionesData from "@/data/lecciones.json";
import type { Leccion } from "@/lib/types";
import LeccionQuiz from "./LeccionQuiz";

const lecciones = leccionesData as Leccion[];

export default async function LeccionPage({ params }: PageProps<"/leccion/[id]">) {
  const { id } = await params;
  const leccion = lecciones.find((l) => l.id === id);

  if (!leccion) notFound();

  return <LeccionQuiz leccion={leccion} />;
}
