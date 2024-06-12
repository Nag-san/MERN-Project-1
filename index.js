import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"
import cors from "cors";

const app = express()

//Middleware for json parsing
app.use(express.json());

//Middleware for handling CORS Policy
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'PUT', 'POST', 'DELETE'],
//     allowedHeaders: ['Content-Type'],

// }));
app.use(cors());

app.use('/books', booksRoute);

app.get('/',(request,response)=>{
    console.log(request)
    return response.status(233).send("Welcome Nagraj!");
});


mongoose
.connect(mongoDBURL)  
.then(()=>{
    console.log('App connected to database');
    app.listen(PORT,()=>{
        console.log(`App is listening to port: ${PORT}`);
    })
})  
.catch((error)=>{
    console.log(error)
});