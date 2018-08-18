import { createStore, combineReducers } from 'redux';

import notesDataReducer from './notes-data';
import notesOperationsReducer from './notes-operations';
import viewNoteReducer from './view-note';
import notesRoutesReducer from './notes-routes';
import cssTransitionsReducer from './css-transitions';

const store = createStore(combineReducers({
  notesData: notesDataReducer,
  notesOperations: notesOperationsReducer, 
  viewNote: viewNoteReducer, 
  notesRoutes: notesRoutesReducer,
  cssTransitions: cssTransitionsReducer
}));

store.subscribe(() => {
  // console.log(store.getState());
})

export default store;