import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  company!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  @MaxLength(2000)
  message!: string;
}
