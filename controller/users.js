const userModel = require("../models/users");
const {v4: uuidv4} = require("uuid");
const { setUsers } = require("../service/auth");

const handleSignUp = async(req,res) => {
    const {name ,  email , password} = req.body;
    if(!name || !email || !password) return res.status(400).json({message : "credentials not filled!"});
    const isUserAlreadyRegistered = await userModel.findOne({userEmail : email});
    if(isUserAlreadyRegistered) return res.status(400).redirect('/signup');
    await userModel.create({
        userName : name , 
        userEmail : email,
        userPassword : password
    });
    res.redirect("/login");
}

const handleLogIn = async(req,res) => {
    const {email , password} = req.body;
    if(!email || !password) return res.status(400).json({message : "Credentials not filled!"});
    const user = await userModel.findOne({userEmail : email , userPassword : password});
    if(!user) return res.render("login", {
        error : "Email or password incorrect"
    });
    // const userId = uuidv4();
    // setUsers(userId , user);
    const token = setUsers(user);
    res.cookie("token", token );
    res.redirect("/");
    // res.json({token: token});
} 

module.exports = {
    handleSignUp , 
    handleLogIn
}