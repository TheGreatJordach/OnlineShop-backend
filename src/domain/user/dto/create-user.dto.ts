import {
  IsEmail,
  IsPhoneNumber,
  IsString,
  Length,
} from '@nestjs/class-validator';

export class CreateUserDto {
  @Length(5, 10)
  readonly name: string;
  @IsEmail()
  readonly email: string;
  @IsString()
  readonly password: string;
  @IsPhoneNumber('MA')
  readonly phone: string;
}
