import axios from 'axios';

export default token => {
  if (token) axios.defaults.headers.common.authentication = `Beared ${token}`;
  else delete axios.defaults.headers.common.authentication;
};
