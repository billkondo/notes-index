import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import 'draft-js/dist/Draft.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';
import './styles/styles.scss';
import store from './reducers/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));