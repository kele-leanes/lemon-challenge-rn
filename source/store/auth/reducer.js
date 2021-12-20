import { AUTH_LOADING, AUTH_SET_USER } from './actions';

const initialState = {
  user: null,
  isLoading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case AUTH_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
