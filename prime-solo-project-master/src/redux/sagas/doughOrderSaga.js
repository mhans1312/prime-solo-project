import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getDough(action) {
    // console.log('in getDough (saga)')
    try{
        const response = yield call(axios.get, '/dough');
        yield put({type: 'SET_COMMORDER', payload: response.data});
        // console.log('dough is ', response.data);
    }
    catch(error){
        console.log('error with dough GET request', error);
    }
    
}

function* doughOrderSaga() {
    yield takeEvery('GET_DOUGH', getDough);
  }

export default doughOrderSaga;