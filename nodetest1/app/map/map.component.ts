import {Component} from "angular2/core";
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
@Component({
    selector: 'map-component',
    template: `
            <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
	    	</sebm-google-map>
    `,
    directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES]
})
export class MapComponent {
	lng: number = 22.262516;
	lat: number = 60.463048;
    zoom: number = 11;
}