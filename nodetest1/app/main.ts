import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from "angular2/router";
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES, ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    ANGULAR2_GOOGLE_MAPS_PROVIDERS
]);