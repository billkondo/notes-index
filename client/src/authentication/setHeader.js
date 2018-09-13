import axios from 'axios';

export default (token) => {
  if (token) axios.defaults.headers.common['authorization'] = `Beared ${token}`;
  else delete axios.defaults.headers.common['authorization'];
}