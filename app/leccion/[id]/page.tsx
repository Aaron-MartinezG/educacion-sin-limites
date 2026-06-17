export default async function LeccionPage({ params }: PageProps<"/leccion/[id]">) {
  const { id } = await params;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 text-center">
      <h1 className="text-4xl font-extrabold text-azul mb-4">Lección {id} 📚</h1>
      <p className="text-gris text-lg">
        Aquí irá el motor de quizzes y ejercicios interactivos.
        <br />
        <span className="text-sm">(Pantalla a cargo de Christian — Fase 3)</span>
      </p>
    </div>
  );
}
