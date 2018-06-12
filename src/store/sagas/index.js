import { all, takeLatest } from 'redux-saga/effects';
import { Types as ShoppingTypes } from '../ducks/shopping';
import { shopping } from './shopping';

export default function* rootSaga() {
  yield all([takeLatest(ShoppingTypes.GET_REQUEST, shopping)]);
}
