System.register(['angular2/platform/browser', './app.component', "angular2/router", "static/ng2-material/all.js"], function(exports_1) {
    var browser_1, app_component_1, router_1, all_js_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (all_js_1_1) {
                all_js_1 = all_js_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                all_js_1.MATERIAL_DIRECTIVES,
                all_js_1.MATERIAL_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map