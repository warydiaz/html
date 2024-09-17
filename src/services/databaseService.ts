import { connectToDatabase } from '../utils/database';

export async function queryCollection(collectionName: string, filter: any = {}) {
  const db = await connectToDatabase();
  return db.collection(collectionName).find(filter).toArray();
}

export async function logErrorToDatabase(error: any) {
  try {
    const db = await connectToDatabase();
    const errorLog = {
      message: error.message || 'Unknown error',
      stack: error.stack || '',
      timestamp: new Date(),
    };
    await db.collection('errors').insertOne(errorLog);
    console.error('Error logged to MongoDB:', errorLog);
  } catch (loggingError) {
    console.error('Failed to log error to MongoDB:', loggingError);
  }
}
