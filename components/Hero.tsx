import Link from "next/link";
import {
FaLinkedin,
FaInstagram,
FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
return ( <section
   id="inicio"
   className="min-h-screen flex items-center pt-24"
 > <div className="grid md:grid-cols-2 gap-12 items-center w-full">

    {/* Texto */}

    <div className="order-2 md:order-1">

      <span className="text-violet-400 font-medium text-sm md:text-base">
        Hola, soy
      </span>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-4 leading-tight">
        Aura López
      </h1>

      <h2 className="text-xl md:text-3xl text-gray-400 mt-6">
        Ingeniera de Software
      </h2>

      <p className="text-base md:text-lg text-gray-300 mt-8 max-w-xl leading-relaxed">
        Desarrollo aplicaciones web modernas,
        realizo pruebas de calidad de software y ayudo
        a empresas y emprendedores a transformar ideas
        en soluciones digitales.
      </p>

      <div className="flex flex-wrap gap-4 mt-10">

        <Link
          href="/contact"
          className="inline-block bg-violet-600 hover:bg-violet-700 transition-all duration-300 px-8 py-4 rounded-xl font-medium shadow-lg"
        >
          Contactarme
        </Link>

        <a
          href="/Aura-Lopez-CV.pdf"
          download
          className="inline-block border border-violet-500 hover:bg-violet-500 hover:text-white transition-all duration-300 px-8 py-4 rounded-xl font-medium"
        >
          Descargar CV
        </a>

      </div>

      <div className="flex gap-6 mt-8 text-2xl">

      </div>

    </div>

    {/* Foto */}

    <div className="flex justify-center order-1 md:order-2">

      <img
        src="/aura.jpg"
        alt="Aura López"
        className="
          w-64
          h-64
          sm:w-80
          sm:h-80
          md:w-[420px]
          md:h-[420px]
          object-cover
          rounded-3xl
          shadow-2xl
        "
      />

    </div>

  </div>
</section>

);
}
