import {  
  LOAD_NOTES,
  FILTER_ON,
  FILTER_OFF
} from '../types/notes-data';

const defaultState = {
  notes: [],
  filter: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_NOTES:
      return {
        ...state,
        notes: action.notes
      }

    case FILTER_ON:
      return {
        ...state, 
        filter: true
      }

    case FILTER_OFF:
      return {
        ...state, 
        filter: false
      }

    default: 
      return state;
  }
}