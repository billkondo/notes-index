import {
  ENTER_SEARCH_MENU,
  EXIT_SEARCH_MENU,
  START_LOADING_NOTES,
  START_LOADING_COLLECTIONS, 
  END_LOADING_NOTES, 
  END_LOADING_COLLECTIONS,
  LOAD_NOTES, 
  LOAD_COLLECTIONS,
  ADD_NOTE, 
  REMOVE_NOTE,
  RESET_ALL, 
  LOAD_COLLECTIONS_TO_DELETE, 
  LOAD_NOTES_TO_DELETE
} from '../types/search-menu';

const defaultState = {
  searchRender: false,
  isLoadingNotes: false,
  isLoadingCollections: false,   
  notes: [],
  notesToDelete: [], 
  collections: [],
  collectionsToDelete: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ENTER_SEARCH_MENU:
      return {
        ...state, 
        searchRender: true
      }

    case EXIT_SEARCH_MENU:
      return {
        ...state, 
        searchRender: false
      }

    case LOAD_NOTES:
      return {
        ...state, 
        notes: action.notes
      }

    case LOAD_COLLECTIONS:
      return {
        ...state, 
        collections: action.collections
      }

    case START_LOADING_NOTES:
      return {
        ...state, 
        isLoadingNotes: true
      }

    case END_LOADING_NOTES:
      return {
        ...state, 
        isLoadingNotes: false
      }

    case START_LOADING_COLLECTIONS:
      return {
        ...state, 
        isLoadingCollections: true
      }

    case END_LOADING_COLLECTIONS:
      return {
        ...state, 
        isLoadingCollections: false
      }

    case ADD_NOTE:
      return {
        ...state, 
        notes: state.notes.concat(action.note)
      }

    case REMOVE_NOTE:
      return {
        ...state, 
        notes: state.notes.filter(note => note.id !== action.note.id)
      }

    case LOAD_NOTES_TO_DELETE:
      return {
        ...state,
        notesToDelete: action.notes
      }

    case LOAD_COLLECTIONS_TO_DELETE: 
      return {
        ...state, 
        collectionsToDelete: action.collections
      }

    case RESET_ALL:
      return defaultState;

    default:
      return state;
  }
}