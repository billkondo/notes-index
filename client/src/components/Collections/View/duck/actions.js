import types from './types';

const startFetch = () => ({
  type: types.START_FETCH
});

const endFetch = () => ({
  type: types.END_FETCH
});

const loadCollection = collection => ({
  type: types.LOAD_COLLECTION,
  collection
});

const reset = () => ({
  type: types.RESET
});

export default {
  startFetch,
  endFetch,
  loadCollection,
  reset
};
