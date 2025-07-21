# Innox Glass EC - Sistema Web Completo

Sistema web completo para empresa de vidrio templado, aluminio y acero inoxidable.

## 🏗️ Estructura del Proyecto

\`\`\`
vidrio-cristal-workspace/
├── backend/                 # API NestJS
│   ├── src/
│   │   ├── modules/
│   │   │   ├── quotes/     # Módulo de cotizaciones
│   │   │   └── services/   # Módulo de servicios
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── package.json
├── frontend/               # React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/     # Header, Footer
│   │   │   └── sections/   # Hero, Services, Contact, etc.
│   │   ├── services/       # API calls
│   │   └── utils/          # Utilidades
│   └── package.json
└── package.json           # Workspace principal
\`\`\`

## 🚀 Instalación y Configuración

### 1. Instalar dependencias
\`\`\`bash
npm run install:all
\`\`\`

### 2. Ejecutar en desarrollo
\`\`\`bash
npm run dev
\`\`\`

Esto iniciará:
- Backend en http://localhost:3001
- Frontend en http://localhost:5173
- Documentación API en http://localhost:3001/api/docs

### 3. Ejecutar por separado

**Backend:**
\`\`\`bash
cd backend
npm run start:dev
\`\`\`

**Frontend:**
\`\`\`bash
cd frontend
npm run dev
\`\`\`

## 🎨 Características

### Backend (NestJS)
- ✅ API REST con Swagger
- ✅ Validación de datos con class-validator
- ✅ Módulo de cotizaciones
- ✅ Módulo de servicios
- ✅ CORS configurado
- ✅ Estructura modular

### Frontend (React + Vite)
- ✅ Diseño responsivo con Tailwind CSS
- ✅ Formulario de cotización funcional
- ✅ Integración con API
- ✅ Notificaciones con react-hot-toast
- ✅ Validación de formularios con react-hook-form
- ✅ Colores personalizados (#33cabe, #3380be)

## 📋 Funcionalidades

1. **Página de Inicio** - Hero section atractiva
2. **Servicios** - Carga dinámica desde API
3. **Productos** - Galería de productos
4. **Información de Empresa** - Historia y credenciales
5. **Contacto** - Formulario funcional de cotización
6. **API REST** - Backend completo con documentación

## 🛠️ Tecnologías Utilizadas

**Backend:**
- NestJS
- TypeScript
- Swagger/OpenAPI
- Class Validator

**Frontend:**
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Hook Form
- React Hot Toast
- Lucide React (iconos)

## 📱 Responsive Design

El sitio está completamente optimizado para:
- 📱 Móviles
- 📱 Tablets
- 💻 Desktop

## 🎯 Próximos Pasos

- [ ] Conectar base de datos (PostgreSQL/MongoDB)
- [ ] Implementar autenticación
- [ ] Panel de administración
- [ ] Sistema de emails
- [ ] Galería de trabajos realizados
- [ ] Sistema de citas
