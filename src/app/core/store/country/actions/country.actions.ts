import { createAction, props } from '@ngrx/store';
import { Country } from 'src/app/core/models/country.model';

export const getCountry = createAction('[Country] get Country');
export const getCountrySuccess = createAction(
  '[Country] get Country Success',
  props<{ country: Country[] }>()
);
export const getCountryError = createAction(
  '[Country] get Country Error',
  props<{ payload: unknown }>()
);

export const addCountry = createAction(
  '[Country] Add Country',
  props<{ country: Country }>()
);
export const addCountrySuccess = createAction(
  '[Country] Add Country Success',
  props<{ country: Country }>()
);
export const addCountryError = createAction(
  '[Country] Add Country Error',
  props<{ payload: unknown }>()
);
