const bcrypt = require('bcryptjs');

let pw = 'password';

console.log('pw is ' + pw);


const hashPw = (pw) => {
  let out = bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(pw, salt, (err, hash) => {
      if (err) throw err;
    });
  });
  return out;
};

let hpw;

async function testHashPw() {
  try {
    hpw = await hashPw(pw);
    return hpw;
  } catch (e) {
    console.log(e);
  }
}

testHashPw().then((p) => {
  console.log("hashed pw is " + p);
}).catch((e) => {
  console.log("there was error " + e);
});



// let verify1 = bcrypt.compare(pw, hpw);

// console.log(verify1); // should be false-y

// let verify2 = bcrypt.compare(hpw, hpw);

// console.log(verify2); // should be true-fy