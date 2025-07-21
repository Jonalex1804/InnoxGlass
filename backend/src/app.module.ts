import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { QuotesModule } from "./modules/quotes/quotes.module"
import { ServicesModule } from "./modules/services/services.module"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    QuotesModule,
    ServicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
