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

// Setup routes
// app.use('/login/', (req, res) => {
//   const sql = 'SELECT * FROM users';
//   let out = "";
//   const query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     console.log(results);
//     res.json(results);
//   });
// });

app.use('/login', routeUsers);
// app.use('/', (req, res) => {
//   res.sendStatus(418);
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));