import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md z-50">

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center">

        <Link
          href="/"
          className="font-bold text-xl md:text-2xl"
        >
          Aura López
        </Link>

        <div className="hidden md:flex gap-8 text-gray-300">

          <Link href="/">
            Inicio
          </Link>

          <Link href="/about">
            Sobre mí
          </Link>

          <Link href="/experience">
            Experiencia
          </Link>

          <Link href="/projects">
            Proyectos
          </Link>

          <Link href="/contact">
            Contacto
          </Link>

        </div>

      </div>

    </nav>
  );
}