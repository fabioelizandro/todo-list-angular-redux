import { applyMiddleware } from 'redux';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

export default applyMiddleware(...middlewares);
