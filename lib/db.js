import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
    const client = await MongoClient.connect(
        'mongodb+srv://iverson3:Slowhand.1996@test-one.bvlhpok.mongodb.net/house?retryWrites=true&w=majority'
      );
  return client;
}