"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesService = void 0;
const common_1 = require("@nestjs/common");
let QuotesService = class QuotesService {
    constructor() {
        this.quotes = [];
    }
    async createQuote(createQuoteDto) {
        const quote = {
            id: Date.now().toString(),
            ...createQuoteDto,
            createdAt: new Date(),
            status: "pending",
        };
        this.quotes.push(quote);
        console.log("Nueva cotización recibida:", quote);
        return {
            success: true,
            message: "Cotización enviada exitosamente",
            data: quote,
        };
    }
    async getAllQuotes() {
        return {
            success: true,
            data: this.quotes,
        };
    }
    async getQuoteById(id) {
        const quote = this.quotes.find((q) => q.id === id);
        if (!quote) {
            return {
                success: false,
                message: "Cotización no encontrada",
            };
        }
        return {
            success: true,
            data: quote,
        };
    }
};
exports.QuotesService = QuotesService;
exports.QuotesService = QuotesService = __decorate([
    (0, common_1.Injectable)()
], QuotesService);
//# sourceMappingURL=quotes.service.js.map