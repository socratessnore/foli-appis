import {ElementRef} from "angular2/core";
import {Directive} from "angular2/core";
import {AfterViewInit} from "angular2/core";

declare var componentHandler;

@Directive({
    selector: '[mdl]'
})
export class MDL implements AfterViewInit {
    ngAfterViewInit() {
        componentHandler.upgradeAllRegistered();
    }
}