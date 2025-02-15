const express = require("express");
const connect = require("./db/connect")
const app = express();
const urlModel = require("./models/url")
const path = require("path");
const cookieParser = require("cookie-parser")
const { restrictToLoggedInUsersOnly, checkAuth } = require("./middleware/auth");

const PORT = 4999;

connect();

app.use(express.json()) // to parse body data
app.use(express.urlencoded({extended: false}))  // to parse form data
app.use(cookieParser());
app.set("view engine", "ejs");
// app.use("views", path.resolve("./views"));


app.use("/url", restrictToLoggedInUsersOnly , require("./routes/url"));
app.use("/auth", require("./routes/users"));
app.use("/", checkAuth , require("./routes/staticRoute"));

app.listen(PORT , () => {
    console.log(`server is running on PORT ${PORT}`);
})