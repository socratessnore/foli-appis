System.register(["angular2/core", "../mdl.directive", "angular2/router", "angular2/common", 'rxjs/add/operator/map', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/switchMap', "angular2/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mdl_directive_1, router_1, common_1, http_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mdl_directive_1_1) {
                mdl_directive_1 = mdl_directive_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_http) {
                    var _this = this;
                    this._http = _http;
                    this.term = new common_1.Control();
                    this.term.valueChanges
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .subscribe(function (term) {
                        _this.items = [];
                        if (term.length > 0) {
                            _this._http
                                .get('http://localhost:3000/api/v1/stops/' + term)
                                .subscribe(function (response) { return _this.items = response.json(); });
                        }
                    });
                }
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard-component',
                        directives: [mdl_directive_1.MDL, router_1.ROUTER_DIRECTIVES],
                        template: "\n    <div style=\"padding: 1em;\" class=\"mdl-padding--1em\">\n        <h4>Pys\u00E4kit</h4>\n\n        <ul class=\"mdl-list\">\n            <li *ngFor=\"#item of items?.rows\" [routerLink]=\"['Stop', {id: item.stop_id}]\" class=\"mdl-list__item mdl-list__item--three-line\">\n                <span class=\"mdl-list__item-primary-content\">\n                    <i class=\"material-icons mdl-list__item-avatar\">directions_bus</i>\n                    <span>{{ item.stop_name }} #{{ item.stop_id }}</span>\n                    <span class=\"mdl-list__item-text-body\">Linjat 18, 88</span>\n                </span>\n                <span class=\"mdl-list__item-secondary-content\">\n                    <i class=\"material-icons\">directions</i>\n                </span>\n            </li>\n        </ul>\n\n        <div style=\"height: 75px; position: absolute; bottom: 75px; width: 100%\" class=\"mdl-layout__header-row foli-background--white\">\n            <div class=\"foli-navigaatio__searchbox\">\n                <form action=\"#\">\n\n                    <div style=\"width: 100%\" class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input mdl type=\"text\" id=\"search\" [ngFormControl]=\"term\" class=\"mdl-textfield__input foli-color--black\">\n                        <label for=\"search\" class=\"mdl-textfield__label\">Sy\u00F6t\u00E4 pys\u00E4kin nimi tai numero</label>\n                    </div>\n                </form>\n            </div>\n\n            <div class=\"mdl-layout-spacer\"></div>\n\n            <div class=\"foli-navigaatio__myplace\">\n                <a href=\"#\">\n                    <i class=\"material-icons\">my_location</i>\n                </a>\n            </div>\n        </div>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DashboardComponent);
                return DashboardComponent;
            })();
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map