import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../domain/customer';

@Injectable()
export class CountryService {

    constructor(private http: HttpClient) { }

    getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('assets/demo/data/countries.json')

    }
}
