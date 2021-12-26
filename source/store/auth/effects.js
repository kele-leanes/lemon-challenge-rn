import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { authLoading, getUser, setUser } from './actions';

export function* workerGetUser() {
  try {
    yield put(authLoading(true));
    yield call([GoogleSignin, 'hasPlayServices']);
    const userInfo = yield call([GoogleSignin, 'signIn']);
    yield put(setUser(userInfo));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(authLoading(false));
  }
}

export default function* authEffects() {
  yield all([takeEvery(getUser, workerGetUser)]);
}
