import { IsString, IsNumber, IsBoolean, IsNotEmpty, IsEnum } from '@nestjs/class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'First name is required' })
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Lastname name is required' })
  lastName: string;

  @IsNumber()
  @IsNotEmpty({ message: 'age is required' })
  age: number;

  @IsNumber()
  @IsNotEmpty({ message: 'contact information is required' })
  mobile: number;

  @IsString()
  @IsNotEmpty({ message: 'Date Of Birth is required' })
  Dob: string;

  @IsString()
  @IsNotEmpty({ message: 'City is required' })
  City: string;

  @IsBoolean()
  @IsNotEmpty({ message: 'Past Medical record is required' })
  PastMedicalHistory: boolean;

  @IsString()
  Maritalstatus: string;

  @IsNumber()
  Zip: number;


  @IsEnum(["Pending", "Fixed"], { message: 'Invalid appointment status' })
  AppointmentStatus: string;
}
