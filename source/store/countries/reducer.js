import {
  setCountries,
  setCountriesLoading,
  setCountryInfo,
  setCountryInfoLoading,
} from './actions';

const initialState = {
  data: null,
  isLoading: false,
  details: null,
  detailsLoading: false,
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case String(setCountries): {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    }
    case String(setCountriesLoading): {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case String(setCountryInfo): {
      return {
        ...state,
        details: action.payload,
        detailsLoading: false,
      };
    }
    case String(setCountryInfoLoading): {
      return {
        ...state,
        detailsLoading: action.payload,
      };
    }
    default:
      return state;
  }
};
