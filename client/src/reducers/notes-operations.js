import { EditorState } from 'draft-js';
import { stringifyContent } from '../components/Editor/CustomEditor';
import  uuidv4 from 'uuid/v4';

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
  tags: [],
  id: ""
}

const createEmpty = () => ({
  contentState: stringifyContent(EditorState.createEmpty().getCurrentContent()),
  id: uuidv4()
})

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
        commentaries: state.commentaries.concat(JSON.stringify(createEmpty()))
      }

    case WRITE_COMMENT:
      return {
        ...state,
        commentaries: state.commentaries.map(value => {
          if (JSON.parse(value).id === action.id) 
            return JSON.stringify({
              contentState: action.newComment,
              id: JSON.parse(value).id
            });

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
        commentaries: state.commentaries.filter(comment => JSON.parse(comment).id !== action.id)
      }

    case DELETE_TAG:
      return {
        ...state,
        tags: state.tags.filter(tag => tag !== action.tag)
      }

    case LOAD_NOTE:
      return {
        title: action.title,
        description: action.description,
        commentaries: action.commentaries,
        tags: action.tags,
        id: action.id
      }

    default:
      return state;
  }
}

export default notesOperationsReducer;