const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql");

const app = express();
const port = 5000;
dotenv.config();

const conn = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
});

//////////////////////TEST CONNECTION//////////////////////////

// conn.connect((err) => {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
   
//     console.log('DB CONNECTION SUCCESSFUL: connected as id ' + conn.threadId);
//     conn.end()
// })
//conn.end()



app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/db', (req, res) => {
    conn.query('DESC `users`', (error, results, fields) => {
        if (error) throw error;
        res.send(results)
    })

})



app.listen(port, () => {
    console.log(`Listening @ http://localhost:${port}`);
});
