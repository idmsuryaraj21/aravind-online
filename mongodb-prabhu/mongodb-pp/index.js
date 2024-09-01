const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());

app.use(cors());

const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const surya = require('./Sca');
mongoose.connect('mongodb+srv://root:root@cluster0.qnfqncy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',(err)=>{
    if(err){
        console.log(err);
    }
    
    else{
        console.log("DB connected..");
    }
})


app.get ('/',async(req,res)=>{
    const a = await surya.find();

    res.json(a);
})

app.post('/',async(req,res)=>{
    const a = await new surya({
        name:req.body.name,
        
    })
    a.save();
    res.json(a)
})


app.get('/:id',async(req,res)=>{
    const {id}  = req.params;
    const a = await surya.findById(id);
    res.json(a)
})


app.delete('/:id',async(req,res)=>{
    const {id} = req.params;
    await surya.findByIdAndDelete(id);
    res.json('deleted..')
})


app.put('/:id',async(req,res)=>{
    const {id}= req.params;
    const a = await surya.findById(id);
    a.name=req.body.name;
    a.save();
})

app.listen(800,()=>console.log("running..."))