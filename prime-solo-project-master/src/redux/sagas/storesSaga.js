import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getStores(action){
    console.log('in getStores (saga)')
    try{
        const response = yield call(axios.get, '/stores');
        yield put({type: 'SET_STORES', payload: response.data});
        console.log('from stores saga ', response.data);
    }
    catch(error){
        console.log('error with stores GET request', error)
    }
}

function* storesSaga() {
    yield takeEvery('GET_STORES', getStores);
  }

export default storesSaga;