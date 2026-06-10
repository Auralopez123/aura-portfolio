import Navbar from "@/components/Navbar";

export default function ExperiencePage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <section className="max-w-6xl mx-auto px-8 pt-32 pb-20">

        <p className="text-violet-400 mb-4">
          Experiencia Profesional
        </p>

        <h1 className="text-5xl font-bold mb-12">
          Mi trayectoria
        </h1>

        <div className="space-y-8">

          <div className="bg-slate-900 p-8 rounded-3xl">
            <h2 className="text-2xl font-semibold">
              Frontend Developer
            </h2>

            <p className="text-violet-400 mt-2">
              Roma NH Group · 2024 - 2026
            </p>

            <p className="text-gray-300 mt-4">
              Participé en el desarrollo y despliegue
              de una plataforma corporativa internacional
              utilizada en múltiples países.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl">
            <h2 className="text-2xl font-semibold">
              Frontend Developer
            </h2>

            <p className="text-violet-400 mt-2">
              Alcaldía de Neiva · 2024
            </p>

            <p className="text-gray-300 mt-4">
              Rediseño del portal institucional enfocado
              en accesibilidad, transparencia y experiencia
              de usuario.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl">
            <h2 className="text-2xl font-semibold">
              Coordinadora Digital
            </h2>

            <p className="text-violet-400 mt-2">
              Sanación y Vida · 2021 - Actualidad
            </p>

            <p className="text-gray-300 mt-4">
              Gestión de procesos digitales, bases de datos,
              indicadores y estrategias de comunicación digital.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}