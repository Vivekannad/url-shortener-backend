const {nanoid, customAlphabet}  = require("nanoid");
const urlModel = require("../models/url")

const generateReDirectedURL = async(req,res) => {
    const {url} = req.body;
    if(!url) return res.status(400).json({status:400 , message: "Body Empty!"});
    // const shortId = nanoid(8);   // generate any random id
    let shortId = customAlphabet("12345678abcd",8);   // generates random id from the given characters
    shortId = shortId();
    await urlModel.create({
        shortId : shortId,
        reDirectUrl : url,
        visitHistory: []
    })

    return res.status(201).json({status:201 , message: "Re-directed", shortId: shortId})
}


const handleURLClicks = async(req,res) => {
    const shortId = req.params.shortId;
    if(!shortId) return res.status(400).json({status:400 , message: "Empty short Id"});
    const url = await urlModel.findOne({shortId});
    if(!url) res.status(400).json({status: 400 , message: "short id incorrect"});
    res.status(200).json({clicks: url.visitHistory.length , history: url.visitHistory});
}

module.exports = {
    generateReDirectedURL,
    handleURLClicks
}