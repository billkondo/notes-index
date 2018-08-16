import { createStore, combineReducers } from 'redux';

import notesMenuReducer from './notes-menu';
import createNoteReducer from './create-note';
import viewNoteReducer from './view-note';
import notesRoutesReducer from './notes-routes';
import cssTransitionsReducer from './css-transitions';

const store = createStore(combineReducers({
  notesMenu: notesMenuReducer,
  createNote: createNoteReducer, 
  viewNote: viewNoteReducer, 
  notesRoutes: notesRoutesReducer,
  cssTransitions: cssTransitionsReducer
}));

store.subscribe(() => {
  console.log(store.getState());
})

export default store;