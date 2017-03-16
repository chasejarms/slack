import React from 'react';
import App from './app';
import SplashLogIn from './splash/splash_log_in';
import SplashSignUp from './splash/splash_sign_up';
import ChatContainer from './chat/chat_container';

import { Router, Route, hashHistory, IndexRoute, IndexRedirect } from 'react-router';
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
          <IndexRedirect to="login"/>
          <Route path="login" component={SplashLogIn} onEnter={_redirectIfLoggedIn}/>
          <Route path="sign-up" component={SplashSignUp} onEnter={_redirectIfLoggedIn}/>
          <Route path="chat" component={ChatContainer} onEnter={_checkLoggedIn}>
            <IndexRedirect to="General"/>
            <Route path=":groupName"></Route>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
