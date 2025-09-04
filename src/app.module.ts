import { Module } from '@nestjs/common';
import { AiModule } from './modules/ai/ai.module';
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from './config.schema';
import { DeepSeekModule } from './modules/deepseek/deepseek.module';

@Module({
  imports: [AiModule, DeepSeekModule, ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env'], validationSchema: configValidationSchema })],
})
export class AppModule { }
