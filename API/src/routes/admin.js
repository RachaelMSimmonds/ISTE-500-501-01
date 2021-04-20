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

router.put("/organization", (req, res) => {
    const orgInfo = {
        orgId: req.body.orgId,
        orgName: req.body.orgName,
        orgDesc: req.body.orgDesc,
        website: req.body.website,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode
    }
    for (var key in orgInfo){
        if (typeof orgInfo[key] == 'undefined'){
            orgInfo[key] = null;
        }    
    }
    admin.updateOrganization(orgInfo, (err, results) => {
        if(err) throw err;
        res.send(results)
    })
})

router.put("/pass", (req, res) => {
    const passInfo = {
        timestamp: req.body.timestamp,
        passId: req.body.passId
    }
    admin.updatePass(passInfo, (err, results) => {
        if(err) throw err;
        res.send(results)
    })
})







module.exports = router;