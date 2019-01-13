//express
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
//mongoose
const mongoose = require('mongoose');


  
//mongo
mongoose.connect('mongodb://localhost:27017/myDb');
//middleware

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../dist/MEAN-Library-App'));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



require('./routes')(app);


//start server
app.listen(8080,()=>{
    console.log('>>> Open http://127.0.0.1:%s/ in your browser.','8080');

    
});