const { getUser } = require("../service/auth");

const restrictToLoggedInUsersOnly = (req,res,next) => {
    const cookie = req.cookies.uid;
    if(!cookie) return res.status(400).redirect("/login");

    const user = getUser(cookie);
    if(!user) return res.status(400).redirect("/login");
    console.log(user);
    next();
}

module.exports = {
    restrictToLoggedInUsersOnly
}