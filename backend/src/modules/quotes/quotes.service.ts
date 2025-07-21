import { Injectable } from "@nestjs/common"
import type { CreateQuoteDto } from "./dto/create-quote.dto"

@Injectable()
export class QuotesService {
  private quotes = []

  async createQuote(createQuoteDto: CreateQuoteDto) {
    const quote = {
      id: Date.now().toString(),
      ...createQuoteDto,
      createdAt: new Date(),
      status: "pending",
    }

    this.quotes.push(quote)

    console.log("Nueva cotización recibida:", quote)

    return {
      success: true,
      message: "Cotización enviada exitosamente",
      data: quote,
    }
  }

  async getAllQuotes() {
    return {
      success: true,
      data: this.quotes,
    }
  }

  async getQuoteById(id: string) {
    const quote = this.quotes.find((q) => q.id === id)

    if (!quote) {
      return {
        success: false,
        message: "Cotización no encontrada",
      }
    }

    return {
      success: true,
      data: quote,
    }
  }
}
