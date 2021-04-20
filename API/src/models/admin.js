const {conn} = require("../models/queryBuilder")

module.exports.getAllPasses = (req, resp) => { 
    conn.query(
        `SELECT * FROM ((
            users INNER JOIN patrons ON users.userId = patrons.userId)
            INNER JOIN passes ON patrons.passId = passes.passId);`,
        (error,results,fields) => {
            resp(error, results)

})};

module.exports.getPatrons = (req, resp) => { 
    conn.query(
        `SELECT * FROM ((
            patrons INNER JOIN users ON users.userId = patrons.userId)
            INNER JOIN passes ON patrons.passId = passes.passId);`,
        (error,results,fields) => {
            resp(error, results)

})};

module.exports.getAdmins = (req, resp) => { 
    conn.query(
        `SELECT * FROM users INNER JOIN admins 
        ON admins.adminId = users.userId;`,
        (error,results,fields) => {
            resp(error, results)

})};

module.exports.getPartners = (req, resp) => { 
    conn.query(
        `SELECT * FROM ((
            partners INNER JOIN users ON users.userId = partners.userId)
            INNER JOIN organizations ON partners.orgId = organizations.orgId);`,
        (error,results,fields) => {
            resp(error, results)

})};

module.exports.getOrganizations = (req, resp) =>{
    conn.query(
        `SELECT * FROM organizations`,
        (error,results,fields) => {
            resp(error, results)
})};

module.exports.getPassTypes = (req, resp) =>{
    conn.query(
        `SELECT * FROM passtype;`,
        (error,results,fields) => {
            resp(error, results)
})};


module.exports.updatePass = (req, resp) =>{
    conn.query(
        `UPDATE passes SET dateExpires = ? WHERE passId = ?;`,
        [req.timestamp, req.passId],
        (error,results,fields) => {
            resp(error, results)
})};

module.exports.makePass = (req, resp) =>{
    conn.query(
        `INSERT INTO passes(
            passTypeName,
            dateExpires
        ) VALUES (
            'General'
        );`,
        [req.passTypeName, req.dateExpires],
        (error,results,fields) => {
            conn.query(
                `INSERT INTO patrons VALUES (?,?)`,
                [req.userId, results.insertId],
                (error,results,fields) => {
                    resp(error, results)
        })
            
})};

module.exports.updateOrganization = (req, resp) =>{
    conn.query(
        `UPDATE organizations 
        SET orgName = ?, 
        orgDesc = ?, 
        website=?, 
        address1 = ?, 
        address2 = ?, 
        city = ?, 
        state= ?, 
        zipcode = ?
        WHERE orgId = ?;`,
        [
            req.orgName, 
            req.orgDesc,
            req.website,
            req.address1,
            req.address2,
            req.city,
            req.state,
            req.zipcode,
            req.orgId
        ],
        (error,results,fields) => {
            resp(error, results)
})};


module.exports.getOrgBenefits = (req, resp) =>{
    conn.query(
        `SELECT * FROM benefits WHERE orgId = ?;`,
        [req.orgId],
        (error,results,fields) => {
            resp(error, results)
})};

module.exports.postOrgBenefits = (req, resp) =>{
    conn.query(
        `INSERT INTO benefits ( benefitsDesc, orgId )VALUES( ?, ? );`,
        [req.benefitsDesc, req.orgId],
        (error,results,fields) => {
            resp(error, results)
})};

module.exports.deleteOrgBenefits = (req, resp) =>{
    conn.query(
        `DELETE FROM benefits WHERE benefitsId = ? AND orgId = ?; `,
        [req.benefitsId, req.orgId],
        (error,results,fields) => {
            resp(error, results)
})};