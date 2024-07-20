import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { User } from './schemas/user.shemas';
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UserService);
    getAll(): Promise<User[]>;
    create(createUserDto: CreateUserDto): Promise<User>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: CreateUserDto): Promise<User>;
    delete(id: string): Promise<User>;
}
