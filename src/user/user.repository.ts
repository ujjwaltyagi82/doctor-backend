import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Db, Collection, WithId, InsertOneResult, ObjectId } from 'mongodb';
import { User } from './user.interface';
import { ConvertObjectId } from './handelObject';
import { UpdateUserDto } from './UpdateUserDto';

@Injectable()
export class UserRepository {
    private userCollection: Collection<User>;

    constructor(@Inject('DATABASE_CONNECTION') private readonly db: Db) {
        this.userCollection = this.db.collection<User>('users');
    }

    async createUser(user: User): Promise<InsertOneResult<User>> {
        return this.db.collection('users').insertOne(user);
    }

    async getAllUsers(): Promise<User[]> {
        const usersId: WithId<User>[] = await this.userCollection.find().toArray();
        const users: User[] = ConvertObjectId(usersId)
        return users;
    }

    async getUsersByQuery(query: Partial<User>): Promise<User[]> {
        const usersId: WithId<User>[] = await this.userCollection.find(query).toArray();
        const users: User[] = ConvertObjectId(usersId)
        return users;
    }

    async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
        const filter = { _id: new ObjectId(userId) };
        const update = { $set: updateUserDto };

        const updatedUser = await this.userCollection.findOneAndUpdate(filter, update);

        if (!updatedUser.value) {
            throw new NotFoundException(`User with ID ${userId} not found`);
        }

        const updatedDocument = await this.userCollection.findOne(filter);
        return updatedDocument as User;
    }


}
