System.register(['angular2/core', "angular2/router", "./dashboard/dashboard.component", "./favorites/favorites.component", "./map/map.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, dashboard_component_1, favorites_component_1, map_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (favorites_component_1_1) {
                favorites_component_1 = favorites_component_1_1;
            },
            function (map_component_1_1) {
                map_component_1 = map_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div mdl class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n\n        <main class=\"mdl-layout__content\">\n            <router-outlet></router-outlet>\n        </main>\n\n        <header class=\"mdl-layout__header foli-navigation\">\n\n            <div class=\"mdl-layout__header-row\">\n                <div class=\"mdl-layout-spacer\"></div>\n                <nav class=\"mdl-navigation foli-navigation__items\">\n                    <button [routerLink]=\"['Dashboard']\" class=\"mdl-button mdl-js-button\">\n                        <i class=\"material-icons\">directions_bus</i>\n                        <span class=\"mdl-navigation__description\">\n                            Pys\u00E4kit\n                        </span>\n                    </button>\n                    <button [routerLink]=\"['Favorites']\" class=\"mdl-button mdl-js-button\">\n                        <i class=\"material-icons\">star</i>\n                        <span class=\"mdl-navigation__description\">\n                            Suosikit\n                        </span>\n                    </button>\n                    <button [routerLink]=\"['Map']\" class=\"mdl-button mdl-js-button\">\n                        <i class=\"material-icons\">map</i>\n                        <span class=\"mdl-navigation__description\">\n                            Kartta\n                        </span>\n                    </button>\n                </nav>\n                <div class=\"mdl-layout-spacer\"></div>\n            </div>\n        </header>\n\n    </div>\n    ",
                        directives: [dashboard_component_1.DashboardComponent, router_2.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
                        { path: '/favorites', name: 'Favorites', component: favorites_component_1.FavoritesComponent },
                        { path: '/map', name: 'Map', component: map_component_1.MapComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map