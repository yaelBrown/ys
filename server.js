const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const mongoose = require("mongoose");

// connect to db
mongoose.connect("mongodb://app:password123@ds219078.mlab.com:19078/yaelspace", {
  useNewUrlParser: true
}, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("connected to database");
  }
});

let loginSchema = new mongoose.Schema({
  username: String,
  firstname: String,
  lastname: String,
  password: String,
  email: String
});

let login = mongoose.model("login", loginSchema);

login.create({
  username: "yaelTest",
  firstname: "Yael",
  lastname: "test",
  password: "test123",
  email: "yael@test.com"
}, (error, data) => {
  if (error) {
    console.log("Problem logging document to the collection");
    console.log(data);
  } else {
    console.log("Added Data to Collection");
    console.log(data);
  }
});


// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname,'index.html')))
app.get('/login', (req, res) => res.sendFile(path.join(__dirname,'login.html')))
app.get('/signup', (req, res) => res.sendFile(path.join(__dirname,'signup.html')))

// db routes
app.post('/register', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.email;

  var newuser = new username();
    newuser.user = username;
    newuser.password = password;
    newuser.firstname = firstname;
    newuser.lastname = lastname;
    newuser.email = email;
    newuser.save(function(err, savedUser) {
      if(err) {
        console.log(err);
        return res.status(500).send();
      }

      return res.status(200).send;
    });

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))