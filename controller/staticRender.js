const urlModel = require("../models/url");

const handleAllUrl = async(req,res) => {
    const allUrl = await urlModel.find();
    res.status(200).render("home", {
        allUrl 
    });
}

const handleOneUrl = async(req,res) => {
    const shortId = req.params.shortId;
    const redirect = await urlModel.findOneAndUpdate({
        shortId : shortId
    },{
        $push : {
            visitHistory: {
                timestamp : Date.now()
            }
        }
    })

    if(!redirect) return res.status(400).json({message : "Id not present"});
    res.status(200).redirect(redirect.reDirectUrl);
}

module.exports = {
    handleAllUrl,
    handleOneUrl
}