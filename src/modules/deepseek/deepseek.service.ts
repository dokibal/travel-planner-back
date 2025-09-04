import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class DeepSeekService extends OpenAI {
    constructor(configService: ConfigService) {
        super({ baseURL: configService.get<string>("DEEPSEEK_BASE_URL"), apiKey: configService.get<string>("DEEPSEEK_API_KEY") });
    }
}
