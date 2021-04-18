const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const util = require('../utility');
const user = require('../models/user.js');
let router = express.Router();


router.use(cors());
router.use(express.json());

// static user details
const userData = user.getUserData();

// generate token using secret from process.env.TOKEN_SECRET
var jwt = require('jsonwebtoken');


//send post body in json format:
// {
//     "username": "username",
//     "password": "password"
// }
router.post("/signin", (req, res) => {
    const creds  = {
        username: req.body.username,
        password: req.body.password
    }

    console.log(creds.username)

    // return 400 error if so
    if (!creds.username || !creds.password){
        return res.status(400).json({
            error: true,
            message: "username or password required."
        });
    }

    //Checks DB to see if entry with inputted credentials exists
    user.login(creds, (err, results) => {
        if(err) throw err;

        //returns a 401 status if the credentials don't exist
        if(results.length == 0){
            res.status(401).json({
                        error: true,
                        message: "Your username or password is Invalid."
                    });  

        }
        else{
            res.json({
                userId: results[0].userId,
                username: results[0].userName
            })
            //res.send(results)
            
            // // generate token
            // const token = util.generateToken(creds);
            // // get basic user details
            // const userObj = util.getCleanUser(userData);
            // // return the token along with user details
            // return res.json({ user: userObj, token });

        }   

    })//end of query login

});//end of router login

router.get('/signup', (req, res) => {
    console.log("HERE!")
    user.getUsers(req, (err, results) => {
        if(err) throw err;
        res.send(results)

    })

})

module.exports = router;