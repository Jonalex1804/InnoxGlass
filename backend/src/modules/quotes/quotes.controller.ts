import { Controller, Post, Body, Get, Param } from "@nestjs/common"
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger"
import { QuotesService } from "./quotes.service"
import type { CreateQuoteDto } from "./dto/create-quote.dto"

@ApiTags("quotes")
@Controller("quotes")
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Post()
  @ApiOperation({ summary: "Crear nueva cotización" })
  @ApiResponse({ status: 201, description: "Cotización creada exitosamente" })
  async createQuote(@Body() createQuoteDto: CreateQuoteDto) {
    return this.quotesService.createQuote(createQuoteDto)
  }

  @Get()
  @ApiOperation({ summary: "Obtener todas las cotizaciones" })
  async getAllQuotes() {
    return this.quotesService.getAllQuotes()
  }

  @Get(":id")
  @ApiOperation({ summary: "Obtener cotización por ID" })
  async getQuoteById(@Param("id") id: string) {
    return this.quotesService.getQuoteById(id)
  }
}

