import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import productsSaga from './productsSaga';
import storesSaga from './storesSaga';
import orderSaga from './orderSaga';
import doughOrderSaga from './doughOrderSaga';
import cheeseOrderSaga from './cheeseOrderSaga';
import meatOrderSaga from './meatOrderSaga';
import cookieOrderSaga from './cookieOrderSaga';
import roleSaga from './roleSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    roleSaga(),
    cookieOrderSaga(),
    meatOrderSaga(),
    cheeseOrderSaga(),
    doughOrderSaga(),
    loginSaga(),
    registrationSaga(),
    userSaga(),
    productsSaga(),
    storesSaga(),
    orderSaga(),
  ]);
}
