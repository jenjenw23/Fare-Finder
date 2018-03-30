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
        res.render("admin", { users: data });
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

//estimates page
router.get('/estimates', function (req, res) {
    res.render('estimates');

});

//need to add functions to assets/js/users.js
router.get("/admin/users/:id", function (req, res) {
    db.User.findOne({
        where: {
            id: req.params.id
        },
    }).then(function (dbUser) {
        res.json(dbUser);
    });
});

module.exports = router;


