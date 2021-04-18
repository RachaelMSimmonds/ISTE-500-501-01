const {conn} = require("../models/queryBuilder")

module.exports.getUserPass = (req, resp) => { 
    conn.query(
        `SELECT userName, passTypeName, dateCreated, dateExpires FROM 
        ((login JOIN patrons ON login.userId = patrons.userId)
        JOIN passes ON patrons.passId = passes.passId) WHERE login.userName = ?;`,
        [req] ,
        (error,results,fields) => {
            resp(error, results)

})};