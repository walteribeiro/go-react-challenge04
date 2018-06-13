import { all, takeLatest } from 'redux-saga/effects';
import { Types as ProductTypes } from '../ducks/product';
import { product } from './product';

export default function* rootSaga() {
  yield all([takeLatest(ProductTypes.GET_REQUEST, product)]);
}
