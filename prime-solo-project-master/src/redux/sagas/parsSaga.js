import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getPars(action) {
    console.log('in getPars (saga)', action)
    try{
        const response = yield call(axios.get, `/pars/${action.payload}`);
        yield put({type: 'SET_PARS', payload: response.data});
        console.log('pars are ', response.data);
    }
    catch(error){
        console.log('error with pars GET request', error);
    }
    
}


function* ParsSaga() {
    yield takeEvery('GET_PARS', getPars);
  }

export default (ParsSaga)