import { RECEIVE_QUOTE } from '../actions/project_actions';
import merge from 'lodash/merge';

const QuotesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_QUOTE:
      return action.quote;
    default:
      return state;
  }
};

export default QuotesReducer;
