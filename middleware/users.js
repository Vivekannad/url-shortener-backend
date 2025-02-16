const { getUser } = require("../service/auth");

const restrictToLoggedInUsersOnly = (req,res,next) => {
    const cookie = req.cookies.token;
    if(!cookie) return res.status(400).redirect("/login");

    const user = getUser(cookie);
    if(!user) return res.status(400).redirect("/login");
    req.user = user;
    next();
}

const checkAuth = (req,res,next) => {
    const cookie = req.cookies.token;
    
    const user = getUser(cookie);
    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedInUsersOnly,
    checkAuth
}