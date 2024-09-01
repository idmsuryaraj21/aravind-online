const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.sendFile('./a.html',{root:__dirname})
})


app.get('/home',(req,res)=>{
    res.sendFile('./b.html',{root:__dirname});
})

app.listen(800,()=>console.log('runing...'))