"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md z-50">

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center">

        <Link
          href="/"
          className="font-bold text-xl md:text-2xl"
        >
          Aura López
        </Link>

        {/* Menú escritorio */}

        <div className="hidden md:flex gap-8 text-gray-300">

          <Link href="/">Inicio</Link>

          <Link href="/about">Sobre mí</Link>

          <Link href="/experience">Experiencia</Link>

          <Link href="/projects">Proyectos</Link>

          <Link href="/contact">Contacto</Link>

        </div>

        {/* Botón móvil */}

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Menú móvil */}

      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          <div className="flex flex-col p-6 gap-6">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
            >
              Sobre mí
            </Link>

            <Link
              href="/experience"
              onClick={() => setMenuOpen(false)}
            >
              Experiencia
            </Link>

            <Link
              href="/projects"
              onClick={() => setMenuOpen(false)}
            >
              Proyectos
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}