import { Module } from '@nestjs/common';
import { GeoController } from './geo.controller';
import { GeoService } from './geo.service';
import { PrismaModule } from '../prisma/prisma.module';
import { GeoRepository } from './geo.repository';

@Module({
  imports: [PrismaModule],
  controllers: [GeoController],
  providers: [GeoService, GeoRepository],
})
export class GeoModule {}
