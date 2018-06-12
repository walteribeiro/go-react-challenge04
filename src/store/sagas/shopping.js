import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ShoppingActions } from '../ducks/shopping';

export function* shopping(action) {
  try {
    const { data } = yield call(api.get, `/ursl/${action}`);
    yield put(ShoppingActions.success(data));
  } catch (error) {
    console.log(error);
  }
}
