import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';
import './styles/styles.scss';
import store from './reducers/store';

import enterApp from './authentication/enterApp';

enterApp(store).then(res => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
