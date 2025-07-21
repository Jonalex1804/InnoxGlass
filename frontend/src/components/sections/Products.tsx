const Products = () => {
  const products = [
    {
      name: "Mamparas de Vidrio",
      description: "Mamparas elegantes para baños y divisiones de espacios",
      image: "/placeholder.svg?height=300&width=300&text=Mamparas+de+Vidrio",
    },
    {
      name: "Ventanas de Aluminio",
      description: "Ventanas modernas con excelente aislamiento térmico",
      image: "/placeholder.svg?height=300&width=300&text=Ventanas+Aluminio",
    },
    {
      name: "Pasamanos de Acero",
      description: "Pasamanos resistentes y elegantes para cualquier espacio",
      image: "/placeholder.svg?height=300&width=300&text=Pasamanos+Acero",
    },
    {
      name: "Cortinas de Baño",
      description: "Soluciones modernas para duchas y bañeras",
      image: "/placeholder.svg?height=300&width=300&text=Cortinas+Baño",
    },
    {
      name: "Persianas Modernas",
      description: "Control perfecto de luz y privacidad",
      image: "/placeholder.svg?height=300&width=300&text=Persianas+Modernas",
    },
    {
      name: "Accesorios de Acero",
      description: "Herrajes y accesorios de la más alta calidad",
      image: "/placeholder.svg?height=300&width=300&text=Accesorios+Acero",
    },
  ]

  return (
    <section id="productos" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Productos</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Productos de alta calidad fabricados con los mejores materiales y tecnología de punta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#33cabe]/5 to-[#3380be]/5 aspect-square mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold">Ver Detalles</h4>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h4>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
