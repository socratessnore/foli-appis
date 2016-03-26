System.register(['angular2/core', 'angular2-google-maps/services', "angular2/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, services_1, http_1;
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
            }],
        execute: function() {
            MyMapControlComponent = (function () {
                function MyMapControlComponent(_http, _wrapper) {
                    var _this = this;
                    this._http = _http;
                    this._wrapper = _wrapper;
                    this._wrapper.getMap().then(function (m) {
                        _this._map = m;
                        _this.fetchData();
                    });
                }
                MyMapControlComponent.prototype.createMarker = function (coordinate) {
                    var marker = new google.maps.Marker({
                        map: this._map,
                        position: coordinate,
                    });
                    //TODO add listener to marker which opens infowindow on click
                };
                ;
                MyMapControlComponent.prototype.fetchData = function () {
                    var _this = this;
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
                    this._http.get(url.join('')).subscribe(function (res) {
                        var test = res.json();
                        var rows = test['rows'];
                        var coordinate;
                        for (var i in rows) {
                            coordinate = new google.maps.LatLng(rows[i][3], rows[i][4]);
                            _this.createMarker(coordinate);
                        }
                    }, function (err) { return console.error(err); });
                };
                MyMapControlComponent = __decorate([
                    core_1.Component({
                        selector: 'my-map-control',
                        template: ''
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, services_1.GoogleMapsAPIWrapper])
                ], MyMapControlComponent);
                return MyMapControlComponent;
            })();
            exports_1("MyMapControlComponent", MyMapControlComponent);
        }
    }
});
//# sourceMappingURL=my-map-control.component.js.map