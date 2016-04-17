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
        /*Check if localStorage value is valid JSON. If not init the variable with empty JSON object.*/
        //if(!JSON.parse(this.localStorage)) this.localStorage = JSON.stringify({});
    }

    public getStorageData() {
        var localStorage = window.localStorage.getItem("stopStorage");
        try {
            this.localStorage = JSON.parse(localStorage);
        } catch(err) {
            window.localStorage.setItem("stopStorage", JSON.stringify({}));
            this.localStorage = JSON.parse(localStorage);
        }

        return Object.keys(this.localStorage).map(key => this.localStorage[key]);
    }

    public addStorageData(value) {
        var data = this.localStorage;
        data[value.stop_id] = value;
        window.localStorage.setItem("stopStorage", JSON.stringify(data));
    }

    public removeStorageData(item) {

    }
}