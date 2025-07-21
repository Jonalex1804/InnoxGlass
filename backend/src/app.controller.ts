import { Controller, Get } from "@nestjs/common"
import { ApiTags, ApiOperation } from "@nestjs/swagger"
import { AppService } from "./app.service"

@ApiTags("app")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: "Health check del API" })
  getHello(): string {
    return this.appService.getHello()
  }

  @Get("health")
  @ApiOperation({ summary: "Estado del servidor" })
  getHealth() {
    return {
      status: "OK",
      timestamp: new Date().toISOString(),
      service: "Vidrio & Cristal API",
    }
  }
}
