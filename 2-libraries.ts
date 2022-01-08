import express, { Request, Response, NextFunction } from 'express';

const app = express();
app.use(express.json());

const middleware =
  (
    { name }: { name: string } // currying
  ) =>
  (req: Request, res: Response, next: NextFunction) => {
    res.locals.name = name; //instead of req.name
  };

app.use(middleware({ name: 'Omer' }));
//First generic object of Request is for request params
app.get('/api/:id', (req: Request<{ id: 'string' }, {}, { name: string }, {}>, res: Response) => {
  req.params.id; // We could not get id without using first generic object
  req.body.name; // We could not get name query without using second generic object
  console.log(res.locals.name);

  return res.send('Hello world');
});

app.post('/api/data', (req: Request, res: Response) => {
  console.log(req.body);

  return res.sendStatus(200);
});

app.all('/api/all', (req: Request, res: Response) => {
  console.log('All type of http methods comes this endpoint if they have that url ');

  return res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server is running');
});
