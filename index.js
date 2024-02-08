import "dotenv/config";
import express from 'express';
import { connect } from './db/client.js';
import StudentsRouter from "./routes/students.js";

const app = express();

app.use(express.json());
app.use('/students', StudentsRouter);

const startServer = async () => {
  try {
    await connect();
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.log('Error connecting to the database', error.message);
  }
}

startServer();