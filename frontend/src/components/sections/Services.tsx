"use client"

import { useEffect, useState } from "react"
import { Shield, Building2, Hammer, Droplets, Sun, Wrench } from "lucide-react"
import { getServices } from "../../services/api"

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
      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">Cargando servicios...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos servicios especializados en vidrio templado, aluminio y acero inoxidable para proyectos
            residenciales y comerciales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.id] || Shield
            const colors = colorMap[service.id] || colorMap["vidrio-templado"]

            return (
              <div
                key={service.id}
                className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 ${colors.border} p-6`}
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className={`h-6 w-6 ${colors.icon}`} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h4>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-gray-600">
                  {service.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
