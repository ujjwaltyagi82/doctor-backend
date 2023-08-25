import { IsOptional, IsString, IsNumber } from '@nestjs/class-validator';

export class GetUserQueryDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  age: number;

  @IsOptional()
  @IsNumber()
  mobile: number;

  @IsOptional()
  @IsNumber()
  Dob: string

  @IsOptional()
  @IsString()
  City: string;
}