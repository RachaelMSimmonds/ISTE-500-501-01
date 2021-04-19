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
const { conn } = require("../models/queryBuilder");


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

router.post('/signup', (req, res) => {
    const data = {
        userName: req.body.userName,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        role: req.body.role,
        organization: req.body.organization,
        organizationId: req.body.organizationId
    }
    for (var key in data){
        if (typeof data[key] == 'undefined'){
            data[key] = null;
        }    
    }
    if(
        data.userName === null ||
        data.password === null ||
        data.firstName === null ||
        data.lastName === null
        ){
        res.status(401).json({
            error: true,
            message: "Missing required information."
        })
    }else{

        user.verifyUser(data, (err, results) => {
            if(err) throw err;
            if(results.length != 0){
                res.status(401).json({
                            error: true,
                            message: "Username already exists."
                        });  

            }
            else{
                user.createUser(data, (err, results) => {
                    if(err) throw err;
                    if(data.role === "admin"){
                        user.addUserToAdmin(results, (err, results) => {
                            if(err) throw err;
                            res.json({error: false, message: "Successfully created one admin account", affected_rows: results.affectedRows})
                        })
                    }
                    else if(data.role === "partner"){
                        if(data.organizationId != null){
                            //Validate to see if organization exists in DB
                            user.addUserToPartner({id:results, orgId: data.organizationId}, (err, results) => {
                                if(err) throw err;
                                res.json({error: false, message: "Successfully created one partner account", affected_rows: results.affectedRows})
                            })
                        }
                        else{
                            res.status(401).json({
                                error: true,
                                message: "Organization must be selected"
                            });  
                        }
                    }
                    else{
                       res.json({error: false, message: "Successfully created one patron account", affected_rows: results.affectedRows})
                    }
                    //res.json({error: false, message: "Successfully created one user", id: results})
                })
            }

        })
    }
    

    // console.log(data.firstName)
    // res.json(data)
})

module.exports = router;