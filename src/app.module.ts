import { Module } from '@nestjs/common';
import { AiModule } from './modules/ai/ai.module';
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from './config.schema';
import { DeepSeekModule } from './modules/deepseek/deepseek.module';
import { GeoModule } from './modules/geo/geo.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  imports: [
    AiModule,
    DeepSeekModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      validationSchema: configValidationSchema,
    }),
    GeoModule,
    PrismaModule,
  ],
})
export class AppModule {}
