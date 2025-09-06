import { Expose } from 'class-transformer';
import { IsArray, IsNumber } from 'class-validator';

export class DayDTO {
  @IsNumber()
  @Expose()
  day: number;

  @IsArray()
  @Expose()
  activities: string[];
}
