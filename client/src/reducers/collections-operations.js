import { 
  WRITE_TITLE,
  ADD_TAG,
  WRITE_TAG,
  WRITE_DESCRIPTION,
  ADD_CHILDREN,
  REMOVE_CHILDREN,
  RESET_COLLECTION,
  DELETE_TAG,
  FAVORITE_FLIP,
  START_LOAD, 
  END_LOAD
} from '../types/collections-operations';

const defaultState = {
  title: "",
  description: "",
  tags: [],
  tag: "",
  isLoading: false,
  children: [],
  favorite: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case WRITE_TITLE: 
      return {
        ...state,
        title: action.title
      }

    case ADD_TAG:
      return {
        ...state,
        tags: state.tags.concat(action.tag),
        tag: ""
      }

    case WRITE_TAG: 
      return {
        ...state,
        tag: action.tag
      }

    case DELETE_TAG: 
      return {
        ...state, 
        tags: state.tags.filter(tag => tag !== action.tag)
      }

    case WRITE_DESCRIPTION: 
      return {
        ...state, 
        description: action.description
      }

    case ADD_CHILDREN: 
      return {
        ...state, 
        children: state.children.concat(action.note)
      }

    case REMOVE_CHILDREN: 
      return {
        ...state, 
        children: state.children.filter(child => child.id !== action.note.id)
      }

    case FAVORITE_FLIP: 
      return {
        ...state, 
        favorite: !state.favorite
      }

    case START_LOAD: 
      return {
        ...state, 
        isLoading: true
      }

    case END_LOAD:
      return {
        ...state, 
        isLoading: false
      }

    case RESET_COLLECTION:
      return defaultState;

    default:
      return state;
  }
}
