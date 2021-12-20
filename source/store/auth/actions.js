export const AUTH_GET_USER = 'AUTH_GET_USER';
export const AUTH_SET_USER = 'AUTH_SET_USER';
export const AUTH_LOADING = 'AUTH_LOADING';

export const getUser = () => ({
  type: AUTH_GET_USER,
});

export const setUser = payload => ({
  type: AUTH_SET_USER,
  payload,
});

export const authLoading = payload => ({
  type: AUTH_LOADING,
  payload,
});
