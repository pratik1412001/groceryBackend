const mongoose = require('mongoose');

const AuthuserSchema = new mongoose.Schema({
    useremail:{
        type:String,
        required:true,
        unique:true
    },
    userphone:{
        type:Number,
        required:true
    },
    userpassword:{
        type:String,
        required:true
    }
},{timestamps:true})


module.exports = mongoose.model('authentication',AuthuserSchema);