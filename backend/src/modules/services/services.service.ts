import { Injectable } from "@nestjs/common"

@Injectable()
export class ServicesService {
  private services = [
    {
      id: "vidrio-templado",
      name: "Vidrio Templado",
      description: "Instalación y fabricación de vidrio templado de alta resistencia",
      features: ["Ventanas y puertas", "Divisiones de oficina", "Fachadas comerciales", "Vidrio de seguridad"],
    },
    {
      id: "aluminio-vidrio",
      name: "Aluminio y Vidrio",
      description: "Estructuras completas en aluminio con vidrio templado",
      features: ["Ventanería de aluminio", "Puertas corredizas", "Cerramientos", "Estructuras comerciales"],
    },
    {
      id: "pasamanos",
      name: "Pasamanos Acero Inoxidable",
      description: "Pasamanos elegantes y duraderos en acero inoxidable",
      features: ["Escaleras residenciales", "Balcones y terrazas", "Pasamanos comerciales", "Diseños personalizados"],
    },
    {
      id: "cortinas-baño",
      name: "Cortinas de Baño",
      description: "Cortinas de baño en vidrio templado y aluminio",
      features: ["Puertas corredizas", "Puertas batientes", "Divisiones de ducha", "Acabados premium"],
    },
    {
      id: "persianas",
      name: "Persianas",
      description: "Persianas de alta calidad para control de luz y privacidad",
      features: ["Persianas de aluminio", "Persianas enrollables", "Control automático", "Instalación profesional"],
    },
    {
      id: "mamparas",
      name: "Mamparas",
      description: "Mamparas elegantes para baños y divisiones de espacios",
      features: ["Mamparas de ducha", "Divisiones de oficina", "Mamparas decorativas", "Vidrio templado"],
    },
    {
      id: "accesorios",
      name: "Accesorios Acero Inoxidable",
      description: "Accesorios y herrajes de acero inoxidable",
      features: ["Herrajes para puertas", "Bisagras y cerraduras", "Accesorios de baño", "Elementos decorativos"],
    },
  ]

  async getAllServices() {
    return {
      success: true,
      data: this.services,
    }
  }
}
