var express = require('express');
var http = require('follow-redirects').http;
var fs = require('fs');
var stop_api = express.Router();
var Q = require('q');


//get everything from a chosen endpoint.
function getAll(url) {	
	return Q.promise(function(resolve, reject, notify) {
		var data = "";

		http.get(url, function(response) {
			//debug stuff
			console.log(`Got response: ${response.statusCode}`);
			
			//set encoding to UTF-8.
			response.setEncoding('utf8');
			
			response.on("data", function(chunk) {
				data += chunk;
			});
			response.on("end", function() {
				resolve(data);
			});

		});
	});
};

//get calculated times from Föli SIRI -API for chosen stop.

/**
 * Palauttaa pysäkkikohtaiset aikataulut. Käytetään Q -kirjastoa handlaamaan
 * Async paremmin (Promise), koska Javascript way menee nopeesti tosi sekavaks.
 * Sekä Lupausten (Promise) syntaksi on mulle tutumpi :3
 *
 * Metodi palauttaa Promisen.
 *
 * //TODO Supersimple virheenkäsittely -> (On error reject())
 *
 * Q kirjasto: https://www.npmjs.com/package/q
 *
 * @param stop
 * @returns Promise(Q)
 */
function getNextTimes(stop) {
    return Q.Promise(function(resolve, reject, notify) {
        var full_url = 'http://data.foli.fi/siri/sm/' + stop.toString() + '/pretty';

        var chunks = '';

        http.get(full_url, function (response, callback2) {
            response.setEncoding('utf8');

            response.on("data", function (chunk) {
                chunks += chunk;
            });

            response.on("end", function (chunk) {
                resolve(chunks);
            });

        });
    });
};

//handle given stop parameter and print it on page
stop_api.param('stop', function(req, res, next, stop) {
	//get stop parameter from route.

    //Esimerkkimallinen käsittely getNextTimes -promiselle.

    getNextTimes(stop).then(
        //JOS KAIKKI ON
        function(response) {
            console.log("Got OK stop data");
            res.send(JSON.parse(response));
        }
    ).catch(
        //JOS NAPATAAN VIRHE NIIN
        function(err) {
            console.error(err);
            var errorjson = {"Error":"Something went wrong"};
            res.send(JSON.parse(errorjson));
        }
    );

});

//GET us a listing of bus stops by (a) keyword(s).
//BUGGED it returns some sort of badly encoded vomit
//look into this. This endpoint should be functional otherwise!
stop_api.get('/', function(req, res, next) {
	console.log("EMPTY");
	
	getAll('http://data.foli.fi/gtfs/stops').then(
		//JOS KAIKKI ON
        function(response) {
            console.log("Got OK stop data");
            res.send(response);
        }
    ).catch(
        //JOS NAPATAAN VIRHE NIIN
        function(err) {
            console.error(err);
            var errorjson = {"Error":"Something went wrong"};
            res.send(JSON.parse(errorjson));
        }
    );
});

//endpoint to get nearby time by a stop
stop_api.get('/:stop', function(res, req) {

});

module.exports = stop_api;
