"use client"

import { Link } from "react-router-dom"
import { Home, ArrowLeft } from "lucide-react"

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#33cabe] mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Página no encontrada</h2>
          <p className="text-gray-600 mb-8">Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#33cabe] to-[#3380be] hover:from-[#33cabe]/90 hover:to-[#3380be]/90 text-white px-6 py-3 rounded-lg font-medium transition-all"
          >
            <Home className="mr-2 h-5 w-5" />
            Ir al Inicio
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center border-2 border-[#33cabe] text-[#33cabe] hover:bg-[#33cabe] hover:text-white px-6 py-3 rounded-lg font-medium transition-all"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver Atrás
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
