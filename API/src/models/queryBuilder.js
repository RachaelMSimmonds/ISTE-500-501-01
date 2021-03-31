const dotenv = require("dotenv");
const mysql = require("mysql");

dotenv.config();

const conn = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
});

var queryBuilder = {
    helloWorld: () => {
        return "Hello WOrld"
    },
    callQuery: (q, callback) =>{
        conn.query(q, (error, results, fields) => {
            let err = error
            let result = results
            callback(err, result)
        })
    }
};

module.exports = queryBuilder