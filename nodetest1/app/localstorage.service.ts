import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
@Injectable()
export class LocalStorageService {

    private localStorage;
    items: Observable<Array<string>>;

    constructor() {
        var localStorage = window.localStorage.getItem("stopStorage");
        try {
            this.localStorage = JSON.parse(localStorage);
        } catch(err) {
            window.localStorage.setItem("stopStorage", JSON.stringify({}));
            this.localStorage = JSON.parse(localStorage);
        }
    }

    public getStorageData() {
        var localStorage = window.localStorage.getItem("stopStorage");
        try {
            this.localStorage = JSON.parse(localStorage);
        } catch(err) {
            window.localStorage.setItem("stopStorage", JSON.stringify({}));
            this.localStorage = JSON.parse(localStorage);
        }

        /*Return localStorage value as an Array so it can be passed to ngFor directive.*/
        return Object.keys(this.localStorage).map(key => this.localStorage[key]);
    }

    public addStorageData(value) {
        this.localStorage[value.stop_id] = value;
        this.save();
    }

    public removeStorageData(item:number) {
        delete this.localStorage[item];
        this.save();
    }

    public isItemFavorited(item:number) {
        if(this.localStorage.hasOwnProperty(item)) {
            return true;
        } else {
            return false;
        }
    }

    private save(data) {
        window.localStorage.setItem("stopStorage", JSON.stringify(this.localStorage));
    }
}