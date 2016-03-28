import {Component} from "angular2/core";
import {MDL} from "../mdl.directive";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Control} from "angular2/common";
import {Observable} from "rxjs/Observable";
import {Injectable} from "angular2/core";
import {Jsonp} from "angular2/http";
import {URLSearchParams} from "angular2/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import {Http} from "angular2/http";
@Component({
    selector: 'dashboard-component',
    directives: [MDL, ROUTER_DIRECTIVES],
    template: `
    <div style="padding: 1em;" class="mdl-padding--1em">
        <h4>Pysäkit</h4>

        <ul class="mdl-list">
            <li *ngFor="#item of items?.rows" [routerLink]="['Stop', {id: item.stop_id}]" class="mdl-list__item mdl-list__item--three-line">
                <span class="mdl-list__item-primary-content">
                    <i class="material-icons mdl-list__item-avatar">directions_bus</i>
                    <span>{{ item.stop_name }} #{{ item.stop_id }}</span>
                    <span class="mdl-list__item-text-body">Linjat 18, 88</span>
                </span>
                <span class="mdl-list__item-secondary-content">
                    <i class="material-icons">directions</i>
                </span>
            </li>
        </ul>

        <div style="height: 75px; position: absolute; bottom: 75px; width: 100%" class="mdl-layout__header-row foli-background--white">
            <div class="foli-navigaatio__searchbox">
                <form action="#">

                    <div style="width: 100%" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input mdl type="text" id="search" [ngFormControl]="term" class="mdl-textfield__input foli-color--black">
                        <label for="search" class="mdl-textfield__label">Syötä pysäkin nimi tai numero</label>
                    </div>
                </form>
            </div>

            <div class="mdl-layout-spacer"></div>

            <div class="foli-navigaatio__myplace">
                <a href="#">
                    <i class="material-icons">my_location</i>
                </a>
            </div>
        </div>
    </div>
    `
})
export class DashboardComponent {

    items: Observable<Array<string>>;
    term = new Control();

    constructor(private _http: Http) {

        this.term.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(term => {
                this.items = [];
                if(term.length > 0) {
                    this._http
                        .get('http://localhost:3000/api/v1/stops/' + term)
                        .subscribe(response => this.items = response.json());
                }
            });
    }
}