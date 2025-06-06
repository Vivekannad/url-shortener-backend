const express = require("express");
const connect = require("./db/connect")
const app = express();
const cookieParser = require("cookie-parser");
const { checkAuthentication, restrictTo } = require("./middleware/users");
const PORT = 4999;

connect();

app.use(express.json()) // to parse body data
app.use(express.urlencoded({extended: false}))  // to parse form data
app.use(cookieParser()) // to parse the cookies
app.use(checkAuthentication);
app.set("view engine", "ejs");


app.use("/url", restrictTo(["NORMAL"]),  require("./routes/url"));
app.use("/auth", require("./routes/users"));
app.use("/",  require("./routes/staticRoute"));

app.listen(PORT , () => {
    console.log(`server is running on PORT ${PORT}`);
})