import { Controller, Get } from "@nestjs/common"
import { ApiTags, ApiOperation } from "@nestjs/swagger"
import { ServicesService } from "./services.service"  // IMPORT normal, no "import type"

@ApiTags("services")
@Controller("services")
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  @ApiOperation({ summary: "Obtener todos los servicios disponibles" })
  async getAllServices() {
    return this.servicesService.getAllServices()
  }
}
