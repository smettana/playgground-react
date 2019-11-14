import { combineReducers } from 'redux';
import products from './products';
import roles from './roles';

const rootReducer = combineReducers({products, roles});

export default rootReducer;