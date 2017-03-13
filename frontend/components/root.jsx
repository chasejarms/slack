import React from 'react';
import App from './app';
import SplashLogIn from './splash/splash_log_in';
import SplashSignUp from './splash/splash_sign_up';
import Chat from './chat/chat';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';


const Root = ({store}) => {

  const _checkLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace("/chat");
    }
  };

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="login" component={SplashLogIn} onEnter={_redirectIfLoggedIn}/>
          <Route path="sign-up" component={SplashSignUp} onEnter={_redirectIfLoggedIn}/>
          <Route path="chat" component={Chat} onEnter={_checkLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
