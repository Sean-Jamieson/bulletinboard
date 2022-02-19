import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
})