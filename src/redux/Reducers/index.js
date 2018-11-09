import {combineReducers} from 'redux';
import { exampleReducer } from './Example.reducer';
import { schinookReducer } from './Schinook.reducer';


export const state = combineReducers({
  example: exampleReducer,
  schinook: schinookReducer
})