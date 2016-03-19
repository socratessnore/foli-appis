import {Component} from "angular2/core";
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
@Component({
    selector: 'map-component',
    styles: [`
    .sebm-google-map-container {
      height: 100%;
    }
  `],
    template: `
        <div style="height: 100vh">
            <sebm-google-map [latitude]="lat" [longitude]="lng">
	    	</sebm-google-map>
        </div>
    `,
    directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES]
})
export class MapComponent {
	lat: number = 44.3;
	lng: number = 33.2;
}