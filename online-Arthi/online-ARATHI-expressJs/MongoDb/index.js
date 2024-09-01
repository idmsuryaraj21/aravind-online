const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://root:root@cluster0.vvavlud.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("db connected...");
    }
})

app.get('/',(req,res)=>{
    res.send("hello sutrya")
})


app.listen(800,console.log("runing..."))