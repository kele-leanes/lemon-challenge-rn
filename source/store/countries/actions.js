export const GET_COUNTRIES = 'GET_COUNTRIES';
export const SET_COUNTRIES = 'SET_COUNTRIES';
export const COUNTRIES_LOADING = 'COUNTRIES_LOADING';

export const getCountries = () => ({
  type: GET_COUNTRIES,
});

export const setCountries = payload => ({
  type: SET_COUNTRIES,
  payload,
});

export const setCountriesLoading = payload => ({
  type: COUNTRIES_LOADING,
  payload,
});
