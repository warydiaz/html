import * as dotenv from 'dotenv';

dotenv.config();

export const mongoConfig = {
  uri: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/?authSource=${process.env.MONGO_AUTH_DB}`,
  database: process.env.MONGO_DATABASE,
};
