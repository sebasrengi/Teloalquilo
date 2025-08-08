import express from 'express';
import {PORT} from './config.js';

import indexRoutes from './routes/index.routes.js';
import tasksRoutes from './routes/tasks.routes.js';

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.use(indexRoutes);
app.use(tasksRoutes);

app.listen(PORT);
console.log(`sever is listening on ${PORT}`);