// const users = {};

// const setUsers = (uid , user) => {
//     users[uid] = user;
// }

// const getUser = (id) => {
//     return users[id];
// }

// module.exports = {
//     setUsers , 
//     getUser
// }

const users = new Map();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const setUsers = ( user) => {
    // users.set(uid, user);
   return jwt.sign({
    _id : user._id,
    name : user.userName ,
    email : user.userEmail
   }, process.env.SECRET_KEY );
};

const getUser = (token) => {
    // return users.get(id);
    if(!token) return null;
    try{
       return jwt.verify(token , process.env.SECRET_KEY);
    }catch(err) {return null};
};

module.exports = {
    setUsers, 
    getUser
};
