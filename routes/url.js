const { generateReDirectedURL, handleURLClicks, updateServerSideRendering } = require("../controller/url");

const router = require("express").Router();

router.post("/", generateReDirectedURL);

router.get("/analytics/:shortId", handleURLClicks);

router.get("/test", updateServerSideRendering);


module.exports = router;