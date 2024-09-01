const express = require('express');
const app = express();

const  mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const tiruchy = require('./scam')
const cors = require('cors')

app.use(cors())
app.use(express.json());
mongoose.connect('mongodb+srv://admin:admin@cluster0.p71y9an.mongodb.net/?retryWrites=true&w=majority',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('connected');
    }
})

app.get('/',async(req,res)=>{
      const a =await tiruchy.find();
      res.json(a)
})

app.post('/',async(req,res)=>{
    const a = await new tiruchy({
        name:req.body.name
    })
    a.save();
    res.json('data added')
})
app.get('/:id',async(req,res)=>{
        const {id}=req.params;
        const a = await tiruchy.findById(id);
        res.json(a)
})

app.delete('/:id',async(req,res)=>{
    const {id}= req.params;
   await  tiruchy.findByIdAndDelete(id);
     res.json('deleted')
})  

app.put('/put/:id',async(req,res)=>{
    const {id}=req.params;
    const a = await tiruchy.findById(id);
    a.name=req.body.name;
    a.save();
    res.json('updated')
})


app.listen(800,()=>console.log('running'))