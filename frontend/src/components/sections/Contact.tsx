"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { createQuote } from "../../services/api"

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

  return (
    <section id="contacto" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contáctanos</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Contáctanos para una cotización personalizada y sin compromiso
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-[#33cabe]/10 rounded-lg">
                <Phone className="h-6 w-6 text-[#33cabe]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Teléfono</h4>
                <p className="text-gray-600">+52 (555) 123-4567</p>
                <p className="text-gray-600">+52 (555) 987-6543</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-[#3380be]/10 rounded-lg">
                <Mail className="h-6 w-6 text-[#3380be]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
                <p className="text-gray-600">info@vidriocristal.com</p>
                <p className="text-gray-600">ventas@vidriocristal.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-[#33cabe]/10 rounded-lg">
                <MapPin className="h-6 w-6 text-[#33cabe]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Dirección</h4>
                <p className="text-gray-600">Av. Industrial 123</p>
                <p className="text-gray-600">Col. Industrial, Ciudad de México</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-[#3380be]/10 rounded-lg">
                <Clock className="h-6 w-6 text-[#3380be]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Horarios</h4>
                <p className="text-gray-600">Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sábados: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border">
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Solicitar Cotización</h4>
              <p className="text-gray-600">
                Completa el formulario y nos pondremos en contacto contigo para evaluar tu proyecto
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-medium text-gray-700">
                    Nombre *
                  </label>
                  <input
                    {...register("nombre", { required: "El nombre es requerido" })}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33cabe]"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33cabe]"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33cabe]"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33cabe]"
                  placeholder="(555) 123-4567"
                />
                {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="servicio" className="text-sm font-medium text-gray-700">
                  Servicio de Interés *
                </label>
                <select
                  {...register("servicio", { required: "Selecciona un servicio" })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33cabe]"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33cabe]"
                  placeholder="Describe tu proyecto, medidas aproximadas, ubicación, etc..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#33cabe] to-[#3380be] hover:from-[#33cabe]/90 hover:to-[#3380be]/90 text-white py-3 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar Solicitud de Cotización"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
