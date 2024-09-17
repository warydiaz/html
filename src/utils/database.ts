import { MongoClient } from 'mongodb';
import { mongoConfig } from '../config/config';

const client = new MongoClient(mongoConfig.uri);
let isConnected = false;

export async function connectToDatabase() {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
  }
  return client.db(mongoConfig.database);
}
