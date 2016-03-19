import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from "angular2/router";
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "static/ng2-material/all.js";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    MATERIAL_DIRECTIVES,
    MATERIAL_PROVIDERS
]);