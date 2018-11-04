import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import notesData from './notes-data';
import notesOperations from './notes-operations';
import authentication from './authentication';
import collectionsData from './collections-data';
import collectionsOperations from './collections-operations';
import modal from './modal';
import searchMenu from './search-menu';
import favorite from './favorite';

const store = createStore(combineReducers({
  notesData,
  notesOperations , 
  authentication,
  collectionsData, 
  collectionsOperations,
  modal,
  searchMenu,
  favorite
}), applyMiddleware(thunk));

store.subscribe(() => {
  // console.log(store.getState());
})

export default store;