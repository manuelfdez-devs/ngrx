import { ActionReducerMap } from '@ngrx/store';
import * as countryReducer from './country/reducers/country.reducers';

export interface AppState {
  country: countryReducer.CountryState;
}

export const storeReducer: ActionReducerMap<AppState> = {
  country: countryReducer.countryReducer,
};
