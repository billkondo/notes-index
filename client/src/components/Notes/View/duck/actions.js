import types from './types';

const startFetch = () => ({
  type: types.START_FETCH
});

const endFetch = () => ({
  type: types.END_FETCH
});

const loadNote = note => ({
  type: types.LOAD_NOTE,
  note
});

const reset = () => ({
  type: types.RESET
});

export default {
  startFetch,
  endFetch,
  loadNote,
  reset
};
