const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName: {
        type : String ,
        required : true,
    },
    userEmail : {
        type : String , 
        required : true , 
        unique : true
    },
    role: {
        type : String , 
        required : true , 
        default : "NORMAL"
    },
    userPassword : {
        type : String , 
        required : true
    }
})

const users = mongoose.model("users", userSchema);

module.exports = users;