const dotenv = require("dotenv");

// generate token using secret from process.env.TOKEN_SECRET
var jwt = require('jsonwebtoken');
 
// generate token and return it
function generateToken(user) {
  //1. Don't use password and other sensitive fields
  //2. Use the information that are useful in other parts
  if (!user) return null;
 
  var u = {
    userId: user.userId,
    username: user.username,
    name: user.name,
  };
 
  return jwt.sign(u, process.env.TOKEN_SECRET, {
    expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
}
 
// return basic user details
function getCleanUser(user) {
  if (!user) return null;
 
  return {
    userId: user.userId,
    username: user.username,
    name: user.name,
  };
}
 
module.exports = {
  generateToken,
  getCleanUser
}