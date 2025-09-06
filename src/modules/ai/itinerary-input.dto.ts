import { Expose } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Budget, Transportation, TravelType, Weather } from 'src/enums';

export class ItineraryInputDTO {
  @IsString()
  @Expose()
  destination: string;

  @IsNumber()
  @Expose()
  days: number;

  @IsEnum(TravelType)
  @Expose()
  travelType: TravelType;

  @IsEnum(Budget)
  @IsOptional()
  @Expose()
  budget?: Budget;

  @IsEnum(Transportation)
  @IsOptional()
  @Expose()
  transportation?: Transportation;

  @IsEnum(Weather)
  @IsOptional()
  @Expose()
  weather?: Weather;
}
