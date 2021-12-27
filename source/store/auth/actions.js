import { createAction } from 'redux-actions';

export const getUser = createAction('auth/get-user');
export const setUser = createAction('auth/set-user');
export const authLoading = createAction('auth/loading');
export const getCurrentUser = createAction('auth/get-current-user');
export const userLogout = createAction('auth/user-logout');
export const setLogout = createAction('auth/set-user-logout');
