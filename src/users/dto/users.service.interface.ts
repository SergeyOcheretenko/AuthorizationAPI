import { User } from '../user.entity';
import { UserLoginDto } from './user-login.dto';
import { UserRegisterDto } from './user-register.dto';

export interface IUserService {
	createUser: (dto: UserRegisterDto) => Promise<User | null>;
	validateUser: (dto: UserLoginDto) => Promise<boolean>;
}
