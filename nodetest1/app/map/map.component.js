System.register(["angular2/core", 'angular2-google-maps/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            MapComponent = (function () {
                function MapComponent() {
                    this.lat = 44.3;
                    this.lng = 33.2;
                }
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'map-component',
                        styles: ["\n    .sebm-google-map-container {\n      height: 100%;\n    }\n  "],
                        template: "\n        <div style=\"height: 100vh\">\n            <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\">\n\t    \t</sebm-google-map>\n        </div>\n    ",
                        directives: [core_2.ANGULAR2_GOOGLE_MAPS_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapComponent);
                return MapComponent;
            })();
            exports_1("MapComponent", MapComponent);
        }
    }
});
//# sourceMappingURL=map.component.js.map