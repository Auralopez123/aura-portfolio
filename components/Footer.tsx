import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10">

        <h2 className="text-xl font-bold">
          Aura López
        </h2>

        <p className="text-gray-400 mt-2">
          Ingeniera de Software · Frontend Developer · QA Tester
        </p>

        <div className="flex gap-6 mt-6 text-xl">

          <a
            href="mailto:auralopezcarabali@gmail.com"
            className="hover:text-violet-400 transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://linkedin.com/in/auralopez"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/auralopezcarabali"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition"
          >
            <FaInstagram />
          </a>

        </div>

        <p className="text-gray-500 text-sm mt-8">
          © 2026 Aura López. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}