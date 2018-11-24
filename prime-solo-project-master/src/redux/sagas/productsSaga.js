import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getProducts(action) {
    console.log('in getProducts (saga)')
    try{
        const response = yield call(axios.get, '/products');
        yield put({type: 'SET_PRODUCTS', payload: response.data});
        console.log('products are ', response.data);
    }
    catch(error){
        console.log('error with products GET request', error);
    }
    
}

function* productsSaga() {
    yield takeEvery('GET_PRODUCTS', getProducts);
  }

export default productsSaga;