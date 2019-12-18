let p = new Promise((resolve, reject) => {
  let a = 1 + 1;

  if (a == 2) {
    console.log("this is within the promise");
    resolve('Success');
  } else {
    reject('Failed');
  }
});

// Anything that is in .then() runs when it is resolved. 
p.then((message) => {
  console.log("this is in 1st then method");
}).catch((message) => {
  console.log("This is in the catch method");
});
