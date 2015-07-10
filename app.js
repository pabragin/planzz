var express = require('express');

var server = express(); // better instead

server.use('/bower_components', express.static(__dirname + '/bower_components'));
server.use(express.static(__dirname + '/angular'));


server.listen(80);