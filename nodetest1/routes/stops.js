var express = require('express');
var http = require('follow-redirects').http;
var fs = require('fs');
var stop_api = express.Router();



//get everything from a chosen endpoint.
function getAll(url) {
	
	var data = "";

	http.get(url, function(response) {
		//debug stuff
		console.log(`Got response: ${response.statusCode}`);
		
		//set encoding to UTF-8.
		response.setEncoding('utf8');
		
		response.on("data", function(chunk) {
			console.log(`BODY: ` + chunk.toString());
			data += chunk;
		});
		response.on("end", function() {
			console.log("reached end");
			return data;
		});

	});
};

//get calculated times from Föli SIRI -API for chosen stop.
function getNextTimes(stop) {
	var full_url = 'http://data.foli.fi/siri/sm/'+stop.toString()+'/pretty'
	
	var parsed = http.get(full_url, function(response) {
		var chunks = '';
		
		//debug stuff
		console.log(`Got response: ${response.statusCode}`);
		
		response.setEncoding('utf8');
		
		response.on("data", function(chunk) {
			chunks += chunk;
		});
		
		response.on("end", function() {
			console.log(chunks);
			console.log("reached end");
		});
		return data;
	});
	console.log(parsed);
	console.log("NOO");
	return parsed;
};

//handle given stop parameter and print it on page
stop_api.param('stop', function(req, res, next, stop) {
	//get stop parameter from route.
	var finished = getNextTimes(stop);
	console.log(finished);
	console.log("TÄÄLLÄKIN OLTIIN");
	var sendable = JSON.parse(finished);
	res.send(sendable);
});

//GET us a listing of bus stops by (a) keyword(s).
//BUGGED it returns some sort of badly encoded vomit
stop_api.get('/', function(res, req, next) {
		
	getAll('http://data.foli.fi/gtfs/stop_times/stop');
	
});

stop_api.get('/:stop', function(res, req) {

});

module.exports = stop_api;
