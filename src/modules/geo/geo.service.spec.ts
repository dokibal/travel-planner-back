import { GeoService } from './geo.service';
import {
  givenCityDTOs,
  givenCityEntities,
  givenSearchDTO,
} from 'src/test/mock.data';
import { CityDTO } from './city.dto';
import { GeoRepository } from './geo.repository';
import { City } from '@prisma/client';

describe('GeoServiceTest', () => {
  let geoRepositoryMock: GeoRepository;
  let geoService: GeoService;

  beforeEach(() => {
    geoRepositoryMock = {
      findCities: vi.fn(),
    } as unknown as GeoRepository;
    geoService = new GeoService(geoRepositoryMock);
  });

  it('should get cities', async () => {
    // Inputs
    const searchTerm: string = givenSearchDTO().searchTerm!;

    // Spies
    const cityEntities: City[] = givenCityEntities();
    const findCitiesSpy = vi
      .spyOn(geoRepositoryMock, 'findCities')
      .mockResolvedValue(cityEntities);

    // Test
    const resultCityDTOs: CityDTO[] = await geoService.getCities(searchTerm);

    // Expectations
    expect(findCitiesSpy).toHaveBeenCalledTimes(1);
    expect(findCitiesSpy).toHaveBeenCalledWith(searchTerm);

    expect(resultCityDTOs).toEqual(givenCityDTOs());
  });
});
