import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getComm(action) {
    console.log('in getComm (saga)', action)
    try{
        const response = yield call(axios.get, `/comm/${action.payload}`);
        yield put({type: 'SET_COMM', payload: response.data});
    }
    catch(error){
        console.log('error with pars GET request', error);
    }
    
}

function* commSaga(){
    yield takeEvery ('GET_COMM', getComm);
}

export default (commSaga);