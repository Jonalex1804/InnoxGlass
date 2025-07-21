import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Users,
  Award,
  Shield,
  Wrench,
  Building2,
  Droplets,
  Sun,
  Hammer,
} from "lucide-react"

export default function VidrioCristalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">INNOX GLASS EC</h1>
                <p className="text-sm text-gray-600">Especialistas en vidrio templado</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Servicios
              </a>
              <a href="#productos" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Productos
              </a>
              <a href="#empresa" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Empresa
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Contacto
              </a>
            </nav>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              Cotizar Proyecto
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
            ✨ Especialistas en Vidrio Templado
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Soluciones en{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Vidrio & Aluminio
            </span>{" "}
            de Alta Calidad
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transformamos espacios con vidrio templado, aluminio y acero inoxidable. Ofrecemos pasamanos, mamparas,
            cortinas de baño, persianas y accesorios con la más alta calidad y durabilidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            >
              Ver Nuestros Trabajos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            >
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">Proyectos Realizados</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mx-auto mb-4">
                <Award className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Satisfacción Garantizada</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mx-auto mb-4">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5</div>
              <div className="text-gray-600">Años de Garantía</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Vidrio Templado</CardTitle>
                <CardDescription>Instalación y fabricación de vidrio templado de alta resistencia</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ventanas y puertas</li>
                  <li>• Divisiones de oficina</li>
                  <li>• Fachadas comerciales</li>
                  <li>• Vidrio de seguridad</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-secondary">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Aluminio y Vidrio</CardTitle>
                <CardDescription>Estructuras completas en aluminio con vidrio templado</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ventanería de aluminio</li>
                  <li>• Puertas corredizas</li>
                  <li>• Cerramientos</li>
                  <li>• Estructuras comerciales</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Hammer className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Pasamanos Acero Inoxidable</CardTitle>
                <CardDescription>Pasamanos elegantes y duraderos en acero inoxidable</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Escaleras residenciales</li>
                  <li>• Balcones y terrazas</li>
                  <li>• Pasamanos comerciales</li>
                  <li>• Diseños personalizados</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-secondary">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Cortinas de Baño</CardTitle>
                <CardDescription>Cortinas de baño en vidrio templado y aluminio</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Puertas corredizas</li>
                  <li>• Puertas batientes</li>
                  <li>• Divisiones de ducha</li>
                  <li>• Acabados premium</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Persianas</CardTitle>
                <CardDescription>Persianas de alta calidad para control de luz y privacidad</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Persianas de aluminio</li>
                  <li>• Persianas enrollables</li>
                  <li>• Control automático</li>
                  <li>• Instalación profesional</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-secondary">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Accesorios Acero Inoxidable</CardTitle>
                <CardDescription>Accesorios y herrajes de acero inoxidable</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Herrajes para puertas</li>
                  <li>• Bisagras y cerraduras</li>
                  <li>• Accesorios de baño</li>
                  <li>• Elementos decorativos</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Productos</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Productos de alta calidad fabricados con los mejores materiales y tecnología de punta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 aspect-square mb-4">
                <img
                  src="/placeholder.svg?height=300&width=300&text=Mamparas+de+Vidrio"
                  alt="Mamparas de vidrio templado"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold">Ver Detalles</h4>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Mamparas de Vidrio</h4>
              <p className="text-gray-600">Mamparas elegantes para baños y divisiones de espacios</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 aspect-square mb-4">
                <img
                  src="/placeholder.svg?height=300&width=300&text=Ventanas+Aluminio"
                  alt="Ventanas de aluminio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold">Ver Detalles</h4>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Ventanas de Aluminio</h4>
              <p className="text-gray-600">Ventanas modernas con excelente aislamiento térmico</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 aspect-square mb-4">
                <img
                  src="/placeholder.svg?height=300&width=300&text=Pasamanos+Acero"
                  alt="Pasamanos de acero inoxidable"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold">Ver Detalles</h4>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Pasamanos de Acero</h4>
              <p className="text-gray-600">Pasamanos resistentes y elegantes para cualquier espacio</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 aspect-square mb-4">
                <img
                  src="/placeholder.svg?height=300&width=300&text=Cortinas+Baño"
                  alt="Cortinas de baño"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold">Ver Detalles</h4>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Cortinas de Baño</h4>
              <p className="text-gray-600">Soluciones modernas para duchas y bañeras</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 aspect-square mb-4">
                <img
                  src="/placeholder.svg?height=300&width=300&text=Persianas+Modernas"
                  alt="Persianas modernas"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold">Ver Detalles</h4>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Persianas Modernas</h4>
              <p className="text-gray-600">Control perfecto de luz y privacidad</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 aspect-square mb-4">
                <img
                  src="/placeholder.svg?height=300&width=300&text=Accesorios+Acero"
                  alt="Accesorios de acero inoxidable"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold">Ver Detalles</h4>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Accesorios de Acero</h4>
              <p className="text-gray-600">Herrajes y accesorios de la más alta calidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section id="empresa" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nuestra Empresa</h3>
              <p className="text-lg text-gray-600 mb-6">
                Somos una empresa especializada en la fabricación e instalación de productos en vidrio templado,
                aluminio y acero inoxidable. Con más de 10 años de experiencia en el mercado, nos hemos consolidado como
                líderes en soluciones arquitectónicas de alta calidad.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nuestro compromiso es ofrecer productos duraderos, seguros y estéticamente atractivos que transformen
                los espacios de nuestros clientes. Trabajamos tanto en proyectos residenciales como comerciales,
                adaptándonos a las necesidades específicas de cada cliente.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-gray-600">Años de Experiencia</div>
                </div>
                <div className="text-center p-4 bg-secondary/5 rounded-lg">
                  <div className="text-2xl font-bold text-secondary mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Proyectos Completados</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                  Conocer Más
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  Ver Certificaciones
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=500&width=500&text=Taller+de+Vidrio+y+Aluminio"
                  alt="Nuestro taller especializado"
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
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

      {/* Contact Section */}
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
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Teléfono</h4>
                  <p className="text-gray-600">+52 (555) 123-4567</p>
                  <p className="text-gray-600">+52 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">info@vidriocristal.com</p>
                  <p className="text-gray-600">ventas@vidriocristal.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Dirección</h4>
                  <p className="text-gray-600">Av. Industrial 123</p>
                  <p className="text-gray-600">Col. Industrial, Ciudad de México</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Horarios</h4>
                  <p className="text-gray-600">Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sábados: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Solicitar Cotización</CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo para evaluar tu proyecto
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="apellido" className="text-sm font-medium text-gray-700">
                      Apellido
                    </label>
                    <input
                      id="apellido"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="telefono" className="text-sm font-medium text-gray-700">
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="servicio" className="text-sm font-medium text-gray-700">
                    Servicio de Interés
                  </label>
                  <select
                    id="servicio"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                </div>
                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-sm font-medium text-gray-700">
                    Descripción del Proyecto
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Describe tu proyecto, medidas aproximadas, ubicación, etc..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                  Enviar Solicitud de Cotización
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Vidrio & Cristal</h4>
                  <p className="text-gray-400 text-sm">Especialistas en vidrio templado</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Transformamos espacios con soluciones en vidrio templado, aluminio y acero inoxidable. Calidad
                garantizada y servicio profesional.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Servicios</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#servicios" className="hover:text-white transition-colors">
                    Vidrio Templado
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-white transition-colors">
                    Aluminio y Vidrio
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-white transition-colors">
                    Pasamanos
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-white transition-colors">
                    Mamparas
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Contacto</h5>
              <ul className="space-y-2 text-gray-400">
                <li>+52 (555) 123-4567</li>
                <li>info@vidriocristal.com</li>
                <li>Av. Industrial 123</li>
                <li>Ciudad de México</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Vidrio & Cristal. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
