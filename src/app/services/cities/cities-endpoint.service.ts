import { Injectable, Injector } from "@angular/core";
import { BaseService } from "../base.service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CitiesEndpoint extends BaseService {
    private apiUrl: string = 'cities';

    constructor(private _httpClient: HttpClient, private _injector: Injector) {
        super(_httpClient, _injector);
    }

    get<T>(url: string): Observable<T> {
        return this._httpClient.get<T>(`${this.getBaseUrl()}api/${this.apiUrl}/${url}`);
    }

    delete<T>(url: string): Observable<T> {
        return this._httpClient.delete<T>(`${this.getBaseUrl()}api/${this.apiUrl}/${url}`);
    }
}
