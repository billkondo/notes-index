import { createStore, combineReducers } from 'redux';

import notesMenuReducer from './notes-menu';
import createNoteReducer from './create-note';

const store = createStore(combineReducers({
  notesMenu: notesMenuReducer,
  createNote: createNoteReducer
}));

store.subscribe(() => {
  console.log(store.getState());
})

export default store;