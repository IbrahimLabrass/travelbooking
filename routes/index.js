var express = require("express");
var router = express.Router();
var session = require('express-session');

// Add a secret key for session management
router.use(session({
  secret: 'nphroiaopiasg', // Replace 'your_secret_key_here' with your actual secret key
  resave: false,
  saveUninitialized: false
}));

//get home page
router.get("/", function (req, res, next) {
  res.render("index");
});

module.exports = router;
