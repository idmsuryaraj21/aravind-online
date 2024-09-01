const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://admin:admin@cluster0.p71y9an.mongodb.net/?retryWrites=true&w=majority',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("connected..");
    }
})

app.get('/',(req,res)=>{
    res.send("hello");
})

app.listen(900,()=>console.log("running.."))

