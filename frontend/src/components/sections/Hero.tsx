"use client"

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-4 inline-block bg-[#33cabe]/10 text-[#33cabe] px-4 py-2 rounded-full text-sm font-medium">
          ✨ Especialistas en Vidrio Templado
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Soluciones en{" "}
          <span className="bg-gradient-to-r from-[#33cabe] to-[#3380be] bg-clip-text text-transparent">
            Vidrio & Aluminio
          </span>{" "}
          de Alta Calidad
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transformamos espacios con vidrio templado, aluminio y acero inoxidable. Ofrecemos pasamanos, mamparas,
          cortinas de baño, persianas y accesorios con la más alta calidad y durabilidad.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("productos")}
            className="bg-gradient-to-r from-[#33cabe] to-[#3380be] hover:from-[#33cabe]/90 hover:to-[#3380be]/90 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all"
          >
            Ver Nuestros Trabajos
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="border-2 border-[#33cabe] text-[#33cabe] hover:bg-[#33cabe] hover:text-white px-8 py-3 rounded-lg font-medium text-lg transition-all"
          >
            Solicitar Cotización
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
