import { handleActions } from 'redux-actions';
import { markAsDone } from './actions';
import itemReducer from './item-reducer';

const initialState = {
  tasks: [
    { id: 1, description: 'Earn one million dollars', done: false },
    { id: 2, description: 'Watch third session of Rick and Morty', done: true }
  ]
};

const markAsDoneReducer = (state, action) => {
  return {
    ...state,
    tasks: state.tasks.map(task => itemReducer(task, action))
  };
};

export default handleActions({
  [markAsDone]: markAsDoneReducer
}, initialState);