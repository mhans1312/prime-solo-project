import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getCookie(action) {
    // console.log('in getCookie (saga)')
    try{
        const response = yield call(axios.get, '/cookie');
        yield put({type: 'SET_COOKIE', payload: response.data});
        // console.log('cookie is ', response.data);
    }
    catch(error){
        console.log('error with cookie GET request', error);
    }
    
}

function* cookieOrderSaga() {
    yield takeEvery('GET_COOKIE', getCookie);
  }

export default cookieOrderSaga;