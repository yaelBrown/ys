require('dotenv').config();

const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const port = 8080
const cors = require('cors');

const routeUsers = require('./routes/users');
const routeFollowers = require('./routes/followers');

// Setup middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors());

app.use('/api/users', routeUsers);
app.use('/api/followers', routeFollowers)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



// getting follower queries to work, need to work with promises again.