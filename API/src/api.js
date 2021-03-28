const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql");

const user = require("./routes/user");
const pass = require("./routes/pass");


const app = express();
const port = 5000;
dotenv.config();

app.use("/user", user);
app.use("/pass", pass);



app.listen(port, () => {
    console.log(`Listening @ http://localhost:${port}`);
});
