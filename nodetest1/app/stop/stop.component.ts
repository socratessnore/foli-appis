import {Component} from "angular2/core";
import {Http} from "angular2/http";
import {NgFor} from "angular2/common";
import {Pipe} from "angular2/core";
import {Directive} from "angular2/core";
import {ElementRef} from "angular2/core";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";
import {Response} from "angular2/http";
import {NgZone} from "angular2/core";

@Directive({
    selector: '[StyleFilter]',
    host: {
        '(click)': 'toggle()',
    }
})
export class StyleFilter {

    private selected = false;

    constructor(public _elementRef: ElementRef) {}

    private toggle() {
        this.selected = !this.selected;
        if(!this.selected) {
            this._elementRef.nativeElement.style.backgroundColor = "#3F51B5";
        } else {
            this._elementRef.nativeElement.style.backgroundColor = "gray";
        }
    }
}

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe {
    transform(value, term) {

        value = value.filter(function(x) {

            if(term[0].length < 1) return true;

            for(var i in term[0]) {
                if(x.lineref == term[0][i]) {
                    return true;
                }
            }

        });

        return value;

        //console.log("PIPE "+ value);
    }
}

@Component({
    selector: 'stop-component',
    pipes: [FilterPipe],
    directives: [StyleFilter],
    template: `
        <div class="stop-listing mdl-padding--1em">

            <h4>Linja-autoasema #19</h4>

            <div
                *ngFor="#busline of buslines"
                StyleFilter
                (click)="filterLine(busline)"
                class="foli-busline__tag"
            >
                Linja {{ busline }}
            </div>

            <ul class="mdl-list">
                <li *ngFor="#stop of stops.result | filter : filteredBuslines" class="mdl-list__item mdl-list__item--three-line">
                    <span class="mdl-list__item-primary-content">
                        <div style="text-align: center" class="mdl-list__item-avatar">
                            <span style="position: relative; top: 2px; font-weight: bold; text-align: center; font-size: 16px">{{ stop.lineref }}</span>
                        </div>
                        <div style="margin-top: 10px; font-weight: bold;">{{ stop.destinationdisplay }}</div>
                    </span>
                    <span class="mdl-list__item-secondary-content">
                        <span style="margin-top: 12px" *ngIf="stop.minutesToBus < 20">
                            {{ stop.minutesToBus }} min
                        </span>
                        <span style="margin-top: 12px" *ngIf="stop.minutesToBus > 20">
                            {{ stop.format_time }}
                        </span>
                    </span>
                </li>
            </ul>
        </div>
    `
})
export class StopComponent {

    private stops = {"result": []};

    private buslines = [];

    private filteredBuslines = [];

    private showMinutesLimit = 20;

    constructor(public _http: Http, public zone:NgZone) {};

    private filterLine(e) {

        if(!(this.filteredBuslines.indexOf(e) > -1)) {
            this.filteredBuslines.push(e);
        } else {
            this.filteredBuslines.splice(this.filteredBuslines.indexOf(e), 1);
        }

    }

    private minutesToBus(arrivalTime:number) : number {

        var currentTime = new Date(Date.now());
        currentTime = currentTime.getTime()/1000;
        //var currentTime = (Date.now()/1000);

        return Math.round((arrivalTime - currentTime)/60);

    }

    private getStops() {
        return this._http.get("http://localhost:3000/stoptimes.json")
        .subscribe(
            res => {
                this.stops = res.json();

                for(var i in this.stops.result) {

                    var hours;
                    var minutes;
                    var in_minutes;

                    //Reference to a bus
                    var bus = this.stops.result[i];

                    var aimedarrivaltime = new Date(this.stops.result[i]['aimedarrivaltime']*1000);

                    var hours = aimedarrivaltime.getHours();
                    var minutes = ('0'+(aimedarrivaltime.getMinutes())).slice(-2);

                    bus.format_time = hours + ":" + minutes;
                    bus.minutesToBus = this.minutesToBus(bus['aimedarrivaltime']);

                    this.buslines.push(bus['lineref']);
                }

                this.buslines = this.buslines.filter(function(value, index, self) {
                    return self.indexOf(value) === index;
                });

                this.buslines = this.buslines.sort(function(a, b) {
                    return parseInt(a) - parseInt(b)
                });

            },
            err => console.error(err),
            () => console.log("EOF")
        );
    }

    ngOnInit() {
        console.log("STARTTA");
        this.zone.run(() => this.getStops());
    }

    ngOnDestroy() {
        console.log("DESTROY EVERYTHING!");
    }

    ngAfterViewInit() {

    }

}