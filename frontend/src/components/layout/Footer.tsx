import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/images/logo.jpeg"
                alt="INNOX GLASS EC - Especialistas en vidrio templado"
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              INNOX GLASS EC transforma espacios con soluciones en vidrio templado, aluminio y acero inoxidable. Calidad
              garantizada y servicio profesional.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Navegación</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/productos" className="hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/empresa" className="hover:text-white transition-colors">
                  Empresa
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Contacto</h5>
            <ul className="space-y-2 text-gray-400">
              <li>+593 99 406 8190</li>
              <li>inoxglassec@gmail.com</li>
              <li>Carcelen Alto Av. Isidro Ayora,Calle N86 A </li>
              <li>Quito-Ecuador</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 INNOX GLASS EC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
