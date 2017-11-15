import { handleActions } from 'redux-actions';
import { markAsDone } from './actions';

const initialState = {};

const markAsDoneReducer = (state, action) => {
  if (state.id == action.payload) {
    return { ...state, done: true };
  } else {
    return state;
  }
};

export default handleActions({
  [markAsDone]: markAsDoneReducer
}, initialState);