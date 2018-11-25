import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getRole(action) {
    console.log('in getRole (saga)')
    try{
        const response = yield call(axios.get, '/role');
        yield put({type: 'SET_ROLE', payload: response.data});
        console.log('roles are ', response.data);
    }
    catch(error){
        console.log('error with role GET request', error);
    }
    
}

function* roleSaga() {
    yield takeEvery('GET_ROLE', getRole);
  }

export default roleSaga;