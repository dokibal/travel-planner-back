import { Expose } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';
import { DayDTO } from './day.dto';

export class ItineraryOutputDTO {
  @IsString()
  @Expose()
  city: string;

  @IsArray()
  @Expose()
  days: DayDTO[];
}
