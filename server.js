const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const port = 8080

const db = require('./db/db');

const routeUsers = require('./routes/users');

// Setup middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());


app.use('/api/users', routeUsers);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


// add post method to login
// create register view in ys/ys
// use react router to route to that view

// use jwt to add logged in user to cookies/session