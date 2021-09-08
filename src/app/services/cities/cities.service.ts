import { Injectable } from "@angular/core";
import { CitiesEndpoint } from "./cities-endpoint.service";
import { ICity } from "../../models/city.model";
import { Observable } from "rxjs";

@Injectable()
export class CitiesService {
    constructor(private _citiesEndpoint: CitiesEndpoint) {}

    getCities(): Observable<ICity[]> {
        return this._citiesEndpoint.get<ICity[]>('');
    }

    deleteCity(cityId: number) {
        return this._citiesEndpoint.delete<ICity[]>(`delete-city/${cityId}`);
    }
}
