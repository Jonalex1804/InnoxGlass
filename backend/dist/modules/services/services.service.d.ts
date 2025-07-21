export declare class ServicesService {
    private services;
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
