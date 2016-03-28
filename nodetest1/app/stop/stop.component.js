System.register(["angular2/core", "angular2/http", "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, core_2, core_3, core_4, core_5, router_1;
    var StyleFilter, FilterPipe, StopComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
                core_4 = core_1_1;
                core_5 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            StyleFilter = (function () {
                function StyleFilter(_elementRef) {
                    this._elementRef = _elementRef;
                    this.selected = false;
                }
                StyleFilter.prototype.toggle = function () {
                    this.selected = !this.selected;
                    if (!this.selected) {
                        this._elementRef.nativeElement.style.backgroundColor = "#3F51B5";
                    }
                    else {
                        this._elementRef.nativeElement.style.backgroundColor = "gray";
                    }
                };
                StyleFilter = __decorate([
                    core_3.Directive({
                        selector: '[StyleFilter]',
                        host: {
                            '(click)': 'toggle()',
                        }
                    }), 
                    __metadata('design:paramtypes', [core_4.ElementRef])
                ], StyleFilter);
                return StyleFilter;
            })();
            exports_1("StyleFilter", StyleFilter);
            FilterPipe = (function () {
                function FilterPipe() {
                }
                FilterPipe.prototype.transform = function (value, term) {
                    value = value.filter(function (x) {
                        if (term[0].length < 1)
                            return true;
                        for (var i in term[0]) {
                            if (x.lineref == term[0][i]) {
                                return true;
                            }
                        }
                    });
                    return value;
                    //console.log("PIPE "+ value);
                };
                FilterPipe = __decorate([
                    core_2.Pipe({
                        name: 'filter',
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], FilterPipe);
                return FilterPipe;
            })();
            exports_1("FilterPipe", FilterPipe);
            StopComponent = (function () {
                function StopComponent(_http, zone, _params) {
                    this._http = _http;
                    this.zone = zone;
                    this._params = _params;
                    this.stops = { "result": [] };
                    this.buslines = [];
                    this.filteredBuslines = [];
                    this.showMinutesLimit = 20;
                }
                ;
                StopComponent.prototype.filterLine = function (e) {
                    if (!(this.filteredBuslines.indexOf(e) > -1)) {
                        this.filteredBuslines.push(e);
                    }
                    else {
                        this.filteredBuslines.splice(this.filteredBuslines.indexOf(e), 1);
                    }
                };
                StopComponent.prototype.minutesToBus = function (arrivalTime) {
                    var currentTime = new Date(Date.now());
                    currentTime = currentTime.getTime() / 1000;
                    //var currentTime = (Date.now()/1000);
                    return Math.round((arrivalTime - currentTime) / 60);
                };
                StopComponent.prototype.getStops = function (stopID) {
                    var _this = this;
                    console.log(stopID);
                    var url = "http://data.foli.fi/siri/sm/" + stopID + "/pretty";
                    return this._http.get(url)
                        .subscribe(function (res) {
                        _this.stops = res.json();
                        for (var i in _this.stops.result) {
                            var hours;
                            var minutes;
                            var in_minutes;
                            //Reference to a bus
                            var bus = _this.stops.result[i];
                            var aimedarrivaltime = new Date(_this.stops.result[i]['aimedarrivaltime'] * 1000);
                            var hours = aimedarrivaltime.getHours();
                            var minutes = ('0' + (aimedarrivaltime.getMinutes())).slice(-2);
                            bus.format_time = hours + ":" + minutes;
                            bus.minutesToBus = _this.minutesToBus(bus['aimedarrivaltime']);
                            _this.buslines.push(bus['lineref']);
                        }
                        _this.buslines = _this.buslines.filter(function (value, index, self) {
                            return self.indexOf(value) === index;
                        });
                        _this.buslines = _this.buslines.sort(function (a, b) {
                            return parseInt(a) - parseInt(b);
                        });
                    }, function (err) { return console.error(err); });
                };
                StopComponent.prototype.ngOnInit = function () {
                    var stopID = this._params.get("id");
                    this.getStops(stopID);
                };
                StopComponent = __decorate([
                    core_1.Component({
                        selector: 'stop-component',
                        pipes: [FilterPipe],
                        directives: [StyleFilter],
                        template: "\n        <div class=\"stop-listing mdl-padding--1em\">\n\n            <h4>Linja-autoasema #19</h4>\n\n            <div\n                *ngFor=\"#busline of buslines\"\n                StyleFilter\n                (click)=\"filterLine(busline)\"\n                class=\"foli-busline__tag\"\n            >\n                Linja {{ busline }}\n            </div>\n\n            <ul class=\"mdl-list\">\n                <li *ngFor=\"#stop of stops.result | filter : filteredBuslines\" class=\"mdl-list__item mdl-list__item--three-line\">\n                    <span class=\"mdl-list__item-primary-content\">\n                        <div style=\"text-align: center\" class=\"mdl-list__item-avatar\">\n                            <span style=\"position: relative; top: 2px; font-weight: bold; text-align: center; font-size: 16px\">{{ stop.lineref }}</span>\n                        </div>\n                        <div style=\"margin-top: 10px; font-weight: bold;\">{{ stop.destinationdisplay }}</div>\n                    </span>\n                    <span class=\"mdl-list__item-secondary-content\">\n                        <span style=\"margin-top: 12px\" *ngIf=\"stop.minutesToBus < 20\">\n                            {{ stop.minutesToBus }} min\n                        </span>\n                        <span style=\"margin-top: 12px\" *ngIf=\"stop.minutesToBus > 20\">\n                            {{ stop.format_time }}\n                        </span>\n                    </span>\n                </li>\n            </ul>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, core_5.NgZone, router_1.RouteParams])
                ], StopComponent);
                return StopComponent;
            })();
            exports_1("StopComponent", StopComponent);
        }
    }
});
//# sourceMappingURL=stop.component.js.map