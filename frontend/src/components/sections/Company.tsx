import { Award } from "lucide-react"

const Company = () => {
  return (
    <section id="empresa" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nuestra Empresa</h3>
            <p className="text-lg text-gray-600 mb-6">
              Somos una empresa especializada en la fabricación e instalación de productos en vidrio templado, aluminio
              y acero inoxidable. Con más de 10 años de experiencia en el mercado, nos hemos consolidado como líderes en
              soluciones arquitectónicas de alta calidad.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Nuestro compromiso es ofrecer productos duraderos, seguros y estéticamente atractivos que transformen los
              espacios de nuestros clientes. Trabajamos tanto en proyectos residenciales como comerciales, adaptándonos
              a las necesidades específicas de cada cliente.
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
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#33cabe] to-[#3380be] hover:from-[#33cabe]/90 hover:to-[#3380be]/90 text-white px-6 py-3 rounded-lg font-medium transition-all">
                Conocer Más
              </button>
              <button className="border-2 border-[#33cabe] text-[#33cabe] hover:bg-[#33cabe] hover:text-white px-6 py-3 rounded-lg font-medium transition-all">
                Ver Certificaciones
              </button>
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
  )
}

export default Company
