
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
import Connection from './database/db.js';

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);


const URL = 'mongodb+srv://chirag_79:chinuseth@travelo.brxogoe.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

Connection(USERNAME, PASSWORD);