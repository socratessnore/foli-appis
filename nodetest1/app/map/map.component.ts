import {Component} from "angular2/core";
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES, ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import {Http} from "angular2/http";
import {MyMapControlComponent} from "../my-map-control.component";

@Component({
    selector: 'map-component',
    template: `
            <sebm-google-map [lat]="lat" [lng]="lng" [zoom]="zoom">
                <my-map-control></my-map-control>
	    	</sebm-google-map>
    `,
    directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES, MyMapControlComponent]
})
export class MapComponent {
	lng: number = 22.262516;
	lat: number = 60.463048;
    zoom: number = 11;

    constructor(public _http: Http) {}

}