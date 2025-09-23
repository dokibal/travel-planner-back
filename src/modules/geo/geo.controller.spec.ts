import { GeoService } from './geo.service';
import { GeoController } from './geo.controller';
import { SearchDTO } from './search.dto';
import { givenCityDTOs, givenSearchDTO } from 'src/test/mock.data';
import { CityDTO } from './city.dto';

describe('GeoControllerTest', () => {
  let geoServiceMock: GeoService;
  let geoController: GeoController;

  beforeEach(() => {
    geoServiceMock = {
      getCities: vi.fn(),
    } as unknown as GeoService;
    geoController = new GeoController(geoServiceMock);
  });

  it('should get cities', async () => {
    // Inputs
    const searchDTO: SearchDTO = givenSearchDTO();

    // Spies
    const citiDTOs: CityDTO[] = givenCityDTOs();
    const getCitiesSpy = vi
      .spyOn(geoServiceMock, 'getCities')
      .mockResolvedValue(citiDTOs);

    // Test
    const resultCityDTOs: CityDTO[] = await geoController.getCities(searchDTO);

    // Expectations
    expect(getCitiesSpy).toHaveBeenCalledTimes(1);
    expect(getCitiesSpy).toHaveBeenCalledWith(searchDTO.searchTerm);

    expect(resultCityDTOs).toStrictEqual(citiDTOs);
  });
});
