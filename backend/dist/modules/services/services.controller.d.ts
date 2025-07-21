import { ServicesService } from "./services.service";
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    getAllServices(): Promise<{
        success: boolean;
        data: {
            id: string;
            name: string;
            description: string;
            features: string[];
        }[];
    }>;
}
