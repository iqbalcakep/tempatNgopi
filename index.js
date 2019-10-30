const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ngopi",{useNewUrlParser:true});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/public', express.static(__dirname + '/public'));
app.use('/api',require('./controllers/Place'));
app.use('/',function(req,res){
    return res.send("Gunakana /api untuk askes api :) ");
})

app.listen(process.env.port || 9090,()=>{
    console.log("Server is Running")
})