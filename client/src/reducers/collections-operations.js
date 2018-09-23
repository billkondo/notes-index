import { 
  WRITE_TITLE,
  ADD_TAG,
  WRITE_TAG,
  WRITE_DESCRIPTION
} from '../types/collections-operations';

const defaultState = {
  title: "",
  description: "",
  tags: [],
  tag: ""
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

    case WRITE_DESCRIPTION: 
      return {
        ...state, 
        description: action.description
      }

    default:
      return state;
  }
}
