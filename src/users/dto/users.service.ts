import { injectable } from 'inversify';
import { User } from '../user.entity';
import { UserLoginDto } from './user-login.dto';
import { UserRegisterDto } from './user-register.dto';
import { IUserService } from './users.service.interface';
import 'reflect-metadata';

@injectable()
export class UserService implements IUserService {
	async createUser({ email, name, password }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		await newUser.setPassword(password);
		// validate
		return newUser;
	}

	async validateUser(dto: UserLoginDto): Promise<boolean> {
		return true;
	}
}
