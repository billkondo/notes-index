import axios from 'axios';
import actions from './actions';

const fetchCollection = id => dispatch => {
  dispatch(actions.startFetch());

  axios.get(`/api/collections/${id}`).then(res => {
    const collection = res.data;
    dispatch(actions.loadCollection(collection));
    dispatch(actions.endFetch());
  });
};

const reset = () => dispatch => dispatch(actions.reset());

export default {
  fetchCollection,
  reset
};
