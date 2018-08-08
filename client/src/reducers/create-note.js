import  { EditorState } from 'draft-js';

import { 
  CREATE_NOTE_ENTER_TITLE, 
  CREATE_NOTE_ENTER_DESCRIPTION,
  CREATE_NOTE_ADD_COMMENT,
  CREATE_NOTE_WRITE_COMMENT,
  CREATE_NOTE_ADD_TAG,
  CREATE_NOTE_RESET,
  CREATE_NOTE_DELETE_COMMENT,
  CREATE_NOTE_DELETE_TAG
} from '../types/types';

const defaultState = {
  title: "", 
  description: EditorState.createEmpty(),
  commentaries: [], 
  tags: []
}

const createNoteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_NOTE_ENTER_TITLE:
      return {
        ...state,
        title: action.title
      }

    case CREATE_NOTE_ENTER_DESCRIPTION:
      return {
        ...state, 
        description: action.description
      }

    case CREATE_NOTE_ADD_COMMENT:
      return {
        ...state, 
        commentaries: state.commentaries.concat([""])
      }

    case CREATE_NOTE_WRITE_COMMENT: 
      return {
        ...state,
        commentaries: state.commentaries.map((value, index) => {
          if (index === action.id) return action.newComment;
          return value;
        })
      }

    case CREATE_NOTE_ADD_TAG:
      return {
        ...state, 
        tags: state.tags.concat(action.newTag)
      }

    case CREATE_NOTE_RESET:
      return defaultState;

    case CREATE_NOTE_DELETE_COMMENT:
      return {
        ...state,
        commentaries: state.commentaries.filter((comment, index) => index !== action.index)
      }

    case CREATE_NOTE_DELETE_TAG:
      return {
        ...state, 
        tags: state.tags.filter((tag, index) => index !== action.index)
      }

    default:
      return state;
  }
}

export default createNoteReducer;