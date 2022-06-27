import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Incorrect Email' })
	email: string;

	@IsString({ message: 'Password not specified' })
	password: string;

	@IsString({ message: 'Name not specified' })
	name: string;
}