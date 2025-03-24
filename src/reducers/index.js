import { combineReducers } from 'redux';
import productReducer from './productReducer';
import selectionReducer from './selectionReducer';

const rootReducer = combineReducers({
  product: productReducer,
  selection: selectionReducer,
});

export default rootReducer;