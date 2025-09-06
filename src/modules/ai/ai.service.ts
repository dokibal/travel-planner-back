import { Injectable, Logger } from '@nestjs/common';
import { DeepSeekService } from '../deepseek/deepseek.service';
import { ItineraryInputDTO } from './itinerary-input.dto';
import { ItineraryOutputDTO } from './itinerary-output.dto';
import { givenItineraryOutputDTO } from './mock.data';

@Injectable()
export class AiService {
  private readonly logger: Logger = new Logger(AiService.name);

  constructor(private deepSeekService: DeepSeekService) {}

  private systemPrompt: string = `
  You are a helpful travel assistant. The user will ask you to generate an itinerary based on some input parameters.
  Please generate the itinerary and output them in the provided JSON format. 

  EXAMPLE INPUT: 
  I would like a 3-day vacation in Barcelona focused on Sightseeing / Cultural.

  EXAMPLE OUTPUT:
  {
  "city": "Barcelona",
  "days": [
    {
      "day": 1,
      "activities": [
        "Visit Sagrada Família",
        "Explore Park Güell",
        "Walk along Passeig de Gràcia"
      ]
    },
    {
      "day": 2,
      "activities": [
        "Tour the Gothic Quarter",
        "Visit the Picasso Museum",
        "Dinner in El Born"
      ]
    },
    {
      "day": 3,
      "activities": [
        "Take the funicular to Montjuïc",
        "Visit the National Art Museum of Catalonia (MNAC)",
        "Watch the Magic Fountain show"
      ]
    }
  ]
  }`;

  async createItinerary(
    itineraryInputDTO: ItineraryInputDTO,
  ): Promise<ItineraryOutputDTO | null> {
    this.logger.log(
      `Generating itinerary based on input: ${JSON.stringify(itineraryInputDTO)}`,
    );

    try {
      const completion = await this.deepSeekService.chat.completions.create({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: this.systemPrompt,
          },
          {
            role: 'user',
            content: this.messageTemplate(itineraryInputDTO),
          },
        ],
        temperature: 1.3,
        max_tokens: 1000,
        response_format: {
          type: 'json_object',
        },
      });
      const content: string | null = completion.choices[0].message.content;

      return content ? (JSON.parse(content) as ItineraryOutputDTO) : null;
    } catch (error) {
      console.error('Error generating itinerary: ', error);
      throw error;
    }
  }

  private messageTemplate(itineraryInputDTO: ItineraryInputDTO): string {
    return `I would like a ${itineraryInputDTO.days}-day vacation in ${itineraryInputDTO.destination} focused on ${itineraryInputDTO.travelType}.`;
  }
}
