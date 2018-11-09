import  { createStore } from 'redux';
import  { state } from '../redux/Reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  state
);