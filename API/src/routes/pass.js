const express = require("express");
let router = express.Router();

const query = require("../models/queryBuilder");
const pass = require("../models/pass")

router.use(express.json())

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

router.post("/", (req, res) => {
    pass.getUserPass(req.body.username,(err, results) => {
        if(err) throw err;
        res.send(results)

    })
    
})

module.exports = router;