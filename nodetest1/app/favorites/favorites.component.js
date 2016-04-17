System.register(["angular2/core", "../localstorage.service", "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, localstorage_service_1, router_1;
    var FavoritesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (localstorage_service_1_1) {
                localstorage_service_1 = localstorage_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            FavoritesComponent = (function () {
                function FavoritesComponent(_localStorage) {
                    this._localStorage = _localStorage;
                    this.items = [];
                }
                FavoritesComponent.prototype.ngOnInit = function () {
                    this.getFavorites();
                };
                FavoritesComponent.prototype.getFavorites = function () {
                    this.items = this._localStorage.getStorageData();
                };
                FavoritesComponent.prototype.removeFromFavorites = function (stop_id) {
                    this._localStorage.removeStorageData(stop_id);
                    this.getFavorites();
                };
                FavoritesComponent = __decorate([
                    core_1.Component({
                        selector: 'favorites-component',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n    <div style=\"padding: 1em;\" class=\"mdl-padding--1em\">\n        <h4>Suosikit</h4>\n        <ul class=\"mdl-list\">\n            <li *ngFor=\"#item of items\" class=\"mdl-list__item mdl-list__item--three-line\">\n                <span class=\"mdl-list__item-primary-content\" [routerLink]=\"['Stop', {id: item.stop_id}]\">\n                    <i class=\"material-icons mdl-list__item-avatar\">directions_bus</i>\n                    <span>{{ item.stop_name }} #{{ item.stop_id }}</span>\n                    <span class=\"mdl-list__item-text-body\">Linjat 18, 88</span>\n                </span>\n                <span class=\"mdl-list__item-secondary-content\">\n                    <i class=\"material-icons\" (click)=\"removeFromFavorites(item.stop_id)\">delete</i>\n                    <i class=\"material-icons\">directions</i>\n                </span>\n            </li>\n        </ul>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [localstorage_service_1.LocalStorageService])
                ], FavoritesComponent);
                return FavoritesComponent;
            })();
            exports_1("FavoritesComponent", FavoritesComponent);
        }
    }
});
//# sourceMappingURL=favorites.component.js.map