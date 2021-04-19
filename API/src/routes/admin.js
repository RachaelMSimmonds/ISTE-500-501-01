const express = require("express");
const cors = require('cors')
let router = express.Router();

const admin = require("../models/admin")


router.use(cors());
router.use(express.json())

router.get("/allpasses", (req, res) => {
    admin.getAllPasses(req,(err, results) => {
        if(err) throw err;
        res.send(results)

    })
})

router.get("/patrons", (req, res) => {
    admin.getPatrons(req,(err, results) => {
        if(err) throw err;
        res.send(results)

    })
})

router.get("/admins", (req, res) => {
    admin.getAdmins(req,(err, results) => {
        if(err) throw err;
        res.send(results)

    })
})

router.get("/partners", (req, res) => {
    admin.getPartners(req,(err, results) => {
        if(err) throw err;
        res.send(results)

    })
}).post("/partners", (req, res) =>{
    res.send("HELJDLKJFDF")
})

router.get("/organizations", (req, res) => {
    admin.getOrganizations(req, (err, results) => {
        if(err) throw err;
        res.send(results)
    })
})



module.exports = router;