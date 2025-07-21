"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
let ServicesService = class ServicesService {
    constructor() {
        this.services = [
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
        ];
    }
    async getAllServices() {
        return {
            success: true,
            data: this.services,
        };
    }
};
exports.ServicesService = ServicesService;
exports.ServicesService = ServicesService = __decorate([
    (0, common_1.Injectable)()
], ServicesService);
//# sourceMappingURL=services.service.js.map