const express = require("express");
let router = express.Router();

const query = require("../models/queryBuilder");

//get all passes
router.get("/", (req, res) => {
    query.callQuery("DESC `passes`", (err, result) => {
        if(err){
            //console.log(err)
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
})

//get a pass of a userId
router.get("/:userId", (req, res) => {
    query.callQuery("DESC `users`", (err, result) => {
        if(err){
            //console.log(err)
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
})

module.exports = router;