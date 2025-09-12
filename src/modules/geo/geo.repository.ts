import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { City } from '@prisma/client';

@Injectable()
export class GeoRepository {
  private readonly logger: Logger = new Logger(GeoRepository.name);

  constructor(private prismaService: PrismaService) {}

  async getCities(searchTerm?: string): Promise<City[]> {
    this.logger.log('Request to get city entities');
    return this.prismaService.city.findMany({
      where: {
        ...(searchTerm && {
          name: { contains: searchTerm, mode: 'insensitive' },
        }),
      },
      orderBy: { population: 'desc' },
      take: 10,
    });
  }
}
