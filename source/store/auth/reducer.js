import { setUser, authLoading, setLogout } from './actions';

const initialState = {
  user: null,
  isLoading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case String(setUser): {
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    }
    case String(authLoading): {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case String(setLogout): {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};
