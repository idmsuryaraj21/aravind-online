const express = require('express');
const app = express();

const body = require('body-parser');
app.use(body.urlencoded({extended:true}));
let a = [ ];

app.set('view engine','ejs');
app.get('/',(req,res)=>{
    // res.send('hello ')

    res.render('a',{b:a});
})

 app.post('/',(req,res)=>{
    a.push(req.body.uname);
    res.redirect('/')
 })

 
app.listen(800,console.log('runing...'))