"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/servicios", label: "Servicios" },
    { path: "/productos", label: "Productos" },
    { path: "/empresa", label: "Empresa" },
    { path: "/contacto", label: "Contacto" },
  ]

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.jpeg" 
              alt="INNOX GLASS EC"
              className="h-12 w-auto object-contain"
              onLoad={() => console.log("LOGO CARGADO EXITOSAMENTE desde /images/logo.jpeg")}
              onError={(e) => {
                console.error(
                  "ERROR: No se pudo cargar el logo desde /images/logo.jpeg. Verifique la ruta y el nombre del archivo.",
                  e,
                )
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-[#33cabe] border-b-2 border-[#33cabe] pb-1"
                    : "text-gray-700 hover:text-[#33cabe]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contacto"
            className="hidden md:block bg-gradient-to-r from-[#33cabe] to-[#3380be] hover:from-[#33cabe]/90 hover:to-[#3380be]/90 text-white px-6 py-2 rounded-lg font-medium transition-all"
          >
            Cotizar Proyecto
          </Link>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2" aria-label="Abrir menú">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-left font-medium transition-colors py-2 px-4 rounded-lg ${
                    isActive(item.path) ? "text-[#33cabe]" : "text-gray-700 hover:text-[#33cabe]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contacto"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-[#33cabe] to-[#3380be] text-white px-6 py-2 rounded-lg font-medium w-full text-center"
              >
                Cotizar Proyecto
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
