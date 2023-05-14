//const express = require('express')
import  express  from "express";
import Connection from "./database/db.js";
import dotenv from 'dotenv';
import Router from "./routes/routes.js";
import cors from 'cors';
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
const port = 5000;
app.use('/',Router);

app.listen(port,()=>{console.log(`server is running on port ${port}`)})

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username,password);