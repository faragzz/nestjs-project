import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto{
    @IsString()
    @Length(1,20,{groups:['create'], message:'incorrect length create'})
    @Length(1,20,{groups:['update'], message:'incorrect length update'})
    readonly username:string;
    @IsEmail()
    readonly email:string;
    @IsString()
    @IsNotEmpty()
    readonly country:string; // if this field not required just add country?:string insted
}
