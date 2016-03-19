System.register(["angular2/core"], function(exports_1) {
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
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent() {
                    console.log("TESTI222");
                }
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard-component',
                        template: "\n    <h4>Pys\u00E4kit</h4>\n\n    <ul class=\"mdl-list\">\n        <li class=\"mdl-list__item mdl-list__item--three-line\">\n            <span class=\"mdl-list__item-primary-content\">\n                <i class=\"material-icons mdl-list__item-avatar\">directions_bus</i>\n                <span>Nostov\u00E4enkatu #982</span>\n                <span class=\"mdl-list__item-text-body\">Linjat 18, 88</span>\n            </span>\n            <span class=\"mdl-list__item-secondary-content\">\n                <i class=\"material-icons\">directions</i>\n            </span>\n        </li>\n    </ul>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], DashboardComponent);
                return DashboardComponent;
            })();
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map