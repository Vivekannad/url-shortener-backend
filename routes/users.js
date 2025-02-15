const { handleSignUp, handleLogIn } = require("../controller/users");

const router = require("express").Router();

router.post("/signup", handleSignUp);

router.post("/login", handleLogIn);

module.exports = router;