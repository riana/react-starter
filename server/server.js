//jshint esversion:6
// jshint node:true

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var staticDir = `./`;
var port = 30000;


var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use("/", express.static(staticDir));

app.listen(port, function () {
	console.log('Internal server running @' + port);
});
