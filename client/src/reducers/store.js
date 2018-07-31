import { createStore, combineReducers } from 'redux';

import notesMenuReducer from './notes-menu';
import createNoteReducer from './create-note';
import viewNoteReducer from './view-note';

const store = createStore(combineReducers({
  notesMenu: notesMenuReducer,
  createNote: createNoteReducer, 
  viewNote: viewNoteReducer
}));

store.subscribe(() => {
  console.log(store.getState());
})

export default store;