const { signUpHandler, signUpRender, logInHandler } = require("../controller/users");

const router = require("express").Router();

router.post("/signup", signUpHandler);

router.post("/login", logInHandler);

module.exports = router;