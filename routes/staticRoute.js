const { handleAllUrl, handleOneUrl, renderSignUp, renderLogIn, handleADMINurls } = require("../controller/staticRender");
const { restrictTo } = require("../middleware/users");

const router = require("express").Router();

router.get("/", restrictTo(["NORMAL","ADMIN"]) , handleAllUrl );

router.get("/allurl", restrictTo("ADMIN"), handleADMINurls )

router.get("/signup", renderSignUp );

router.get("/login", renderLogIn);

router.get("/:shortId", handleOneUrl )

module.exports = router