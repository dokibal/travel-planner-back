import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CityDTO {
  @IsString()
  @Expose()
  name: string;

  @IsNumber()
  @Expose()
  latitude: number;

  @IsNumber()
  @Expose()
  longitude: number;

  @IsString()
  @Expose()
  countryCode: string;

  @IsNumber()
  @Expose()
  population: number;

  @IsNumber()
  @Expose()
  elevation: number;

  @IsString()
  @Expose()
  timeZone: string;
}
