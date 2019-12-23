const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const expressSession = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1/register");

const userRoutes = require("./routes/user.routes");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended : false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(expressSession(
    {
        secret : "test of user authentication",
        resave : false,
        saveUninitialized : false
    }
));

app.use("/", userRoutes);

app.listen(8000, function() {
    console.log("listening to port 8000");
});