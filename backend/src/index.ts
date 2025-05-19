import express, { Request, Response } from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript Express backend!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
