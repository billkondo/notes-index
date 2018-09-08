import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page from './Page/Page';
import NotesMenu from './Notes/Main/Menu';
import NotesAdd from './Notes/Create/Create';
import NotesEdit from './Notes/Edit/Edit';
import NotesView from './Notes/View/View';
import CollectionsMenu from './Collections/Main/Menu';
import CollectionsAdd from './Collections/Add/Add';
import SignIn from './SignIn/SignIn';


const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Page} />
      <Route exact path='/Notes' component={NotesMenu} />
      <Route exact path='/Notes/Add' component={NotesAdd} />
      <Route exact path='/Notes/Edit/:id' component={NotesEdit} /> 
      <Route exact path='/Notes/View/:id' component={NotesView} />
      <Route exact path='/Collections' component={CollectionsMenu} />
      <Route exact path='/Collections/Add' component={CollectionsAdd} />
      <Route exact path='/SignIn' component={SignIn} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;