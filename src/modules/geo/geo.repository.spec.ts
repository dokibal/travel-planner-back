import { givenCityEntities, givenSearchDTO } from 'src/test/mock.data';
import { GeoRepository } from './geo.repository';
import { City } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

describe('GeoRepositoryTest', () => {
  let prismaServiceMock: PrismaService;
  let geoRepository: GeoRepository;

  beforeEach(() => {
    prismaServiceMock = {
      city: {
        findMany: vi.fn(),
      },
    } as unknown as PrismaService;
    geoRepository = new GeoRepository(prismaServiceMock);
  });

  it('should find cities', async () => {
    // Inputs
    const searchTerm: string = givenSearchDTO().searchTerm!;

    // Spies
    const cityEntities: City[] = givenCityEntities();
    const findManySpy = vi
      .spyOn(prismaServiceMock.city, 'findMany')
      .mockResolvedValue(cityEntities);

    // Test
    const resultCityEntities: City[] =
      await geoRepository.findCities(searchTerm);

    // Expectations
    expect(findManySpy).toHaveBeenCalledTimes(1);
    expect(findManySpy).toHaveBeenCalledWith({
      where: {
        OR: [
          { name: { contains: searchTerm, mode: 'insensitive' } },
          { countryName: { contains: searchTerm, mode: 'insensitive' } },
        ],
      },
      orderBy: { population: 'desc' },
      take: 10,
    });

    expect(resultCityEntities).toEqual(cityEntities);
  });
});
