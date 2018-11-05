import {
  WRITE_TITLE,
  WRITE_DESCRIPTION,
  ADD_COMMENT,
  WRITE_COMMENT,
  ADD_TAG,
  RESET_NOTE,
  DELETE_COMMENT,
  DELETE_TAG,
  LOAD_NOTE,
  WRITE_TAG,
  START_LOADING, 
  END_LOADING,
  FAVORITE_FLIP,
} from '../types/notes-operations';

const defaultState = {
  title: "",
  description: "",
  commentaries: [], // Array of JSON { comment, id }
  tags: [],
  id: "",
  tag: "",
  favorite: false
}

export default (state = defaultState, action) => {
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
        commentaries: state.commentaries.concat(action.newComment)
      }

    case WRITE_COMMENT:
      return {
        ...state,
        commentaries: state.commentaries.map(value => {
          if (value.id === action.id) 
            return ({
              comment: action.comment, 
              id: value.id
            });
          
          return value;
        })
      }

    case ADD_TAG:
      return {
        ...state,
        tags: state.tags.concat(action.tag),
        tag: ""
      }

    case RESET_NOTE:
      return defaultState;

    case DELETE_COMMENT:
      return {
        ...state,
        commentaries: state.commentaries.filter(comment => comment.id !== action.id)
      }

    case DELETE_TAG:
      return {
        ...state,
        tags: state.tags.filter(tag => tag !== action.tag)
      }

    case WRITE_TAG:
      return {
        ...state, 
        tag: action.tag
      }

    case LOAD_NOTE:
      return {
        title: action.title,
        description: action.description,
        commentaries: action.commentaries,
        tags: action.tags,
        id: action.id,
        tag: "",
        favorite: action.favorite
      }

    case FAVORITE_FLIP:
      return {
        ...state, 
        favorite: !state.favorite
      }

    default:
      return state;
  }
}
