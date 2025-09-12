import { Expose } from 'class-transformer';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { TravelType } from 'src/enums';

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
}
