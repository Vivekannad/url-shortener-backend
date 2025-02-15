const { handleAllUrl, handleOneUrl, renderSignUp, renderLogIn } = require("../controller/staticRender");

const router = require("express").Router();

router.get("/", handleAllUrl )

router.get("/signup", renderSignUp );

router.get("/login", renderLogIn);

router.get("/:shortId", handleOneUrl )

module.exports = router