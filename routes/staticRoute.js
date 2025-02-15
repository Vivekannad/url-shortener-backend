const { handleAllUrl, handleOneUrl } = require("../controller/staticRender");
const { signUpRender, logInRender } = require("../controller/users");

const router = require("express").Router();

router.get("/", handleAllUrl );

router.get("/signup", signUpRender);

router.get("/login", logInRender);


router.get("/:shortId", handleOneUrl )



module.exports = router