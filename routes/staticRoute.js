const { handleAllUrl, handleOneUrl } = require("../controller/staticRender");

const router = require("express").Router();

router.get("/", handleAllUrl )


router.get("/:shortId", handleOneUrl )

module.exports = router