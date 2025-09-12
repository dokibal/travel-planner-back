import { Injectable, Logger } from '@nestjs/common';
import { CityDTO } from './city.dto';
import { GeoRepository } from './geo.repository';
import { plainToInstance } from 'class-transformer';
import { City } from '@prisma/client';

@Injectable()
export class GeoService {
  private readonly logger: Logger = new Logger(GeoService.name);

  constructor(private geoRepository: GeoRepository) {}

  async getCities(searchTerm?: string): Promise<CityDTO[]> {
    const cityEntities: City[] = await this.geoRepository.getCities(searchTerm);

    return plainToInstance(CityDTO, cityEntities);
  }
}
