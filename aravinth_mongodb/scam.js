const  mongoose = require('mongoose');


const aravinth =new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
   
})

module.exports = mongoose.model('surya',aravinth);