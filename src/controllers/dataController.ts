import { Request, Response } from 'express';
import { queryCollection, logErrorToDatabase } from '../services/databaseService';

export async function getData(req: Request, res: Response) {
  const { collection } = req.params;
  const filter = req.query || {};

  try {
    const data = await queryCollection(collection, filter);
    res.json(data);
  } catch (error) {
    await logErrorToDatabase(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
