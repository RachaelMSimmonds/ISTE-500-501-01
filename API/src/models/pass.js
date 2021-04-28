const {conn} = require("../models/queryBuilder")

module.exports.getUserPass = (req, resp) => { 
    conn.query(
        `SELECT username, passTypeName, dateCreated, dateExpires FROM 
        ((login JOIN patrons ON login.userId = patrons.userId)
        JOIN passes ON patrons.passId = passes.passId) WHERE login.username = ?;`,
        [req] ,
        (error,results,fields) => {
            resp(error, results)

})};