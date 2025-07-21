import { Link } from "react-router-dom"
import { Users, Award, Star, Shield, ArrowRight } from "lucide-react"

const Home = () => {
  const stats = [
    {
      icon: Users,
      number: "1000+",
      label: "Proyectos Realizados",
      color: "text-[#33cabe]",
      bgColor: "bg-[#33cabe]/10",
    },
    {
      icon: Award,
      number: "10+",
      label: "Años de Experiencia",
      color: "text-[#3380be]",
      bgColor: "bg-[#3380be]/10",
    },
    {
      icon: Star,
      number: "100%",
      label: "Satisfacción Garantizada",
      color: "text-[#33cabe]",
      bgColor: "bg-[#33cabe]/10",
    },
    {
      icon: Shield,
      number: "5",
      label: "Años de Garantía",
      color: "text-[#3380be]",
      bgColor: "bg-[#3380be]/10",
    },
  ]

  const featuredServices = [
    {
      id: "vidrio-templado",
      name: "Vidrio Templado",
      description: "Instalación y fabricación de vidrio templado de alta resistencia",
      image: "/placeholder.svg?height=300&width=400&text=Vidrio+Templado",
    },
    {
      id: "aluminio-vidrio",
      name: "Aluminio y Vidrio",
      description: "Estructuras completas en aluminio con vidrio templado",
      image: "/placeholder.svg?height=300&width=400&text=Aluminio+Vidrio",
    },
    {
      id: "pasamanos",
      name: "Pasamanos Acero Inoxidable",
      description: "Pasamanos elegantes y duraderos en acero inoxidable",
      image: "/images/cortina.jpg",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-4 inline-block bg-[#33cabe]/10 text-[#33cabe] px-4 py-2 rounded-full text-sm font-medium">
            ✨ Especialistas en Vidrio Templado
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Soluciones en{" "}
            <span className="bg-gradient-to-r from-[#33cabe] to-[#3380be] bg-clip-text text-transparent">
              Vidrio & Aluminio
            </span>{" "}
            de Alta Calidad
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transformamos espacios con vidrio templado, aluminio y acero inoxidable. Ofrecemos pasamanos, mamparas,
            cortinas de baño, persianas y accesorios con la más alta calidad y durabilidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/productos"
              className="bg-gradient-to-r from-[#33cabe] to-[#3380be] hover:from-[#33cabe]/90 hover:to-[#3380be]/90 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all"
            >
              Ver Nuestros Trabajos
            </Link>
            <Link
              to="/contacto"
              className="border-2 border-[#33cabe] text-[#33cabe] hover:bg-[#33cabe] hover:text-white px-8 py-3 rounded-lg font-medium text-lg transition-all"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`flex items-center justify-center w-12 h-12 ${stat.bgColor} rounded-lg mx-auto mb-4`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Servicios Destacados</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conoce algunos de nuestros servicios más solicitados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to={`/servicios/${service.id}`}
                    className="inline-flex items-center text-[#33cabe] hover:text-[#3380be] font-medium"
                  >
                    Ver más detalles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/servicios"
              className="bg-gradient-to-r from-[#33cabe] to-[#3380be] hover:from-[#33cabe]/90 hover:to-[#3380be]/90 text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#33cabe] to-[#3380be] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para tu próximo proyecto?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo y obtén una cotización personalizada para tu proyecto
          </p>
          <Link
            to="/contacto"
            className="bg-white text-[#33cabe] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg transition-all"
          >
            Solicitar Cotización Gratuita
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
