import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import AppContainer from '../../ui/layouts/App.jsx';
import Gallery from '../../ui/pages/Gallery.jsx';
import Landing from '../../ui/pages/Landing.jsx';
import Message from '../../ui/pages/Message.jsx';
import NotFoundPage from '../../ui/pages/NotFoundPage.jsx';
import Profile from '../../ui/pages/Profile.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <Route path="/Landing" component={Landing}/>
      <Route path="/Gallery" component={Gallery}/>
      <Route path="/Message" component={Message}/>
      <Route path="/Profile" component={Profile}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);
