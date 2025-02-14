const express = require("express");
const connect = require("./db/connect")
const app = express();
const urlModel = require("./models/url")
const path = require("path");

const PORT = 4999;

connect();

app.use(express.json())
app.set("view engine", "ejs");
// app.use("views", path.resolve("./views"));


app.use("/", require("./routes/url"));

app.get("/:shortId", async(req,res) => {
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
})

app.listen(PORT , () => {
    console.log(`server is running on PORT ${PORT}`);
})