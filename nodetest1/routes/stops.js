var express = require('express');
var http = require('http');
var router = express.Router();

//get everything from a chosen endpoint.
function getAll(url) {
	
	var body = "";

	http.get(url, (res) => {
		//debug stuff
		console.log(`Got response: ${res.statusCode}`);
		
		//set encoding to UTF-8.
		res.setEncoding('utf8');
		
		res.on("data", function(chunk) {;
			body += chunk;
			console.log(body);
		});
		res.on("end", function() {
			//console.log('BODY: ' + body);
			console.log('reached end');
			return body;
			//res.send(parsed);
		});

	});
};

//GET us a listing of bus stops by (a) keyword(s).
//BUGGED it returns some sort of badly encoded vomit
router.get('/', function(res, req, next) {
		
	console.log(getAll('http://data.foli.fi/gtfs/v0/20160304-150630/shapes'));
	
});

router.get('/updatedata', function(res, req, next) {
	
});

module.exports = router;
