import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import notesData from './notes-data';
import notesOperations from './notes-operations';
import notesRouter from './notes-router';
import authentication from './authentication';
import collectionsRouter from './collections-router';
import collectionsOperations from './collections-operations';

const store = createStore(combineReducers({
  notesData,
  notesOperations , 
  authentication,
  notesRouter,
  collectionsRouter,
  collectionsOperations
}), applyMiddleware(thunk));

store.subscribe(() => {
  // console.log(store.getState());
})

export default store;