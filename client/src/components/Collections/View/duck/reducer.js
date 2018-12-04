import types from './types';

const defautlState = {
  isFetching: false,
  collection: {
    title: '',
    description: '',
    tags: [],
    favorite: false,
    id: '',
    children: []
  }
};

export default (state = defautlState, action) => {
  switch (action.type) {
    case types.START_FETCH:
      return {
        ...state,
        isFetching: true
      };

    case types.END_FETCH:
      return {
        ...state,
        isFetching: false
      };

    case types.LOAD_COLLECTION:
      return {
        ...state,
        collection: action.collection
      };

    case types.RESET:
      return defautlState;

    default:
      return state;
  }
};
