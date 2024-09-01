let http = require('http');


http.createServer((req,res)=>{
    // res.write('hello arathi');
    res.write("<h1>hello arathi</h1>");

    res.end()
}).listen(800,()=>console.log('runing...'))