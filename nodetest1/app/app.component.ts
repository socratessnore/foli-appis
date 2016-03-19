import {Component} from 'angular2/core';
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FavoritesComponent} from "./favorites/favorites.component";
import {MapComponent} from "./map/map.component";

@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
        <h1>asf</h1>
        <a [routerLink]="['Dashboard']">Pysäkit</a>
        <a [routerLink]="['Favorites']">Suosikit</a>
        <a [routerLink]="['Map']">Kartta</a>
    `,
    directives: [DashboardComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
  {path: '/favorites', name: 'Favorites', component: FavoritesComponent},
  {path: '/map', name: 'Map', component: MapComponent}
])
export class AppComponent {
}