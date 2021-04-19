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