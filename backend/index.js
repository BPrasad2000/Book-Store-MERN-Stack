import express from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from"./routes/booksRoute.js";
const app =express();

app.use(express.json());
app.use(
    cros({
        origin:"http://localhost:3000",
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:['Content-Type'],
    })
)
app.get('/',(req,res)=>{
    console.log(req)
    return res.status(234).send('welcome to MERN Stack Tutorial')
})

app.use('/books',booksRoute);

mongoose.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to database');
    app.listen(PORT,()=>{
        console.log(`App is listening to port : ${PORT}`);
    })
})
.catch((error) =>{
    console.log(error);
});