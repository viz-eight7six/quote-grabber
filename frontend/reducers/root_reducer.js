import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import QuotesReducer from './quote_reducer';

const RootReducer = combineReducers({
  errors: ErrorsReducer,
  quote: QuotesReducer
});

export default RootReducer;
