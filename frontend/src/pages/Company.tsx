import { Link } from "react-router-dom"
import { Award, Users, Target, Heart, Shield, CheckCircle } from "lucide-react"

const Company = () => {
  const values = [
    {
      icon: Shield,
      title: "Calidad",
      description: "Comprometidos con los más altos estándares de calidad en cada proyecto",
    },
    {
      icon: Users,
      title: "Experiencia",
      description: "Más de 10 años de experiencia en el sector del vidrio y aluminio",
    },
    {
      icon: Target,
      title: "Precisión",
      description: "Atención meticulosa a los detalles en cada instalación",
    },
    {
      icon: Heart,
      title: "Compromiso",
      description: "Dedicados a superar las expectativas de nuestros clientes",
    },
  ]

  const milestones = [
    { year: "2014", event: "Fundación de la empresa" },
    { year: "2016", event: "Primer proyecto comercial importante" },
    { year: "2018", event: "Certificación ISO 9001" },
    { year: "2020", event: "Expansión de servicios" },
    { year: "2022", event: "1000+ proyectos completados" },
    { year: "2024", event: "Líderes en el mercado local" },
  ]

  const certifications = [
    "ISO 9001:2015 - Gestión de Calidad",
    "Certificación en Vidrio Templado",
    "Licencia de Construcción Especializada",
    "Certificación en Soldadura de Acero Inoxidable",
  ]

  return (
    <div>
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#33cabe]/5 to-[#3380be]/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">INNOX GLASS EC</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce la historia, valores y compromiso que nos han convertido en líderes en soluciones de vidrio templado,
            aluminio y acero inoxidable.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Quiénes Somos</h2>
              <p className="text-lg text-gray-600 mb-6">
                INNOX GLASS EC es una empresa especializada en la fabricación e instalación de productos en vidrio
                templado, aluminio y acero inoxidable. Con más de 10 años de experiencia en el mercado, nos hemos
                consolidado como líderes en soluciones arquitectónicas de alta calidad.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nuestro compromiso es ofrecer productos duraderos, seguros y estéticamente atractivos que transformen
                los espacios de nuestros clientes. Trabajamos tanto en proyectos residenciales como comerciales,
                adaptándonos a las necesidades específicas de cada cliente.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Contamos con un equipo de profesionales altamente capacitados y utilizamos tecnología de punta para
                garantizar resultados excepcionales en cada proyecto.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-[#33cabe]/5 rounded-lg">
                  <div className="text-2xl font-bold text-[#33cabe] mb-2">10+</div>
                  <div className="text-sm text-gray-600">Años de Experiencia</div>
                </div>
                <div className="text-center p-4 bg-[#3380be]/5 rounded-lg">
                  <div className="text-2xl font-bold text-[#3380be] mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Proyectos Completados</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#33cabe]/10 to-[#3380be]/10 rounded-2xl flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=500&width=500&text=Taller+de+Vidrio+y+Aluminio"
                  alt="Nuestro taller especializado"
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#33cabe] to-[#3380be] rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Calidad Certificada</div>
                    <div className="text-sm text-gray-600">ISO 9001:2015</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y nos permiten ofrecer el mejor servicio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#33cabe] to-[#3380be] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestra Historia</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un recorrido por los momentos más importantes de nuestra empresa
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#33cabe] hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-[#33cabe] font-bold text-lg mb-2">{milestone.year}</div>
                      <div className="text-gray-900 font-medium">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-[#33cabe] rounded-full border-4 border-white shadow-md"></div>
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certificaciones y Licencias</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Contamos con todas las certificaciones necesarias para garantizar la calidad de nuestros servicios
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-[#33cabe] mr-3" />
                <span className="text-gray-900 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-[#33cabe] to-[#3380be] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Equipo</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contamos con un equipo de profesionales altamente capacitados y comprometidos con la excelencia
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Técnicos Especializados</h3>
              <p>Expertos en instalación y fabricación</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ingenieros Certificados</h3>
              <p>Diseño y cálculo estructural</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Control de Calidad</h3>
              <p>Supervisión en cada etapa del proyecto</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Quieres conocer más sobre nosotros?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos para conocer más sobre nuestra empresa, visitar nuestras instalaciones o solicitar referencias
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="bg-gradient-to-r from-[#33cabe] to-[#3380be] hover:from-[#33cabe]/90 hover:to-[#3380be]/90 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all"
            >
              Contactar
            </Link>
            <Link
              to="/servicios"
              className="border-2 border-[#33cabe] text-[#33cabe] hover:bg-[#33cabe] hover:text-white px-8 py-3 rounded-lg font-medium text-lg transition-all"
            >
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Company
