const userModel  = require("../models/users");
const {v4: uuidv4} = require("uuid");
const { setUser } = require("../service/auth");

const signUpHandler = async(req,res) => {
    const {name , email , password} = req.body;
    if(!name || !email || !password) return res.status(400).json({message: "Credentials Not Filled"});
    const isAlreadySignedUp  = await userModel.findOne({userEmail : email});
    if(isAlreadySignedUp)return res.status(400).json({message: "User is already registered"});
    await userModel.create({
        userName : name , 
        userEmail : email,
        userPassword : password
    });
    // res.status(201).json({status: 201, message : "Successfully registered"});
    res.status(201).redirect("/login");  // it will redirect to / path of get api.
}

const signUpRender = (req,res) => {
    res.render("auth");
}

const logInRender = (req,res) => {
    res.render("login");
}

const logInHandler = async(req,res) => {
    const {email , password} = req.body;
    if(!email || !password) return res.status(400).json({message: "Credentials Not Filled!"});
    const isFound =  await userModel.findOne({userEmail : email , userPassword : password});
    if(!isFound) return res.render("login", {error: "Email or password wrong!"});
    const userId = uuidv4();
    setUser(userId , isFound);
    res.cookie("uid", userId);
    res.redirect("/");
}

module.exports = {
    signUpHandler,
    logInHandler,
    signUpRender,
    logInRender
}