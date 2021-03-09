import { createReducer, on } from '@ngrx/store';
import { Country } from 'src/app/core/models/country.model';
import { AppState } from '../../store.reducers';
import * as countryActions from '../actions/country.actions';

export interface CountryState {
  country: Country[];
  loaded: boolean;
  loading: boolean;
  error: any;
}
export interface AppStateWithCountry extends AppState {
  country: CountryState;
}

export const countryInitialState: CountryState = {
  country: [],
  loaded: false,
  loading: false,
  error: null,
};

const _countryReducer = createReducer(
  countryInitialState,
  on(countryActions.getCountry, (state) => ({ ...state, loading: true })),
  on(countryActions.getCountrySuccess, (state, { country }) => ({
    ...state,
    loading: false,
    loaded: true,
    country: [...country],
  })),
  on(countryActions.getCountryError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: payload,
  })),
  on(countryActions.addCountry, (state) => ({ ...state, loading: true })),
  on(countryActions.addCountrySuccess, (state, { country }) => ({
    ...state,
    loading: false,
    loaded: true,
    country: [...state.country, country],
  })),
  on(countryActions.addCountryError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: payload,
  }))
);
export function countryReducer(state, action) {
  return _countryReducer(state, action);
}
