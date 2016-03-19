import {Component} from 'angular2/core';
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FavoritesComponent} from "./favorites/favorites.component";
import {MapComponent} from "./map/map.component";

@Component({
    selector: 'my-app',
    template: `
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">

        <router-outlet></router-outlet>

        <header class="mdl-layout__header foli-navigation">

            <div style="height: 75px;" class="mdl-layout__header-row foli-background--white">
                <div class="foli-navigaatio__searchbox">
                    <form action="#">

                        <div style="width: 100%" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input type="text" id="search" class="mdl-textfield__input foli-color--black">
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

            <div class="mdl-layout__header-row">
                <div class="mdl-layout-spacer"></div>
                <nav class="mdl-navigation foli-navigation__items">
                    <button [routerLink]="['Dashboard']" class="mdl-button mdl-js-button">
                        <i class="material-icons">directions_bus</i>
                        <span class="mdl-navigation__description">
                            Pysäkit
                        </span>
                    </button>
                    <button [routerLink]="['Favorites']" class="mdl-button mdl-js-button">
                        <i class="material-icons">star</i>
                        <span class="mdl-navigation__description">
                            Suosikit
                        </span>
                    </button>
                    <button [routerLink]="['Map']" class="mdl-button mdl-js-button">
                        <i class="material-icons">map</i>
                        <span class="mdl-navigation__description">
                            Kartta
                        </span>
                    </button>
                </nav>
                <div class="mdl-layout-spacer"></div>
            </div>
        </header>

    </div>
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