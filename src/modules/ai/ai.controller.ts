import { Controller, Get, Logger } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('api')
export class AiController {
  private readonly logger: Logger = new Logger(AiController.name);

  constructor(private aiService: AiService) {}

  @Get('/ai/itinerary')
  async getItinerary(): Promise<string | null> {
    this.logger.log('Received request to get itinerary');
    return this.aiService.getItinerary();
  }
}
