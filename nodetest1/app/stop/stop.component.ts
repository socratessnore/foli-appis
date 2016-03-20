import {Component} from "angular2/core";
import {Http} from "angular2/http";
import {NgFor} from "angular2/common";

@Component({
    selector: 'stop-component',
    template: `
        <div class="stop-listing mdl-padding--1em">

            <h4>Linja-autoasema #19</h4>

            <span *ngFor="#busline of buslines" style="display: inline-block; padding: 5px; margin-bottom: 3px; margin-left: 3px; background-color: #3F51B5; font-weight: bold; color: white;">Linja {{ busline }}</span>

            <ul class="mdl-list">
                <li *ngFor="#stop of stops.result" class="mdl-list__item mdl-list__item--three-line">
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

    private showMinutesLimit = 20;

    constructor(public _http: Http) {};

    private minutesToBus(arrivalTime:number) : number {

        var currentTime = new Date(Date.now());
        console.log(currentTime);
        currentTime = currentTime.getTime()/1000;
        //var currentTime = (Date.now()/1000);

        return Math.round((arrivalTime - currentTime)/60);

    }

    private getStops() {
        return this._http.get("http://localhost:3000/stoptimes.json").subscribe(
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

                console.log(this.buslines);

            }
        );
    }

    ngAfterViewInit() {
        this.getStops();
    }

}