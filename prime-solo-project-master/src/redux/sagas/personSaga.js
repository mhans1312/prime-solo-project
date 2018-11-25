import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* deletePerson(action){
    try{
        yield call(axios.delete, `/person?id=${action.payload}`);
        yield put({type: 'GET_PERSON'});
    }
    catch(error) {
        console.log('error on DELETE');
    }
}

function* getPerson(action) {
    console.log('in getPerson (saga)')
    try{
        const response = yield call(axios.get, '/person');
        yield put({type: 'SET_PERSON', payload: response.data});
        console.log('people are ', response.data);
    }
    catch(error){
        console.log('error with person GET request', error);
    }
    
}

function* personSaga() {
    yield takeEvery('DELETE_PERSON', deletePerson);
    yield takeEvery('GET_PERSON', getPerson);
  }

export default personSaga;