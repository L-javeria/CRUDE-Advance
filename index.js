const express = require('express')
const app = express() 
const bodyParser = require('body-parser'); 
const Buffer = require('buffer/').Buffer

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => { 
    res.sendFile(__dirname + "/HomePage.html")
})
app.get('/login', (req, res) => res.sendFile(__dirname + "/login.html"))

app.post('/login', (req,res) => {
    let username = req.body.username
    let password = req.body.password
    console.log(username + ':' + password)
    
    base64 = Buffer.from(username).toString('base64')
    console.log(base64)
    res.send("Now, your Base64 Authenticator is " + base64)
})

app.listen(3000, console.log('Port is Running'))
