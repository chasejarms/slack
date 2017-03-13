import React from 'react';
import App from './app';
import SplashContainer from './splash/splash_container';
import Chat from './chat/chat';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SplashContainer}></IndexRoute>
        <Route path="sign-up" component={Chat}></Route>
      </Route>
    </Router>
  </Provider>
);

export default Root;
