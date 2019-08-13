const express = require('express')
const app = express()
const port = 3000
const path = require('path')

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