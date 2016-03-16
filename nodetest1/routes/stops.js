var express = require('express');
var http = require('follow-redirects').http;
var fs = require('fs');
var router = express.Router();

//get everything from a chosen endpoint.
function getAll(url) {
	
	var body = "";

	http.get(url, function(response) {
		//debug stuff
		console.log(`Got response: ${response.statusCode}`);
		
		//set encoding to UTF-8.
		response.setEncoding('utf8');
		
		response.on("data", function(chunk) {;
			console.log(chunk);
			var parsed = JSON.parse(chunk);
			console.log(parsed);
		});
		response.on("end", function() {
			//console.log('BODY: ' + body);
			console.log('reached end');
			return body;
			//res.send(parsed);
		});

	});
};

//download latest data package from foli (overwriting the old.)
//Foli does a redirect when you want to download it so follow-redirects package redirects
function updateData(cb) {
	var file = fs.createWriteStream("data.zip");
	http.get("http://data.foli.fi/gtfs/gtfs.zip", function(response) {
		var redirect = null;
		if (response.statusCode === 302) {
			var location = response.headers[hasHeader('location', response.headers)]
		}
		response.pipe(file);
		file.on('finish', function() {
			console.log('file downloaded');
			file.close(cb);
			return file;
		});
	});
};

//GET us a listing of bus stops by (a) keyword(s).
//BUGGED it returns some sort of badly encoded vomit
router.get('/', function(res, req, next) {
		
	console.log(getAll('http://data.foli.fi/gtfs/stop_times/stop'));
	
});

//download latest data package and integrate it into Mongodb
router.get('/updatedata', function(res, req, next) {
	updateData();
});

module.exports = router;
