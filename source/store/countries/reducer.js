import { SET_COUNTRIES, COUNTRIES_LOADING } from './actions';

const initialState = {
  data: null,
  isLoading: false,
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case COUNTRIES_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
