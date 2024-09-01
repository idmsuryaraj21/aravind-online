const mongoose  = require('mongoose');

const sca = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("ArthiUK",sca)

