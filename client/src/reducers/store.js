import { createStore, combineReducers } from 'redux';

import notesMenuReducer from './notes-menu';
import createNoteReducer from './create-note';

const store = createStore(combineReducers({
  notesMenu: notesMenuReducer,
  createNote: createNoteReducer
}));

export default store;