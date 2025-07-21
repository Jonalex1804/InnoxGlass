"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Shield, Building2, Hammer, Droplets, Sun, Wrench, ArrowRight } from "lucide-react"
import { getServices } from "../services/api"

interface Service {
  id: string
  name: string
  description: string
  features: string[]
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  const iconMap: { [key: string]: any } = {
    "vidrio-templado": Shield,
    "aluminio-vidrio": Building2,
    pasamanos: Hammer,
    "cortinas-baño": Droplets,
    persianas: Sun,
    mamparas: Shield,
    accesorios: Wrench,
  }

  const colorMap: { [key: string]: { icon: string; bg: string; border: string } } = {
    "vidrio-templado": { icon: "text-[#33cabe]", bg: "bg-[#33cabe]/10", border: "border-l-[#33cabe]" },
    "aluminio-vidrio": { icon: "text-[#3380be]", bg: "bg-[#3380be]/10", border: "border-l-[#3380be]" },
    pasamanos: { icon: "text-[#33cabe]", bg: "bg-[#33cabe]/10", border: "border-l-[#33cabe]" },
    "cortinas-baño": { icon: "text-[#3380be]", bg: "bg-[#3380be]/10", border: "border-l-[#3380be]" },
    persianas: { icon: "text-[#33cabe]", bg: "bg-[#33cabe]/10", border: "border-l-[#33cabe]" },
    mamparas: { icon: "text-[#3380be]", bg: "bg-[#3380be]/10", border: "border-l-[#3380be]" },
    accesorios: { icon: "text-[#33cabe]", bg: "bg-[#33cabe]/10", border: "border-l-[#33cabe]" },
  }

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getServices()
        if (response.success) {
          setServices(response.data)
        }
      } catch (error) {
        console.error("Error fetching services:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  if (loading) {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">Cargando servicios...</div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#33cabe]/5 to-[#3380be]/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios especializados en vidrio templado, aluminio y acero inoxidable para proyectos
            residenciales y comerciales con la más alta calidad y durabilidad.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.id] || Shield
              const colors = colorMap[service.id] || colorMap["vidrio-templado"]

              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${colors.border} p-6 group`}
                >
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-6 w-6 ${colors.icon}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-[#33cabe] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/servicios/${service.id}`}
                    className="inline-flex items-center text-[#33cabe] hover:text-[#3380be] font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Ver detalles completos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Necesitas un servicio personalizado?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos para discutir tu proyecto específico y obtener una cotización personalizada
          </p>
          <Link
            to="/contacto"
            className="bg-gradient-to-r from-[#33cabe] to-[#3380be] hover:from-[#33cabe]/90 hover:to-[#3380be]/90 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all"
          >
            Solicitar Cotización
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
