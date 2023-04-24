import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes/taskRoute.js';

const app = express();

// middleware
// it gives access to the data we sent from the body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// app.use(taskRoutes);
app.use('/api/tasks', taskRoutes);

// const logger = (req, res, next) => {
//   console.log('Middleware is running');
//   next();
// };

app.get('/', (req, res) => {
  res.send('Home Page');
});

const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Mongo connected'))
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
