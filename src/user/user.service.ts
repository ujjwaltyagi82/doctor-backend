import { Injectable } from '@nestjs/common';
import { InsertOneResult } from 'mongodb';
import { User } from './user.interface';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    async createUser(user: User): Promise<InsertOneResult<User>> {
        try {
            return this.userRepository.createUser(user);
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }

    async getAllUsers(): Promise<User[]> {
        try {
            const users = await this.userRepository.getAllUsers();
            return users;
        } catch (error) {
            console.error('Error getting users:', error);
            throw error;
        }
    }

    async getUsersByQuery(query: Partial<User>): Promise<User[]> {
        try {
            const users = await this.userRepository.getUsersByQuery(query);
            return users;
        } catch (error) {
            console.error('Error getting users by query:', error);
            throw error;
        }
    }


}

