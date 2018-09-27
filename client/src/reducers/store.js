import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import notesData from './notes-data';
import notesOperations from './notes-operations';
import authentication from './authentication';
import collectionsRouter from './collections-router';
import collectionsOperations from './collections-operations';
import modal from './modal';

const store = createStore(combineReducers({
  notesData,
  notesOperations , 
  authentication,
  collectionsRouter,
  collectionsOperations,
  modal
}), applyMiddleware(thunk));

store.subscribe(() => {
  // console.log(store.getState());
})

export default store;