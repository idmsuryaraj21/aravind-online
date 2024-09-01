const mongoose = require('mongoose');
 
const sc = mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('SSS',sc);