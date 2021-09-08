import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesService } from "../../services/cities/cities.service";

@Component ({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit{
    cities: ICity[];
    showConfirm: boolean = false;
    selectedCity: ICity;

    constructor(
        private citiesService: CitiesService,
    ) {}

    ngOnInit(): void {
        this.fetch();
    }

    onDelete(city: ICity) {
        this.showConfirm = true;
        this.selectedCity = city;
    }

    onDeleteConfirm() {
        this.citiesService.deleteCity(this.selectedCity.id).subscribe(() => {
            // this.fetch();
            this.cities = this.cities.filter(city => city.id !== this.selectedCity.id);
            this.onDeleteCancel();
        });
    }

    onDeleteCancel() {
        this.selectedCity = null;
        this.showConfirm = false;
    }

    private fetch() {
        this.citiesService.getCities().subscribe(cities => {
            this.cities = cities;
        });
    }
}
