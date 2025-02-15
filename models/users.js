const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    userName: {
        type: String , 
        required: true
    },
    userEmail : {
        type : String,
        required: true , 
        unique : true
    },
    userPassword : {
        type : String , 
        required : true , 
        unique : false
    }
})

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;