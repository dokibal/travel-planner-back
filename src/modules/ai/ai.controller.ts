import { Controller, Post, Logger, Body } from '@nestjs/common';
import { AiService } from './ai.service';
import { ItineraryInputDTO } from './itinerary-input.dto';
import { ItineraryOutputDTO } from './itinerary-output.dto';

@Controller('api')
export class AiController {
  private readonly logger: Logger = new Logger(AiController.name);

  constructor(private aiService: AiService) {}

  @Post('/ai/itinerary')
  async createItinerary(
    @Body() itineraryInputDTO: ItineraryInputDTO,
  ): Promise<ItineraryOutputDTO | null> {
    this.logger.log('Received request to create itinerary');
    return this.aiService.createItinerary(itineraryInputDTO);
  }
}
