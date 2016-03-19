System.register(['angular2/platform/browser', './app.component', "angular2/router", 'angular2-google-maps/core'], function(exports_1) {
    var browser_1, app_component_1, router_1, core_1;
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
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                core_1.ANGULAR2_GOOGLE_MAPS_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map