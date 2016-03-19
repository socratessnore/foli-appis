import {Component} from "angular2/core";
@Component({
    selector: 'dashboard-component',
    template: `
    <h4>Pysäkit</h4>

    <ul class="mdl-list">
        <li class="mdl-list__item mdl-list__item--three-line">
            <span class="mdl-list__item-primary-content">
                <i class="material-icons mdl-list__item-avatar">directions_bus</i>
                <span>Nostoväenkatu #982</span>
                <span class="mdl-list__item-text-body">Linjat 18, 88</span>
            </span>
            <span class="mdl-list__item-secondary-content">
                <i class="material-icons">directions</i>
            </span>
        </li>
    </ul>`
})
export class DashboardComponent {
    constructor() {
        console.log("TESTI222");
    }
}