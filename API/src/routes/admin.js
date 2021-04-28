const express = require("express");
const cors = require('cors')
let router = express.Router();

const admin = require("../models/admin")


router.use(cors());
router.use(express.json())

router.get("/allpasses", (req, res) => {
    console.log("admin.js > GET /allpasses executed: ")
    admin.getAllPasses(req,(err, results) => {
        if(err) throw err;
        res.send(results)

    })
})

router.get("/patrons", (req, res) => {
    console.log("admin.js > GET /patrons executed: ")
    admin.getPatrons(req,(err, results) => {
        if(err) throw err;
        res.send(results)

    })
})

router.get("/admins", (req, res) => {
    console.log("admin.js > GET /admins executed: ")
    admin.getAdmins(req,(err, results) => {
        if(err) throw err;
        res.send(results)

    })
})

router.get("/partners", (req, res) => {
    console.log("admin.js > GET /partners executed: ")
    admin.getPartners(req,(err, results) => {
        if(err) throw err;
        res.send(results)

    })
}).post("/partners", (req, res) =>{
    console.log("admin.js > POST /partners executed: ")
    res.send("HELJDLKJFDF")
})

router.get("/organizations", (req, res) => {
    console.log("admin.js > GET /organization executed: ")
    admin.getOrganizations(req, (err, results) => {
        if(err) throw err;
        res.send(results)
    })
})

router.put("/organization", (req, res) => {
    console.log("admin.js > PUT /organization executed: ")
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
        console.log("admin.js > updateOrganization executed: ")
        if(err) throw err;
        res.send(results)
    })
})

router.get("/passTypes", (req, res) => {
    console.log("admin.js > GET /passTypes executed: ")
    admin.getPassTypes(req, (err, results) => {
        if(err) throw err;
        res.send(results)
    })
})


router.put("/pass", (req, res) => {
    console.log("admin.js > PUT /pass executed: ")
    const passInfo = {
        timestamp: req.body.timestamp,
        passId: req.body.passId
    }
    admin.updatePass(passInfo, (err, results) => {
        if(err) throw err;
        res.send(results)
    })
}).post("/pass", (req, res) => {
    console.log("admin.js > POST /pass executed: ")
    const passInfo = {
        userId: req.body.userId,
        passTypeName: req.body.passTypeName,
        dateExpires: req.body.dateExpires
    }
    admin.makePass(passInfo, (err, results) => {
        if(err) throw err;
        res.send(results)
    })
})

router.get("/orgBenefits", (req, res) =>{
    console.log("admin.js > GET /orgBenefits executed: ")
    admin.getOrgBenefits(req.body.orgId, (err, results) => {
        if(err) throw err;
        res.send(results)
    })
    
}).post("/orgBenefits", (req, res) =>{
    console.log("admin.js > POST /orgBenefits executed: ")
    const benefitsInfo = {
        benefitsDesc: req.body.benefitsDesc,
        orgId: req.body.orgId
    }

    admin.postOrgBenefits(benefitsInfo, (err, results) => {
        if(err) throw err;
        res.send(results)
    })
    
}).delete("/orgBenefits", (req, res) =>{
    console.log("admin.js > DELETE /orgBenefits executed: ")
    const benefitsInfo = {
        benefitsId: req.body.benefitsId,
        orgId: req.body.orgId
    }

    admin.deleteOrgBenefits(benefitsInfo, (err, results) => {
        if(err) throw err;
        res.send(results)
    })
    
})







module.exports = router;