export default function Footer() {
  return (
    <footer className="bg-crema border-t border-gray-200 py-14 text-center">
      <p className="font-extrabold text-2xl text-azul-oscuro mb-6">Educación Sin Límites</p>

      <div className="flex justify-center gap-6 mb-8 text-sm flex-wrap">
        {["Privacidad", "Términos", "Ayuda", "Para Padres"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-azul-oscuro underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="flex justify-center gap-3 mb-6">
        <button
          aria-label="Compartir"
          className="w-11 h-11 rounded-full border-2 border-azul-oscuro flex items-center justify-center text-azul-oscuro hover:bg-azul-oscuro hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          aria-label="Correo"
          className="w-11 h-11 rounded-full border-2 border-azul-oscuro flex items-center justify-center text-azul-oscuro hover:bg-azul-oscuro hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
        </button>
      </div>

      <p className="text-gris text-sm">Hecho con amor para México © 2024</p>
    </footer>
  );
}
