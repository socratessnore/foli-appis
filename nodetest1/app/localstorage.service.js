System.register(["angular2/core", 'rxjs/add/operator/map', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/switchMap'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LocalStorageService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            LocalStorageService = (function () {
                function LocalStorageService() {
                    var localStorage = window.localStorage.getItem("stopStorage");
                    try {
                        this.localStorage = JSON.parse(localStorage);
                    }
                    catch (err) {
                        window.localStorage.setItem("stopStorage", JSON.stringify({}));
                        this.localStorage = JSON.parse(localStorage);
                    }
                    /*Check if localStorage value is valid JSON. If not init the variable with empty JSON object.*/
                    //if(!JSON.parse(this.localStorage)) this.localStorage = JSON.stringify({});
                }
                LocalStorageService.prototype.getStorageData = function () {
                    var _this = this;
                    var localStorage = window.localStorage.getItem("stopStorage");
                    try {
                        this.localStorage = JSON.parse(localStorage);
                    }
                    catch (err) {
                        window.localStorage.setItem("stopStorage", JSON.stringify({}));
                        this.localStorage = JSON.parse(localStorage);
                    }
                    return Object.keys(this.localStorage).map(function (key) { return _this.localStorage[key]; });
                };
                LocalStorageService.prototype.addStorageData = function (value) {
                    var data = this.localStorage;
                    data[value.stop_id] = value;
                    window.localStorage.setItem("stopStorage", JSON.stringify(data));
                };
                LocalStorageService.prototype.removeStorageData = function (item) {
                };
                LocalStorageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LocalStorageService);
                return LocalStorageService;
            })();
            exports_1("LocalStorageService", LocalStorageService);
        }
    }
});
//# sourceMappingURL=localstorage.service.js.map