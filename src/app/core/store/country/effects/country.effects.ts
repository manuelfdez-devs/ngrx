import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as countryActions from '../actions/country.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CountryService } from 'src/app/services/country.service';
import { Country } from 'src/app/core/models/country.model';
import { of } from 'rxjs';

@Injectable()
export class CountryEffects {
  constructor(
    private actions$: Actions,
    private countryService: CountryService
  ) {}

  getCountryCollection = createEffect(() => {
    return this.actions$.pipe(
      ofType(countryActions.getCountry),
      mergeMap(() =>
        this.countryService.getCountries().pipe(
          map((countryCollection: Country[]) =>
            countryActions.getCountrySuccess({ country: countryCollection })
          ),
          catchError((err) =>
            of(countryActions.getCountryError({ payload: err }))
          )
        )
      )
    );
  });
  saveCountry = createEffect(() => {
    return this.actions$.pipe(
      ofType(countryActions.addCountry),
      mergeMap((country) =>
        this.countryService.saveCountry(country.country).pipe(
          map(() =>
            countryActions.addCountrySuccess({ country: country.country })
          ),
          catchError((err) => {
            console.log('err', err);
            return of(countryActions.addCountryError({ payload: err }));
          })
        )
      )
    );
  });
}
