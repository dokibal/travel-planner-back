import { Injectable } from '@nestjs/common';
import { DeepSeekService } from '../deepseek/deepseek.service';

@Injectable()
export class AiService {
    private readonly logger: Logger = new Logger(AiService.name);

    constructor(private deepSeekService: DeepSeekService) { }

    async getItinerary(): Promise<string | null> {
        this.logger.log("Generating itinerary using DeepSeek");

        try {
            const completion = await this.deepSeekService.chat.completions.create({
                model: "deepseek-chat",
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful travel assistant"
                    },
                    { role: "user", content: "I would like a 5-day vacation in Barcelona focused on sightseeing." }
                ],
                temperature: 1.3,
                max_tokens: 300
            });
            return completion.choices[0].message.content;
        } catch (error) {
            console.error("Search error:", error.message);
            throw error;
        }
    }
}
