import { handleActions } from 'redux-actions';
import { markAsDone, markAsUndone } from './actions';

const initialState = {};

const createReducerOfTaskItem = (reducer) => {
  return (state, action) => {
    if (state.id == action.payload) {
      return reducer(state, action);
    } else {
      return state;
    }
  }
}

const markAsDoneReducer = (state, action) => {
  return { ...state, done: true };
};

const markAsUndoneReducer = (state, action) => {
  return { ...state, done: false };
};

export default handleActions({
  [markAsDone]: createReducerOfTaskItem(markAsDoneReducer),
  [markAsUndone]: createReducerOfTaskItem(markAsUndoneReducer)
}, initialState);