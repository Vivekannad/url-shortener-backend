const { getUser } = require("../service/auth");


const checkAuthentication = (req,res,next) => {
    const tokenCookie = req.cookies.token;
    req.user = null;
    if(!tokenCookie) return next();
    const user = getUser(tokenCookie);
    if(!user) return next();
    req.user = user;
    next();
}

const restrictTo = (roles=[]) => {
return function (req,res,next){
    if(!req.user)return res.redirect("/login");

    if(!roles.includes(req.user.role))return res.end("UnAuthorized");

    next();
}
}

module.exports = {
    checkAuthentication , 
    restrictTo
}