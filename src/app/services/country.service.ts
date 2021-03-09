import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Country } from '../core/models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor() {}

  getCountries(): Observable<Country[]> {
    return of([
      {
        name: 'Russia',
        area: 17075200,
      },
      {
        name: 'Canada',
        area: 9976140,
      },
      {
        name: 'United States',
        area: 9629091,
      },
      {
        name: 'China',
        area: 9596960,
      },
    ]);
  }
  saveCountry(country: Country): Observable<any> {
    //return throwError('Valid token not returned');
    return of(country);
  }
}
