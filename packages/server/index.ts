import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';

// Read all the variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Define routes
app.get('/', (req: Request, res: Response) => {
   res.send('Hello World!');
});

app.get('/api/hello', (req: Request, res: Response) => {
   res.json({ message: 'Hello World!' });
});

// Start web server
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
