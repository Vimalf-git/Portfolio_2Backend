import express from 'express';
import cors from 'cors';
import route from './src/route/index.js'
import dotenv from 'dotenv'
dotenv.config()
const app=express();
app.use(express.json());
app.use(cors());
app.use('/',route)

app.listen(8000,()=>{console.log("port listen "+8000)})