import { Controller, Logger, Get, Query } from '@nestjs/common';
import { CityDTO } from './city.dto';
import { GeoService } from './geo.service';
import { SearchDTO } from './search.dto';

@Controller('api')
export class GeoController {
  private readonly logger: Logger = new Logger(GeoController.name);

  constructor(private geoService: GeoService) {}

  @Get('/cities')
  async getCities(@Query() searchDTO: SearchDTO): Promise<CityDTO[]> {
    this.logger.log(
      `Received request to get cities by search: ${JSON.stringify(searchDTO)}`,
    );
    return this.geoService.getCities(searchDTO.searchTerm);
  }
}
