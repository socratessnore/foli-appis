var express = require('express');
var http = require('follow-redirects').http;
var fs = require('fs');
var stop_api = express.Router();
var Q = require('q');


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

    getNextTimes(19).then(
        //JOS KAIKKI ON
        function(response) {
            console.log(response);
            res.send("OK");
        }
    ).catch(
        //JOS NAPATAAN VIRHE NIIN
        function(err) {
            console.error(err);
            res.send("NOT OK");
        }
    );

});

//GET us a listing of bus stops by (a) keyword(s).
//BUGGED it returns some sort of badly encoded vomit
stop_api.get('/', function(res, req, next) {

	getAll('http://data.foli.fi/gtfs/stop_times/stop');

});

stop_api.get('/:stop', function(res, req) {

});

module.exports = stop_api;
