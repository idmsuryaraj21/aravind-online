const express  = require('express');
const mongoose  = require('mongoose');
const app = express();
app.use(express.json())
const Ar =  require('./Scama');

mongoose.set('strictQuery', true);
 mongoose.connect('mongodb+srv://root:root@cluster0.vvavlud.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("DB connected..");
    }
 });
 

app.get('/',async(req,res)=>{
    const a = await Ar.find();
    res.json(a);    
})


app.post('/',async(req,res)=>{
    const a = await Ar({
        name:req.body.user,
        age:req.body.uage
    })
    a.save();
    res.json(a);
})


app.get('/:id',async(req,res)=>{
    const {id}= req.params;
    const a = await Ar.findById(id);
    res.json(a);

})

app.delete('/:id',async(req,res)=>{
    const {id} = req.params;
    await Ar.findByIdAndDelete(id);
    res.json('deleted...');
})

app.put('/:id',async(req,res)=>{
    const {id}  = req.params;
const a = await Ar.findById(id);

a.name=req.body.user;
a.age= req.body.uage;
a.save();
res.json(a)
}) 


app.listen(800,console.log('runing.....'))