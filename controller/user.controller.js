const User = require("../models/user.model");

exports.user_signIn = function(req, res) {
    res.render("signUp");
};

exports.user_submit = function(req, res) {
    // create new user and save to db

    console.log("post request recieved");
    let user = new User(
        {
            name : req.body.name,
            password : req.body.password,
            email : req.body.email,
            phone : req.body.phone,
            college : req.body.college
        }
    );

    user.save(function(err) {
        if (err)
            return console.log(err);
        console.log("user saved");
        res.render("profile", {user : user});
    });
};