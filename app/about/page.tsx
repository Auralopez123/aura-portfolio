import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <section className="max-w-5xl mx-auto px-8 pt-32 pb-20">
        <p className="text-violet-400 mb-4">
          Sobre mí
        </p>

        <h1 className="text-5xl font-bold mb-10">
          Conoce un poco más sobre mí
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="/aura.jpg"
              alt="Aura López"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Soy Aura Cristina López Carabalí,
              Ingeniera de Software apasionada por la tecnología,
              el desarrollo web y la calidad del software.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Tengo experiencia en desarrollo frontend,
              QA Testing, despliegue de plataformas digitales
              y trabajo colaborativo con equipos multidisciplinarios.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Mi objetivo es crear soluciones tecnológicas
              que generen valor real para empresas y usuarios.
            </p>

          </div>

        </div>
      </section>
    </main>
  );
}