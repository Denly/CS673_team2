import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import AppContainer from '../../ui/layouts/App.jsx';
import Discover from '../../ui/pages/Discover.jsx';
import Landing from '../../ui/pages/Landing.jsx';
import Message from '../../ui/pages/Message.jsx';
import NotFoundPage from '../../ui/pages/NotFoundPage.jsx';
import Profile from '../../ui/pages/Profile.jsx';
import Document from '../../ui/pages/Document.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <Route path="/Landing" component={Landing}/>
      <Route path="/Discover" component={Discover}/>
      <Route path="/Message/:id" component={Message}/>
      <Route path="/Profile" component={Profile}/>
      <Route path="/Document" component={Document}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);
