var http = require('http');
var ecstatic = require('ecstatic')({root: __dirname + '/public'});

////////////
// SERVER //
///////////
http.createServer(function (req, res) {
	ecstatic(req,res);
}).listen(process.env.PORT || 8000);
 
var currentPort = process.env.PORT || 8000;
console.log('Server running on port '+currentPort);
