//add connection to file
const { response } = require('express');
const {conn} = require("../models/queryBuilder")
const mysql = require("mysql")

function getUserData(){
    var testUser = {
        userId: "1",
        username: "admin",
        password: "password",
        name: "Vinny Venutolo",
    };
    return testUser;
}


//call query function here
module.exports.getUserData = getUserData;


module.exports.getUserInfo = (req, resp) => { 
    conn.query(
        "SELECT * FROM users WHERE userId = ?", [req],
        (error,results,fields) => {
            //console.log(results.userId)
            resp(error, results)

})};

module.exports.login = (req, resp) => { 
    conn.query(
        "SELECT * FROM `login` WHERE userName = ? AND password = ?",
        [req.username, req.password] ,
        (error,results,fields) => {
            resp(error, results)

})};

module.exports.verifyUser = (req, resp) => { 
    conn.query(
        "SELECT * FROM `login` WHERE userName = ?",
        [req.userName],
        (error,results,fields) => {
            resp(error, results)

})};

module.exports.createUser = (req, resp) => { 
    conn.query(
        `INSERT INTO users (
            firstName,
            lastName,
            email,
            phone,
            address1,
            address2,
            city,
            state,
            zipcode
        )VALUES(?,?,?,?,?,?,?,?,?);`,
        [
            req.firstName,
            req.lastName,
            req.email,
            req.phone,
            req.address1,
            req.address2,
            req.city,
            req.state,
            req.zipcode
        ] ,
        (error,results,fields) => {
            //resp(error, results)
            let rId = results.insertId;
            conn.query(`INSERT INTO login (
                userId,
                userName,
                password
            )VALUES(?,?,?)`, [
                results.insertId,
                 req.userName,
                  req.password
                ], (error,results, fields) =>{
                    resp(error, rId)
            })

})};

module.exports.addUserToAdmin = (req, resp) => { 
    conn.query(
        `INSERT INTO admins VALUES(?)`,
        [req],
        (error,results,fields) => {
            resp(error, results)

})};

module.exports.addUserToPartner = (req, resp) => { 

    conn.query(
        `INSERT INTO partners VALUES(?, ?)`,
        [req.id, req.orgId],
        (error,results,fields) => {
            resp(error, results)

            //Nest a second query to get organization id
            
})};








