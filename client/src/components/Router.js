import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from '../components/High_Order/Authentication';
import Fade from '../components/High_Order/Fade';
import ModalReset from './High_Order/ModalReset';

import Header from './Page/Header';
import Page from './Page/Page';
import NotesMenu from './Notes/Main/Menu';
import NotesAdd from './Notes/Add/Add';
import NotesEdit from './Notes/Edit/Edit';
import NotesView from './Notes/View/View';
import CollectionsMenu from './Collections/Main/Menu';
import CollectionsAdd from './Collections/Add/Add';
import CollectionsEdit from './Collections/Edit/Edit';
import SignIn from './SignIn/SignIn';
import Modal from './Modal/Modal';
import Search from './Modal/Search/Search';

const AppRouter = () => (
  <BrowserRouter>
    <div id="app">
      <Route path='/'component={Header} />
      <Modal />
      <Search />
    
      <div id="app-body">
        <div id="app-body-main">
          <Switch>
            <Route exact path='/' component={ModalReset(Page)} />
            <Route exact path='/Notes' component={ModalReset(Fade(Auth(NotesMenu)))} />
            <Route exact path='/Notes/Add' component={ModalReset(Fade(Auth(NotesAdd)))} />
            <Route exact path='/Notes/Edit/:id' component={ModalReset(Auth(NotesEdit))} /> 
            <Route exact path='/Notes/View/:id' component={ModalReset(Auth(NotesView))} />
            <Route exact path='/Collections' component={ModalReset(Fade(Auth(CollectionsMenu)))} />
            <Route exact path='/Collections/Add' component={ModalReset(Fade(Auth(CollectionsAdd)))} />
            <Route exact path='/Collections/Edit/:id' component={ModalReset(Fade(Auth(CollectionsEdit)))} />
            <Route exact path='/SignIn' component={ModalReset(Fade(SignIn))} />
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;