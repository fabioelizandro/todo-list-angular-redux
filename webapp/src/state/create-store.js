import { createStore, compose } from 'redux';
import reducer from './reducer';
import middlewares from './middlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (preloadedState) => {
  return createStore(reducer, preloadedState, composeEnhancers(middlewares));
};
