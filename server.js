var fs = require('fs');
var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(fs.readFileSync(__dirname + '/frontend/html/index.html'));

    console.log('Yey! A request!');
})

app.listen(8080);
