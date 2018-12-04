import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './High_Order/Authentication';
import Fade from './High_Order/Fade';
import ModalReset from './High_Order/ModalReset';

import Header from './Page/Header';
import Page from './Page/Page';
import NotesMenu from './Notes/Main/Menu';
import NotesAdd from './Notes/Add/Add';
import NotesEdit from './Notes/Edit/Edit';
import NotesView from './Notes/View/ViewContainer';
import CollectionsMenu from './Collections/Main/Menu';
import CollectionsAdd from './Collections/Add/Add';
import CollectionsEdit from './Collections/Edit/Edit';
import CollectionsView from './Collections/View/ViewContainer';
import Favorite from './Favorite/Favorite';
import SignIn from './SignIn/SignIn';
import Modal from './Modal/Modal';
import Search from './Modal/Search/Search';
import Filter from './Modal/Filter/Filter';
import Profile from './Profile/Profile';

const AppRouter = () => (
  <BrowserRouter>
    <div id="app">
      <Route path="/" component={Header} />
      <Modal />
      <Search />
      <Filter />

      <div id="app-body">
        <div id="app-body-main">
          <Switch>
            <Route exact path="/" component={ModalReset(Page)} />
            <Route exact path="/Notes" component={ModalReset(Fade(Auth(NotesMenu)))} />
            <Route exact path="/Notes/Add" component={ModalReset(Fade(Auth(NotesAdd)))} />
            <Route exact path="/Notes/Edit/:id" component={ModalReset(Auth(NotesEdit))} />
            <Route exact path="/Notes/View/:id" component={ModalReset(Fade(Auth(NotesView)))} />
            <Route exact path="/Collections" component={ModalReset(Fade(Auth(CollectionsMenu)))} />
            <Route
              exact
              path="/Collections/Add"
              component={ModalReset(Fade(Auth(CollectionsAdd)))}
            />
            <Route
              exact
              path="/Collections/Edit/:id"
              component={ModalReset(Fade(Auth(CollectionsEdit)))}
            />
            <Route
              exact
              path="/Collections/View/:id"
              component={ModalReset(Fade(Auth(CollectionsView)))}
            />
            <Route exact path="/Favorite" component={ModalReset(Fade(Auth(Favorite)))} />
            <Route exact path="/SignIn" component={ModalReset(Fade(SignIn))} />
            <Route exact path="/Profile" component={ModalReset(Fade(Auth(Profile)))} s />
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
