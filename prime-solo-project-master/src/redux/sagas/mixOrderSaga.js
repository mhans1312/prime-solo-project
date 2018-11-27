import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getMix(action) {
    // console.log('in getMix (saga)')
    try{
        const response = yield call(axios.get, '/mix');
        yield put({type: 'SET_MIX', payload: response.data});
        // console.log('mix is ', response.data);
    }
    catch(error){
        console.log('error with mix GET request', error);
    }
    
}

function* mixOrderSaga() {
    yield takeEvery('GET_Mix', getMix);
  }

export default mixOrderSaga;