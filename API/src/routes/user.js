const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const util = require('../utility');
const model = require('../models/user');
const bodyParser = require('body-parser');
let router = express.Router();

router.use(cors());
router.use(bodyParser.json());
  
// generate token using secret from process.env.JWT_SECRET
var jwt = require('jsonwebtoken');

router.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username)

    // return 400 error if so
    if (!username || !password){
        return res.status(400).json({
            error: true,
            message: "username or password required."
        });
    }

    // return 401 status if the credential is not match.
    if (username !== userData.username || password !== userData.password) {
        return res.status(401).json({
            error: true,
            message: "Your username or password is Invalid."
        });
    }
    
    // generate token
    const token = util.generateToken(userData);
    // get basic user details
    const userObj = util.getCleanUser(userData);
    // return the token along with user details
    return res.json({ user: userObj, token });
});

// static user details
const userData = {
    userId: "1",
    username: "admin",
    password: "password",
    name: "Vinny Venutolo",
  };

module.exports = router;