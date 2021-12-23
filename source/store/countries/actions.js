import { createAction } from 'redux-actions';

export const getCountries = createAction('countries/get-countries');
export const setCountries = createAction('countries/set-countries');
export const setCountriesLoading = createAction(
  'countries/set-countries-loading',
);
