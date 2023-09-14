import { Controller, Post, Body, Get, UsePipes, ValidationPipe, Query , Put , Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { User } from './user.interface';
import { GetUserQueryDto } from './user.query.dto';
import { UpdateUserDto } from './UpdateUserDto';

@Controller('/users')
@ApiTags('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('/create')
    @UsePipes(new ValidationPipe({ stopAtFirstError: true }))
    async createUser(@Body() userDto: CreateUserDto) {
        const createdUser = await this.userService.createUser(userDto);
        return createdUser;
    }

    @Get("/allpatients")
    async getUsers(): Promise<User[]> {
        const users = await this.userService.getAllUsers();
        return users;
    }

    @Get("/query")
    @UsePipes(new ValidationPipe({ stopAtFirstError: true }))
    async getUsersByQuery(@Query() query: GetUserQueryDto) {
        const users = await this.userService.getUsersByQuery(query);
        return users;
    }

    @Put('/:id')
    @UsePipes(new ValidationPipe({ stopAtFirstError: true }))
    async updateUser(@Param('id') userId: string, @Body() updateUserDto: UpdateUserDto) {
        const updatedUser = await this.userService.updateUser(userId, updateUserDto);
        return updatedUser;
    }
    
}