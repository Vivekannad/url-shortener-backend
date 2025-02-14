const { generateReDirectedURL, handleURLClicks } = require("../controller/url");

const router = require("express").Router();

router.post("/", generateReDirectedURL);

router.get("/analytics/:shortId", handleURLClicks);


module.exports = router;