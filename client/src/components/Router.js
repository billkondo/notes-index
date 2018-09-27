import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from '../components/High_Order/Authentication';
import Fade from '../components/High_Order/Fade';

import Header from './Page/Header';
import Page from './Page/Page';
import NotesMenu from './Notes/Main/Menu';
import NotesAdd from './Notes/Add/Add';
import NotesEdit from './Notes/Edit/Edit';
import NotesView from './Notes/View/View';
import CollectionsMenu from './Collections/Main/Menu';
import CollectionsAdd from './Collections/Add/Add';
import SignIn from './SignIn/SignIn';
import Modal from './Modal/Modal';


const AppRouter = () => (
  <BrowserRouter>
    <div id="app">
      <Route path='/'component={Header} />
      <Modal />
     
      <div id="app-body">
        <div id="app-body-main">
          <Switch>
            <Route exact path='/' component={Page} />
            <Route exact path='/Notes' component={Fade(Auth(NotesMenu))} />
            <Route exact path='/Notes/Add' component={Fade(Auth(NotesAdd))} />
            <Route exact path='/Notes/Edit/:id' component={Auth(NotesEdit)} /> 
            <Route exact path='/Notes/View/:id' component={Auth(NotesView)} />
            <Route exact path='/Collections' component={Fade(Auth(CollectionsMenu))} />
            <Route exact path='/Collections/Add' component={Fade(Auth(CollectionsAdd))} />
            <Route exact path='/SignIn' component={Fade(SignIn)} />
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;