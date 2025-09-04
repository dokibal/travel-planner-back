import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AiController {

    @Get("/ai/itinerary")
    async getItinerary(): Promise<string> {
        return "This is a nice itinerary";
    }
}
