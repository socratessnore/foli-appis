System.register(["angular2/core", "angular2/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var StopComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            StopComponent = (function () {
                function StopComponent(_http) {
                    this._http = _http;
                    this.stops = { "result": [] };
                    this.buslines = [];
                    this.showMinutesLimit = 20;
                }
                ;
                StopComponent.prototype.minutesToBus = function (arrivalTime) {
                    var currentTime = new Date(Date.now());
                    console.log(currentTime);
                    currentTime = currentTime.getTime() / 1000;
                    //var currentTime = (Date.now()/1000);
                    return Math.round((arrivalTime - currentTime) / 60);
                };
                StopComponent.prototype.getStops = function () {
                    var _this = this;
                    return this._http.get("http://localhost:3000/stoptimes.json").subscribe(function (res) {
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
                        console.log(_this.buslines);
                    });
                };
                StopComponent.prototype.ngAfterViewInit = function () {
                    this.getStops();
                };
                StopComponent = __decorate([
                    core_1.Component({
                        selector: 'stop-component',
                        template: "\n        <div class=\"stop-listing mdl-padding--1em\">\n\n            <h4>Linja-autoasema #19</h4>\n\n            <span *ngFor=\"#busline of buslines\" style=\"display: inline-block; padding: 5px; margin-bottom: 3px; margin-left: 3px; background-color: #3F51B5; font-weight: bold; color: white;\">Linja {{ busline }}</span>\n\n            <ul class=\"mdl-list\">\n                <li *ngFor=\"#stop of stops.result\" class=\"mdl-list__item mdl-list__item--three-line\">\n                    <span class=\"mdl-list__item-primary-content\">\n                        <div style=\"text-align: center\" class=\"mdl-list__item-avatar\">\n                            <span style=\"position: relative; top: 2px; font-weight: bold; text-align: center; font-size: 16px\">{{ stop.lineref }}</span>\n                        </div>\n                        <div style=\"margin-top: 10px; font-weight: bold;\">{{ stop.destinationdisplay }}</div>\n                    </span>\n                    <span class=\"mdl-list__item-secondary-content\">\n                        <span style=\"margin-top: 12px\" *ngIf=\"stop.minutesToBus < 20\">\n                            {{ stop.minutesToBus }} min\n                        </span>\n                        <span style=\"margin-top: 12px\" *ngIf=\"stop.minutesToBus > 20\">\n                            {{ stop.format_time }}\n                        </span>\n                    </span>\n                </li>\n            </ul>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], StopComponent);
                return StopComponent;
            })();
            exports_1("StopComponent", StopComponent);
        }
    }
});
//# sourceMappingURL=stop.component.js.map