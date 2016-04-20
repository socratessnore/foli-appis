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
import {LocalStorageService} from "../localstorage.service";
import {Pipe} from "angular2/core";
import {ChangeDetectionStrategy} from "angular2/core";
import {ChangeDetectorRef} from "angular2/core";
import {ElementRef} from "angular2/core";

@Pipe({
    name: 'isFavorited'
})
export class IsFavoritedPipe {
    transform(value, args) {
        if(this._localStorage.isItemFavorited(value)) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

    constructor(public _localStorage: LocalStorageService) {}
}

@Component({
    selector: 'dashboard-component',
    directives: [MDL, ROUTER_DIRECTIVES],
    pipes: [IsFavoritedPipe],
    template: `
    <div style="padding: 1em; height: calc(100vh - 175px); overflow-y: scroll;" class="mdl-padding--1em">
        <h4>Pysäkit</h4>

        <ul class="mdl-list">
            <li *ngFor="#item of items?.rows" class="mdl-list__item mdl-list__item--three-line">
                <span class="mdl-list__item-primary-content" [routerLink]="['Stop', {id: item.stop_id}]">
                    <i class="material-icons mdl-list__item-avatar">directions_bus</i>

                    <span>{{ item.stop_name }} #{{ item.stop_id }}</span>
                    <span class="mdl-list__item-text-body">Linjat 18, 88</span>
                </span>
                <span class="mdl-list__item-secondary-content">
                    <i *ngIf="item.is_favorited == true" class="material-icons">
                        star
                    </i>
                    <i *ngIf="item.is_favorited == false" class="material-icons" (click)="saveToFavorites(item)">
                        star_border
                    </i>
                    <i class="material-icons">directions</i>
                </span>
            </li>
        </ul>

        <div style="height: 75px; position: fixed; bottom: 60px; width: 100%" class="mdl-layout__header-row foli-background--white">
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
    <div id="demo-snackbar-example" class="mdl-js-snackbar mdl-snackbar">
      <div class="mdl-snackbar__text"></div>
      <button class="mdl-snackbar__action" type="button"></button>
    </div>
    `
})
export class DashboardComponent {

    items: Observable<Array<string>>;
    term = new Control();
    private termString:string;

    constructor(
        private _http: Http,
        public _localStorage: LocalStorageService,
        public _changeDetectorRef: ChangeDetectorRef,
        private _elementRef:ElementRef
    ) {}

    ngOnInit() {
        this.term.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe(term => {
            this.termString = term;
            this.items = [];
            if(term.length > 0) {
                this.getItems(term);
            }
        });


    }


    private getItems(term) {
        this._http
        .get('http://localhost:3000/api/v1/stops/' + this.termString)
        .subscribe(response => {
            this.items = response.json();

            for(var item in this.items['rows']) {
                var is_favorited = this._localStorage.isItemFavorited(this.items['rows'][item]['stop_id']);
                this.items['rows'][item]['is_favorited'] = is_favorited;
            }

        });
    }

    public saveToFavorites(data) {
        this._localStorage.addStorageData(data);
        this.getItems();

        var snackbarContainer = this._elementRef.nativeElement.querySelector("#demo-snackbar-example")
                        var data = {
                            message: 'Pysäkki tallennettu suosikkeihin.',
                            timeout: 2000
                        };
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
        window.componentHandler.upgradeAllRegistered();
    }
}