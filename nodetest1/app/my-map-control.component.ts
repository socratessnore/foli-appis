import {Component} from 'angular2/core';
import {GoogleMapsAPIWrapper} from 'angular2-google-maps/services';
import {Jsonp} from "angular2/http";
import {Http} from "angular2/http";
import {NgZone} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Renderer} from "angular2/core";
import {Router} from "angular2/router";

@Component({
    selector: 'my-map-control',
    template: '',
    directives: [ROUTER_DIRECTIVES]
})
export class MyMapControlComponent {

    private _map;
    private _marker;

    constructor(
        public _http: Http,
        public _wrapper: GoogleMapsAPIWrapper,
        public _ngZone: NgZone,
        public _renderer: Renderer,
        public _router: Router
    ) {
        this._wrapper.getMap().then((m) => {
            this._map = m;
            m.setCenter(new google.maps.LatLng(60.463048, 22.262516));
            m.setOptions({ Zoom: 15, minZoom: 14, maxZoom: 18 });
            this.fetchData();

            this._info = new google.maps.InfoWindow({});
        });

    }

    public createMarker (coordinate, stopID, name) {
        
            var marker = new google.maps.Marker({
                map: this._map,
                position: coordinate
            });

            var map = this._map;
            var infoWindow = this._info;
            var stop = stopID;

            var renderer = this._renderer;
            var router = this._router;

            google.maps.event.addListener(marker, 'click', function (event) {
                infoWindow.setContent("<b>#"+ stop + " " + name + "</b><p style='margin-top: 1em; font-size: 16px;'>" +
                    "<a id='infoLink'>Näytä aikataulut</a></p>");
                infoWindow.open(map, marker);

                document.getElementById("infoLink").addEventListener("click", function(e) {
                    router.navigate(["Stop", {id: parseInt(stop)}]);
                });
            });

    }

    public fetchData() {

        var tableID = '1OomM1Wvxa_QzgyPOyq5C4HY65E8RH8j8_udGaISp';
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

            for (var i in rows) {
                var coordinate = new google.maps.LatLng(rows[i][3],rows[i][4]);
                var stopID = rows[i][0];
                var name = rows[i][1];
                this.createMarker(coordinate, stopID, name);
			}

        },
        err => console.error(err)
        );

    }
}