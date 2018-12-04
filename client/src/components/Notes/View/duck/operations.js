import axios from 'axios';
import actions from './actions';

const fetchNote = id => dispatch => {
  dispatch(actions.startFetch());

  axios.get(`/api/notes/${id}`).then(res => {
    const note = res.data;
    dispatch(actions.loadNote(note));
    dispatch(actions.endFetch());
  });
};

const reset = () => dispatch => dispatch(actions.reset());

export default {
  fetchNote,
  reset
};
