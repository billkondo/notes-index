import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page from './Page/Page';
import SignIn from './SignIn/SignIn';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Page} />
      <Route exact path='/SignIn' component={SignIn} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;