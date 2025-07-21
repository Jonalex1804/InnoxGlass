"use client"

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Shield, Building2, Hammer, Droplets, Sun, Wrench, ArrowLeft, Check, Star } from "lucide-react"
import { getServices } from "../services/api"

interface Service {
  id: string
  name: string
  description: string
  features: string[]
}

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>()
  const [service, setService] = useState<Service | null>(null)
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

  const serviceDetails: { [key: string]: any } = {
    "vidrio-templado": {
      longDescription:
        "El vidrio templado es un tipo de vidrio de seguridad procesado mediante tratamientos térmicos o químicos controlados para aumentar su resistencia. Es hasta 5 veces más resistente que el vidrio común y cuando se rompe, se fragmenta en pequeños pedazos granulares que son menos propensos a causar lesiones.",
      benefits: [
        "5 veces más resistente que el vidrio común",
        "Fragmentación segura en caso de rotura",
        "Resistente a cambios de temperatura",
        "Excelente claridad óptica",
        "Fácil mantenimiento y limpieza",
      ],
      applications: [
        "Ventanas y puertas residenciales",
        "Fachadas comerciales",
        "Divisiones de oficina",
        "Mamparas de baño",
        "Mesas y superficies",
      ],
      process: [
        "Corte y preparación del vidrio",
        "Tratamiento térmico a 650°C",
        "Enfriamiento controlado",
        "Control de calidad",
        "Instalación profesional",
      ],
    },
    "aluminio-vidrio": {
      longDescription:
        "Nuestros sistemas de aluminio y vidrio combinan la durabilidad del aluminio con la elegancia del vidrio templado. Ofrecemos soluciones completas para ventanería, puertas y cerramientos con excelente aislamiento térmico y acústico.",
      benefits: [
        "Excelente aislamiento térmico",
        "Resistencia a la corrosión",
        "Bajo mantenimiento",
        "Diseños modernos y elegantes",
        "Larga durabilidad",
      ],
      applications: [
        "Ventanería residencial",
        "Puertas corredizas",
        "Cerramientos de terrazas",
        "Fachadas comerciales",
        "Estructuras arquitectónicas",
      ],
      process: [
        "Medición y diseño",
        "Fabricación de perfiles",
        "Ensamblaje de componentes",
        "Instalación de vidrio",
        "Montaje final",
      ],
    },
    pasamanos: {
      longDescription:
        "Nuestros pasamanos de acero inoxidable combinan seguridad, durabilidad y estética. Fabricados con acero inoxidable de alta calidad, ofrecen resistencia a la corrosión y un acabado elegante que complementa cualquier arquitectura.",
      benefits: [
        "Resistencia a la corrosión",
        "Acabado elegante y moderno",
        "Fácil mantenimiento",
        "Alta durabilidad",
        "Cumple normas de seguridad",
      ],
      applications: [
        "Escaleras residenciales",
        "Balcones y terrazas",
        "Escaleras comerciales",
        "Rampas de acceso",
        "Pasamanos decorativos",
      ],
      process: [
        "Medición del espacio",
        "Diseño personalizado",
        "Fabricación en taller",
        "Preparación de anclajes",
        "Instalación final",
      ],
    },
  }

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await getServices()
        if (response.success) {
          const foundService = response.data.find((s: Service) => s.id === serviceId)
          setService(foundService || null)
        }
      } catch (error) {
        console.error("Error fetching service:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchService()
  }, [serviceId])

  if (loading) {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">Cargando servicio...</div>
        </div>
      </div>
    )
  }

  if (!service) {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Servicio no encontrado</h1>
          <Link to="/servicios" className="text-[#33cabe] hover:text-[#3380be]">
            Volver a servicios
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = iconMap[service.id] || Shield
  const details = serviceDetails[service.id] || {}

  return (
    <div>
      {/* Breadcrumb */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/servicios"
            className="inline-flex items-center text-[#33cabe] hover:text-[#3380be] font-medium mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Servicios
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#33cabe]/10 rounded-lg flex items-center justify-center mr-4">
                  <IconComponent className="h-8 w-8 text-[#33cabe]" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{service.name}</h1>
                </div>
              </div>
              <p className="text-xl text-gray-600 mb-8">{service.description}</p>
              {details.longDescription && <p className="text-lg text-gray-700 mb-8">{details.longDescription}</p>}
              <Link
                to="/contacto"
                className="bg-gradient-to-r from-[#33cabe] to-[#3380be] hover:from-[#33cabe]/90 hover:to-[#3380be]/90 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all"
              >
                Solicitar Cotización
              </Link>
            </div>
            <div className="relative">
              <img
                src={`/placeholder.svg?height=500&width=600&text=${service.name.replace(/\s+/g, "+")}`}
                alt={service.name}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Características del Servicio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Incluye:</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-[#33cabe] mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {details.benefits && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Beneficios:</h3>
                <ul className="space-y-3">
                  {details.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <Star className="h-5 w-5 text-[#3380be] mr-3" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Applications & Process */}
      {(details.applications || details.process) && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {details.applications && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Aplicaciones</h3>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <ul className="space-y-3">
                      {details.applications.map((application: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-[#33cabe] rounded-full mr-3"></div>
                          <span className="text-gray-700">{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {details.process && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Proceso de Trabajo</h3>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <ol className="space-y-4">
                      {details.process.map((step: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 bg-[#33cabe] text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                            {index + 1}
                          </div>
                          <span className="text-gray-700 pt-1">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#33cabe] to-[#3380be] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Interesado en este servicio?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos para obtener más información y una cotización personalizada para tu proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="bg-white text-[#33cabe] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg transition-all"
            >
              Solicitar Cotización
            </Link>
            <Link
              to="/servicios"
              className="border-2 border-white text-white hover:bg-white hover:text-[#33cabe] px-8 py-3 rounded-lg font-medium text-lg transition-all"
            >
              Ver Otros Servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail
