import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addOrder(action) {
    console.log('in addOrder (saga)', action.payload)
    // let newProject = action.payload
    try{
        yield call(axios.post, '/inventory', action.payload);
        
    }
    catch(error){
        console.log('error with order POST request', error);
    }
    console.log('new order is ', action.payload)
}

function* orderSaga() {
    yield takeEvery('ADD_ORDER', addOrder);
  }

export default orderSaga;