import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import products from './productsReducer';
import stores from './storesReducer';
// import doughOrder from './doughOrderReducer';
// import cheeseOrder from './cheeseOrderReducer';
// import meatOrder from './meatOrderReducer';
// import cookieOrder from './cookieOrderReducer';
// import mixOrder from './mixOrderReducer';
import role from './roleReducer';
import person from './personReducer';
import pars from './parsReducer';
import comm from './commReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  pars,
  person,
  role,
  comm,
  // mixOrder,
  // cookieOrder,
  // meatOrder,
  // cheeseOrder,
  // doughOrder,
  products,
  stores,
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
});

export default rootReducer;
