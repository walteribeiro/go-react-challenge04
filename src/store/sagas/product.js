import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ProductActions } from '../ducks/product';

export function* product() {
  try {
    const { data } = yield call(api.get, '/products');
    yield put(ProductActions.getProductsSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
