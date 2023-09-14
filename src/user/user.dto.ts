import { IsString, IsNumber, IsBoolean, IsNotEmpty, IsEnum } from '@nestjs/class-validator';
import { Optional } from '@nestjs/common';

export class CreateUserDto {
  @IsNotEmpty({ message: 'First name is required' })
  @IsString()
  firstName: string;

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
  MedicalHistory: boolean;

  @IsString()
  Maritalstatus: string;

  @IsNumber()
  Zip: number;

  @IsBoolean()
  medication: boolean

  @Optional()
  @IsString()
  medicationExplanation: string;

  @Optional()
  @IsString()
  MedicalHistoryExplanation: string;

  @Optional()
  @IsString()
  AppointmentNumber: string;

  @IsNumber()
  Weight: number

  @IsString()
  BloodGroup: string;

  @Optional()
  @IsString()
  AllergicSalt: string;

  @IsEnum(["Pending", "Fixed"], { message: 'Invalid appointment status' })
  AppointmentStatus: string;
}


// firstName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("^[A-Za-z' -]+$")]),
// lastName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("^[A-Za-z' -]+$")]),
// City: new FormControl("", [Validators.required, Validators.minLength(3)]),
// Zip: new FormControl("", [Validators.required, Validators.maxLength(6)]),
// age: new FormControl("", [Validators.required]),
// MedicalHistory: new FormControl("", [Validators.required]),
// medication : new FormControl("" , [Validators.required]),
// medicationExplanation : new FormControl(""),
// MedicalHistoryExplanation: new FormControl(""),
// Maritalstatus: new FormControl("", [Validators.required]),
// AppointmentStatus: new FormControl("", [Validators.required]),
// Dob: new FormControl(""),
// Gender: new FormControl("", [Validators.required]),
// mobile: new FormControl("", [Validators.required, Validators.pattern("^[0-9]{10}$")]),
// AllergicSalt: new FormControl(""),
// BloodGroup: new FormControl(""),
// Weight: new FormControl(""),
// AppointmentNumber: new FormControl("", [Validators.required]),