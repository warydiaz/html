import express from 'express';
import { getData } from './controllers/dataController';

const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());

app.get('/data/:collection', getData);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
