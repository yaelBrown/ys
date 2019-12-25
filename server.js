require('dotenv').config();

const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const port = 8080
const cors = require('cors');

const routeUsers = require('./routes/users');

// Setup middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors());
app.use('/api/users', routeUsers);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Create another page for being logged into the site (with react and dashboard.js)

// Create logged in portion of site, only visable if user is logged in
// create different navbar for logged in user
// create sidebar