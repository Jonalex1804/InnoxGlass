import { Link } from "react-router-dom"

const Products = () => {
  const productCategories = [
    {
      name: "Vidrio Templado",
      products: [
        {
          name: "Mamparas de Vidrio",
          description: "Mamparas elegantes para baños y divisiones de espacios",
          image: "/placeholder.svg?height=300&width=300&text=Mamparas+de+Vidrio",
          features: ["Vidrio templado 8mm", "Herrajes de acero inoxidable", "Diseños personalizados"],
        },
        {
          name: "Ventanas de Vidrio",
          description: "Ventanas de vidrio templado para máxima seguridad",
          image: "/placeholder.svg?height=300&width=300&text=Ventanas+Vidrio",
          features: ["Alta resistencia", "Aislamiento térmico", "Fácil mantenimiento"],
        },
      ],
    },
    {
      name: "Aluminio",
      products: [
        {
          name: "Ventanas de Aluminio",
          description: "Ventanas modernas con excelente aislamiento térmico",
          image: "/placeholder.svg?height=300&width=300&text=Ventanas+Aluminio",
          features: ["Perfiles de alta calidad", "Doble vidrio", "Múltiples colores"],
        },
        {
          name: "Puertas Corredizas",
          description: "Puertas corredizas de aluminio y vidrio",
          image: "/placeholder.svg?height=300&width=300&text=Puertas+Corredizas",
          features: ["Sistema de rodamiento suave", "Vidrio templado", "Diseño moderno"],
        },
      ],
    },
    {
      name: "Acero Inoxidable",
      products: [
        {
          name: "Pasamanos de Acero",
          description: "Pasamanos resistentes y elegantes para cualquier espacio",
          image: "/placeholder.svg?height=300&width=300&text=Pasamanos+Acero",
          features: ["Acero inoxidable 316", "Acabado pulido", "Instalación profesional"],
        },
        {
          name: "Accesorios de Acero",
          description: "Herrajes y accesorios de la más alta calidad",
          image: "/placeholder.svg?height=300&width=300&text=Accesorios+Acero",
          features: ["Resistente a la corrosión", "Múltiples acabados", "Garantía extendida"],
        },
      ],
    },
    {
      name: "Sistemas Especiales",
      products: [
        {
          name: "Cortinas de Baño",
          description: "Soluciones modernas para duchas y bañeras",
          image: "/placeholder.svg?height=300&width=300&text=Cortinas+Baño",
          features: ["Vidrio templado", "Perfiles de aluminio", "Sistemas de apertura"],
        },
        {
          name: "Persianas Modernas",
          description: "Control perfecto de luz y privacidad",
          image: "/placeholder.svg?height=300&width=300&text=Persianas+Modernas",
          features: ["Control automático", "Materiales duraderos", "Diseños personalizados"],
        },
      ],
    },
  ]

  return (
    <div>
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#33cabe]/5 to-[#3380be]/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nuestros Productos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Productos de alta calidad fabricados con los mejores materiales y tecnología de punta. Cada producto está
            diseñado para ofrecer durabilidad, seguridad y elegancia.
          </p>
        </div>
      </section>

      {/* Products by Category */}
      {productCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-20 px-4 sm:px-6 lg:px-8 ${categoryIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.products.map((product, productIndex) => (
                <div
                  key={productIndex}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative group">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="font-semibold">Ver Detalles</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Características:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-[#33cabe] rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      to="/contacto"
                      className="inline-block bg-gradient-to-r from-[#33cabe] to-[#3380be] hover:from-[#33cabe]/90 hover:to-[#3380be]/90 text-white px-6 py-2 rounded-lg font-medium transition-all"
                    >
                      Solicitar Información
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Quality Section */}
      <section className="py-20 bg-gradient-to-r from-[#33cabe] to-[#3380be] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Garantía de Calidad</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Todos nuestros productos cuentan con certificaciones de calidad y garantía extendida
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Años de Garantía</h3>
              <p>En todos nuestros productos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">ISO</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Certificación ISO</h3>
              <p>Calidad internacional certificada</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Soporte Técnico</h3>
              <p>Asistencia cuando la necesites</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Necesitas un producto específico?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos para conocer más sobre nuestros productos o solicitar una cotización personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="bg-gradient-to-r from-[#33cabe] to-[#3380be] hover:from-[#33cabe]/90 hover:to-[#3380be]/90 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all"
            >
              Solicitar Cotización
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

export default Products
