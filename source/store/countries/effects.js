import { all, call, put, takeLeading } from 'redux-saga/effects';
import { instance } from '../../api';
import {
  getCountries,
  getCountryInfo,
  setCountries,
  setCountriesLoading,
  setCountryInfo,
  setCountryInfoLoading,
} from './actions';

export function* workerCountriesRequest() {
  try {
    yield put(setCountriesLoading(true));
    const { data } = yield call(instance.get, '/countries');
    yield put(setCountries(data));
  } catch (error) {
    // error handling
    console.log(error);
  } finally {
    yield put(setCountriesLoading(false));
  }
}

export function* workerCountryInfoRequest(action) {
  const slug = action.payload;
  try {
    yield put(setCountryInfoLoading(true));
    const { data } = yield call(
      instance.get,
      `/total/dayone/country/${slug}/status/confirmed`,
    );
    yield put(setCountryInfo(data));
  } catch (error) {
    // error handling
    console.log(error);
  } finally {
    yield put(setCountryInfoLoading(false));
  }
}

export default function* countriesEffects() {
  yield all([
    takeLeading(getCountries, workerCountriesRequest),
    takeLeading(getCountryInfo, workerCountryInfoRequest),
  ]);
}
