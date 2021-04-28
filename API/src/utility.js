const dotenv = require("dotenv");

// generate token using secret from process.env.TOKEN_SECRET
var jwt = require('jsonwebtoken');
 
// generate token and return it
function generateToken(user) {
  console.log("utility.js > generateToken executed: ")
  user = JSON.parse(user)
  //console.log("user object: " + "\n userId: " + user.userId + "\n username: " + user.userame)
  //1. Don't use password and other sensitive fields
  //2. Use the information that are useful in other parts
  if (!user) return null;
  var u = {
    userId: user.userId,
    username: user.username,
  };
  console.log("generating " + u.username + "'s token and set to expire in 24 hours")
  return jwt.sign(u, process.env.TOKEN_SECRET, {
    expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
}
 
// return basic user details
function getCleanUser(user) {
  console.log(">> getCleanUser executed: ");
  if (!user) return null;
  user = JSON.parse(user);
  return {
    userId: user.userId,
    username: user.username,
  };
}
 
module.exports = {
  generateToken,
  getCleanUser
}