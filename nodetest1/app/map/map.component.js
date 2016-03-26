System.register(["angular2/core", 'angular2-google-maps/core', "angular2/http", "../my-map-control.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, http_1, my_map_control_component_1;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (my_map_control_component_1_1) {
                my_map_control_component_1 = my_map_control_component_1_1;
            }],
        execute: function() {
            MapComponent = (function () {
                function MapComponent(_http) {
                    this._http = _http;
                    this.lng = 22.262516;
                    this.lat = 60.463048;
                    this.zoom = 11;
                }
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'map-component',
                        template: "\n            <sebm-google-map [lat]=\"lat\" [lng]=\"lng\" [zoom]=\"zoom\">\n                <my-map-control></my-map-control>\n\t    \t</sebm-google-map>\n    ",
                        directives: [core_2.ANGULAR2_GOOGLE_MAPS_DIRECTIVES, my_map_control_component_1.MyMapControlComponent]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MapComponent);
                return MapComponent;
            })();
            exports_1("MapComponent", MapComponent);
        }
    }
});
//# sourceMappingURL=map.component.js.map