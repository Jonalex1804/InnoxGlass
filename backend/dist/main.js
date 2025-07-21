"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: ["http://localhost:5173", "http://localhost:3000"],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Vidrio & Cristal API")
        .setDescription("API para el sistema de cotizaciones de Vidrio & Cristal")
        .setVersion("1.0")
        .addTag("quotes")
        .addTag("services")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api/docs", app, document);
    await app.listen(3001);
    console.log("🚀 Backend corriendo en http://localhost:3001");
    console.log("📚 Documentación API en http://localhost:3001/api/docs");
}
bootstrap();
//# sourceMappingURL=main.js.map