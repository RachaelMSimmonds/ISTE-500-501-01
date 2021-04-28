const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql");
const cors = require('cors');
const model = require('./models/user');
const util = require('./utility');
const jwt = require('jsonwebtoken');

const user = require("./routes/user");
const pass = require("./routes/pass");
const admin = require("./routes/admin");

const app = express();
const port = 5000;
dotenv.config();

app.use("/user", user);
app.use("/pass", pass);
app.use("/admin", admin);

// enable CORS
app.use(cors());
// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//



// Middleware that checks if JWT token exists and verifies it if it does exist.
// In all future routes, this helps to know if the request is authenticated or not.
app.use(function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.headers['authorization'];
    if (!token) return next(); //if no token, continue
   
    token = token.replace('Bearer ', '');
    jwt.verify(token, process.env.TOKEN_SECRET, function (err, user) {
      if (err) {
        return res.status(401).json({
          error: true,
          message: "Invalid user."
        });
      } else {
        console.log("Valid Token!");
        req.user = user; //set the user to req so other routes can use it
        next();
      }
    });
  });



// request handlers
app.get('/', (req, res) => {
  console.log("api.js > GET / executed: ")  
  if (!req.user) return res.status(401).json({ success: false, message: 'Invalid user to access it.' });
    res.send('Hello, ' + req.user.username);
});



// verify the token and return it if it's valid
app.get('/verifyToken', function (req, res) {
    console.log("api.js > GET /verifytoken executed: ")
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token;
    if (!token) {
      return res.status(400).json({
        error: true,
        message: "Token is required."
      });
    }
    // check token that was passed by decoding token using secret
    jwt.verify(token, process.env.TOKEN_SECRET, function (err, user) {
      if (err){
        return res.status(401).json({
          error: true,
          message: "Invalid token."
        });
      }

      console.log('>> getUserInfo begin to execute: ');
      model.getUserInfo(user.userId, (error, results) => {
        if(err) throw err;
        results = results[0];
        if(user.userId != results.userId){
          console.log("IN BAD AUTH")
          return res.status(401).json({
                error: true,
                message: "Invalid user."
              });
        }
        var userObj = util.getCleanUser(JSON.stringify(user));
        return res.json({ user: userObj, token });
      })
    });
  });

app.listen(port, () => {
    console.log(`Listening @ http://localhost:${port}`);
});
