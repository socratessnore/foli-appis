import {Component} from "angular2/core";
import {LocalStorageService} from "../localstorage.service";
import {ROUTER_DIRECTIVES} from "angular2/router";
@Component({
    selector: 'favorites-component',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div style="padding: 1em;" class="mdl-padding--1em">
        <h4>Suosikit</h4>
        <ul class="mdl-list">
            <li *ngFor="#item of items" class="mdl-list__item mdl-list__item--three-line">
                <span class="mdl-list__item-primary-content" [routerLink]="['Stop', {id: item.stop_id}]">
                    <i class="material-icons mdl-list__item-avatar">directions_bus</i>
                    <span>{{ item.stop_name }} #{{ item.stop_id }}</span>
                    <span class="mdl-list__item-text-body">Linjat 18, 88</span>
                </span>
                <span class="mdl-list__item-secondary-content">
                    <i class="material-icons">delete</i>
                    <i class="material-icons">directions</i>
                </span>
            </li>
        </ul>
    </div>
    `
})
export class FavoritesComponent {

    private items;

    constructor(public _localStorage: LocalStorageService) {
        this.items = [];
    }

    ngOnInit() {
        this.items = this._localStorage.getStorageData();
    }

}