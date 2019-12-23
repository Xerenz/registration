const User = require("../models/user.model");

// to register user

const passport = require("passport");
const localStrategy = require("passport-local");

// config passport

passport.use(new localStrategy(User.authenticate()));
User.serializeUser(User.serializeUser());
User.deserializeUser(User.deserializeUser());

exports.user_signIn = function(req, res) {
    res.render("signUp");
};

exports.user_submit = function(req, res) {
    // create new user and save to db

    console.log("post request recieved");

    User.register(new User(
        {
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            college : req.body.college
        }
    ), req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            return res.render("signUp");
        }

        passport.authenticate("local")(req, res, function() {
            res.redirect("/profile");
        });
    });
};