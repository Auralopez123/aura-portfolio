import Navbar from "@/components/Navbar";

export default function ProjectsPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <section className="max-w-6xl mx-auto px-8 pt-32 pb-20">

        <p className="text-violet-400 mb-4">
          Portafolio
        </p>

        <h1 className="text-5xl font-bold mb-12">
          Proyectos Destacados
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 rounded-3xl overflow-hidden">

            <div className="h-56 bg-gradient-to-r from-violet-600 to-indigo-600"></div>

            <div className="p-8">
              <h2 className="text-2xl font-semibold">
                Roma NH Group
              </h2>

              <p className="text-gray-300 mt-4">
                Plataforma corporativa internacional
                para los sectores de hotelería,
                inmobiliaria y soluciones empresariales.
              </p>
            </div>

          </div>

          <div className="bg-slate-900 rounded-3xl overflow-hidden">

            <div className="h-56 bg-gradient-to-r from-cyan-600 to-blue-600"></div>

            <div className="p-8">
              <h2 className="text-2xl font-semibold">
                Alcaldía de Neiva
              </h2>

              <p className="text-gray-300 mt-4">
                Rediseño del portal institucional
                orientado a mejorar la experiencia
                de los ciudadanos.
              </p>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}