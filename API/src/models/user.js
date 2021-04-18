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


module.exports.getUsers = (req, resp) => { 
    conn.query(
        "SELECT * FROM users;SELECT * FROM passes",
        (error,results,fields) => {
            resp(error, results)

})};

module.exports.login = (req, resp) => { 
    conn.query(
        "SELECT * FROM `login` WHERE userName = ? AND password = ?",
        [req[0], req[1]] ,
        (error,results,fields) => {
            resp(error, results)

})};

