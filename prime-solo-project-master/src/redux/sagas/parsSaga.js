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

function* editPars(action) {
    console.log('in editPars (saga)', action)
    try{
        const response = yield call(axios.put, `/pars/`, action.payload);
        yield put({type: 'SET_PARS', payload: response.data});
        console.log('edited pars are', response.data)
    }
    catch(error){
        console('error with pars EDIT request', error)
    }
}


function* ParsSaga() {
    yield takeEvery('GET_PARS', getPars);
    yield takeEvery('EDIT_PARS', editPars);
  }

export default (ParsSaga)