const mongoose = require("mongoose");
require("dotenv").config();


async function connect(){
    try{
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Successfully connected");
    }catch(err) {
        console.error(err);
    }

}

module.exports = connect;