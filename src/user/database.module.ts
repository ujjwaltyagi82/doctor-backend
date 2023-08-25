import { Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => {
        dotenv.config();
        const uri = process.env.MONGODB_URI;
        const client = new MongoClient(uri);
        await client.connect();
        return client.db();
      },
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule { }
