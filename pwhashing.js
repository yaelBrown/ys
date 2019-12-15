// Bcrypt js sandbox, using the bcrypt node package
const bcrypt = require('bcryptjs');

let pw = 'password';
let userPw = "";
let inputPw = "";

console.log('pw is ' + pw);

// hashing function
const hashPassword = async function(p) {
    console.log(bcrypt.hash(p ,10));
    var hashPwd = await bcrypt.hash(p,10);
    console.log("hashPwd is " + hashPwd);
    return hashPwd;
}

hashPassword(pw);

// Compare passwords
async function comparePasswords(ipw, upw) {
  const isMatch = await bcrypt.compare(ipw, upw);

  (isMatch) ? console.log("passwords match") : console.log("passwords dont match");
  return isMatch;
}

console.log("userpw before running compare = " + userPw);
console.log(comparePasswords(inputPw, userPw));