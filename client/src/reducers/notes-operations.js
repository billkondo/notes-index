import { EditorState } from 'draft-js';
import { stringifyContent } from '../components/Editor/CustomEditor';

import {
  WRITE_TITLE,
  WRITE_DESCRIPTION,
  ADD_COMMENT,
  WRITE_COMMENT,
  ADD_TAG,
  RESET_NOTE,
  DELETE_COMMENT,
  DELETE_TAG,
  LOAD_NOTE
} from '../types/notes-operations';

const defaultState = {
  title: "",
  description: stringifyContent(EditorState.createEmpty().getCurrentContent()),
  commentaries: [], // Array of Strings, each String will be a stringfied object 
  tags: []
}

const notesOperationsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case WRITE_TITLE:
      return {
        ...state,
        title: action.title
      }

    case WRITE_DESCRIPTION:
      return {
        ...state,
        description: action.description
      }

    case ADD_COMMENT:
      return {
        ...state,
        commentaries: state.commentaries.concat([stringifyContent(EditorState.createEmpty().getCurrentContent())])
      }

    case WRITE_COMMENT:
      return {
        ...state,
        commentaries: state.commentaries.map((value, index) => {
          if (index === action.id) return action.newComment;
          return value;
        })
      }

    case ADD_TAG:
      return {
        ...state,
        tags: state.tags.concat(action.newTag)
      }

    case RESET_NOTE:
      return defaultState;

    case DELETE_COMMENT:
      return {
        ...state,
        commentaries: state.commentaries.filter((comment, index) => index !== action.index)
      }

    case DELETE_TAG:
      return {
        ...state,
        tags: state.tags.filter((tag, index) => index !== action.index)
      }

    case LOAD_NOTE:
      return {
        title: action.title,
        description: action.description,
        commentaries: action.commentaries,
        tags: action.tags
      }

    default:
      return state;
  }
}

export default notesOperationsReducer;