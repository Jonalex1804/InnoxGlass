"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { createQuote } from "../services/api"

interface QuoteForm {
  nombre: string
  apellido: string
  email: string
  telefono: string
  servicio: string
  mensaje?: string
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteForm>()

  const onSubmit = async (data: QuoteForm) => {
    setIsSubmitting(true)
    try {
      const response = await createQuote(data)
      if (response.success) {
        toast.success("¡Cotización enviada exitosamente! Nos pondremos en contacto contigo pronto.")
        reset()
      } else {
        toast.error("Error al enviar la cotización. Por favor intenta nuevamente.")
      }
    } catch (error) {
      toast.error("Error al enviar la cotización. Por favor intenta nuevamente.")
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+593 98 186 4897", "+593 99 406 8190"],
      color: "text-[#33cabe]",
      bgColor: "bg-[#33cabe]/10",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["inoxglassec@gmail.com" ],
      color: "text-[#3380be]",
      bgColor: "bg-[#3380be]/10",
    },
    {
      icon: MapPin,
      title: "Dirección",
      details: ["Av. Isidro Ayora Calle N86 A", "Diagonal a la Fabrica Bopp"],
      color: "text-[#33cabe]",
      bgColor: "bg-[#33cabe]/10",
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lunes - Viernes: 8:00 AM - 6:00 PM", "Sábados: 9:00 AM - 4:00 PM"],
      color: "text-[#3380be]",
      bgColor: "bg-[#3380be]/10",
    },
  ]

  return (
    <div>
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#33cabe]/5 to-[#3380be]/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contáctanos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Contáctanos para una cotización personalizada y sin compromiso. Nuestro equipo
            de expertos está listo para ayudarte.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
                <p className="text-gray-600 mb-8">
                  Estamos aquí para ayudarte. Contáctanos a través de cualquiera de estos medios o utiliza el formulario
                  para enviarnos tu consulta.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`flex items-center justify-center w-12 h-12 ${info.bgColor} rounded-lg`}>
                    <info.icon className={`h-6 w-6 ${info.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Ubicación</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500">Mapa de ubicación</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 border">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Solicitar Cotización</h2>
                <p className="text-gray-600">
                  Completa el formulario y nos pondremos en contacto contigo para evaluar tu proyecto
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium text-gray-700">
                      Nombre *
                    </label>
                    <input
                      {...register("nombre", { required: "El nombre es requerido" })}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33cabe] focus:border-transparent transition-colors"
                      placeholder="Tu nombre"
                    />
                    {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="apellido" className="text-sm font-medium text-gray-700">
                      Apellido *
                    </label>
                    <input
                      {...register("apellido", { required: "El apellido es requerido" })}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33cabe] focus:border-transparent transition-colors"
                      placeholder="Tu apellido"
                    />
                    {errors.apellido && <p className="text-red-500 text-sm">{errors.apellido.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    {...register("email", {
                      required: "El email es requerido",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email inválido",
                      },
                    })}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33cabe] focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="telefono" className="text-sm font-medium text-gray-700">
                    Teléfono *
                  </label>
                  <input
                    {...register("telefono", { required: "El teléfono es requerido" })}
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33cabe] focus:border-transparent transition-colors"
                    placeholder="+593 98 765 432"
                  />
                  {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="servicio" className="text-sm font-medium text-gray-700">
                    Servicio de Interés *
                  </label>
                  <select
                    {...register("servicio", { required: "Selecciona un servicio" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33cabe] focus:border-transparent transition-colors"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="vidrio-templado">Vidrio Templado</option>
                    <option value="aluminio-vidrio">Aluminio y Vidrio</option>
                    <option value="pasamanos">Pasamanos Acero Inoxidable</option>
                    <option value="cortinas-baño">Cortinas de Baño</option>
                    <option value="persianas">Persianas</option>
                    <option value="mamparas">Mamparas</option>
                    <option value="accesorios">Accesorios Acero Inoxidable</option>
                  </select>
                  {errors.servicio && <p className="text-red-500 text-sm">{errors.servicio.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-sm font-medium text-gray-700">
                    Descripción del Proyecto
                  </label>
                  <textarea
                    {...register("mensaje")}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33cabe] focus:border-transparent transition-colors resize-none"
                    placeholder="Describe tu proyecto, medidas aproximadas, ubicación, etc..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#33cabe] to-[#3380be] hover:from-[#33cabe]/90 hover:to-[#3380be]/90 text-white py-3 rounded-lg font-medium text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Solicitud de Cotización
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Respuestas a las preguntas más comunes sobre nuestros servicios
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Cuánto tiempo toma un proyecto?</h3>
              <p className="text-gray-600">
                El tiempo varía según la complejidad del proyecto. Proyectos residenciales típicos toman de 1-2 semanas,
                mientras que proyectos comerciales pueden tomar de 2-4 semanas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Ofrecen garantía?</h3>
              <p className="text-gray-600">
                Sí, todos nuestros productos y servicios incluyen garantía de 5 años contra defectos de fabricación e
                instalación.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Hacen trabajos en toda la ciudad?</h3>
              <p className="text-gray-600">
                Si, ofrecemos nuestros servicios en toda la ciudad de Quito y a nivel nacional.
                Para proyectos fuera de Quito, aplicará un costo adicional por desplazamiento y logística. Por favor, consúltenos para más detalles y cotizaciones personalizadas.

              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">¿La cotización tiene costo?</h3>
              <p className="text-gray-600">
                No, todas nuestras cotizaciones son completamente gratuitas y sin compromiso. Incluyen visita técnica y
                propuesta detallada.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
