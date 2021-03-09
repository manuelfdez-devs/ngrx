import { CountryEffects } from './country/effects/country.effects';
export * from './store.reducers';
export * from './country/actions/country.actions';
export * from './country/reducers/country.reducers';
export const EffectsCollection: any[] = [CountryEffects];
