import { createStore, combineReducers } from 'redux';

import notesDataReducer from './notes-data';
import notesOperationsReducer from './notes-operations';
import notesRoutesReducer from './notes-routes';
import cssTransitionsReducer from './css-transitions';
import modalReducer from './modal';
import authenticationReducer from './authentication';

const store = createStore(combineReducers({
  notesData: notesDataReducer,
  notesOperations: notesOperationsReducer, 
  notesRoutes: notesRoutesReducer,
  cssTransitions: cssTransitionsReducer,
  modal: modalReducer, 
  authentication: authenticationReducer
}));

store.subscribe(() => {
  // console.log(store.getState());
})

export default store;