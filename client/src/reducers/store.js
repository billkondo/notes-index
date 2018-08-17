import { createStore, combineReducers } from 'redux';

import notesDataReducer from './notes-data';
import createNoteReducer from './create-note';
import viewNoteReducer from './view-note';
import notesRoutesReducer from './notes-routes';
import cssTransitionsReducer from './css-transitions';

const store = createStore(combineReducers({
  notesData: notesDataReducer,
  createNote: createNoteReducer, 
  viewNote: viewNoteReducer, 
  notesRoutes: notesRoutesReducer,
  cssTransitions: cssTransitionsReducer
}));

store.subscribe(() => {
  console.log(store.getState());
})

export default store;