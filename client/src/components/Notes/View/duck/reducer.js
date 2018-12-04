import types from './types';

const defautlState = {
  isFetching: false,
  note: {
    title: '',
    description: '',
    tags: [],
    commentaries: [],
    favorite: false,
    id: ''
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

    case types.LOAD_NOTE:
      return {
        ...state,
        note: action.note
      };

    case types.RESET:
      return defautlState;

    default:
      return state;
  }
};
