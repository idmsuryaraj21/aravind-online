const express = require('express');

const app = express();
let a = "ARATHI"
app.set('view engine','ejs');
app.get('/',(req,res)=>{
     res.render('a',{b:a});
})


app.listen(900,()=>console.log('runnig....'));
