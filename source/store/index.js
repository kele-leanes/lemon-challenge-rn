import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import authEffects from './auth/effects';
import { authReducer } from './auth/reducer';
import countriesEffects from './countries/effects';
import { countriesReducer } from './countries/reducer';

const reducer = combineReducers({
//   auth: authReducer,
  countries: countriesReducer,
});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(authEffects);
sagaMiddleware.run(countriesEffects);

export default store;
