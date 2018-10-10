const express = require('express')
const app = express()
const port = 3000

var requestTime = function (req, res, next) {
    console.log('request time')
    req.requestTime = Date.now()
    next()
}

var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}

app.use(myLogger, requestTime) // determine the order of middleware

app.get('/', function(req, res){
    //res.send("Welcome to my homepage")
    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText)
})

app.get('/hello', function(req, res){
    res.send("Hello my name is Thanh")
})






















app.listen(port, () => console.log(`Example app listening on port ${port}!`))