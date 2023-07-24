import { Injectable } from "@nestjs/common";
import { log } from "console";
import { UserEnitity } from "./user.entity";
import { CreateUserDto } from "./dto/createUser.dto";
import { v4 as uuid } from 'uuid';
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService{

    private readonly users: UserEnitity[] = [];

    find(username:string): UserEnitity[] {
        return this.users;
    }

    findOne(id: string): UserEnitity {
        log(typeof (id));
        const user = this.users.find((user) => user.id === id);
        return user;
    }
    
    create(createUserDto: CreateUserDto) {
        const newUser: UserEnitity = {
            id: uuid(),
            ...createUserDto,
        }
        this.users.push(newUser);
        return newUser;
    }
     

    update(id: string, updateUserDto: UpdateUserDto) {
        const index = this.users.findIndex((user) => user.id === id);
        this.users[index] = { ...this.users[index], ...updateUserDto };
        return this.users[index];
    }

    remove(id: string) {
        const index = this.users.findIndex((user) => user.id === id);
        this.users.splice(index, 1);
    }
}