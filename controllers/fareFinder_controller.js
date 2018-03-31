var express = require("express");
var router = express.Router();

// Import the model (users.js) to use its database functions
var db = require("../models/");

//index -- homepage
router.get('/', function (req, res) {
    res.render('index');
});

//admin page
router.get('/admin', function (req, res) {
    //res.render('admin');
    db.User.findAll({}).then(function (data) {
        res.render("admin", {
            users: data
        });
    })
});

//login page
router.get('/login', function (req, res) {
    res.render('login');
});

//registration page
router.get('/reg', function (req, res) {
    res.render('reg');
});

router.post("/api/users", function (req, res) {
    db.User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(function () {
        res.redirect("/");
    });
});

//estimates page
router.get('/estimates', function (req, res) {
    res.render('estimates');

});

router.delete('/api/users/:id', function (req, res) {
    db.User.destroy({
        where: {
            id: req.params.id
        }
    }).then(function () {
        res.redirect("/");
        //res.redirect(200, "/admin");
    });
});

//need to add functions to assets/js/users.js
router.get("/api/users/:id", function (req, res) {
    db.User.findOne({
        where: {
            id: req.params.id
        },
    }).then(function (dbUser) {
        res.json(dbUser);
    });
});

module.exports = router;