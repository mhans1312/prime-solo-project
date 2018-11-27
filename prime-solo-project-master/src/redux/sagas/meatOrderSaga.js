import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getMeat(action) {
    // console.log('in getMeat (saga)')
    try{
        const response = yield call(axios.get, '/meat');
        yield put({type: 'SET_MEAT', payload: response.data});
        // console.log('Meat is ', response.data);
    }
    catch(error){
        console.log('error with Meat GET request', error);
    }
    
}

function* meatOrderSaga() {
    yield takeEvery('GET_MEAT', getMeat);
  }

export default meatOrderSaga;