import { Injectable } from "@nestjs/common"

@Injectable()
export class AppService {
  getHello(): string {
    return "Innox Glass EC - ¡Funcionando correctamente!"
  }
}
