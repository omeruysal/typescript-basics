import express, { Request, Response, NextFunction } from 'express';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  return res.send('Hello world');
});
