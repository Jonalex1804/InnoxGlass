import { NestFactory } from "@nestjs/core"
import { ValidationPipe } from "@nestjs/common"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { AppModule } from "./app.module"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Configurar CORS
  app.enableCors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })

  // Configurar validación global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )

  // Configurar Swagger
  const config = new DocumentBuilder()
    .setTitle("Vidrio & Cristal API")
    .setDescription("API para el sistema de cotizaciones de Vidrio & Cristal")
    .setVersion("1.0")
    .addTag("quotes")
    .addTag("services")
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api/docs", app, document)

  await app.listen(3001)
  console.log("🚀 Backend corriendo en http://localhost:3001")
  console.log("📚 Documentación API en http://localhost:3001/api/docs")
}
bootstrap()
