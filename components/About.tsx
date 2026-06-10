export default function About() {
  return (
    <section
      id="sobre-mi"
      className="py-24"
    >
      <h2 className="text-4xl font-bold mb-12">
        Sobre mí
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Soy Ingeniera de Software con experiencia en
            desarrollo frontend, aseguramiento de calidad (QA)
            y despliegue de plataformas digitales.

            He participado en proyectos reales para empresas
            nacionales e internacionales, enfocándome en la
            calidad, experiencia de usuario y construcción
            de soluciones modernas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-violet-400">
              2+
            </h3>
            <p className="text-gray-400">
              Años de experiencia
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-violet-400">
              2
            </h3>
            <p className="text-gray-400">
              Proyectos en producción
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-violet-400">
              QA
            </h3>
            <p className="text-gray-400">
              Testing y calidad
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-violet-400">
              B2
            </h3>
            <p className="text-gray-400">
              Inglés
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}