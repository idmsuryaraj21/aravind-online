const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const surya = require('./sca');
app.use(express.json);
mongoose.connect('mongodb+srv://admin:admin@cluster0.p71y9an.mongodb.net/?retryWrites=true&w=majority',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("connecting...");
    }
})

app.get('/',async(req,res)=>{
    const a = await surya.find();
    res.json(a);
})
app.post('/',async(req,res)=>{
    const a = await new surya({
        name:req.body.name,
          })
          a.save();
        res.json(a);
        
})

app.listen(800,()=>console.log('runing...'))