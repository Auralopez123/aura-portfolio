import Navbar from "@/components/Navbar";
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <section className="max-w-4xl mx-auto px-8 pt-32 pb-20">

        <p className="text-violet-400 mb-4">
          Contacto
        </p>

        <div className="space-y-6">

          <a
            href="mailto:auralopezcarabali@gmail.com"
            className="flex items-center gap-4 bg-slate-900 p-6 rounded-2xl hover:bg-slate-800 transition"
          >
            <FaEnvelope className="text-violet-400 text-2xl" />
            <div>
              <h3 className="font-semibold">
                Correo
              </h3>
              <p className="text-gray-300">
                auralopezcarabali@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/auralopez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-slate-900 p-6 rounded-2xl hover:bg-slate-800 transition"
          >
            <FaLinkedin className="text-violet-400 text-2xl" />
            <div>
              <h3 className="font-semibold">
                LinkedIn
              </h3>
              <p className="text-gray-300">
                linkedin.com/in/auralopez
              </p>
            </div>
          </a>

          <a
            href="https://instagram.com/auralopezcarabali"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-slate-900 p-6 rounded-2xl hover:bg-slate-800 transition"
          >
            <FaInstagram className="text-violet-400 text-2xl" />
            <div>
              <h3 className="font-semibold">
                Instagram
              </h3>
              <p className="text-gray-300">
                @auralopezcarabali
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-slate-900 p-6 rounded-2xl">
            <FaMapMarkerAlt className="text-violet-400 text-2xl" />
            <div>
              <h3 className="font-semibold">
                Ubicación
              </h3>
              <p className="text-gray-300">
                Neiva, Huila, Colombia
              </p>
            </div>
          </div>

        </div>

      </section>
    </main>
  );
}