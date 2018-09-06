import { createStore, combineReducers } from 'redux';

import notesDataReducer from './notes-data';
import notesOperationsReducer from './notes-operations';
import notesRouter from './notes-router';
import modalReducer from './modal';
import authenticationReducer from './authentication';
import collectionsRouter from './collections-router';

const store = createStore(combineReducers({
  notesData: notesDataReducer,
  notesOperations: notesOperationsReducer, 
  modal: modalReducer, 
  authentication: authenticationReducer,
  notesRouter,
  collectionsRouter
}));

store.subscribe(() => {
  // console.log(store.getState());
})

export default store;