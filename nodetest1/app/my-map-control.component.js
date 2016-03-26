System.register(['angular2/core', 'angular2-google-maps/services', "angular2/http", "angular2/core", "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, services_1, http_1, core_2, router_1, core_3, router_2;
    var MyMapControlComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (services_1_1) {
                services_1 = services_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
                core_3 = core_2_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            MyMapControlComponent = (function () {
                function MyMapControlComponent(_http, _wrapper, _ngZone, _renderer, _router) {
                    var _this = this;
                    this._http = _http;
                    this._wrapper = _wrapper;
                    this._ngZone = _ngZone;
                    this._renderer = _renderer;
                    this._router = _router;
                    this._wrapper.getMap().then(function (m) {
                        _this._map = m;
                        m.setCenter(new google.maps.LatLng(60.463048, 22.262516));
                        m.setOptions({ Zoom: 15, minZoom: 14, maxZoom: 18 });
                        _this.fetchData();
                        _this._info = new google.maps.InfoWindow({});
                    });
                }
                MyMapControlComponent.prototype.createMarker = function (coordinate, stopID, name) {
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
                        infoWindow.setContent("<b>#" + stop + " " + name + "</b><p style='margin-top: 1em; font-size: 16px;'>" +
                            "<a id='infoLink'>Näytä aikataulut</a></p>");
                        infoWindow.open(map, marker);
                        document.getElementById("infoLink").addEventListener("click", function (e) {
                            router.navigate(["Stop", { id: parseInt(stop) }]);
                        });
                    });
                };
                MyMapControlComponent.prototype.fetchData = function () {
                    var _this = this;
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
                    this._http.get(url.join('')).subscribe(function (res) {
                        var test = res.json();
                        var rows = test['rows'];
                        for (var i in rows) {
                            var coordinate = new google.maps.LatLng(rows[i][3], rows[i][4]);
                            var stopID = rows[i][0];
                            var name = rows[i][1];
                            _this.createMarker(coordinate, stopID, name);
                        }
                    }, function (err) { return console.error(err); });
                };
                MyMapControlComponent = __decorate([
                    core_1.Component({
                        selector: 'my-map-control',
                        template: '',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, services_1.GoogleMapsAPIWrapper, core_2.NgZone, core_3.Renderer, router_2.Router])
                ], MyMapControlComponent);
                return MyMapControlComponent;
            })();
            exports_1("MyMapControlComponent", MyMapControlComponent);
        }
    }
});
//# sourceMappingURL=my-map-control.component.js.map