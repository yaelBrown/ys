const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/', (req, res) => res.sendFile(path.join(__dirname,'index.html')))
app.get('/login', (req, res) => res.sendFile(path.join(__dirname,'login.html')))
app.get('/signup', (req, res) => res.sendFile(path.join(__dirname,'signup.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))