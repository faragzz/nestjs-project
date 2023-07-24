import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe,Query } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEnitity } from "./user.entity";
import { v4 as uuid } from 'uuid';
import { log } from "console";
import { CustomValidationPipe } from "./pipes/validation.pipe";
import { UserService } from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private readonly userService:UserService){}

    @Get()
    find(@Query('username',CustomValidationPipe) username:string): UserEnitity[] {
        return this.userService.find(username);
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string): UserEnitity {
        return this.userService.findOne(id);
    }
    
    @Post()
    @UsePipes(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true}))
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }
     
    @Patch(':id')
    @UsePipes(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true}))
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id,updateUserDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {
        this.userService.remove(id);
    }
}