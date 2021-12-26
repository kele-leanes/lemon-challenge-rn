import { createAction } from 'redux-actions';

export const getCountries = createAction('countries/get-countries');
export const setCountries = createAction('countries/set-countries');
export const setCountriesLoading = createAction(
  'countries/set-countries-loading',
);
export const getCountryInfo = createAction('countries/get-country-info');
export const setCountryInfo = createAction('countries/set-country-info');
export const setCountryInfoLoading = createAction(
  'countries/set-country-info-loading',
);
