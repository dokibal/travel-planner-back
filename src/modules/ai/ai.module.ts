import { Module } from '@nestjs/common';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';
import { DeepSeekModule } from '../deepseek/deepseek.module';

@Module({
  imports: [DeepSeekModule],
  controllers: [AiController],
  providers: [AiService],
})
export class AiModule {}
