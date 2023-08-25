import { WithId } from 'mongodb';
import { User } from './user.interface';

export function ConvertObjectId(usersWithId: WithId<User>[]): User[] {
  return usersWithId.map(userWithId => ({
    ...userWithId,
    _id: userWithId._id.toHexString(),
  }));
}
