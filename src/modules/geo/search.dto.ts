import { Expose } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class SearchDTO {
  @IsOptional()
  @IsString()
  @Expose()
  searchTerm?: string;
}
