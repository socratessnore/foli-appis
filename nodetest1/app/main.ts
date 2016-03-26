import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from "angular2/router";
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES, ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import {HTTP_PROVIDERS} from "angular2/http";
import {JSONP_PROVIDERS} from "angular2/http";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    ANGULAR2_GOOGLE_MAPS_PROVIDERS,
    HTTP_PROVIDERS,
    JSONP_PROVIDERS
]);