import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getCheese(action) {
    // console.log('in getCheese (saga)')
    try{
        const response = yield call(axios.get, '/cheese');
        yield put({type: 'SET_CHEESE', payload: response.data});
        // console.log('cheese is ', response.data);
    }
    catch(error){
        console.log('error with cheese GET request', error);
    }
    
}

function* cheeseOrderSaga() {
    yield takeEvery('GET_CHEESE', getCheese);
  }

export default cheeseOrderSaga;