import { combineReducers } from 'redux';
import cart from './cart';
import users from './users';

const rootReducer = combineReducers({ cart, users });

export default rootReducer;
