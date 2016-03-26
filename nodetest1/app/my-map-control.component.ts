import {Component} from 'angular2/core';
import {GoogleMapsAPIWrapper} from 'angular2-google-maps/services';
import {Jsonp} from "angular2/http";
import {Http} from "angular2/http";

@Component({
    selector: 'my-map-control',
    template: ''
})
export class MyMapControlComponent {

    private _map;

    constructor(public _http: Http, private _wrapper: GoogleMapsAPIWrapper) {
        this._wrapper.getMap().then((m) => {
            this._map = m
            this.fetchData();
        });

    }

    public createMarker (coordinate) {
        var marker = new google.maps.Marker({
            map: this._map,
            position: coordinate,
        });

        //TODO add listener to marker which opens infowindow on click
    };

    public fetchData() {

        var tableID = '1obKzxr6MX39Ilft9FMwv5odXiQYnpwnQlYNFD6-Y';
        var apiKey = 'AIzaSyCG8H8gjq3QPYZ_V3_mEAXlb6c8SorVHO4';

        // Construct a query to get data from the Fusion Table
        // EDIT this list to include the variables for columns named above
        var query = 'SELECT * FROM ' + tableID;
        var encodedQuery = encodeURIComponent(query);

        // Construct the URL
        var url = ['https://www.googleapis.com/fusiontables/v1/query'];
            url.push('?sql=' + encodedQuery);
            url.push('&key=' + apiKey);

        // Send the JSONP request using jQuery
        this._http.get(url.join('')).subscribe(res => {

            var test = res.json();

            var rows = test['rows'];

			var coordinate;

            for (var i in rows) {
                coordinate = new google.maps.LatLng(rows[i][3],rows[i][4]);
                this.createMarker(coordinate);
			}

        },
        err => console.error(err)
        );

    }
}