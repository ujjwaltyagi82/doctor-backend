import { Inject, Injectable } from '@nestjs/common';
import { Db, Collection, WithId, InsertOneResult } from 'mongodb';
import { User } from './user.interface';
import { ConvertObjectId } from './handelObject';

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

}
