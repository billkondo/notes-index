import axios from 'axios';
import decode from 'jsonwebtoken/decode';

import { setUser } from '../actions/authentication';
import setHeader from './setHeader';

export default store =>
  new Promise((resolve, reject) => {
    if (localStorage.jwtToken) {
      setHeader(localStorage.jwtToken);

      axios
        .get('/api/authentication')
        .then(res => {
          if (res.data.success) store.dispatch(setUser(decode(localStorage.jwtToken)));

          resolve();
        })
        .catch(err => reject(err));
    } else {
      setHeader();
      resolve();
    }
  });
