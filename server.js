//Install express server
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy');
const cors = require('cors');


const app = express();

// Parsers for POST data
app.use(express.static(__dirname + '/dist/cctFrontDec8th2019'));
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '20mb' }));

app.use(cors());

//Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', function(req,res) {

    res.sendFile(path.join(__dirname+'/dist/cctFrontDec8th2019/index.html'));

// Set out api routes proxy to point to spring boot server
app.use('/server', proxy('http://colorcrayontipbackend.ryannewbold.com'))
});

app.listen(process.env.PORT || 4200);