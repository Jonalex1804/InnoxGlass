import { QuotesService } from "./quotes.service";
import type { CreateQuoteDto } from "./dto/create-quote.dto";
export declare class QuotesController {
    private readonly quotesService;
    constructor(quotesService: QuotesService);
    createQuote(createQuoteDto: CreateQuoteDto): Promise<{
        success: boolean;
        message: string;
        data: {
            createdAt: Date;
            status: string;
            nombre: string;
            apellido: string;
            email: string;
            telefono: string;
            servicio: string;
            mensaje?: string;
            id: string;
        };
    }>;
    getAllQuotes(): Promise<{
        success: boolean;
        data: any[];
    }>;
    getQuoteById(id: string): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        data: any;
        message?: undefined;
    }>;
}
