const express = require("express");
let router = express.Router();

//const query = require("../models/queryBuilder");
const pass = require("../models/pass")
const cors = require('cors');
// enable CORS
router.use(cors());
// parse application/json
router.use(express.json());
// parse application/x-www-form-urlencoded
router.use(express.urlencoded({ extended: true }));

//get all passes
// router.get("/", (req, res) => {
//     query.callQuery("DESC `passes`", (err, result) => {
//         if(err){
//             //console.log(err)
//             res.send(err)
//         }
//         else{
//             res.send(result)
//         }
//     })
// })

// //get a pass of a userId
// router.get("/:userId", (req, res) => {
//     query.callQuery("DESC `users`", (err, result) => {
//         if(err){
//             //console.log(err)
//             res.send(err)
//         }
//         else{
//             res.send(result)
//         }
//     })
// })

router.post("/", (req, res) => {
    pass.getUserPass(req.body.username,(err, results) => {
        if(err) throw err;
        res.send(results)

    })
    
})

module.exports = router;